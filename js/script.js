$(document).ready(function(){

    //  styling the head to bold
    $('h1').css('font-weight','bold');

    // styling figcaption to bold
    $('#devtext').css('font-weight','bold');
    $('#protext').css('font-weight','bold');
    $('#destxt').css('font-weight','bold');
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

    // form validation
    $('form#contact').submit(function(event) {
        const name = $('input#name').val();
        const email = $('input#email').val();
        const message = $('textarea#message').val();

        // popping a message to alert the user for filling the form
        if($("input#name").val() && $("input#email").val()) {
            alert(' Hi ' + name + ' We have received your message. Thank you for reaching out to us');
        }
        else {
            alert('Please fill in the form');
        }
        event.preventDefault();
    })

});