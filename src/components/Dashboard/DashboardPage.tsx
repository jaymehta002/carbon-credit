"use client";
import { deleteProject } from "@/app/dashboard/actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { Project, ProjectCategory } from "@prisma/client";
import { PencilIcon, Trash2 } from "lucide-react";
import { useState } from "react"; // Add this import
import DataTable from "./user/UserDataTable";

interface DashboardPageProps {
  fetchedProjects: (Project & { projectCategory: ProjectCategory })[]; // Updated to include projectCategory
}

export default function DashboardPage({ fetchedProjects }: DashboardPageProps) {
  const { toast } = useToast();
  const [projects, setProjects] = useState(fetchedProjects); // Add state for projects

  const handleDelete = async (id: string) => {
    console.log("🚀 ~ handleDelete ~ id:", id);
    const res = await deleteProject(id);
    if (res.success) {
      toast({
        title: "Deleted Successfully",
      });
      setProjects(projects.filter((project) => project.id !== id)); // Update state to remove project
    } else {
      toast({
        variant: "destructive",
        title: "Error while deleting project",
      });
    }
  };

  console.log("🚀 ~ DashboardPage ~ fetchedProjects:", fetchedProjects);

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <h1>Your Projects</h1>
        <DataTable data={fetchedProjects} />
      </div>
    </div>
  );
}
