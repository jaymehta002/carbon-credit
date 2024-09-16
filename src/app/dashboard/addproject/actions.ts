"use server"

import prisma from "@/utils/db";
import { Field } from "@prisma/client";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const createProjectCategory = async (name:string, fields:Omit<Field, 'id' | 'projectCategoryId' | 'createdAt' | 'updatedAt'>[]) => {
    let success = false; // Initialize success variable
    try {
        const category = await prisma.projectCategory.create({
            data: {
                name,
                fields: {
                    create: fields.map(field => ({
                        name: field.name,
                        type: field.type,
                        question: field.question
                    }))
                }
            }
        });
        revalidatePath('/','page');
        success = true; // Set success to true if no error occurs
        return { category, success }; // Return category and success
    } catch (error) {
        console.error(error); // Log the error
        return { category: null, success }; // Return null category and success
    }
};

export const addProjectUserSide = async (formData: FormData, fileUrls: Record<string, string>) => {
  try {
    // Get the current user's ID using Clerk
    const { userId } = auth();
    
    if (!userId) {
      throw new Error('User not authenticated');
    }

    // Extract project type (category)
    const projectType = formData.get('projectType') as string;

    // Find the project category
    const projectCategory = await prisma.projectCategory.findUnique({
      where: { name: projectType },
      include: { fields: true },
    });

    if (!projectCategory) {
      throw new Error('Project category not found');
    }

    // Prepare the fields data
    const createProjectFields = projectCategory.fields.map(field => {
      const answer = formData.get(field.id);
      return {
        field: { connect: { id: field.id } },
        answer: answer ? String(answer) : null, // Convert to string or null
        fileUrl: field.type === 'FILE' ? fileUrls[field.id] || null : null,
      };
    });

    // Create the project and return the full data
    const project = await prisma.project.create({
      data: {
        projectCategory: { connect: { id: projectCategory.id } },
        user: { connect: { id: userId } },
        status: 'PENDING',
        fields: { create: createProjectFields },
      },
      include: {
        projectCategory: true,
        fields: {
          include: {
            field: true,
          },
        },
      },
    });

    revalidatePath('/dashboard', 'page');
    return { success: true, project };
  } catch (error) {
    console.error('Error creating project:', error);
    return { success: false, error: (error as Error).message };
  }
};