export class Planet{
  constructor(
    public diamater : number,
    public rotation_period : number,
    public orbital_period : number,
    public gravity : string,
    public population : number,
    public climate : string,
    public terrain : string,
    public surface_water : number,
    public name : string,
    public id : number,
    public imgPath : string = `../assets/img/planets/${id}.jpg`
  ){}
}
