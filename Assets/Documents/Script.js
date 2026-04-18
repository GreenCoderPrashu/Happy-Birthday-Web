// Welcome Page...
const typing = document.getElementById('typing');
const typeBtn= document.getElementById('Btn');
const Song= document.getElementById('Song');
const passage = "Wish You Many More Happy Returns Of The Day Tom... Stay Happy With All Your Favoriote Things! May This Year Bring You Joy,Succes,And Advanture... And I Always Wish You To Be Happy...";
let type=""
let write = false;
let i=0;
typeBtn.addEventListener('click',() => {
    if(! write){
        write = true;
        typewriter();
        Song.play();
    }
});
function typewriter(){
    if(i<passage.length){
        typing.innerHTML += passage.charAt(i);
        i++;
        setTimeout(typewriter,80);
    }else{
    write = false;
    i=0;
    type=""
}
}
//  Welcome Page Functions...
function Show() {
    document.getElementById('Welcome').style.display = 'none';
    document.getElementById('Wish-Container').style.display = 'block';
}
const TqBtn = document.getElementById('Tq-Btn');
Btn.addEventListener('click',() =>{
    setTimeout(() =>{
        TqBtn.style.display = 'block';
    },16000);
});
//
function ShowPage1(){
    document.getElementById('Wish-Container').style.display = 'none';
    document.getElementById('Page1').style.display = 'block';
}
function ShowPage2(){
    document.getElementById('Page1').style.display = 'none';
    document.getElementById('Page2').style.display = 'block';
}
//
const LitBtn = document.getElementById('Light-Btn');
TqBtn.addEventListener('click',() =>{
    setTimeout(() =>{
        LitBtn.style.display = 'block';
    },5000);
});
//
const LitsBtn = document.getElementById('Let-Btn');
LitBtn.addEventListener('click',() =>{
    setTimeout(() =>{
        LitsBtn.style.display = 'block';
    },5000);
});
//
const WtBtn = document.getElementById('Wt-Btn');
LitsBtn.addEventListener('click',() =>{
    setTimeout(() =>{
        WtBtn.style.display = 'block';
    },12000);
});
function ShowPage3(){
    document.getElementById('Page2').style.display = 'none';
    document.getElementById('Page3').style.display = 'block';
}
function ShowPage4(){
    document.getElementById('Page3').style.display = 'none';
    document.getElementById('Page4').style.display = 'inline-block ';
}
function ShowPage(){
    document.getElementById('Memories').style.display = 'none';
    document.getElementById('End').style.display = 'block ';
}
const upbtn = document.getElementById('Up-Btn');
const Next = document.getElementById('Next');
LitsBtn.addEventListener('click',() =>{
    setTimeout(() =>{
        upbtn.style.display = 'block';
    },12000);
});
WtBtn.addEventListener('click',() =>{
    setTimeout(() =>{
        Next.style.display = 'block';
    },50000);
});

function ShowCake(){
    document.getElementById('Cake').style.display = 'block';
}
//
const typing1 = document.getElementById('Text');
const typeBtn1= document.getElementById('Wt-Btn');
const passage1 = "Happy birthday tom,today the world got bright the day you arrived in it. your ability to turn ordinary moments into memories is a rare gift that everyone around you feels. you don't just age, you upgrade, and watching that process is inspring. Happy Brithday once again Tom,go make 365 days look small compared to what you'll do with them."
let type1=""
let write1 = false;
let j=0;
typeBtn1.addEventListener('click',() => {
    if(! write1){
        write1 = true;
        typewrite();
    }
});