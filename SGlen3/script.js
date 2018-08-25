 

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