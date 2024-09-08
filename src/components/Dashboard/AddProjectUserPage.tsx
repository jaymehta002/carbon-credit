"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { UploadIcon, CheckCircleIcon } from "lucide-react"
import { ProjectCategory,Field } from "@prisma/client"
import { addProjectUserSide } from "@/app/dashboard/addproject/actions"



export default function AddProjectUserPage({
  fetchedProjectCategories,
}: {
  fetchedProjectCategories: ProjectCategory[]
}) {
  const [fields, setFields] = useState<Field[]>([])
  const [projectType, setProjectType] = useState("")
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, string>>({})
  const [answers, setAnswers] = useState<Record<string, string>>({})

  useEffect(() => {
    const filteredProject = fetchedProjectCategories.find(
      (category) => category.name === projectType
    )
    setFields(filteredProject?.fields || [])
    setUploadedFiles({})
    setAnswers({})
  }, [projectType, fetchedProjectCategories])

  const projectOptions = fetchedProjectCategories.map((category) => ({
    label: category.name,
    value: category.name,
  }))

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, fieldId: string) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedFiles({ ...uploadedFiles, [fieldId]: file.name })
    }
  }

  const handleQuestionAnswer = (id: string, answer: string) => {
    setAnswers({ ...answers, [id]: answer })
  }

  const isStepComplete = (field: Field) => {
    if (field.type === "FILE") {
      return !!uploadedFiles[field.id]
    } else {
      return answers[field.id]?.length > 0
    }
  }

  const calculateProgress = () => {
    if (fields.length === 0) return 0
    const completedSteps = fields.filter(isStepComplete).length
    return (completedSteps / fields.length) * 100
  }

  const handleProjectFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
  
    // Handle file uploads first
    for (const field of fields) {
      if (field.type === 'FILE') {
        const file = formData.get(field.id) as File;
        if (file && file.size > 0) {
          const fileUrl = "file url";
          formData.set(field.id, fileUrl);
        }
      }
    }
  
    const result = await addProjectUserSide(formData);
    // Handle result...
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleProjectFormSubmit}>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Add New Project</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="projectType">Project Type</Label>
            <Select onValueChange={setProjectType} value={projectType}>
              <SelectTrigger id="projectType">
                <SelectValue placeholder="Select a project" />
              </SelectTrigger>
              <SelectContent>
                {projectOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <input type="hidden" name="projectType" value={projectType} />


          {fields.length > 0 && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Project Details</h3>
                <span className="text-sm text-muted-foreground">
                  {fields.filter(isStepComplete).length} of {fields.length} completed
                </span>
              </div>
              <Progress value={calculateProgress()} className="w-full" />

              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="space-y-2 p-4 border rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    {isStepComplete(field) ? (
                      <CheckCircleIcon className="text-green-500" />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                    )}
                    <Label htmlFor={field.id} className="text-sm font-medium">
                      {field.type === "QUESTION" ? field.question : `Upload ${field.name || 'File'}`}
                    </Label>
                  </div>
                  {field.type === "FILE" ? (
                    <div>
                      <Input
                        id={field.id}
                        name={field.id} // Added name attribute
                        type="file"
                        onChange={(e) => handleFileUpload(e, field.id)}
                        className="hidden"
                      />
                      <Label
                        htmlFor={field.id}
                        className="cursor-pointer inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                      >
                        <UploadIcon className="w-4 h-4 mr-2" />
                        {uploadedFiles[field.id] ? 'Change File' : 'Upload File'}
                      </Label>
                      {uploadedFiles[field.id] && (
                        <p className="mt-2 text-sm text-muted-foreground">
                          {uploadedFiles[field.id]}
                        </p>
                      )}
                    </div>
                  ) : (
                    <Input
                      id={field.id}
                      name={field.id} // Added name attribute
                      type="text"
                      value={answers[field.id] || ""}
                      onChange={(e) => handleQuestionAnswer(field.id, e.target.value)}
                      placeholder="Enter your answer"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            type="submit"
            disabled={fields.length === 0 || !fields.every(isStepComplete)}
          >
            Create Project
          </Button>
        </CardFooter>
      </Card>
      </form>
    </div>
  )
}