import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <div className="w-full max-w-3xl mx-auto py-12 md:py-20">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">Get in Touch</h1>
        <p className="text-muted-foreground md:text-lg">
          Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>
      <form className="mt-8 space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" placeholder="Enter your phone number" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Enter the subject" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" />
        </div>
        <div className="flex justify-center">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  )
}