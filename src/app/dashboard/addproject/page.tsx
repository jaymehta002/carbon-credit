import AddProjectUserPage from "@/components/Dashboard/AddProjectUserPage";
import AddProjectAdminPage from "@/components/Dashboard/admin/AddProjectAdminPage";
import prisma from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const AddProject = async () => {
  const { sessionClaims } = auth();
  const admin = sessionClaims?.metadata.role === "admin";

  if (admin) {
    const projectCategories = await prisma.projectCategory.findMany();
    console.log("🚀 ~ AddProject ~ projectCategories:", projectCategories);
    return <AddProjectAdminPage fetchedProjectCategories={projectCategories} />;
  }

  const projectCategoriesWithFeilds = await prisma.projectCategory.findMany({
    include:{
      fields:true
    }
  });
  
  return <AddProjectUserPage fetchedProjectCategories={projectCategoriesWithFeilds} />;
};

export default AddProject;
