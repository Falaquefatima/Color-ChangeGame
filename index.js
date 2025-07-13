const btn=document.querySelector('.btn')
const body=document.querySelector('body')



btn.addEventListener('click',function(){
    const  red=Math.floor(Math.random()*256)
    const  green=Math.floor(Math.random()*256)
    const  blue=Math.floor(Math.random()*256)
    
body.style.background=`rgb(${red},${green},${blue})`


})