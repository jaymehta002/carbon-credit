"use client"
import React, { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

type User = {
  firstName: string;
  lastName: string;
  phoneNo: string | null;
  profileImage: string | null;
}

const ProfilePage = ({ user: initialUser }: { user: User }) => {
  const [user, setUser] = useState(initialUser)
  const [isEditing, setIsEditing] = useState(false)
  const [editedUser, setEditedUser] = useState(user)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSave = () => {
    setUser(editedUser)
    setIsEditing(false)
    // Here you would typically send the updated user data to your backend
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setEditedUser({ ...editedUser, profileImage: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="min-h-screen bg-background flex items-start justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center">
          <div className="relative">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage
                src={user.profileImage || undefined}
                alt={`${user.firstName} ${user.lastName}`}
              />
              <AvatarFallback>
                {user.firstName[0]}
                {user.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <Button
              variant="outline"
              size="icon"
              className="absolute bottom-0 right-0"
              onClick={triggerFileInput}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
            </Button>
            <Input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
          <CardTitle className="text-2xl">
            {user.firstName} {user.lastName}
          </CardTitle>
          <p className="text-muted-foreground">{user.phoneNo || 'No phone number'}</p>
        </CardHeader>
        <CardFooter className="flex justify-center">
          <Dialog open={isEditing} onOpenChange={setIsEditing}>
            <DialogTrigger asChild>
              <Button>Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="firstName" className="text-right">
                    First name
                  </Label>
                  <Input
                    id="firstName"
                    value={editedUser.firstName}
                    onChange={(e) => setEditedUser({ ...editedUser, firstName: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="lastName" className="text-right">
                    Last name
                  </Label>
                  <Input
                    id="lastName"
                    value={editedUser.lastName}
                    onChange={(e) => setEditedUser({ ...editedUser, lastName: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phoneNo" className="text-right">
                    Phone Number
                  </Label>
                  <Input
                    id="phoneNo"
                    value={editedUser.phoneNo || ''}
                    onChange={(e) => setEditedUser({ ...editedUser, phoneNo: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="profileImage" className="text-right">
                    Profile Image
                  </Label>
                  <div className="col-span-3 flex items-center gap-2">
                    <Input
                      id="profileImage"
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                    {editedUser.profileImage && (
                      <Avatar>
                        <AvatarImage src={editedUser.profileImage} alt="Profile preview" />
                      </Avatar>
                    )}
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleSave}>Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ProfilePage