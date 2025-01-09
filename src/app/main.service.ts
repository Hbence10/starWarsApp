import { Movie } from './.models/movies.model';
import { Card } from './.models/card.model';
import { Injectable, Input } from '@angular/core';
import { Planet } from './.models/planet.model';
import { Species } from './.models/species.model';
import { Starships } from './.models/spaceship.model';
import { Character } from './.models/character.model';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  selectedElement: Planet | Species | Starships | Character;
  wantedListType: string = '';
  cards: Card[] = [];
  rows : Card[][] = []
  buttonQuantity : number;
  buttonNumbers : number[] = []

  // Filmeknek az adatai:
  trailerLinks : string[] = ["vZ734NWnAHA", "JNwNXF9Y6kY", "7L8p7_SLzvU", "bD7bpG-zDJQ", "gYbW1F_c9eM", "5UnjrG_N8hU"] //A filmek trailer-enek az id-jai
  coverImgs : string[] = ["new_hope.jpg", "the_empire_strikes_back.jpg", "return_of_the_jedi.jpg", "the_phantom_menace.jpg", "attack_of_the_clones.jpg", "revenge_of_the_sith.jpg"] //A filmek posterei
  movieList : Movie[] = []
  selectedMovie : Movie;

  constructor() {}

  setCard(response: any, modelType : string) {
    this.cards = [];
    this.rows = [];

    (response.results as any[]).forEach(element =>
      this.cards.push(new Card(element.name, element.url, modelType, element.uid))
    )

    for(let i : number = 0; i < this.cards.length; i+=3){
      this.rows.push(this.cards.slice(i, i+3))
    }

    this.buttonNumbers = Array(this.buttonQuantity+1).fill(1).map((x, i) => i).slice(1)
  }

  setElement(response : any, card?:Card){
    if(this.wantedListType == "planets"){
      this.selectedElement = new Planet(response.properties.diamater , response.properties.rotation_period, response.properties.orbital_period, response.properties.gravity, response.properties.population, response.properties.climate, response.properties.terrain, response.properties.surface_water, response.properties.name, response.uid)
    } else if (this.wantedListType == "species"){
      this.selectedElement = new Species(response.properties.classification ,response.properties.designation,response.properties.avarage_height,response.properties.avarage_lifespan,response.properties.hair_colors,response.properties.skin_colors,response.properties.eye_colors,response.properties.homeworld,response.properties.language,response.properties.people,response.properties.name,response.uid)
    } else if (this.wantedListType == "starships"){
      this.selectedElement = new Starships(response.properties.model , response.properties.starship_class , response.properties.manufacturer, response.properties.cost_in_credits, response.properties.length, response.properties.crew, response.properties.passengers, response.properties.max_atmosphering_speed, response.properties.hyperdrive_rating, response.properties.MGLT, response.properties.cargo_capacity, response.properties.consumables, response.properties.pilots, response.properties.name, response.uid)
    } else if (this.wantedListType == "people"){
      this.selectedElement = new Character(response.properties.height ,response.properties.mass,response.properties.hair_color,response.properties.skin_color,response.properties.eye_color,response.properties.birth_year,response.properties.name,response.uid)
    }

    console.log(this.selectedElement)
    if(card != undefined){
      card.showDetails = true
    }
  }
}
