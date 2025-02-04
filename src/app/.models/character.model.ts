export class Character{
  constructor(
    public height : number,
    public mass : number,
    public hair_color: string,
    public skin_color : string,
    public eye_color : string,
    public birth_year : string,
    public name : string,
    public homeworld: string,
    public id : number,
    public imgPath : string = `../assets/img/people/${id}.jpg`,
  ){
    if(this.id > 17){
      this.imgPath = `../assets/img/people/${this.id-1}.jpg`
    }
  }
}
