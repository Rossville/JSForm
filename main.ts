const next_btn = document.getElementsByClassName('next-btn')[0];
const circle_outlined_btn = document.getElementsByClassName('circle-outlined');
const circle_solid = document.getElementsByClassName('circle-solid');
const data_container = document.getElementsByClassName('data-container');
const back_btn = document.getElementsByClassName('back-btn')[0];

enum formPages{
    personal_info = 0,
    contact_info = 1,
    review_info = 2
}

let current_page = 0; //default

next_btn.addEventListener('click',function(){
    // moving to the next page upon next button click.
    if(current_page < 2){
        data_container[current_page].classList.add('unactive');
        data_container[current_page+1].classList.remove('unactive');
        current_page++;
    }
})

back_btn.addEventListener('click',function(){
    // moving to the previous page upon back button click.
    if(current_page>0){
        data_container[current_page].classList.add('unactive');
        data_container[current_page-1].classList.remove('unactive');
        current_page--;
    }
})

for(let i=0; i<circle_outlined_btn.length; i++){
    circle_outlined_btn[i].addEventListener('click',function(){
        // we have to enable/disable the circle-solid
        circle_solid[i].classList.toggle('unactive');
    })
}
