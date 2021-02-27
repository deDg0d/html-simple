function openNav(){
  document.getElementById('myNav').style.width='35%'
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
window.onload =function() {time(),scrape()}
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
}

