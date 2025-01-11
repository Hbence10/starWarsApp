export class Starships{
  constructor(
    public model : string,
    public starship_class : string,
    public manufacturer : string,
    public cost_in_credits : number,
    public length : number,
    public crew : string,
    public passengers : number,
    public max_atmosphering_speed : number,
    public hyperdrive_raiting : number,
    public MGLT : number,
    public cargo_capacity : number,
    public consumables : string,
    public pilots : string [],
    public name : string,
    public id : number,
    public imgPath : string = `../assets/img/starships/${name}.jpg`
  ){}
}
