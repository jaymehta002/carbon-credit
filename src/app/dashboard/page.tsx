import DashboardAdminPage from "@/components/Dashboard/admin/DashboardAdminPage";
import DashboardPage from "@/components/Dashboard/DashboardPage";
import prisma from "@/utils/db";
import { auth } from '@clerk/nextjs/server'
import React from "react";

const Dashboard = async() => {
  const { sessionClaims,userId } = auth();
  const admin = sessionClaims?.metadata.role==="admin";

  if(!userId){
    return <><h1>Unauthenticated</h1></>
  }
  
  if (admin) {
    const adminProjects = await prisma.project.findMany({
      include: {
        projectCategory: true,
        user: true,
      },
    });
    return <DashboardAdminPage fetchedProjects={adminProjects}/>;
  }
  const projects = await prisma.project.findMany({
    where: {
      userId: userId,
    },
    include: {
      projectCategory: true,
    },
  });

  return  <DashboardPage fetchedProjects={projects}/>;
};

export default Dashboard;
