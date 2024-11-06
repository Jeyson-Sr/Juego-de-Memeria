
const tiempo = document.getElementById('tiempo')
const moverse = document.getElementById('moverse')
const contenido_cartas = document.getElementById('contenido_cartas');



setInterval(() => {
  let valor = parseInt(tiempo.textContent);
  valor++;
  tiempo.textContent = valor;
}, 1000);


let frutas = {
  banana1:  'Frutas/bananaPar1.png',
  banana2:  'Frutas/bananaPar1.png',
  fresa1:   'Frutas/fresaPar1.png',
  fresa2:   'Frutas/fresaPar1.png',
  mango1:   'Frutas/mangoPar1.png',
  mango2:   'Frutas/mangoPar1.png',
  manzana1: 'Frutas/manzanaPar1.png',
  manzana2: 'Frutas/manzanaPar1.png',
  naranja1: 'Frutas/naranjaPar1.png',
  naranja2: 'Frutas/naranjaPar1.png',
  pera1:    'Frutas/peraPar1.png',
  pera2:    'Frutas/peraPar1.png',
  sandia1:  'Frutas/sandiaPar1.png',
  sandia2:  'Frutas/sandiaPar1.png',
  uva1:     'Frutas/uvaPar1.png',
  uva2:     'Frutas/uvaPar1.png',
};

let keys = Object.keys(frutas);
keys = keys.sort(() => Math.random() - 0.5); 

let primeraCarta = null; 
let cartasGiradas = 0;

keys.forEach((fruta) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const back = document.createElement('div');
  back.classList.add('back', 'face');

  const front = document.createElement('div');
  front.classList.add('front', 'face');

  const img = document.createElement('img');
  img.src = frutas[fruta];
  img.alt = fruta;

  front.appendChild(img);

  card.appendChild(back);
  card.appendChild(front);

  contenido_cartas.appendChild(card);

  card.addEventListener('click', () => {
    let valor = parseInt(moverse.textContent);
    valor++;
    moverse.textContent = valor;
  
    if (cartasGiradas < 2 && front.style.transform !== 'perspective(600px) rotateY(0deg)') {
      front.style.transform = 'perspective(600px) rotateY(0deg)';
      back.style.transform = 'perspective(600px) rotateY(180deg)';
      cartasGiradas++;
  
      if (cartasGiradas === 1) {
        primeraCarta = { card, fruta: frutas[fruta], front, back };
      } else if (cartasGiradas === 2) {
      segundaCarta = { card, fruta: frutas[fruta], front, back };

      if (primeraCarta.fruta === segundaCarta.fruta) {
        //No pude ponerle una animacion al verficar si las cartas son iguales  
          cartasGiradas = 0;
          primeraCarta = null;
        } else {
          setTimeout(() => {
            front.style.transform = 'perspective(600px) rotateY(180deg)';
            back.style.transform = 'perspective(600px) rotateY(0deg)';
            primeraCarta.front.style.transform = 'perspective(600px) rotateY(180deg)';
            primeraCarta.back.style.transform = 'perspective(600px) rotateY(0deg)';
            cartasGiradas = 0;
            primeraCarta = null;
          }, 800);
        }
      }
    }
  });
  
});



