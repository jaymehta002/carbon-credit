import { WebhookEvent } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/utils/db'

export async function POST(request: NextRequest) {
  try {
    const payload: WebhookEvent = await request.json()
    console.log("Payload Started")
    console.log(payload)

    if (payload.type === "user.created") {
      console.log('user started');
      
      // create user in prisma db
      const user = await prisma.user.create({
        data: {
          id: payload.data.id,
          firstName:payload?.data?.first_name as string?payload?.data?.first_name as string:"",
          lastName:payload?.data?.last_name as string?payload?.data?.last_name as string:"",
          email: payload.data.email_addresses[0].email_address,
          profilePicture: payload.data.image_url
        }
      })
      console.log("user", user);
    }

    if (payload.type === 'user.updated') {
      const updatedUser = await prisma.user.update({
        where: { id: payload.data.id },
        data: {
          firstName: payload.data.first_name as string,
          lastName: payload.data.last_name as string,
          email: payload.data.email_addresses[0].email_address,
          profilePicture: payload.data.image_url
        }
      })
      console.log("Updated user:", updatedUser);
    }

    return NextResponse.json({ message: 'Webhook processed successfully' },{status:200})
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json({ message: 'Error processing webhook' }, { status: 500 });
  }
}