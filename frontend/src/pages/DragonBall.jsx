import { useState, useEffect } from "react"
import DragonbBallCard from "../components/DragonBallCard"


const DragonBall = () => {

    const apiUrl = "https://dragonball-api.com/api/characters"
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchCharacters = async () => {
        try {
            const response = await fetch(apiUrl)
            const data = await response.json()
            console.log(data)
            setCharacters(data.items)
        } catch (error) {
            console.error("Error fetching characters:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCharacters()
    }, [])


    return (
        <div className="container">
            <br />
            <h1 className='text-center text-2xl'>DragonBall</h1>
            <br />
            {loading ? (

                <p>...</p>
            ) : (
                <div className="grid grid-cols-5 gap-8">
                    {characters.map((character) => (
                        <DragonbBallCard key={character.id} character={character} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default DragonBall