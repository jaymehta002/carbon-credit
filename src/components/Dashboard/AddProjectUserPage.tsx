"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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

const documentTypes = [
  "Project Proposal",
  "Budget Estimation",
  "Timeline",
  "Resource Allocation",
  "Risk Assessment"
]

export default function AddProjectUserPage() {
  const [projectName, setProjectName] = useState('')
  const [projectType, setProjectType] = useState("")
  const projectOptions = [
    { value: 'project1', label: 'Project 1' },
    { value: 'project2', label: 'Project 2' },
    { value: 'project3', label: 'Project 3' },
  ]
  const [currentStep, setCurrentStep] = useState(0)
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedFiles([...uploadedFiles, file.name])
      if (currentStep < documentTypes.length) {
        setCurrentStep(currentStep + 1)
      }
    }
  }

  const isStepComplete = (step: number) => uploadedFiles.length > step

  const progress = (uploadedFiles.length / documentTypes.length) * 100

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Add New Project</CardTitle>
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
          <div className="space-y-2">
      <Label htmlFor="projectName">Project Type</Label>
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

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Upload Documents</h3>
              <span className="text-sm text-muted-foreground">
                {uploadedFiles.length} of {documentTypes.length} uploaded
              </span>
            </div>
            <Progress value={progress} className="w-full" />

            {documentTypes.map((docType, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  {isStepComplete(index) ? (
                    <CheckCircleIcon className="text-green-500" />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                  )}
                  <span>{docType}</span>
                </div>
                <div>
                  {isStepComplete(index) ? (
                    <span className="text-sm text-muted-foreground">{uploadedFiles[index]}</span>
                  ) : (
                    <Label htmlFor={`file-upload-${index}`} className="cursor-pointer">
                      <div className="flex items-center space-x-2 text-primary">
                        <UploadIcon className="w-4 h-4" />
                        <span>Upload</span>
                      </div>
                      <Input
                        id={`file-upload-${index}`}
                        type="file"
                        className="hidden"
                        onChange={handleFileUpload}
                        disabled={currentStep !== index}
                      />
                    </Label>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" disabled={uploadedFiles.length < documentTypes.length || !projectName}>
            Create Project
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}