$(document).ready(function(){
//    //Ocultar el Ul
    $("ul li div").hide();
    $(".content:first").show();
    
    
    
    
    
    //Apuntar en el DOM click p
    $("a").on("click",function(e){
        e.preventDefault();
        $("ul li .content").slideUp("content");
        $(this).siblings().slideDown("content");
        $("ul li a").removeClass("active");
        $(this).addClass("active");
});
});