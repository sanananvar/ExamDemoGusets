import React from 'react'
import AdminNav from '../../components/Admin/AdminNav/AdminNav'
import AdminFooter from '../../components/Admin/AdminFooter/AdminFooter'
import { Outlet } from 'react-router'
function AdminRoot() {
  return (
    <>
    <AdminNav/>
    <Outlet/>
    <AdminFooter/>
      
    </>
  )
}

export default AdminRoot
