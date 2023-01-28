var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
var p1 = document.getElementById("p1");

function validateForm(){
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    alert("All fields are required!");
    document.getElementById("submit").removeEventListener("click", countBmi);
  }else{
    countBmi();
  }
}
document.getElementById("submit").addEventListener("click", validateForm);

function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }
  form.reset();
  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if(bmi<18.5){
    result = ' Underweight';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = ' Healthy';
     }else if(25<=bmi&&bmi<=29.9){
    result = ' Overweight';
     }else if(30<=bmi&&bmi<=34.9){
    result = ' Obese';
     }else if(35<=bmi){
    result = ' Extremely obese';
     }


  var t = document.createTextNode(result);
  var b = document.createTextNode(' BMI: ');
  var r = document.createTextNode(parseFloat(bmi).toFixed(2));
  
  p1.appendChild(t);
  p1.appendChild(b);
  p1.appendChild(r);
  
  document.body.appendChild(p1);
  document.body.appendChild(p1);
  document.getElementById("submit").removeEventListener("click", countBmi);
  document.getElementById("submit").removeEventListener("click", validateForm);
}
document.getElementById("submit").addEventListener("click", countBmi);