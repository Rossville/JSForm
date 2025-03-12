var next_btn = document.getElementsByClassName('next-btn')[0];
var circle_outlined_btn = document.getElementsByClassName('circle-outlined');
var circle_solid = document.getElementsByClassName('circle-solid');
next_btn.addEventListener('click', function () {
    console.log("next btn clicked");
});
var _loop_1 = function (i) {
    circle_outlined_btn[i].addEventListener('click', function () {
        // we have to enable/disable the circle-solid
        circle_solid[i].classList.toggle('unactive');
    });
};
for (var i = 0; i < circle_outlined_btn.length; i++) {
    _loop_1(i);
}
