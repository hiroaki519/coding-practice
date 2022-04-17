const swiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides: true,
  slidesPerView:1,
  breakpoints: {
    1024: {
      slidesPerView:2,
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// 最終的に動かすプログラム
// document.addEventListener('DOMContentLoaded', function(){
//   const cb = function(el, isIntersecting){
//     if(isIntersecting){
//       el.classList.add('inview');
//     }else{
//       el.classList.remove('inview');

//     }
//   }

//   const so = new ScrollObserver('.appear', cb);
// })

// const mobile= new MobileMenu();


document.addEventListener('DOMContentLoaded', function(){
  const main = new Main();
})

class Main{
  constructor(){
    this._observers = [];
    this._init();
  }

  set observers(val){
    this._observers.push(val);
  }

  get observers(){
    return this._observers;
  }

  _init(){
    new MobileMenu();
    this._paceDone();

    // これはローダーのjavascript
    // Pace.on('done', this._paceDone.bind(this));
  }
  _inviewAnimation(el, inview){
    if(inview){
      el.classList.add('inview');
    }else{
      el.classList.remove('inview');
    }
  }
  _paceDone(){
    this._scrollInit();
  }
  _scrollInit(){
    this.observers = new ScrollObserver('.appear', this._inviewAnimation);
  }
}


