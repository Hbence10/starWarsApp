import { animate, animation, query, stagger, style, transition, trigger } from "@angular/animations";

export const loadingAnimation = animation([  
    query(".col-lg-4", [ //query = amelyik elemre hivatkozunk. FONTOS: az adott elemnek azon tagen belul kell lennie amelyiken van maga az animacio
      style({opacity : 0, transform: 'translateY(-150px)'}), //Az "alap" helyzet beallitasa
      stagger(170, [ //stagger = ez rakja ra a delayt a queryk koze, a szam a delay --> millisecben ertendo a szam
        animate("0.3s", style(
          {opacity : 1, transform: "none"} //A "veg" helyzet beallitasa
        ))
      ])
    ])  
])