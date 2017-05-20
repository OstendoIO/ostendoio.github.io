$(window).scroll(function() {
    if($(this).scrollTop() > 60)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});

document.getElementById("ostendoLogo").style.height = ($( window ).height() - 180) + 'px';
console.log(document.getElementById("arrow").style.marginTop = document.getElementById("ostendoLogo").style.height.slice(0, -3) );
document.getElementById("logoBlock").style.height = ($( window ).height()) + 'px';
document.getElementById("contact").style.height = ($( window ).height()) + 'px';