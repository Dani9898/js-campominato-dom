// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range: con difficoltà 1  tra 1 e 100, con difficoltà 2  tra 1 e 81, con difficoltà 3  tra 1 e 49. => 

// Funzione che genera div con classe square: function elementoGen (elemento, classe); 
// var userDiffChoose = prompt;
// indiceCelle = 100; if (userDiffChoose === 2) { indiceCelle = 81}; if (userDiffChoose === 3) { indiceCelle = 49}; 
// for (let i = 0; i < indiceCelle; i++ ) 
// const squareCont = document.querySelectorAll(".square"); 
// if (indiceCelle === 81) { squareCont.width = "calc(100% / 9"; } else if (indiceCelle === 49) { squareCont.width = "calc(100% / 7)"}




// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. I numeri nella lista delle bombe non possono essere duplicati. =>
// bombs = []; while (bombs.length < 16) {let doppione = false; let numero = Math.floor(Math.random() * 16 + 1);for (let i = 0; i < bombs.length; i++) {if (numero === bombs[i]) {doppione = true;}}if (doppione === false) {bombs.push(numero)
    

// In seguito l’utente clicca su ogni cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle. => funzione click gia fatta, if numero attuale = ad un confronto tra tutto l'array bombs con il numero è vero allora quella cella avrà la classe bomb e prompt game over, altrimenti active.




// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato un quadratino con un numero consentito. (quindi seci pensate dovrete tenere traccia del punteggio).



const gridCont = document.getElementById("grid");
indiceCelle = 100;
const bombs = [];

function elementoGen(elemento, classe, elemento2, classe2) {
    let nodo = document.createElement(elemento);
    nodo.classList.add(classe);
    let nodoSpan = document.createElement(elemento2);
    nodoSpan.classList.add(classe2);
    nodo.append(nodoSpan);
    gridCont.append(nodo);
    return nodo;
}

let userDiffChoose = prompt("Inserisci un numero di difficoltà da 1 a 3");
while ( (userDiffChoose != "1") && (userDiffChoose != "2") && (userDiffChoose != "3") ) {
    userDiffChoose = prompt("Inserisci un numero di difficoltà da 1 a 3");
}
console.log(userDiffChoose);


if (userDiffChoose === "2") {
    indiceCelle = 81;
} else if (userDiffChoose === "3") {
    indiceCelle = 49;
}
console.log(indiceCelle);

while (bombs.length < 16) {
    let doppione = false;
    let numero = Math.floor(Math.random() * indiceCelle + 1);
    for (let i = 0; i < bombs.length; i++) {
        if (numero === bombs[i]) {
            doppione = true;
        }
    }

    if (doppione === false) {
        bombs.push(numero);
    }   
}

console.log(bombs);

for (let i = 0; i < indiceCelle; i++) {

    let creaElemento = elementoGen("div", "square", "span", "non-visibile");
    creaElemento.setAttribute("id", i+1);
    
    creaElemento.addEventListener("click", function() {
        let numeroCella = parseInt(creaElemento.id);
        let celleAttive = document.getElementsByClassName("active");

        this.classList.add("active");

        if (bombs.includes(numeroCella)) {
            for (let i = 0; i < bombs.length; i++) {
                document.getElementById(bombs[i]).classList.add("bomb");  
            }  
            for (let i = 0 ; i < indiceCelle; i++) {
                testo[i].style.visibility = "visible";
            }    
            alert(`HAI TOTALIZZATO ${celleAttive.length - 1} PUNTI`);
        }
         
        if (celleAttive.length === (indiceCelle - bombs.length)) {
            alert("HAI VINTO");
        }
    }
    );

    let testo = document.getElementsByClassName("non-visibile");
    testo[i].innerHTML = `${i+1}`;  
}


let squareCont = document.querySelectorAll(".square");

for (let i = 0; i < indiceCelle; i++) {
    if (indiceCelle === 81) {
        squareCont[i].style.width = "calc(100% / 9)";
    } else if (indiceCelle === 49) {
        squareCont[i].style.width = "calc(100% / 7)";
    }
}


