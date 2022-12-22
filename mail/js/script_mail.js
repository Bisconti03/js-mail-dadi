// creiamo una list con tutte le mail.
let mailList = ["giannirivera@gmail.com","francescototti@gmail.com","paolomaldini@gmail.com","angeloperuzzi@gmail.com"];

// chiediamo all'utente di inserire la sua mail per verificare in seguito se sia presente nella lista.
const mailRequest = prompt('inserisci la tua email di Gmail');
//  impostiamo una variabile di partenza (come caso base= false).
let found = false;
// controlliamo se l'email fornita dall'utente è presente nella lista e se così fosse cambiamo il valore di found a true.
for (let i = 0; i < mailList.length; i++) {

  let element = mailList[i];

  if(element == mailRequest){
    found = true;
  }
}
// in fine se il valore di found=true allora la mail è presente nella lista e spunterà un alert che conferma la validità.
// se il valore di found torna ad essere false allora comparirà un alert che confermerà l' invalidità della mail.
if (found == true){
  alert('Utente valido');
}else{
  alert('Utente non valido, riprova!');
}