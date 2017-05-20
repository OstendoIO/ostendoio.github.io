$(window).scroll(function() {
    if($(this).scrollTop() > 60)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});

document.getElementById("ostendoLogo").style.height = ($( window ).height() - 120) + 'px';
document.getElementById("logoBlock").style.height = ($( window ).height()) + 'px';