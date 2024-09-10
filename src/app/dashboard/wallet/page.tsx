import WalletPage from '@/components/Dashboard/WalletPage'
import prisma from '@/utils/db';
import { auth } from '@clerk/nextjs/server'
import React from 'react'

const Wallet = async() => {
  const {userId}=auth();
  if(!userId)
  {
    return (<h1>User is Unauthenticated</h1>)
  }
  const user=await prisma.user.findUnique({
    where:{id:userId}
  });
  const walletBalance=user?.tokenBalance || 0;
  return (
    <WalletPage walletBalance={walletBalance}/>
  )
}

export default Wallet