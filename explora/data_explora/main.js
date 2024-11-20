/* Afficher et configuer les valeurs des ranges */
//============OBJETS INDISPENSABLE POUR REQUETES===========
let wsExploraUrl = "ws:\/\/" + window.location.hostname + "/wsExplora";      
let wsExplora;

function initConfigWsExplora() 
{
    wsExplora = new WebSocket(wsExploraUrl);
    wsExplora.onopen    = function(event){};
    wsExplora.onclose   = function(event){setTimeout(initConfigWsExplora, 2000);};
    wsExplora.onmessage    = function(event)
  {
    // var keyValue = event.data.split(",");
    // var button = document.getElementById(keyValue[0]);
    // button.value = keyValue[1];
    // if (button.id == "Record" || button.id == "Play")
    // {
    //   button.style.backgroundColor = (button.value == "ON" ? "green" : "red");  
    //   enableDisableButtonsSliders(button);
    // }
  };
}
function sendButtonInput(key, value) 
{
  let data = key + "," + value;
  wsExplora.send(data);
}

let pince = document.getElementById("pince");
let vpince = document.getElementById("vpince");
let tpince = document.getElementById("tpince");

let min_pince = document.getElementById("min_pince");
let max_pince = document.getElementById("max_pince");
min_pince.value=0;
max_pince.value=180;

let rotat = document.getElementById("rotat");
let vrotat = document.getElementById("vrotat");
let trotat = document.getElementById("trotat");

let min_rotat = document.getElementById("min_rotat");
let max_rotat = document.getElementById("max_rotat");
min_rotat.value=0;
max_rotat.value=180;

let art1 = document.getElementById("art1");
let vart1 = document.getElementById("vart1");
let tart1 = document.getElementById("tart1");

let min_art1 = document.getElementById("min_art1");
let max_art1 = document.getElementById("max_art1");
min_art1.value =0;
max_art1.value =180;

let art2 = document.getElementById("art2");
let vart2 = document.getElementById("vart2");
let tart2 = document.getElementById("tart2");

let min_art2 = document.getElementById("min_art2");
let max_art2 = document.getElementById("max_art2");
min_art2.value =0;
max_art2.value =180;

let detect = document.getElementById("detect");
let vdetect = document.getElementById("vdetect");

let vitesse = document.getElementById("vitesse");
let vvitesse = document.getElementById("vvitesse");

let vitesser = document.getElementById("vitesser");
let vvitesser = document.getElementById("vvitesser");


setInterval(() => {
    vpince.textContent = pince.value + ' °';
    if(min_pince.value>=0 && min_pince.value <=180 && max_pince.value>=0 && max_pince.value <=180)
    {
    pince.min = min_pince.value;
    pince.max = max_pince.value;

    tpince.style.color = "black";
    tpince.textContent = "Pince :";
    }
    else
    {
        tpince.style.color = "red";
        tpince.textContent = "Ajustez entre 0 et 180 !";
    }


    vrotat.textContent = rotat.value + ' °';
    if(min_rotat.value>=0 && min_rotat.value <=180 && max_rotat.value>=0 && max_rotat.value <=180)
  {
    rotat.min = min_rotat.value;
    rotat.max = max_rotat.value;

    trotat.style.color = "black";
    trotat.textContent = "Rotation :";
    }
    else
    {
        trotat.style.color = "red";
        trotat.textContent = "Ajustez entre 0 et 180 !";
    }



    vart1.textContent = art1.value + ' °';
    if(min_art1.value>=0 && min_art1.value <=180 && max_art1.value>=0 && max_art1.value <=180)
    {
    art1.min = min_art1.value;
    art1.max = max_art1.value;

    tart1.style.color = "black";
    tart1.textContent = "Rotation :";
    }
    else
    {
        tart1.style.color = "red";
        tart1.textContent = "Ajustez entre 0 et 180 !";
    }


    vart2.textContent = art2.value + ' °';
    if(min_art2.value>=0 && min_art2.value <=180 && max_art2.value>=0 && max_art2.value <=180)
    {
    art2.min = min_art2.value;
    art2.max = max_art2.value;
        
    tart2.style.color = "black";
    tart2.textContent = "Rotation :";
    }
    else
    {
        tart2.style.color = "red";
        tart2.textContent = "Ajustez entre 0 et 180 !";
    }



    vdetect.textContent = detect.value + ' °';
    vvitesse.textContent = vitesse.value + ' °';
    vvitesser.textContent = vitesser.value + ' °';
}, 13);




/* Les modes */

    let mod1 = document.getElementById("mod1");//TELEGUIDAGE
    let mod2 = document.getElementById("mod2");//SUIVEUR DE LIGNE
    let mod3 = document.getElementById("mod3");//SUIVEUR D'OBJET
    let mod4 = document.getElementById("mod4");//AUTONOME
    
    let commands = document.getElementById("commands");
    
    let tdetect = document.getElementById("tdetect");//
    
   


    mod1.onclick = () =>
        {

            mod1.style.background = "darkred";
            mod2.style.background = "black";
            mod3.style.background = "black";
            mod4.style.background = "black";
                     
            commands.style.opacity = "1";
            commands.style.pointerEvents = "all";
            
            detect.style.pointerEvents = "all";
            detect.style.opacity = "1";
            tdetect.style.opacity = "1";
            vdetect.style.opacity = "1";

            //=====REQUETES=====
            wsExplora.send("teleguidage");
            
        }

    

    mod2.onclick = () => {
        
            
            mod2.style.background = "darkred";
            mod1.style.background = "black";
            mod3.style.background = "black";
            mod4.style.background = "black";
        
            commands.style.pointerEvents = "none";
            commands.style.opacity = "0.5";
    
            detect.style.pointerEvents = "all";
            detect.style.opacity = "1";
            tdetect.style.opacity = "1";
            vdetect.style.opacity = "1";
            //=====REQUETES=====
            wsExplora.send("suiveurDeLigne");
            
        }

    mod3.onclick = () => {
        
            
            mod3.style.background = "darkred";
            mod1.style.background = "black";
            mod2.style.background = "black";
            mod4.style.background = "black";
        
            commands.style.pointerEvents = "none";
            commands.style.opacity = "0.5";
    
            detect.style.pointerEvents = "all";
            detect.style.opacity = "1";
            tdetect.style.opacity = "1";
            vdetect.style.opacity = "1";
            //=====REQUETES=====
            wsExplora.send("suiveurDObjet");
            
        }
    
   
    mod4.onclick = () => {
    
    
            mod4.style.background = "darkred";
            mod1.style.background = "black";
            mod2.style.background = "black";
            mod3.style.background = "black";
    
            commands.style.pointerEvents = "none";
            commands.style.opacity = "0.5";
    
            detect.style.pointerEvents = "none";
            detect.style.opacity = "0.5";
            tdetect.style.opacity = "0.5";
            vdetect.style.opacity = "0.5";
            wsExplora.send("autonome");
            
    }
     

    /* Connexion */

    let ouvrir = document.getElementById("ouvrir");
let intro = document.getElementById("intros");
let boite = document.getElementById("boite");

let login = document.getElementById("log");
let password = document.getElementById("passw");
let msg = document.getElementById("msg");




ouvrir.onclick = () => {

	if(login.value ==="explora" && password.value ==="expl")
	{	

		msg.textContent = "";
	boite.style.opacity = "1";
	boite.style.pointerEvents = "all";
	intro.style.opacity = "0";
	intro.style.pointerEvents = "none";

    /* mode suivie */
    mod2.style.background = "darkred";
    commands.style.pointerEvents = "none";
    commands.style.opacity = "0.5";
	}
	else
	{
		msg.textContent = "Login ou mot de passe incorrect";
	}

}

/*Afficher les derniers configs */

let distance = document.getElementById("distance");
let vdistance = document.getElementById("vdistance");

let delais1 = document.getElementById("delais1");
let vdelais1 = document.getElementById("vdelais1");


let delais2 = document.getElementById("delais2");
let vdelais2 = document.getElementById("vdelais2");


let delais3 = document.getElementById("delais3");
let vdelais3 = document.getElementById("vdelais3");

let valider = document.getElementById("valider");

valider.onclick = function() {
vdistance.textContent = distance.value;
vdelais1.textContent = delais1.value;
vdelais2.textContent = delais2.value;
vdelais3.textContent = delais3.value;
}

//======ENVOIE DES REQUETES POUR BOUTONS=============
function onclickButton(button) 
{
  button.value = (button.value == "ON") ? "OFF" : "ON" ;        
  button.style.backgroundColor = (button.value == "ON" ? "green" : "red");          
  var value = (button.value == "ON") ? 1 : 0 ;
  sendButtonInput(button.id, value);
  enableDisableButtonsSliders(button);
}

