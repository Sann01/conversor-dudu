let btns = document.querySelectorAll("button");

let C = document.querySelector("#C");
let F = document.querySelector("#F");
let K = document.querySelector("#K");
let R = document.querySelector("#R");

let celsiu;
let fahre;
let Kelvin;
let ranki;

btns.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{
       let champs = e.target.innerHTML;
       switch(champs){
        
        case 'Celsius':
        let cel = parseFloat(C.value);

            fahre = ((cel*9/5)+32).toFixed(2);
            kelvin = (cel+273.15).toFixed(2);
            ranki = (((cel + 273.15)*9)/5).toFixed(2);
           
           F.placeholder = (fahre);
          K.placeholder = (kelvin);
           R.placeholder = (ranki);
            break;
        case 'Fahrenheit':
            let fahe = parseFloat(F.value);

             celsiu = ((fahe-32)*5/9).toFixed(2);
             kelvin = (((fahe-32)*5/9)+273.15).toFixed(2);
             ranki = (fahe+459).toFixed(2);
 
            C.placeholder = (celsiu);
            K.placeholder = (kelvin);
            R.placeholder = (ranki);
            break;
            
            case 'Kelvin':
            let kelvi = parseFloat(K.value);
 
            celsiu = (kelvi-273.15).toFixed(2);
            fahre = ((kelvi-273.15)*9/5+32).toFixed(2);
            ranki = (kelvi*1.8).toFixed(2);

            C.placeholder = (celsiu);
            F.placeholder = (fahre);
            R.placeholder = (ranki);
            break;

            case 'Rankine':
            let rankin = parseFloat(R.value);
 
            celsiu = ((rankin-491.67)*5/9).toFixed(2);
            fahre = (rankin-459.67).toFixed(2);
            kelvin = (rankin*5/9).toFixed(2);
 
            C.placeholder = (celsiu);
            F.placeholder = (fahre);
            K.placeholder = (kelvin);
            break;

         case 'Clean':
            C.placeholder = "";
            F.placeholder = "";
            K.placeholder = "";
            R.placeholder = "";
            break;
         }

    })
})