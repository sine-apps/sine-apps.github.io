$(document).ready(function () {
    $(document).on('keyup',function(e) {
        console.log('this');
        if (e.keyCode == 71) {
            $('body').toggleClass('show-grid');
        } else if (e.keyCode == 66) {
            $('body').toggleClass('show-baseline');
        }
    });

    $('body.post h2').click(function(e) {
        console.log(e.target.id);
        window.location.hash = '#'+e.target.id;
        $('html, body').animate({scrollTop:$('#'+e.target.id).offset().top - 66},00);
    });
});
