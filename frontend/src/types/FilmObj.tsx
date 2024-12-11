export default function newFilm(
    id: number,
    title: string,
    year: string,
    director: string,
    genre: any,
    country: any,
    image: string,
    imdb: string,
    description: string,
    actor: any
) {
    return { id, title, year, director, genre, country, image, imdb, description, actor };
}