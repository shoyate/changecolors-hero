// speed = step * refresh 
// so, keep in mind that refresh affects speed which is not ideal
export function animationLinear(image: any, stepsize: any, refresh: any)
{
    
    // DO TOUCH ;)
    let initx = 1500;
    let inity = 2000;
    let offset = 700;
    
    // DONT TOUCH
    let dir = 1;
    let stepx = initx;
    let stepy = inity;
    
    // Why in the name of fucking god this doesnt get executed
    // nvm I am retarded
    image.style.backgroundPosition = initx + "px " + inity + "px";
    setInterval(function(){

        
        image.style.backgroundPosition = stepx + "px " + stepy + "px";

        // Change direction
        if (stepx >= initx + offset && stepy >= inity + offset){
            dir = -1;
        }else if (stepx <= initx - offset && stepy <= inity - offset){
            dir = 1;
        }
        
        stepx += dir * stepsize;
        stepy += dir * stepsize;
    }, refresh);
}

// export funcction animationCircular(image: any, radius : any){
        // TODO: make this work
        // let position = image.style.backgroundPosition;
        // console.log("position: " + image.style.backgroundPosition);
         
        // let x = position.split(" ")[0];
        // let y = position.split(" ")[1];
        
        // let angle = Math.atan2(y, x);
        // let new_x = Math.cos(angle + 0.01) * radius;
        // let new_y = Math.sin(angle + 0.01) * radius;
        // position = new_x + "px " + new_y + "px";
// }