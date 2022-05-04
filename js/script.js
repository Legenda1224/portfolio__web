function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
      menu.toggleClass('burger-menu_active');
      
      if (menu.hasClass('burger-menu_active')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
  }
  
burgerMenu('.burger-menu');



function onEntry(entry){
    entry.forEach(change => {
        if(change.isIntersecting){
            change.target.classList.add('element-show');
        }
    });
}

let options = {
    treshold: [0.3]
};


let obser = new IntersectionObserver(onEntry, options);

let elements = document.querySelectorAll('.scroll');

for(let elm of elements){
    obser.observe(elm);
}

let obser1 = new IntersectionObserver(onEntry, options);

let elements1 = document.querySelectorAll('.scroll1');

for(let elm1 of elements1){
    obser1.observe(elm1);
}


