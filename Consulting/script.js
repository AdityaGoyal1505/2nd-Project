let underc=document.querySelector('.underc');
let cons=document.querySelector('.cons');
let unders=document.querySelector('.unders');
let sol=document.querySelector('.sol');
let underr=document.querySelector('.underr');
let res=document.querySelector('.res');
let underf=document.querySelector('.underf');
let fut=document.querySelector('.fut');
cons.addEventListener('click',function(){
    underf.classList.remove('active');
    underr.classList.remove('active');
    unders.classList.remove('active');
    underc.classList.toggle('active');
})
sol.addEventListener('click',function(){
    underf.classList.remove('active');
    underr.classList.remove('active');
    underc.classList.remove('active');
    unders.classList.toggle('active');
})
res.addEventListener('click',function(){
    underf.classList.remove('active');
    unders.classList.remove('active');
    underc.classList.remove('active');
    underr.classList.toggle('active');
})
fut.addEventListener('click',function(){
    underr.classList.remove('active');
    unders.classList.remove('active');
    underc.classList.remove('active');
    underf.classList.toggle('active');
})