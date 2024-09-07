"use client"
import React, { useState } from 'react'
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
import { PlusCircleIcon, TrashIcon } from "lucide-react"

type FieldType = 'file' | 'question'

interface Field {
  id: string
  name: string
  type: FieldType
}

export default function AdminProjectFormCreator() {
  const [projectName, setProjectName] = useState('')
  const [fields, setFields] = useState<Field[]>([])

  const handleAddField = () => {
    const newField: Field = {
      id: Date.now().toString(),
      name: '',
      type: 'question', // Default to question type
    }
    setFields([...fields, newField])
  }

  const handleFieldChange = (id: string, key: 'name' | 'type', value: string) => {
    setFields(fields.map(field =>
      field.id === id ? { ...field, [key]: value } : field
    ))
  }

  const handleRemoveField = (id: string) => {
    setFields(fields.filter(field => field.id !== id))
  }

  const handleSaveForm = () => {
    // Here you would typically send the form data to your backend
    console.log('Saving form:', { projectName, fields })
    // Reset the form after saving
    setProjectName('')
    setFields([])
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Create Project Form</CardTitle>
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
            <div key={field.id} className="space-y-2 p-4 border rounded-lg">
              <div className="flex items-center space-x-2">
                <Input
                  placeholder={field.type === 'file' ? 'Document name' : 'Question'}
                  value={field.name}
                  onChange={(e) => handleFieldChange(field.id, 'name', e.target.value)}
                />
                <Select 
                  value={field.type} 
                  onValueChange={(value) => handleFieldChange(field.id, 'type', value as FieldType)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select field type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="question">Question</SelectItem>
                    <SelectItem value="file">File Upload</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="destructive" size="icon" onClick={() => handleRemoveField(field.id)}>
                  <TrashIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}

          <Button onClick={handleAddField} className="w-full">
            <PlusCircleIcon className="mr-2 h-4 w-4" /> Add Field
          </Button>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveForm} className="w-full" disabled={!projectName || fields.length === 0}>
            Save Project Form
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}