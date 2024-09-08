"use server"

import prisma from "@/utils/db";
import { Field } from "@prisma/client";
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