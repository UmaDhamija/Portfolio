// function(){
//   (".blur-button a").hover(function(){
//       ("#hero-image").addClass("blur ()");
//   }, function(){
//     ("#hero-image").removeClass("blur()");
//   });
// });

// function dynamicwidth() {
//     var content = document.getElementById("bezier-line");
//     var x = content.scrollTop;
//     document.getElementById('random').style.width = x;
// }

new hoverEffect({
  parent: document.querySelector('.coolEffect'),
  intensity: 0.2,
  image1: 'headshotUse.png',
  image2: 'umadhamija.png',
  displacementImage: 'liquid.png'
});

var typed = new Typed('#typed', {
  stringsElement: '#type-stuff'
});

// $('document').ready(function(){
//
// });
//
// myAnimation.hoverEffect();
// typed.Typed();

//window scroll offset y (get scroll position). get position of each elemetn (.offset height property)
//
//
// const header = document.querySelector('.header');
// const text = document.querySelector('h1');
// function shadow(event){
//   console.log(event)
// }
