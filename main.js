'use strict';
const btnSubmit=document.querySelector('.submit');
const info=document.querySelector('.info');
const inputForm=document.querySelector('.email');
const inputEmail=document.querySelector('#email');
const erro=document.querySelector('.erro')

const jobInfo=document.querySelectorAll('.tt_nghenghiep')

const hien= document.querySelectorAll('.hien')
const an= document.querySelectorAll('.an')

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

btnSubmit.addEventListener('click', function(){
    if(inputEmail.value.match(regex) !== null){
    info.classList.toggle('hide');
    inputForm.classList.toggle('hide');
    erro.classList.add('hide');
    console.log(inputEmail.value)
}
else{
    erro.classList.remove('hide');
    setTimeout(()=> {
        erro.classList.add('hide')
    }, 700)
    console.log("vui lòng nhập đúng định dạng")
    }
})
for(let i=0;i<jobInfo.length;i++){
    jobInfo[i].classList.add('hide')
}
for(let i=0; i<jobInfo.length;i++){
hien[i].addEventListener('click',function(){
    jobInfo[i].classList.remove('hide')
    hien[i].classList.remove('hover')
    an[i].classList.add('hover')
})
}
for(let i=0; i<jobInfo.length;i++){
    an[i].addEventListener('click',function(){
        jobInfo[i].classList.add('hide')
        hien[i].classList.add('hover')
        an[i].classList.remove('hover')
    })
    }