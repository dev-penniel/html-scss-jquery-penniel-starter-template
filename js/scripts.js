$(document).ready(function(){

    // Open navbar
    $(".open").click(function() {
        $(this).hide();
        $('.mobile-screens').show();
        $('.close').show();
    });

    // Close navbar
    $('.close').click(function (){
        $(this).hide();
        $('.mobile-screens').hide();
        $('.open').show();
    });
});