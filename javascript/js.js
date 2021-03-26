function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

var array= [];
var firsttime=true;

function  myFunction(){ 
    if (firsttime==true){
    for(let i =0; i<50; ++i){
        array[i] =  getRandomIntInclusive(1, 80);
        let wysokosc = array[i] +"0px";
        let element = document.getElementById("picture");
        let div = document.createElement("div");
        element.appendChild(div);
        div.classList.add("klasa");
        div.id="klasa";
        div.style.height=wysokosc;
        firsttime=false;
    }
    }
    else{
        for(let i =0; i<50; ++i){
            
            let element = document.getElementById("picture");
            let usuwanie = document.getElementById("klasa")
            usuwanie.remove(Element.div);
            
            array[i] =  getRandomIntInclusive(1, 80);
            let wysokosc = array[i] +"0px";
            let div = document.createElement("div");
            element.appendChild(div);
            div.classList.add("klasa");
            div.id = "klasa";
            div.style.height=wysokosc;

        }
    }
    
    
};



function  myFunction2(){  
    array.sort(function(a, b){return a-b}); //aby poprawne sortowanie było to jest potrzebne bo inaczej 5 wklada po 40 
    for(let i =0; i<50; ++i){
            
        let element = document.getElementById("picture");
        let usuwanie = document.getElementById("klasa")
        usuwanie.remove(Element.div);
        
        let wysokosc = array[i] +"0px";
        let div = document.createElement("div");
        element.appendChild(div);
        div.classList.add("klasa");
        div.id = "klasa";
        div.style.height=wysokosc;

    }
    

    console.log(array);
};