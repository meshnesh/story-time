$(document).ready(function () {
    var skillz = [
        '...', 'incredible', 'history', ' an epitome', 'entertaining', 'culture', 'HOME'
    ];

    var skillCount = 0;

    function changeSkillz() {
        renderSkillz(skillCount);
        if (skillCount < skillz.length - 1) {
            skillCount++;
        } else {
            skillCount = 0;
        }
        setTimeout(function () {
            changeSkillz();
        }, 2500);
    }

    function renderSkillz(n) {
        document.getElementById("skill").setAttribute("data-content", skillz[n]);
    }
    changeSkillz();

});


// ********************************************************
// NAV BAR
//
$(function () {

    // Returns width of browser viewport
    var browser = $(window).width();
    // Returns width of HTML document
    var document = $(document).width();

    $('.nav .toggle-nav').click(function (e) {
        $('.nav .nav-mobile').addClass('style-mobile').slideToggle('slow');
        e.preventDefault();
    });

});