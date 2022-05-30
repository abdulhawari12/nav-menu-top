const toggle = document.querySelector('.toggle'),
      menuLeft = document.querySelector('.menu-left'),
      menuRight = document.querySelector('.menu-right'),
      menuTop = document.querySelector('.menu-top'),
      items = document.querySelectorAll('.items')
      btnClose = document.querySelector('.buttonClose'),
      popupShow = document.querySelectorAll('.popupShow'),
      popup = document.querySelector('.box');
toggle.addEventListener('click',function(){
  toggle.classList.toggle('showToggle');
  menuLeft.classList.toggle('showToggle');
});
toggle.addEventListener('click',function(){
  toggle.classList.toggle('showToggle');
  menuRight.classList.toggle('showToggle');
});
toggle.addEventListener('click',function(){
  toggle.classList.toggle('showToggle');
  menuTop.classList.toggle('showToggle');
});
function activelink(){
  items.forEach((a)=>
  a.classList.remove('active'));
  this.classList.add('active');
}
function showPopup(){
  popup.classList.add('popupshow');
}
function closePopup(){
  popup.classList.remove('popupshow');
}
items.forEach((a)=>
a.addEventListener('click',activelink));
popupShow.forEach((b)=>
b.addEventListener('click',showPopup));
btnClose.addEventListener('click',closePopup);
var cssLink = document.createElement("link1");
cssLink.href = "css/cssframe.css"; 
cssLink.rel = "stylesheet"; 
cssLink.type = "text/css"; 
frames['iframe1'].document.head.appendChild(cssLink);
var cssLink1 = document.createElement("link2");
cssLink1.href = "css/cssframe.css"; 
cssLink1.rel = "stylesheet"; 
cssLink1.type = "text/css"; 
frames['iframe2'].document.head.appendChild(cssLink1);
var cssLink2 = document.createElement("link3");
cssLink2.href = "css/cssframe.css"; 
cssLink2.rel = "stylesheet"; 
cssLink2.type = "text/css"; 
frames['iframe3'].document.head.appendChild(cssLink2);
var cssLink3 = document.createElement("link4");
cssLink3.href = "css/cssframe.css"; 
cssLink3.rel = "stylesheet"; 
cssLink3.type = "text/css"; 
frames['iframe4'].document.head.appendChild(cssLink3);
var cssLink4 = document.createElement("link5");
cssLink4.href = "css/cssframe.css"; 
cssLink4.rel = "stylesheet"; 
cssLink4.type = "text/css"; 
frames['iframe5'].document.head.appendChild(cssLink4);
var cssLink5 = document.createElement("link6");
cssLink5.href = "css/cssframe.css"; 
cssLink5.rel = "stylesheet"; 
cssLink5.type = "text/css"; 
frames['iframe6'].document.head.appendChild(cssLink5);
