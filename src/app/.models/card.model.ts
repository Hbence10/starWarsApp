export class Card{
  constructor(
    public name : string,
    public link : string,
    public modelType : string,
    public imgId : number,
    public imgPath: string = `../assets/img/${modelType}/${imgId}.jpg`
  ){}
}
