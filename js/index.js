$(document).ready(function(){
    //inicializa o float action  button
    $('.fixed-action-btn').floatingActionButton();

    //inicializa as abas
    $('.tabs').tabs();

    //inicializa o slider
    $('.slider').slider();

    // inicializa o sidenav
    $('.sidenav').sidenav();

    //inicializa lightbox (materialbox)
    $('.materialboxed').materialbox();

     //script para rolagem suave
     $('.nav-link').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;
        $('html, body').animate({ 
            scrollTop: targetOffset
        }, 500);
    });
});