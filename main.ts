const next_btn = document.getElementsByClassName('next-btn')[0];
const circle_outlined_btn = document.getElementsByClassName('circle-outlined');
const circle_solid = document.getElementsByClassName('circle-solid');

next_btn.addEventListener('click',function(){
    console.log("next btn clicked");
})

for(let i=0; i<circle_outlined_btn.length; i++){
    circle_outlined_btn[i].addEventListener('click',function(){
        // we have to enable/disable the circle-solid
        circle_solid[i].classList.toggle('unactive');
    })
}