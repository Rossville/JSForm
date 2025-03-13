const next_btn = document.getElementsByClassName('next-btn')[0];
const circle_outlined_btn = document.getElementsByClassName('circle-outlined');
const circle_solid = document.getElementsByClassName('circle-solid');
const data_container = document.getElementsByClassName('data-container');
const back_btn = document.getElementsByClassName('back-btn')[0];
const submit_btn = document.getElementsByClassName('submit-btn')[0];
const submit_btn_container = document.getElementsByClassName('submit-btn-container')[0];
const next_btn_container = document.getElementsByClassName('next-btn-container')[0];
const back_btn_container = document.getElementsByClassName('back-btn-container')[0];
const highlight_txt = document.getElementsByClassName('highlight-txt') as HTMLCollectionOf<HTMLElement>;

let current_page: number = 0; //default

function buttonChanges(curr_page: number){
    // check current_page and hide/disply submit and next btn
    if(curr_page === 2){
        next_btn_container.classList.add('unactive');
        submit_btn_container.classList.remove('unactive');
        circle_solid[2].classList.remove('unactive');
        highlight_txt[2].style.color = 'tomato';
    }
    else{
        // when curr_page = 0 or 1
        next_btn_container.classList.remove('unactive');
        submit_btn_container.classList.add('unactive');
        circle_solid[2].classList.add('unactive');
        highlight_txt[2].style.color = 'black';
    }

    if(curr_page === 0){
        back_btn_container.classList.add('unactive');
        circle_solid[0].classList.remove('unactive');
    }
    else{
        back_btn_container.classList.remove('unactive');
        circle_solid[0].classList.add('unactive');
        highlight_txt[0].style.color = 'black';
    }

    if(curr_page === 1){
        circle_solid[1].classList.remove('unactive');
        highlight_txt[1].style.color = 'tomato';
    }
    else{
        circle_solid[1].classList.add('unactive');
        highlight_txt[1].style.color = 'black';
    }
}

next_btn.addEventListener('click',function(){
    // moving to the next page upon next button click.
    if(current_page < 2){
        data_container[current_page].classList.add('unactive');
        data_container[current_page+1].classList.remove('unactive');
        current_page++;
    }
    buttonChanges(current_page);
})

back_btn.addEventListener('click',function(){
    // moving to the previous page upon back button click.
    if(current_page>0){
        data_container[current_page].classList.add('unactive');
        data_container[current_page-1].classList.remove('unactive');
        current_page--;
    }
    buttonChanges(current_page);
})
