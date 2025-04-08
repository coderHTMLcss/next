import { movies } from "../db";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = await params;
  const movie = movies.find((movie) => movie.id === Number(id));
  return movie
    ? new Response(JSON.stringify(movie))
    : new Response("Movie not found", { status: 404 });
};

export const PATCH = async (
  _req: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = await params;
  const movie = movies.find((movie) => movie.id === Number(id));
  if (!movie) return new Response("Movie not found", { status: 404 });

  try {
    const updatedMovie = await _req.json();
    const index = movies.findIndex((movie) => movie.id === Number(id));
    if (!movie) return new Response("Movie not found", { status: 404 });

    movies[index] = { ...movie, ...updatedMovie };
    return new Response(JSON.stringify(movies[index]), { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: "Failed to parse JSON" }), {
        status: 400,
      });
    }
  }
};

export const DELETE = async (
  _req: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = await params;
  const movieIndex = movies.findIndex((movie) => movie.id === Number(id));
  if (movieIndex === -1)
    return new Response("Movie not found", { status: 404 });
  movies.splice(movieIndex, 1);
  return new Response("Movie deleted", { status: 200 });
};
