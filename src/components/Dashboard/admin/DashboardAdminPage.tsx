'use client'
'use client'

import React, { useState } from 'react'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { TrashIcon } from "lucide-react"

// Placeholder data for projects
const initialProjects = [
  { id: 1, name: "Plantation & Reforestation", date: "2023-06-01", status: "In Progress", type: "Environmental" },
  { id: 2, name: "Sustainable Farming", date: "2023-05-15", status: "Completed", type: "Agricultural" },
  { id: 3, name: "Renewable Energy", date: "2023-04-22", status: "Pending", type: "Energy" },
  { id: 4, name: "Solar Power Installation", date: "2023-03-10", status: "In Progress", type: "Energy" },
]

const statusOptions = ["Pending", "In Progress", "Completed"]

export default function DashboardAdminPage() {
  const [projects, setProjects] = useState(initialProjects)

  const handleDelete = (id: number) => {
    console.log(`Deleting project with id: ${id}`)
    setProjects(projects.filter(project => project.id !== id))
  }

  const handleStatusChange = (id: number, newStatus: string) => {
    console.log(`Updating project ${id} status to: ${newStatus}`)
    setProjects(projects.map(project => 
      project.id === id ? { ...project, status: newStatus } : project
    ))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.name}</TableCell>
                  <TableCell>{project.date}</TableCell>
                  <TableCell>{project.type}</TableCell>
                  <TableCell>
                    <Select
                      defaultValue={project.status}
                      onValueChange={(value) => handleStatusChange(project.id, value)}
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
                  <TableCell className="text-right">
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => handleDelete(project.id)}
                    >
                      <TrashIcon className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}