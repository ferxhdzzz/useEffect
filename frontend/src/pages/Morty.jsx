import { useEffect, useState } from 'react';
function RickAndMorty() {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState('https://rickandmortyapi.com/api/character');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fetchCharacters = async () => {
    if (!nextPage) return;
    setLoading(true);
    try {
      const response = await fetch(nextPage);
      const data = await response.json();
      setCharacters((prev) => [...prev, ...data.results]);
      setNextPage(data.info.next); // Guarda el link
    } catch (e) {
      setError('Error al cargar personajes');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCharacters();
  }, []);
 
  return (
<div>
  <br />
<h1>Rick n Morty</h1>
<br />
{error && <p>{error}</p>}
<div className="results">
        {characters.map((char) => (
<div className="card" key={char.id}>
<img src={char.image} alt={char.name} />
<h3>{char.name}</h3>
<p><strong>Estado:</strong> {char.status}</p>
<p><strong>Especie:</strong> {char.species}</p>
<p><strong>Origen:</strong> {char.origin.name}</p>
</div>
        ))}
</div>
      {nextPage && (
<button onClick={fetchCharacters} disabled={loading}>
          {loading ? 'Cargando...' : 'Cargar más'}
</button>
      )}
</div>
  );
}
export default RickAndMorty;