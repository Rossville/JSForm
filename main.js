var next_btn = document.getElementsByClassName('next-btn')[0];
var circle_outlined_btn = document.getElementsByClassName('circle-outlined');
var circle_solid = document.getElementsByClassName('circle-solid');
var data_container = document.getElementsByClassName('data-container');
var back_btn = document.getElementsByClassName('back-btn')[0];
var formPages;
(function (formPages) {
    formPages[formPages["personal_info"] = 0] = "personal_info";
    formPages[formPages["contact_info"] = 1] = "contact_info";
    formPages[formPages["review_info"] = 2] = "review_info";
})(formPages || (formPages = {}));
var current_page = 0; //default
next_btn.addEventListener('click', function () {
    // moving to the next page upon next button click.
    if (current_page < 2) {
        data_container[current_page].classList.add('unactive');
        data_container[current_page + 1].classList.remove('unactive');
        current_page++;
    }
});
back_btn.addEventListener('click', function () {
    // moving to the previous page upon back button click.
    if (current_page > 0) {
        data_container[current_page].classList.add('unactive');
        data_container[current_page - 1].classList.remove('unactive');
        current_page--;
    }
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
