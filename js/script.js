$(document).ready(function(){
     // hiding the paragraphs
     $('#p1').hide();
     $('#p2').hide();
     $('#p3').hide();
 
 
     // toggling between the paragraphs and icons
     $('#img1').click(function(){
         $('#p1').toggle('slow')
         $('#img1').slideUp();
     });
 
     $('#p1').click(function() {
         $('#p1').hide()
         $('img1').show()
     });
 
     $('#img2').click(function(){
         $('#p2').toggle('slow')
         $('#img2').slideUp();
     });
 
 
     $('#img3').click(function(){
         $('#p3').toggle('slow')
         $('#img3').slideUp();
     });

    //  hovering effect on the portfolio images
    $('.port1').hover(function() {
        $('.potext',this).slideToggle(3000);
    });

});