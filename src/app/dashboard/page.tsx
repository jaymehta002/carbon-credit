import DashboardAdminPage from "@/components/Dashboard/admin/DashboardAdminPage";
import DashboardPage from "@/components/Dashboard/DashboardPage";
import { auth } from '@clerk/nextjs/server'
import React from "react";

const Dashboard = () => {
  const { sessionClaims } = auth()
  const admin = sessionClaims?.metadata.role==="admin";

  return <>{admin ? <DashboardAdminPage /> : <DashboardPage />}</>;
};

export default Dashboard;
