

const firstname = prompt('Inserisci il tuo nome');
console.log(firstname);

const lastname = prompt('Inserisci il tuo cognome');
console.log(lastname);


const color = prompt("Inserisci il tuo colore preferito");
console.log(color);

let age = prompt("Inserisci la tua età");
console.log(age);


let pw = firstname + lastname + color + age;
console.log(pw);





document.getElementById('showresult').innerHTML = `la tua password insicurissima è: ${pw}`