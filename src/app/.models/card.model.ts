export class Card{
  constructor(
    public name : string,
    public link : string,
    public modelType : string,
    public imgId : number,
    public imgPath: string = `../assets/img/${modelType}/${imgId}.jpg`,
    public showDetails : boolean = false
  ){
    //A starshipeknel nem szamozva vannak a kepek --> OKA: az id nem sorrendben van
    if(this.modelType == "starships"){
      this.imgPath = `../assets/img/${modelType}/${name}.jpg`
    }

    if(this.modelType == "pilot"){
      this.imgPath = `../assets/img/people/${this.imgId}.jpg`

      if(this.imgId > 17){
        this.imgPath = `../assets/img/people/${this.imgId-1}.jpg`
      }
    }
  }
}
