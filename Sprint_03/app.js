let listeApprenant = [];
// let  btnSuivant = document.getElementById("suivant");
let listeTraiter = [];
let i = 0;



//FONCTION AJOUTER AU TABLEAU
function addApprenant(){
    let listenom = document.getElementById("apprenantInput").value;
    
    if(listenom != "" && listenom == listenom){
        listeApprenant.push(listenom);
        let nouvelleliste = document.createElement('tr');
        let nouvelleliste1 = document.createElement('tr');
        nouvelleliste.className = "";
        nouvelleliste1.className = "txt";
        for(i;i < listeApprenant.length; i++) {
            if(listeApprenant[i] <= listeApprenant[0]){
                nouvelleliste.innerHTML = `<td class="Nom">${listenom}</td><td class="Date1">${afficheDate()}</td><td class="Passersontour1"><button class="btnpassemontour" type="button">Passer mon tour</td>`;
                document.querySelector("#tr1").appendChild(nouvelleliste);
            }
            else if(listeApprenant[i] >= listeApprenant[0]){
                nouvelleliste1.innerHTML = `<td class="Nom" onclick="changerEtat()">${listenom}</td><td class="Date">${afficheDate()}</td><td class="Passersontour"><button class="btnpassemontour" onclick="btn" type="button">Passer mon tour</td>`;
                document.querySelector("#tr1").appendChild(nouvelleliste1);
                console.log(listeApprenant);
             }
        }
        document.getElementById("apprenantInput").value = "";
        console.log("list", listeApprenant);
    }
}



//FONCTION DATE
function afficheDate() {
    var d = new Date();
    var jour = d.getDate();
    var mois = d.getMonth() + 1;
    var annee = d.getFullYear();
  
    if (jour < 10) jour = "0" + jour;
    if (mois < 10) mois = "0" + mois;
  
    var heures = d.getHours();
    var minutes = d.getMinutes();
    var secondes = d.getSeconds();
  
    if (heures < 10) heures = "0" + heures;
    if (minutes < 10) minutes = "0" + minutes;
    if (secondes < 10) secondes = "0" + secondes;
  
    var fullDate =
      jour +
      "/" +
      mois +
      "/" +
      annee +
      ", " +
      heures +
      ":" +
      minutes +
      ":" +
      secondes;
    return fullDate;
  }

//FONCTION BOUTON JE PASSE MON TOUR


    function btn(){
        let elt = document.querySelector('tr');
        nouvelleliste1.className.toggle('text-decoration');
        console.log(nouvelleliste1.className.toggle('text-decoration'));
        addApprenant();
    };

// FONCTION BOUTON SUIVANT

function traiterName(tr1){
	let x = listeApprenant.shift(); //parseInt(btnValue.value),0
    console.log(x);
	listeTraiter.push(x);
    console.log(listeTraiter);
    let nouvelleliste2 = document.createElement('tr')
    nouvelleliste2.innerHTML = `<td class="Nom" style="background-color:green">${x}</td><td class="Date" style="background-color:green">${afficheDate()}</td>`; //<td class="Passersontour" style="background-color:green"><button class="btn-passemontour" type="button">Passer mon tour</td>
    document.getElementById("tr2").appendChild(nouvelleliste2);
    console.log(listeApprenant);
    i--;
}
