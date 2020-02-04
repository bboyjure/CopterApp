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
    event.stopPropagation();
});



$(".x-btn").click( function(){
    var slike = $(".slike-copter");
    for(var i = 0; i < slike.length; i++){
        $(this).remove()
    }
})

