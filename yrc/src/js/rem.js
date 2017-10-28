(function(){
  setRem();
  window.addEventListener("orientationChange",setRem);
  window.addEventListener("resize",setRem);

  function setRem(){
    var html=document.querySelector("html");
    var width=html.getBoundingClientRect().width;
    html.style.fontSize=width/16+"px";
  }
})();


