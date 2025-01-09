export class Species {
  constructor(
    public classification: string,
    public designation: string,
    public avarage_height: number,
    public avarage_lifespan: number,
    public hair_colors: string[],
    public skin_colors: string[],
    public eye_colors: string[],
    public homeworld: string,
    public language : string,
    public people: string[],
    public name : string,
    public id : number,
    public imgPath : string = `../assets/img/species/${id}.jpg`
  ) {}
}
