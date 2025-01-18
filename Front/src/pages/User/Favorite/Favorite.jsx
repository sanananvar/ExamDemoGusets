import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { favoriteContext } from '../../../Context/FavoriteContext'
function Favorite() {
    let { favorites, setFavorites } = useContext(favoriteContext)
    function handleDeleteFav(id) {
        const updatedFavorites = favorites.filter(favorite => favorite.id !== id);
        setFavorites(updatedFavorites);
      }
    
    return (
        <>
            <Helmet>
                <title>Favorite</title>
            </Helmet>
            <section id='favorite'>
                <div className="fav">
                    <div className="fav-wrapper">
                        {
                            favorites.length > 0 ? (
                                favorites.map((item) => (
                                    <div className="fav-card">
                                    <button><i onClick={() => handleDeleteFav(item.id)} class="bi bi-x-lg delete"></i></button>
                                    <div className="fav-img">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <h3>{item.name}</h3>
                                    <p>{item.desc}</p>
                                  

                                </div>
                                )
                                )):(
                                    <p>
                                        empty fav
                                    </p>
                                )
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default Favorite
