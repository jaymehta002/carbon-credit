"use server";
import prisma from "@/utils/db";
import { ProjectStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function updateProjectStatus(
  projectId: string,
  newStatus: ProjectStatus
) {
  "use server";

  try {
    const updatedProject = await prisma.project.update({
      where: { id: projectId },
      data: { status: newStatus },
    });

    revalidatePath("/projects"); // Adjust this path as needed

    return { success: true, project: updatedProject };
  } catch (error) {
    console.error("Failed to update project status:", error);
    return { success: false, error: "Failed to update project status" };
  }
}

export async function updateUserTokenBalance(userId: string, tokenAmount: number) {
    try {
      // Update the user's token balance
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { tokenBalance: tokenAmount },
      });
  
      revalidatePath('/dashboard',"page"); // Adjust this path as needed
  
      return { success: true, data: updatedUser };
    } catch (error) {
      console.error('Failed to update user token balance:', error);
      return { success: false, error: error instanceof Error ? error.message : 'An unknown error occurred' };
    }
  }


  export async function deleteProject(projectId: string) {
    try {
      // Delete associated ProjectFields
      await prisma.projectField.deleteMany({
        where: { projectId: projectId },
      });
  
      // Delete the Project
      const deletedProject = await prisma.project.delete({
        where: { id: projectId },
      });
  
      revalidatePath('/projects');
  
      return { success: true, message: 'Project deleted successfully', project: deletedProject };
    } catch (error) {
      console.error('Error deleting project:', error);
      return { success: false, message: 'Failed to delete project' };
    }
  }