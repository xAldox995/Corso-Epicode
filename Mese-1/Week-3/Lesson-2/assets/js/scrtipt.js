/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */
console.log("-----Esercizio1-----");
const changeTitle = document.querySelector("h1");
function cambiaTitle() {
  let newTitle = "Nuovo Titolo";
  changeTitle.innerText = newTitle;
}
cambiaTitle();
console.log(changeTitle);

/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
console.log("-----Esercizio2-----");
function addClass(className) {
  let h1Element = document.querySelector("h1");
    h1Element.classList.add(className);
  }
const addClassToTitle = "myHeading";
addClass(addClassToTitle);
/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */
console.log("-----Esercizio3-----");
const changePcontent = document.querySelector("div p");
function changeTextP() {
  let newP = "Questo qui è il nuovo paragrafo";
  changePcontent.innerText = newP;
}
changeTextP();
console.log(changePcontent);
/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
console.log("-----Esercizio4-----");
const changeUrls = document.querySelector('a')
function changeLink (newHref) {
changeUrls.href = newHref;
};
changeLink('https://www.google.com');

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */
console.log("-----Esercizio5-----");
const addToTheSecond = 
function addLiElemet () {
    let ulElement = document.getElementsById('secondList');
    let liElement = document.createElement('li');
    liElement.innerText = '4th';
    ulElement.appendChild(liElement);
    };



/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
console.log("-----Esercizio6-----");
const addParagraph = function () {};

/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */
console.log("-----Esercizio7-----");
const hideFirstUl = function () {};

/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
console.log("-----Esercizio8-----");
const paintItGreen = function () {};

/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
console.log("-----Esercizio9-----");
const makeItClickable = function () {};

/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
console.log("-----Esercizio10-----");
const revealFooterLink = function () {};

/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */
console.log("-----Esercizio11-----");
const generateTable = function () {};

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */
console.log("-----Esercizio12-----");
const addRow = function () {};

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */
console.log("-----Esercizio14-----");
const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
console.log("-----Esercizio15-----");
const changeColorWithRandom = function () {};
