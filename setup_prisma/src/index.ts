import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

async function createMultipleMovies() {
  const newMovies = await prisma.movie.createMany({
    data: [
      {
        title: "Inception",
        description:
          "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        genre: "Sci-Fi",
        releaseDate: new Date("2010-07-16"),
        rating: 8.8,
      },
      {
        title: "The Dark Knight",
        description:
          "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        genre: "Action",
        releaseDate: new Date("2008-07-18"),
        rating: 9.0,
      },
      {
        title: "Interstellar",
        description:
          "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        genre: "Adventure",
        releaseDate: new Date("2014-11-07"),
        rating: 8.6,
      },
    ],
  });

  return newMovies;
}

async function createMovie() {
  const newMovie = await prisma.movie.create({
    data: {
      title: "The Matrix",
      description:
        "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
      genre: "Sci-Fi",
      releaseDate: new Date("1999-03-31"),
      rating: 8.7,
    },
  });

  console.log(newMovie);
  return newMovie;
}

async function getAllMovies() {
  const allMovies = await prisma.movie.findMany();
  console.log(allMovies);
}

async function getMovieById(movieId: number) {
  const movie = await prisma.movie.findUnique({
    where: { id: movieId },
  });
  console.log("Movie by ID:", movie);
  return movie;
}

async function updateMovie(
  movieId: number,
  updateTitle: string,
  updateDescription: string
) {
  const updateMovie = await prisma.movie.update({
    where: { id: movieId },
    data: {
      title: updateTitle,
      description: updateDescription,
    },
  });
  console.log("Updated Movie:", updateMovie);
  return updateMovie;
}

async function deleteMovie(movieId: number) {
  const deletedMovie = await prisma.movie.delete({
    where: { id: movieId },
  });

  console.log("Deleted Movie: ", deletedMovie);
}

async function main() {
  //   await createMovie();
  await createMultipleMovies();
  //   await getAllMovies();
  //   await getMovieById(1);
  await updateMovie(1, "Updated Title", "Updated Description");
  await deleteMovie(4);
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
