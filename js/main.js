/* start slider */

var winH = $(window).height(),
    barH = $('.upper-bar').innerHeight()
    navH = $('.navbar').innerHeight();

$('.slider, .slider .carousel-item').height(winH - (barH + navH));

/* end slider */

async function followerMan() {
    let btns = document.querySelectorAll('.sqdOP.L3NKy.y3zKF');
    btns.forEach(btn => btn.click());
    await delay(3000);
    document.querySelector('.i0EQd div').scrollTop = btns[btns.length-1] + 100
};
followerMan();