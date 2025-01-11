import { animate, animation, query, stagger, style, transition, trigger } from "@angular/animations";

export const detailsAnimation = animation([  
   
        query("#detailsContainer", [
            style({
                opacity: 0,
                transform: "translate(-50%, -100%)"
            }), 
            
            animate("0.5s", style({
                opacity: 1,
                transform: "translate(-50%, -50%)"
            }))
        ])
     
])