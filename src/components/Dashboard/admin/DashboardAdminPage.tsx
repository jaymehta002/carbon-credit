"use client";
import React, { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Project, ProjectCategory, ProjectStatus, User } from "@prisma/client";
import { useToast } from "@/hooks/use-toast";
import {
  deleteProject,
  updateProjectStatus,
  updateUserTokenBalance,
} from "@/app/dashboard/actions";
import { Trash } from "lucide-react";
import DashboardAnalytics from "./DashboardAnalytics";

const statusOptions = ["PENDING", "INITIALIZED", "PROCESSING", "COMPLETED"];

interface DashboardPageProps {
  fetchedProjects: (Project & {
    projectCategory: ProjectCategory;
    user: User;
  })[];
  totalUsers: number;
  totalProjects: number;
  totalProjectCategories: number;
}

export default function DashboardAdminPage({
  fetchedProjects,
  totalUsers,
  totalProjects,
  totalProjectCategories,
}: DashboardPageProps) {
  console.log("🚀 ~ DashboardAdminPage ~ fetchedProjects:", fetchedProjects);
  const [projects, setProjects] = useState(fetchedProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tokenAmount, setTokenAmount] = useState("");
  const [currentProject, setCurrentProject] = useState<string | null>(null);
  const { toast } = useToast();

  const handleStatusChange = async (id: string, newStatus: ProjectStatus) => {
    const toastId = toast({
      title: "Updating Status",
      description: "Please wait...",
    });

    try {
      const result = await updateProjectStatus(id, newStatus);

      if (result.success) {
        setProjects(
          projects.map((project) =>
            project.id === id ? { ...project, status: newStatus } : project
          )
        );

        toast({
          title: "Status Updated",
          description: `Project status updated to ${newStatus}`,
          variant: "default",
        });

        if (newStatus === "COMPLETED") {
          setCurrentProject(id);
          setIsModalOpen(true);
        }
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error("Failed to update project status:", error);
      toast({
        title: "Error",
        description: "Failed to update project status",
        variant: "destructive",
      });
    }
  };

  const handleSendTokens = async () => {
    if (!currentProject || !tokenAmount) {
      toast({
        title: "Error",
        description: "Please enter a valid token amount",
        variant: "destructive",
      });
      return;
    }

    const project = projects.find((p) => p.id === currentProject);
    if (!project) {
      toast({
        title: "Error",
        description: "Project not found",
        variant: "destructive",
      });
      return;
    }

    const toastId = toast({
      title: "Updating Token Balance",
      description: "Please wait...",
    });

    try {
      const result = await updateUserTokenBalance(
        project.user.id,
        project.user.tokenBalance + parseFloat(tokenAmount)
      );

      if (result.success) {
        setProjects(
          projects.map((p) =>
            p.id === currentProject
              ? {
                  ...p,
                  user: {
                    ...p.user,
                    tokenBalance:
                      result.data?.tokenBalance ?? p.user.tokenBalance,
                  },
                }
              : p
          )
        );

        toast({
          title: "Token Balance Updated",
          description: `${tokenAmount} tokens added to user's balance`,
          variant: "default",
        });

        setIsModalOpen(false);
        setTokenAmount("");
        setCurrentProject(null);
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error("Failed to update token balance:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to update token balance",
        variant: "destructive",
      });
    }
  };

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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <DashboardAnalytics 
      totalUsers={totalUsers}
      totalProjects={totalProjects}
      totalProjectCategories={totalProjectCategories}
      />

      <Card>
        <CardHeader>
          <CardTitle>Recent Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>User Email</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>User Token Balance</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">
                    {project.projectCategory.name}
                  </TableCell>
                  <TableCell className="font-medium">
                    {project.user.email}
                  </TableCell>
                  <TableCell>
                    {project.createdAt.toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Select
                      defaultValue={project.status}
                      onValueChange={(value) =>
                        handleStatusChange(project.id, value as ProjectStatus)
                      }
                    >
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        {statusOptions.map((status) => (
                          <SelectItem key={status} value={status}>
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>{project.user.tokenBalance}</TableCell>
                  <TableCell>
                    <Button
                      className="gap-2"
                      variant={"destructive"}
                      onClick={() => handleDelete(project.id)}
                    >
                      <Trash size={"16px"} />
                      Delete
                    </Button>{" "}
                    {/* Add delete button */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Tokens to User Balance</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Input
              type="number"
              placeholder="Enter token amount"
              value={tokenAmount}
              onChange={(e) => setTokenAmount(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button onClick={handleSendTokens}>Add Tokens</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
