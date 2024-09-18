"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusCircleIcon, TrashIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProjectCategory, Field, FieldType } from "@prisma/client";
import { createProjectCategory } from "@/app/dashboard/addproject/actions";
import { useToast } from "@/hooks/use-toast";

interface AdminProjectFormCreatorProps {
  fetchedProjectCategories: ProjectCategory[];
}

export default function AdminProjectFormCreator({
  fetchedProjectCategories,
}: AdminProjectFormCreatorProps) {
  const { toast } = useToast();
  const [projectName, setProjectName] = useState("");
  const [fields, setFields] = useState<
    Omit<Field, "id" | "projectCategoryId" | "createdAt" | "updatedAt">[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [projectCategories, setProjectCategories] = useState<ProjectCategory[]>(
    fetchedProjectCategories
  );

  const handleAddField = () => {
    const newField = {
      name: "",
      type: FieldType.QUESTION,
      question: "",
    };
    setFields([...fields, newField]);
  };

  const handleFieldChange = (
    index: number,
    key: keyof Field,
    value: string
  ) => {
    setFields(
      fields.map((field, i) =>
        i === index ? { ...field, [key]: value } : field
      )
    );
  };

  const handleRemoveField = (index: number) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const handleSaveForm = async () => {
    setLoading(true);
    try {
      const newCategoryRes = await createProjectCategory(projectName, fields);
      if (!newCategoryRes.success) {
        toast({
          variant: "destructive",
          title: "Error while Adding Category",
        });
      } else if (newCategoryRes.category) { // Check if category is not null
        setProjectCategories([...projectCategories, newCategoryRes.category]);
        setProjectName("");
        setFields([]);
        toast({
          title: "Category Created Successfully",
        });
      }
    } catch (error) {
      console.error("Error creating project category:", error);
      // Here you would typically show an error message to the user
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-2 mx-auto px-4 py-8">
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Create Project Form
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="projectName">Project Name</Label>
            <Input
              id="projectName"
              placeholder="Enter project name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>

          {fields.map((field, index) => (
            <div key={index} className="space-y-2 p-4 border rounded-lg">
              <div className="flex items-center space-x-2">
                <Select
                  value={field.type}
                  onValueChange={(value) =>
                    handleFieldChange(index, "type", value as FieldType)
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select field type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={FieldType.QUESTION}>Question</SelectItem>
                    <SelectItem value={FieldType.FILE}>File Upload</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder={
                    field.type === FieldType.FILE
                      ? "Document name"
                      : "Enter question"
                  }
                  value={
                    field.type === FieldType.FILE
                      ? field.name || "" // Ensure it's never null
                      : field.question || "" // Ensure it's never null
                  }
                  onChange={(e) =>
                    handleFieldChange(
                      index,
                      field.type === FieldType.FILE ? "name" : "question",
                      e.target.value
                    )
                  }
                />
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleRemoveField(index)}
                >
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Remove field</span>
                </Button>
              </div>
            </div>
          ))}

          <Button onClick={handleAddField} className="w-full">
            <PlusCircleIcon className="mr-2 h-4 w-4" /> Add Field
          </Button>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleSaveForm}
            className="w-full"
            disabled={loading || !projectName || fields.length === 0}
          >
            {loading ? "Saving..." : "Save Project Form"}
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-1/2">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Project Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Created At</TableHead>
                {/* <TableHead className="w-[100px]">Actions</TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {projectCategories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>
                    {new Date(category.createdAt).toLocaleDateString()}
                  </TableCell>
                  {/* {{ edit_1 }} */}
                  {/* <TableCell>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteCategory(category.id)}
                    >
                      <TrashIcon className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </TableCell> */}
                  {/* {{ edit_1 }} */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

    </div>
  );
}
