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