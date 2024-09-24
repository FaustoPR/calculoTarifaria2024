$(document).ready(function(){
    // Expandir menu
    $('.menu_btn').click(function(){
        $('.sidebar').addClass('active');
        $('.menu_btn').css("visibility", "hidden");
    });
    // Esconder menu
    $('.close_btn').click(function(){
        $('.sidebar').removeClass('active');
        $('.menu_btn').css("visibility", "visible");
    });
})