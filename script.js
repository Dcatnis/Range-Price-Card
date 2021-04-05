var slider = document.getElementById("myRange");
var PricePerMonth = document.getElementById("price_month");
var views=document.getElementById("pageviews")
var slider2=document.getElementById("myRange2")
var boxtick=document.getElementById("boxswitch")
var month=document.getElementById("month")
var year=document.getElementById("year")
var PriceperYear=document.getElementById("price_year")






slider.addEventListener("mousemove",function(){
    var change=slider.value
    var color='linear-gradient(90deg,rgb(23, 217, 206)'+ change + '%,rgb(135,141,155)'+ change +'%)';
    slider.style.background=color;
})
slider2.addEventListener("mousemove",function(){
    var change=slider2.value
    var color='linear-gradient(90deg,rgb(23, 217, 206)'+ change + '%,rgb(135,141,155)'+ change +'%)';
    slider2.style.background=color;
})



PricePerMonth.innerHTML=slider.value/3.125;
slider.oninput = function() {
    PricePerMonth.innerHTML = this.value/3.125;
    views.innerHTML=this.value+Math.floor(Math.random() * 10); 
   if(slider.value==0){
       PricePerMonth.innerHTML=5
   }
}

PriceperYear.innerHTML=slider2.value*3.84
slider2.oninput = function() {
    PriceperYear.innerHTML = this.value*3.84
   views.innerHTML=this.value+Math.floor(Math.random() * 10); 
   if(slider2.value==0){
       PriceperYear.innerHTML=60
   }
}


boxtick.onclick=function (){
    
    month.classList.toggle("hide")
    year.classList.toggle("show")
    slider.classList.toggle("hidemonth")
    slider2.classList.toggle("showyear")
    PriceperYear.classList.toggle("showYearprice")
    PricePerMonth.classList.toggle("hidemonthprice")
   if(slider.value!=50){
       slider.value=50
       PricePerMonth.innerHTML=16
   }else if(slider2.value!=50){
       slider2.value=50
       PriceperYear.innerHTML=192
   }
}




