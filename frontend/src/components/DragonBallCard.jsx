import React from 'react'
 
const DragonBallCard = ({character}) => {
  return (
   <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border-gray-200 m-4">
        <img
            className="h-64 object-cover mx-auto"
            src={character.image}
            alt={character.name}
        />
        <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2 text-gray-800">{character.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{character.description}</p>
            <div className="text-gray-700 text-sm">
                <p>
                    <span className="font-semibold">Race:</span> {character.race}
                </p>
                <p>
                    <span className="font-semibold">Gender:</span> {character.gender}
                </p>
                <p>
                    <span className="font-semibold">Ki:</span> {character.ki}
                </p>
                <p>
                    <span className="font-semibold">Max Ki:</span> {character.maxKi}
                </p>
                <p>
                    <span className="font-semibold">Affiliation:</span> {character.affiliation}
                </p>
            </div>
        </div>
   </div>
  )
}
 
export default DragonBallCard