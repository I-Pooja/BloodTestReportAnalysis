window.onload = () => {
    "use strict";
    const button = document.querySelector(".info-button");
    const close = document.querySelector(".close-button");
    const aside = document.querySelector(".aside");
    const main = document.querySelector(".main");
    const checkBtn = document.querySelector("#check");
    const spinner = document.querySelector("#spinner");
    const height = document.querySelector("#height");
    const weight = document.querySelector("#weight");
    const smallText = document.querySelector(".small-text");
    const bigText = document.querySelector(".value");
    let bmi = 0;
    
    var expanded = false;
    
    button.addEventListener("click", handleClick);
    close.addEventListener("click", handleClick);
    checkBtn.addEventListener("click", showLevel);
    height.addEventListener("change", setBMI);
    weight.addEventListener("change", setBMI);
    
    function setBMI() {
      console.log(height.value, weight.value);
      bmi = Math.round(((+weight.value || 0) * 703)/(Math.pow((+height.value || 0), 2)) * 100) / 100;
    }
    
    function handleClick() {
      
      if(!expanded){
        main.style.marginLeft = "500px";
        aside.style.left = "0px";  
      } else {
        aside.style.left = "-500px";
        main.style.marginLeft = "0";
      }
      expanded = !expanded;
    }
    
    function showLevel() {
      let m = 165/75;
      let c = 165 - (m * 75);
      let val = bmi;
      if (val < 5)
        val = 5;
      if (val > 75)
        val = 75;
      let deg = (m * val) + c;
      spinner.style.transform = "Rotate(" + deg + "deg)";
      
      let status = showReport(bmi);
      smallText.innerHTML = status;
      bigText.innerHTML = bmi + " bmi";
    }
    
    function showReport(v, val) {
      let text = "";
      let bmis = {
        "very severly underweight" : (v <= 15),
        "severly underweight" : (v > 16 && v <= 16),
        "underweight" : (v > 16 && v <= 18.5),
        "Normal (Healthy Weight)" : (v > 18.5 && v <= 25),
        "Overweight" : (v > 25 && v <= 30),
        "Obese Class I (Moderately obese)": (v > 30 && v <= 35),
        "Obese Class II (Severely obese)": (v > 35 && v < 40),
        "Obese Class III (Very severely obese)": (v > 40 && v <= 45),
        "Obese Class IV (Morbidly Obese)": (v > 45 && v <= 50),
        "Obese Class V (Super Obese)": (v > 50 && v <= 60),
        "Obese Class VI (Hyper Obese)": (v > 60)
      };
      for(let i in bmis) {
        if(bmis[i]){
          text += i;
          break;
        }
      }
      return text;
    }
  }
  