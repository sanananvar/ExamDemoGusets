import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router';
function UserNavbar() {
    const navigate = useNavigate()
    function HnadleNavigateToFav() {
        navigate("/fav");

    }
    return (
        <>
        <div className="header">
            <div className="header-wrapper">
                <div className="name">
                    Podca
                </div>
                <div className="burger">
                    <i onClick={HnadleNavigateToFav} class="bi bi-bag"></i>
                    <i class="bi bi-list"></i>
                </div>
            </div>
        </div>
        </>
    )
}

export default UserNavbar
