let answer = document.getElementById("answer");
let result = document.getElementById("result");
let resultat = document.getElementById("resultat");

let no = document.getElementById("no");
let up = document.getElementById("up");
let down = document.getElementById("down");
let mod = document.getElementById("mod");

let i_no = document.getElementById("i_no");
let i_up = document.getElementById("i_up");
let i_down = document.getElementById("i_down");
let i_mod = document.getElementById("i_mod");



setInterval(() => {
    


    // En modifiant la valeur du champs
    if ((answer.value >=1 && answer.value <=124) || (answer.value >=975 && answer.value <=1024) || (answer.value >=512 && answer.value <=885) )
    {
        // La valeur est correcte
        resultat.innerHTML = result.innerHTML;
        i_no.innerHTML = answer.value;

        if (answer.value >=1 && answer.value <=124)
        {
            i_up.innerHTML = 935 + (0.2 * answer.value);
            i_down.innerHTML = (935-45) + (0.2 * answer.value);
            i_mod.innerHTML = "GSM 900";
        }

        if  (answer.value >=975 && answer.value <=1024)
        {
            i_up.innerHTML = 935 + (0.2 * (answer.value-1024));
            i_down.innerHTML = (935 - 45) + (0.2 * (answer.value-1024));
            i_mod.innerHTML = "eGSM (GSM étendu)";
        }

        if (answer.value >=512 && answer.value <=885) 
        {
            i_up.innerHTML = 1805.2 + (0.2 * (answer.value-512));
            i_down.innerHTML = (1805.2 - 95) + (0.2 * (answer.value-512));

            i_mod.innerHTML = "DCS (GCS 1800)";
        }


    }


    else
    {
        // Valeur incorrecte
        result.style.display = "none";
        resultat.innerHTML = "Pas d’informations";
    }

    
}, 16);



