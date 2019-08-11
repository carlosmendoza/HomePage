// Animación para la entrada del nombre
var Animator = {
  animate: function(options){

    options.stagger = options.stagger || 200;
    options.staggerPerLetter = options.staggerPerLetter || 50;

    let el = document.querySelector(options.selector);

    let text = el.innerText;
    el.innerText = "";

    for(letter_index in text){

      let letter = text[letter_index];
      console.log(letter);
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
    if(contador > 20) return options.element.innerText = options.letter;

    contador++;

    setTimeout(()=>{
      options.element.innerText = this.generateRandomChar();
      this.animateLetter(options,contador);
    },options.stagger)
  },
  generateRandomChar: function(){
    return Math.random().toString(36).substr(2,1);
  }
}
//
//Funcion para el manejo del filtrado de lenguajes
//
function filtro(){
  mixitup(".container",{
    "animation": {
        "duration": 250,
        "nudge": true,
        "reverseOut": true,
        "effects": "fade rotateY(90deg) stagger(30ms)"
    }
  });
}

