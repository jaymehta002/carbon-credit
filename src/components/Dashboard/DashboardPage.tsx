"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Project, ProjectCategory } from "@prisma/client"
import { PencilIcon } from "lucide-react"

interface DashboardPageProps {
  fetchedProjects: (Project & { projectCategory: ProjectCategory })[]; // Updated to include projectCategory
}

export default function DashboardPage({ fetchedProjects }: DashboardPageProps) {
  console.log("🚀 ~ DashboardPage ~ fetchedProjects:", fetchedProjects);

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Your Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fetchedProjects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.projectCategory.name}</TableCell> 
                  <TableCell>{project.createdAt.toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}