const next_btn = document.getElementsByClassName('next-btn')[0] as HTMLElement;
const circle_outlined = document.getElementsByClassName('circle-outlined') as HTMLCollectionOf<HTMLElement>;
const circle_solid = document.getElementsByClassName('circle-solid') as HTMLCollectionOf<HTMLElement>;
const data_container = document.getElementsByClassName('data-container') as HTMLCollectionOf<HTMLElement>;
const back_btn = document.getElementsByClassName('back-btn')[0]  as HTMLElement;
const submit_btn = document.getElementsByClassName('submit-btn')[0]  as HTMLElement;
const submit_btn_container = document.getElementsByClassName('submit-btn-container')[0]  as HTMLElement;
const next_btn_container = document.getElementsByClassName('next-btn-container')[0]  as HTMLElement;
const back_btn_container = document.getElementsByClassName('back-btn-container')[0]  as HTMLElement;
const highlight_txt = document.getElementsByClassName('highlight-txt') as HTMLCollectionOf<HTMLElement>;
const labelline = document.getElementsByClassName('labelline') as HTMLCollectionOf<HTMLElement>;
const NameInput = document.querySelector(".field-name input[type=\"text\"]") as HTMLInputElement;
const ReviewHeader = document.getElementsByClassName('reviewheader')[0] as HTMLElement;
const DateInput = document.querySelector('.field-DOB input[type="date"]') as HTMLInputElement;
const GenderInput = document.querySelector('.field-gender select') as HTMLSelectElement;

let current_page: number = 0; //default

// remove placholder from the input date

function buttonChanges(curr_page: number){
    // check current_page and hide/disply submit and next btn
    if(curr_page === 2){
        next_btn_container.classList.add('unactive');
        submit_btn_container.classList.remove('unactive');
        circle_solid[2].classList.remove('unactive');
        highlight_txt[2].style.color = 'tomato';
        circle_outlined[2].style.borderColor = 'tomato';
        ReviewHeader.classList.remove('unactive');
    }
    else{
        // when curr_page = 0 or 1
        next_btn_container.classList.remove('unactive');
        submit_btn_container.classList.add('unactive');
        circle_solid[2].classList.add('unactive');
        highlight_txt[2].style.color = 'black';
        circle_outlined[2].style.borderColor = 'black';
        ReviewHeader.classList.add('unactive');
    }

    if(curr_page === 0){
        back_btn_container.classList.add('unactive');
        circle_solid[0].classList.remove('unactive');
        highlight_txt[0].style.color = 'tomato';
        circle_outlined[0].style.borderColor = 'tomato';
    }
    else{
        back_btn_container.classList.remove('unactive');
        circle_solid[0].classList.add('unactive');
        highlight_txt[0].style.color = 'black';
        circle_outlined[0].style.borderColor = 'black';
    }

    if(curr_page === 1){
        circle_solid[1].classList.remove('unactive');
        highlight_txt[1].style.color = 'tomato';
        circle_outlined[1].style.borderColor = 'tomato';
    }
    else{
        circle_solid[1].classList.add('unactive');
        highlight_txt[1].style.color = 'black';
        circle_outlined[1].style.borderColor = 'black';
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
    saveData();
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

// remove background text which is getting overlaped from input field.

const updateLinelabel = (inputs: HTMLInputElement) => {
    const label = inputs.nextElementSibling as HTMLElement;
    if(!label || !label.classList.contains('labelline'))
        return;
    
    if(inputs.value.trim() !== ""){
        label.style.transform = 'translate(-5px, -20px) scale(0.8)';
        label.style.backgroundColor = 'white';
        label.style.padding = '3px';
        label.style.zIndex = "100";
    }
    else{
        label.style.transform = "";
        label.style.backgroundColor = "";
        label.style.padding = "";
        label.style.zIndex = "";
    }

}

NameInput.addEventListener('focus',() => updateLinelabel(NameInput));
NameInput.addEventListener('input',() => updateLinelabel(NameInput));
NameInput.addEventListener('blur',() => updateLinelabel(NameInput));

function saveData(){
    //using local Storage to save the progress.
    localStorage.setItem(
        "userData",
        JSON.stringify({
            Name: NameInput.value,
            Date: DateInput.value,
            Gender: GenderInput.value
        })
    )
}

submit_btn.addEventListener('click',function(){
    //retrieve data from localStorage.
    const storedData = JSON.parse(localStorage.getItem("userData") || "{}");
    console.log(storedData.Name);
})

document.addEventListener('DOMContentLoaded',function(){
    //check if there are any data store in localStorage.
    const storedData = JSON.parse(localStorage.getItem("userData") || "{}");
    if(storedData.Name !== "" || storedData.Date !== "" || storedData.Gender !== ""){
        NameInput.value = storedData.Name;
        DateInput.value = storedData.Date;
        GenderInput.value = storedData.Gender;
    }
    // check if the Inputfields are empty or filled.
    if(NameInput.value === ""){
       const label = NameInput.nextElementSibling as HTMLElement;
       label.classList.remove('unactive');
    }
    else{
        const label = NameInput.nextElementSibling as HTMLElement;
        label.classList.add('unactive');
    }
    if(DateInput.value === ""){
       const label = DateInput.nextElementSibling as HTMLElement;
       label.classList.remove('unactive');
    }
    else{
        const label = DateInput.nextElementSibling as HTMLElement;
        label.classList.add('unactive');
    }
    if(GenderInput.value === ""){
       const label = GenderInput.nextElementSibling as HTMLElement;
       label.classList.remove('unactive');
    }
    else{
        const label = GenderInput.nextElementSibling as HTMLElement;
        label.classList.add('unactive');
    }
})