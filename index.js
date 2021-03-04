function openNav(){
  document.getElementById('myNav').style.width='45%'
}
function closeNav(){
  document.getElementById('myNav').style.width='0%'
}
function searchBox(){
  if (document.getElementById('search-box').style.width=='35%') {
    document.getElementById('search-box').style.width='0'
    document.getElementById('search-box').style.visibility='hidden'
  }else{
  document.getElementById('search-box').style.display='block'
  document.getElementById('search-box').style.width='35%'
  document.getElementById('search-box').style.visibility='visible'
}}
function closeSearchBox(){
  if (document.getElementById('search-box').style.width=='35%') {
    document.getElementById('search-box').style.width='0'
    document.getElementById('search-box').style.visibility='hidden'
  }else{null
}
}
window.onload =function() {time(),scroll()}
function time(){


setInterval(timer,1000)
function timer(){
  const date=new Date()
  document.getElementById('time').innerHTML=date.toLocaleTimeString()
  
}
}

window.onscroll=function(){
  scrollFunction()
}
function scrollFunction() {
  if (document.body.scrollTop > 500 || 
    document.documentElement.scrollTop > 500) {
      document.getElementById('button-up').style.display = "block";
  } else {
    document.getElementById('button-up').style.display = "none";
  }
}
function smoke(){
  document.getElementById('speed').style.display='block'
}
function unsmoke(){
  document.getElementById('speed').style.display='none'
}
function slider(){
const value=document.getElementById('slider').value

document.getElementById('slider-output').innerHTML=value
const speedMeter=document.getElementById('tire')


if (value==0){
  speedMeter.style.animationDuration='100000s'
}
if (value==20){
  speedMeter.style.animationDuration='4s'
}
if (value==40){
  speedMeter.style.animationDuration='1s'
}
if (value==60){
  speedMeter.style.animationDuration='0.5s'
}
if (value==80){
  speedMeter.style.animationDuration='0.05s'
}
if (value==100){
  speedMeter.style.animationDuration='0.00009s'
}

}
function dom(){
  var myJSON = {name: "John", age: 31, city: "New York"};
  var myObj = JSON.stringify(myJSON);
  localStorage.setItem('save',myObj)

}
function json2(){
  const json=localStorage.getItem('save')
  const text=JSON.parse(json)
  document.getElementById('load').innerHTML=text.name
}//scrolling part
let isDown=false
let clicked = 0
let moveBack
function mouseDown(event){
  isDown=true 

    var x = event.clientX;
    clicked = event.clientX
    const cursor=document.getElementById('mouse-loc')    
      cursor.style.border='1px solid yellow'
    }
function mouseUp(event){
  isDown=false
  const cursor=document.getElementById('mouse-loc') 
  cursor.style.border='1px solid red'
}     
  
function mouseMove(event){
  
  var x = event.clientX; 
  
  var check=[]
  const cursor=document.getElementById('mouse-loc')
 
  
     
     console.log(check)
    return(scroll(x))
}
function scroll(move){
  
  const cursor=document.getElementById('mouse-loc') 
  

console.log('down is '+move + ' isDown is '+ isDown+' clicked pos is '+clicked)

if(isDown==true){
  const cursor=document.getElementById('mouse-loc') 
  cursor.scrollLeft+=((clicked-move)/25)
  

  }}




