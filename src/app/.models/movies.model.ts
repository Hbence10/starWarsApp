export class Movie {
  constructor(
    public title: string,
    public opening_crawl: string,
    public director: string,
    public producer: string,
    public release_date: string,
    public chararcters : string[],
    public starships: string[],
    public vehicles: string[],
    public species: string[],
    public trailer_id: string,
    public poster: string
  ) {}
}
