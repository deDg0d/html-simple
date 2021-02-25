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
window.onload =function() {time()}
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
window.onload=function(){
  scrape()
}
function scrape(){
  
    (async()=>{
 const req= await fetch('https://medium.com/@bretcameron/how-to-build-a-web-scraper-using-javascript-11d7cd9f77f2')
 const res=await req.text()
 const price=document.getElementsById('7327')
console.log(price)
 document.getElementById('scrape').innerHTML=price
})()

}