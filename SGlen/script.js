const nav = document.querySelector('#main');
const topOfNav = nav.offsetHeight;


const navBtn = document.querySelector('.fa-bars');
const sideNav = document.querySelector('.side-nav');
 

function showNav(){
    if(sideNav.classList.contains('side-nav-show')){
        sideNav.classList.remove('side-nav-show');     
        sideNav.style.top = "0px";        
    }
    else{
    sideNav.classList.add('side-nav-show');        
    sideNav.style.top = window.scrollY + "px";
    }

 
}



navBtn.addEventListener('click', showNav);

function stickyNav(){
    
    if(window.scrollY >= topOfNav){

        document.body.classList.add('fixed-nav');
        if(sideNav.classList.contains('side-nav-show')){
            sideNav.classList.remove('side-nav-show');
        }
        else{
            
        }
    }
    else{
        if(document.body.classList.contains('keep-fix')){
            
        }
        else{
        document.body.classList.remove('fixed-nav');        
        }
    }
    
}

addEventListener('scroll', stickyNav);



 
// Wrap every letter in a span
 

 

$(document).ready(function() {
$('.title').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));

});    

var allSpans = document.querySelectorAll('.letter');
    

    
    allSpans.forEach(span =>{
    console.log(span);        
        var doWork = anime({
                targets: '.letter',  
            
 
			    perspective: 1000,
			    origin: '50% 100%', 
				duration: 400,
				delay: function(el, index) { return 500+index*30; },
				easing: 'easeOutExpo',
				opacity: 1,
				rotateX: [90,0], 
   
 
  
			          
   
        });
        
        
    });
   
 
});
/*
$('.grid').masonry({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  // use element for option
  columnWidth: '.grid-sizer',
  percentPosition: true,
    gutter: '.gutter-sizer'
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});

*/ 
var $grid = $('.grid').imagesLoaded( function() {
  // init Masonry after all images have loaded
  $grid.masonry({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  // use element for option
  columnWidth: '.grid-sizer',
  percentPosition: true,
    gutter: '.gutter-sizer'
  });
}); 