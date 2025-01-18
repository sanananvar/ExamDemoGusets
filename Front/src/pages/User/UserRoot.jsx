import React from 'react'
import { Outlet } from "react-router-dom"
import UserNavbar from '../../components/User/Usernavbar/UserNavbar'
import UserFooter from '../../components/User/UserFooter/UserFooter'
function UserRoot() {
    return (
        <>
            <UserNavbar />
            <Outlet />
            <UserFooter />
        </>
    )
}

export default UserRoot
