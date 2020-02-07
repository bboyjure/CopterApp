const navSlide = () => {
    var burger = $(".burger")
    var nav = $(".nav-links")
    var exit = $(".exit")
    var rotate = $(".rotate-links")
    var body = $("html");
    

    burger.click(()=> {
        nav.toggleClass("nav-active");
        rotate.toggleClass("active");
        body.css('overflowY','hidden');
    });
    exit.click(() =>{
        nav.toggleClass("nav-active");
        rotate.toggleClass("active");
        body.css('overflowY','scroll');
    });

    
}

const app = () => {
    navSlide();
    
}
app();




$(".card").on("click", ".r-btn", function(event){
    $(this).parent().fadeOut(500, () => {
        $(this).remove();
    });
    $(this).parent().parent().addClass("card-fade");

    event.stopPropagation();
});



$(".card").on("click", ".x-btn", function(event){
    $(this).parent().parent().fadeOut(500, () => {
        $(this).remove();
    });
    event.stopPropagation();
});

