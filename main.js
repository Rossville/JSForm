var next_btn = document.getElementsByClassName('next-btn')[0];
var circle_outlined = document.getElementsByClassName('circle-outlined');
var circle_solid = document.getElementsByClassName('circle-solid');
var data_container = document.getElementsByClassName('data-container');
var back_btn = document.getElementsByClassName('back-btn')[0];
var submit_btn = document.getElementsByClassName('submit-btn')[0];
var submit_btn_container = document.getElementsByClassName('submit-btn-container')[0];
var next_btn_container = document.getElementsByClassName('next-btn-container')[0];
var back_btn_container = document.getElementsByClassName('back-btn-container')[0];
var highlight_txt = document.getElementsByClassName('highlight-txt');
var labelline = document.getElementsByClassName('labelline');
var NameInput = document.querySelector(".field-name input[type=\"text\"]");
var ReviewHeader = document.getElementsByClassName('reviewheader')[0];
var DateInput = document.querySelector('.field-DOB input[type="date"]');
var GenderInput = document.querySelector('.field-gender select');
var current_page = 0; //default
// remove placholder from the input date
function buttonChanges(curr_page) {
    // check current_page and hide/disply submit and next btn
    if (curr_page === 2) {
        next_btn_container.classList.add('unactive');
        submit_btn_container.classList.remove('unactive');
        circle_solid[2].classList.remove('unactive');
        highlight_txt[2].style.color = 'tomato';
        circle_outlined[2].style.borderColor = 'tomato';
        ReviewHeader.classList.remove('unactive');
    }
    else {
        // when curr_page = 0 or 1
        next_btn_container.classList.remove('unactive');
        submit_btn_container.classList.add('unactive');
        circle_solid[2].classList.add('unactive');
        highlight_txt[2].style.color = 'black';
        circle_outlined[2].style.borderColor = 'black';
        ReviewHeader.classList.add('unactive');
    }
    if (curr_page === 0) {
        back_btn_container.classList.add('unactive');
        circle_solid[0].classList.remove('unactive');
        highlight_txt[0].style.color = 'tomato';
        circle_outlined[0].style.borderColor = 'tomato';
    }
    else {
        back_btn_container.classList.remove('unactive');
        circle_solid[0].classList.add('unactive');
        highlight_txt[0].style.color = 'black';
        circle_outlined[0].style.borderColor = 'black';
    }
    if (curr_page === 1) {
        circle_solid[1].classList.remove('unactive');
        highlight_txt[1].style.color = 'tomato';
        circle_outlined[1].style.borderColor = 'tomato';
    }
    else {
        circle_solid[1].classList.add('unactive');
        highlight_txt[1].style.color = 'black';
        circle_outlined[1].style.borderColor = 'black';
    }
}
next_btn.addEventListener('click', function () {
    // moving to the next page upon next button click.
    if (current_page < 2) {
        data_container[current_page].classList.add('unactive');
        data_container[current_page + 1].classList.remove('unactive');
        current_page++;
    }
    buttonChanges(current_page);
    saveData();
});
back_btn.addEventListener('click', function () {
    // moving to the previous page upon back button click.
    if (current_page > 0) {
        data_container[current_page].classList.add('unactive');
        data_container[current_page - 1].classList.remove('unactive');
        current_page--;
    }
    buttonChanges(current_page);
});
// remove background text which is getting overlaped from input field.
var updateLinelabel = function (inputs) {
    var label = inputs.nextElementSibling;
    if (!label || !label.classList.contains('labelline'))
        return;
    if (inputs.value.trim() !== "") {
        label.style.transform = 'translate(-5px, -20px) scale(0.8)';
        label.style.backgroundColor = 'white';
        label.style.padding = '3px';
        label.style.zIndex = "100";
    }
    else {
        label.style.transform = "";
        label.style.backgroundColor = "";
        label.style.padding = "";
        label.style.zIndex = "";
    }
};
NameInput.addEventListener('focus', function () { return updateLinelabel(NameInput); });
NameInput.addEventListener('input', function () { return updateLinelabel(NameInput); });
NameInput.addEventListener('blur', function () { return updateLinelabel(NameInput); });
function saveData() {
    //using local Storage to save the progress.
    localStorage.setItem("userData", JSON.stringify({
        Name: NameInput.value,
        Date: DateInput.value,
        Gender: GenderInput.value
    }));
}
submit_btn.addEventListener('click', function () {
    //retrieve data from localStorage.
    var storedData = JSON.parse(localStorage.getItem("userData") || "{}");
    console.log(storedData.Name);
});
document.addEventListener('DOMContentLoaded', function () {
    //check if there are any data store in localStorage.
    var storedData = JSON.parse(localStorage.getItem("userData") || "{}");
    if (storedData.Name !== "" || storedData.Date !== "" || storedData.Gender !== "") {
        NameInput.value = storedData.Name;
        DateInput.value = storedData.Date;
        GenderInput.value = storedData.Gender;
    }
    // check if the Inputfields are empty or filled.
    if (NameInput.value === "") {
        var label = NameInput.nextElementSibling;
        label.classList.remove('unactive');
    }
    else {
        var label = NameInput.nextElementSibling;
        label.classList.add('unactive');
    }
    if (DateInput.value === "") {
        var label = DateInput.nextElementSibling;
        label.classList.remove('unactive');
    }
    else {
        var label = DateInput.nextElementSibling;
        label.classList.add('unactive');
    }
    if (GenderInput.value === "") {
        var label = GenderInput.nextElementSibling;
        label.classList.remove('unactive');
    }
    else {
        var label = GenderInput.nextElementSibling;
        label.classList.add('unactive');
    }
});
