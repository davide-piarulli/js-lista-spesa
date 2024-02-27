/**
 * 1 creare array con lista spesa fittizia
 * 2 settare counter a 0
 * 3 creare while
 * 4 stampare in pagina
 */

// 1
const listaSpesa = [
  'frutta',
  'verdura',
  'carne',
  'pasta',
  'formaggio'
];

let i = 0;

while (i < listaSpesa.length) {
  console.log(listaSpesa[i]);
  document.querySelector('.output').innerHTML += `
  <div>- ${listaSpesa[i]}</div>`;
  i++;
}
