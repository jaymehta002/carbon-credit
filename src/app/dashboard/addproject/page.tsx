import AddProjectUserPage from '@/components/Dashboard/AddProjectUserPage'
import AddProjectAdminPage from '@/components/Dashboard/admin/AddProjectAdminPage';
import { auth } from '@clerk/nextjs/server';
import React from 'react'

const AddProject = () => {
  const { sessionClaims } = auth()
  const admin = sessionClaims?.metadata.role==="admin";
  return (
    <>
    {
    admin
    ?<AddProjectAdminPage/>
    :<AddProjectUserPage/>
    }
    </>
  )
}

export default AddProject