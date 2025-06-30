import React, { useState } from 'react'

const Planets = () => {

    const planets = [
        {
            name: "Mercury",
            size: "4,880 km (dm)",
            distanceFromSun: "57.91 million km",
            notableFeature: "Smallest planet and closest to the Sun",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg",
        },
        {
            name: "Venus",
            size: "12,104 km (diameter)",
            distanceFromSun: "108.2 million km",
            notableFeature: "Hottest planet due to thick atmosphere",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
        },
        {
            name: "Earth",
            size: "12,742 km (diameter)",
            distanceFromSun: "149.6 million km",
            notableFeature: "Supports life and has abundant water",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
        },
        {
            name: "Mars",
            size: "6,779 km (diameter)",
            distanceFromSun: "227.9 million km",
            notableFeature: "Known as the Red Planet with evidence of ancient water",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
        },
        {
            name: "Jupiter",
            size: "139,820 km (diameter)",
            distanceFromSun: "778.5 million km",
            notableFeature: "Largest planet with a giant red storm",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
        },
        {
            name: "Saturn",
            size: "116,460 km (diameter)",
            distanceFromSun: "1.434 billion km",
            notableFeature: "Famous for its stunning ring system",
            image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
        },
        {
            name: "Uranus",
            size: "50,724 km (diameter)",
            distanceFromSun: "2.871 billion km",
            notableFeature: "Rotates on its side with a faint ring system",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
        },
        {
            name: "Neptune",
            size: "49,244 km (diameter)",
            distanceFromSun: "4.495 billion km",
            notableFeature: "Strongest winds in the Solar System",
            image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
        }
    ]
    const [search, setSearch] = useState("");

    const filter_planets = search
        ? planets.filter((a) =>
            a.name.toLowerCase().includes(search.toLowerCase())
        )
        : planets;


    return (
        <>

            <div className="container py-4 textall">
                <h2 className="mb-4 text-center">
                    Planets
                </h2>
                <div className="mb-4">
                    <input type="search" className="form-control" value={search} placeholder='Search Planets'
                        onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="row">
                    {filter_planets.length > 0 ? (
                        filter_planets.map((planet, index) => (

                            <div className="col-md-3 mb-4">
                                <div className="card h-100 shadow-lg border-0 text-white bg-dark rounded-4 overflow-hidden">
                                    <img
                                        src={planet.image}
                                        className="card-img-top object-fit-cover"
                                        alt={planet.name}
                                        style={{ height: '180px', objectFit: 'cover', borderBottom: '4px solid #444' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold text-center">{planet.name}</h5>
                                        <hr style={{ borderColor: "#666" }} />
                                        <p className="card-text"><strong>🌐 Size:</strong> {planet.size}</p>
                                        <p className="card-text"><strong>☀️ Distance:</strong> {planet.distanceFromSun}</p>
                                        <p className="card-text"><strong>✨ Feature:</strong> {planet.notableFeature}</p>
                                    </div>
                                </div>
                            </div>

                        ))
                    ) : (
                        <div className="col-12 text-center">
                            <p> Sorry, No Planets were found with this name</p>
                        </div>
                    )}
                </div>

            </div>








        </>
    )
}

export default Planets