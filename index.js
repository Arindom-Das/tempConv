document.getElementById("submt").onclick = function () {
    let centi = parseFloat(document.getElementById("Cm").value);
    let farh = parseFloat(document.getElementById("fa").value);
    let kelv = parseFloat(document.getElementById("KEL").value);
  
    if (!isNaN(centi)) {
      let f = (centi * 9 / 5) + 32;
      let k = centi + 273.15;
  
      document.getElementById("fa").value = f.toFixed(2);
      document.getElementById("KEL").value = k.toFixed(2);
    }
  
    if (!isNaN(farh)) {
      let c = (farh - 32) * 5 / 9;
      let k = (farh - 32) * 5 / 9 + 273.15;
  
      document.getElementById("Cm").value = c.toFixed(2);
      document.getElementById("KEL").value = k.toFixed(2);
    }
  
    if (!isNaN(kelv)) {
      let c = kelv - 273.15;
      let f = (kelv - 273.15) * 9 / 5 + 32;
  
      document.getElementById("Cm").value = c.toFixed(2);
      document.getElementById("fa").value = f.toFixed(2);
    }
  }
  
  document.getElementById("resetButton").onclick = function(){

    let x="";

    document.getElementById("fa").value = x;
    document.getElementById("KEL").value =x;
    document.getElementById("Cm").value = x;
}