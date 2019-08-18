'use strict'
//
// Animación para la entrada del nombre
//
var Animator = {
  animate: function(options){

    options.stagger = options.stagger || 200;
    options.staggerPerLetter = options.staggerPerLetter || 50;
    let el = document.querySelector(options.selector);
    let text = el.innerText;
    el.innerText = "";
    for(let letter_index in text){
      let letter = text[letter_index];
      let span = document.createElement('span');
      span.innerText = ' ';
      el.appendChild(span);
      setTimeout(()=>{
        this.animateLetter({
          element: span,
          letter: letter,
          stagger: options.staggerPerLetter
        })
      },options.stagger*letter_index)
    }
  },
  animateLetter: function(options,contador = 0){
    if(contador > 10 ) return options.element.innerText = options.letter;
    contador++;
    setTimeout(()=>{
      options.element.innerText = this.generateRandomChar();
      this.animateLetter(options,contador);
    },options.stagger)
  },
  generateRandomChar: function(){
    return Math.floor(Math.random() * 2);
  }
}
//
//Funcion para el manejo del filtrado de herramientas
//
function filtro(){
  mixitup(".container",{
    
    "animation": {
        "duration": 250,
        "nudge": true,
        "reverseOut": true,
        "effects": "fade rotateY(90deg) stagger(30ms)"
      },   
  });
}
//Proyect cards
function carga(name)
{
console.log(name);
var card = document.getElementById(name);
var playing = false;
card.addEventListener('click',function() {
  if(playing)
    return;  
  playing = true;
  anime({
    targets: card,
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    rotateY: {value: '+=180', delay: 200},
    easing: 'easeInOutSine',
    duration: 400,
    complete: function(anim){
       playing = false;
    }
  });
});
};

function cargaTodos()
{
  carga("card2");
  carga("card3");
}
//
// Scroll
//
$(document).ready(function() {
  $('a[href^="#"]').click(function() {
    var destino = $(this.hash);
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }
    $('html, body').animate({ scrollTop: destino.offset().top }, 500);
    return false;
  });
});




