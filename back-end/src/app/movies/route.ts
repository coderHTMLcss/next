import { movies } from "./db";

export const GET = async () => {
  return Response.json(movies);
};

export const POST = async (request: Request) => {
  const movie = await request.json();
  console.log("movie", movie);

  const newMovie = { ...movie };
  movies.push(newMovie);
  return Response.json(movies);
};
