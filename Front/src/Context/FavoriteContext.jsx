import { createContext, useEffect, useState } from "react";

export let favoriteContext = createContext()
import React from 'react'


function FavoriteProvider({children}) {
    let localFavorite=JSON.parse(localStorage.getItem("favorites"))
    let [favorites  ,setFavorites]=useState(localFavorite? localFavorite:[])
    useEffect(()=>{
        localStorage.setItem("favorites",JSON.stringify(favorites))
    },[favorites])
    let value={
        favorites,
        setFavorites
    }
  return (
    <favoriteContext.Provider value={value}>
        {children}
    </favoriteContext.Provider>
  )
}

export default FavoriteProvider
