import React, { useContext, useEffect, useRef, useState } from 'react'
import axios from "axios"
import { Helmet } from "react-helmet"
import { favoriteContext } from '../../../Context/FavoriteContext';

function Home() {
    let [products, setProducts] = useState([])
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [searchTerm, setSearchTerm] = useState('')
    let { favorites, setFavorites } = useContext(favoriteContext)
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function getData() {

        axios.get("http://localhost:3000/products5")
            .then((res) => {
                setProducts(res.data)
            })

    }
    function HandleAddFav() {
        let findFavorite = favorites.find(favorite => favorite.id == products.id)
        if (findFavorite) {
            alert("artiq movcuddur")
        } else {
            setFavorites([...favorites, products])
        }
    }

    function HandleDelete(id) {
        axios.delete(`http://localhost:3000/products5/${id}`)
            .then((res) => {
                console.log(res.data);

                setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id))
            }
            )
    }
    useEffect(() => {
        getData()
    }, [])
    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <section id='hero'>
                <div className="hero">
                    <div className="hero-wrapper">
                        <div className="hero-content">
                            <h2>Episode 09: How To Create Web Page Using Bootstrap 4</h2>
                            <span>
                                By Mike Smith | 16 September 2017 | 1:30:20
                            </span>
                            <button className='hero-button'>
                                Read The Transcript
                            </button>
                            <div className="audio-player">
                                <audio ref={audioRef} src="your-audio-file.mp3"></audio>
                                <button className="play-pause-btn" onClick={togglePlayPause}>
                                    {isPlaying ? "❚❚" : "▶"}
                                </button>
                                <input
                                    type="range"
                                    className="seek-bar"
                                    min="0"
                                    max="100"
                                    defaultValue="0"
                                    onInput={(e) => {
                                        const audio = audioRef.current;
                                        audio.currentTime = (audio.duration * e.target.value) / 100;
                                    }}
                                />
                                <span className="time">00:00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='podcasts'>
                <div className="podcast">
                    <div className="podcast-wrapper">
                        <div className="pocast-card">
                            <div className="pod-img">
                                <img src="https://preview.colorlib.com/theme/podca/images/img_1.jpg.webp" alt="" />
                            </div>

                            <div className="podcast-content">
                                <h2>Episode 08: How To Create Web Page Using Bootstrap 4
                                </h2>
                                <span>By Mike Smith / 16 September 2017 / 1:30:20</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt.

                                </p>
                                <div className="audio-player for-pod">
                                    <audio ref={audioRef} src="your-audio-file.mp3"></audio>
                                    <button className="play-pause-btn" onClick={togglePlayPause}>
                                        {isPlaying ? "❚❚" : "▶"}
                                    </button>
                                    <input
                                        type="range"
                                        className="seek-bar"
                                        min="0"
                                        max="100"
                                        defaultValue="0"
                                        onInput={(e) => {
                                            const audio = audioRef.current;
                                            audio.currentTime = (audio.duration * e.target.value) / 100;
                                        }}
                                    />
                                    <span className="time">00:00</span>
                                </div>
                            </div>
                        </div>
                        <div className="pocast-card">
                            <div className="pod-img">
                                <img src="https://preview.colorlib.com/theme/podca/images/img_2.jpg.webp" alt="" />
                            </div>

                            <div className="podcast-content">
                                <h2>Episode 08: How To Create Web Page Using Bootstrap 4
                                </h2>
                                <span>By Mike Smith / 16 September 2017 / 1:30:20</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt.

                                </p>
                                <div className="audio-player for-pod">
                                    <audio ref={audioRef} src="your-audio-file.mp3"></audio>
                                    <button className="play-pause-btn" onClick={togglePlayPause}>
                                        {isPlaying ? "❚❚" : "▶"}
                                    </button>
                                    <input
                                        type="range"
                                        className="seek-bar"
                                        min="0"
                                        max="100"
                                        defaultValue="0"
                                        onInput={(e) => {
                                            const audio = audioRef.current;
                                            audio.currentTime = (audio.duration * e.target.value) / 100;
                                        }}
                                    />
                                    <span className="time">00:00</span>
                                </div>
                            </div>
                        </div>
                        <div className="pocast-card">
                            <div className="pod-img">
                                <img src="https://preview.colorlib.com/theme/podca/images/img_3.jpg.webp" alt="" />
                            </div>

                            <div className="podcast-content">
                                <h2>Episode 08: How To Create Web Page Using Bootstrap 4
                                </h2>
                                <span>By Mike Smith / 16 September 2017 / 1:30:20</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt.

                                </p>
                                <div className="audio-player for-pod">
                                    <audio ref={audioRef} src="your-audio-file.mp3"></audio>
                                    <button className="play-pause-btn" onClick={togglePlayPause}>
                                        {isPlaying ? "❚❚" : "▶"}
                                    </button>
                                    <input
                                        type="range"
                                        className="seek-bar"
                                        min="0"
                                        max="100"
                                        defaultValue="0"
                                        onInput={(e) => {
                                            const audio = audioRef.current;
                                            audio.currentTime = (audio.duration * e.target.value) / 100;
                                        }}
                                    />
                                    <span className="time">00:00</span>
                                </div>
                            </div>
                        </div>
                        <div className="pocast-card">
                            <div className="pod-img">
                                <img src="https://preview.colorlib.com/theme/podca/images/img_4.jpg.webp" alt="" />
                            </div>

                            <div className="podcast-content">
                                <h2>Episode 08: How To Create Web Page Using Bootstrap 4
                                </h2>
                                <span>By Mike Smith / 16 September 2017 / 1:30:20</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt.

                                </p>
                                <div className="audio-player for-pod">
                                    <audio ref={audioRef} src="your-audio-file.mp3"></audio>
                                    <button className="play-pause-btn" onClick={togglePlayPause}>
                                        {isPlaying ? "❚❚" : "▶"}
                                    </button>
                                    <input
                                        type="range"
                                        className="seek-bar"
                                        min="0"
                                        max="100"
                                        defaultValue="0"
                                        onInput={(e) => {
                                            const audio = audioRef.current;
                                            audio.currentTime = (audio.duration * e.target.value) / 100;
                                        }}
                                    />
                                    <span className="time">00:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='Mic'>
                <div className="mic">
                    <h3>Behind The Mic</h3>
                    <div className="mic-wrapper">
                        <div className="mic-card">
                            <div className="overlay">
                                <div className="mic-content">

                                </div>
                            </div>
                            <div className="mic-img">
                                <img src="https://preview.colorlib.com/theme/podca/images/person_1.jpg.webp" alt="" />

                            </div>
                        </div>
                        <div className="mic-card">
                            <div className="overlay">
                                <div className="mic-content">

                                </div>
                            </div>
                            <div className="mic-img">
                                <img src="https://preview.colorlib.com/theme/podca/images/person_1.jpg.webp" alt="" />

                            </div>
                        </div>
                        <div className="mic-card">
                            <div className="overlay">
                                <div className="mic-content">

                                </div>
                            </div>
                            <div className="mic-img">
                                <img src="https://preview.colorlib.com/theme/podca/images/person_1.jpg.webp" alt="" />

                            </div>
                        </div>
                        <div className="mic-card">
                            <div className="overlay">
                                <div className="mic-content">

                                </div>
                            </div>
                            <div className="mic-img">
                                <img src="https://preview.colorlib.com/theme/podca/images/person_1.jpg.webp" alt="" />

                            </div>
                        </div>
                        <div className="mic-card">
                            <div className="overlay">
                                <div className="mic-content">

                                </div>
                            </div>
                            <div className="mic-img">
                                <img src="https://preview.colorlib.com/theme/podca/images/person_1.jpg.webp" alt="" />

                            </div>
                        </div>
                        <div className="mic-card">
                            <div className="overlay">
                                <div className="mic-content">
                                    <h3>Name</h3>
                                    <span>profession</span>
                                    <p>decription</p>

                                </div>
                            </div>
                            <div className="mic-img">
                                <img src="https://preview.colorlib.com/theme/podca/images/person_1.jpg.webp" alt="" />

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section id='gusets'>
                <div className="guests">
                    <input type="text" className='search-input' value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />
                    <h2>Featured Gusets</h2>
                    <div className="guests-wrapper">
                        {
                            filteredProducts.length > 0 ? (
                                filteredProducts.map((req) => (
                                    <div className="guest-card" key={req.id}>
                                        <button><i onClick={() => HandleDelete(req.id)} class="bi bi-x-lg delete"></i></button>
                                        <div className="guest-img">
                                            <img src={req.image} alt="" />
                                        </div>
                                        <h3>{req.name}</h3>
                                        <p>{req.desc}</p>
                                        <i onClick={() => HandleAddFav(req)} class="bi bi-heart"></i>

                                    </div>
                                ))
                            ) : (
                                <p>no products</p>
                            )
                        }
                    </div>
                </div>

            </section>
        </>
    )
}

export default Home
