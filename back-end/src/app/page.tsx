'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [movie, setMovie] = useState(null);
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  console.log('movie', movie);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch('/movies/2');
        if (!res.ok) {
          alert('Failed to fetch movie');
          return;
        }

        const data = await res.json();
        console.log('data', data);
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie:', error);
        alert('Failed to fetch movie');
        return;
      }
    };

    fetchMovie();
  }, []);


  const updateMovie = async () => {
    const res = await fetch('/movies/2', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, genre }),
    });

    if (!res.ok) {
      alert('Failed to update');
      return;
    }

    const updated = await res.json();
    console.log('updated', updated);

    setMovie(updated);
  };

  const handleDeleteMovie = async () => {
    const res = await fetch('/movies/3', {
      method: 'DELETE',
    });

    if (!res.ok) {
      alert('Failed to delete');
      return;
    }
    setMovie(null);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Update Movie</h1>
      <input
        type="text"
        placeholder="New title"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border px-2 py-1 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="New director"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="border px-2 py-1 mb-2 w-full"
      />
      <button
        onClick={updateMovie}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Update
      </button>

      {movie && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Updated Movie:</h2>
          <pre className="bg-gray-100 p-2 mt-2">
            {JSON.stringify(movie, null, 2)}
          </pre>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded"
            onClick={handleDeleteMovie}>Delete Movie</button>
        </div>
      )}
    </div>
  );
};
