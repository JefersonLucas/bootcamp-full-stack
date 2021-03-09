// Global variables
let rangeInput      = document.querySelector("#range-input");
let currentNumber   = document.querySelector("#current-number");
let extensiveNumber = document.querySelector("#extensive-number");
let current         = null;
let extensive       = null;

// Click event to input range 
rangeInput.addEventListener('click', function(event) {
  let rangeValue  = event.target.value;
  rangeValue      = rangeValue.split("");

  // Global variables receiving the current number and the converted long number
  current   = returnCurrentNumberConvert(rangeValue);
  extensive = returnExtensiveNumber(rangeValue, rangeValue[2], rangeValue[1], rangeValue[0]);

  return (currentNumber.value = current), (extensiveNumber.value = extensive);
});

// Returns the current value and also converts it to string
function returnCurrentNumberConvert(value) {
  return value.toString().replace(",","").replace(",","");
}
// Returns the number in full
function returnExtensiveNumber(value, hundred, dozens, unity) {
    
  let result = null;

  if(value.length === 1) {
    result = returnUnity(unity);
  }
  else if(value.length === 2) {
    result = returnDozens(unity, dozens);
  }
  else {
    result = returnHundred(unity, dozens, hundred);
  }
  return result;
}
// Returns the number in unit
function returnUnity(valueUnit) {
  let unity = null;

  if(valueUnit === "1") {
    unity = "um"
  }
  else if(valueUnit === "2") {
    unity = "dois"
  }
  else if(valueUnit === "3") {
    unity = "três"
  }
  else if(valueUnit === "4") {
    unity = "quatro"
  }
  else if(valueUnit === "5") {
    unity = "cinco"
  }
  else if(valueUnit === "6") {
    unity = "seis"
  }
  else if(valueUnit === "7") {
    unity = "sete"
  }
  else if(valueUnit === "8") {
    unity = "oito"
  }
  else if(valueUnit === "9") {
    unity = "nove"
  }
  return unity;
}
// Returns the number in decimal
function returnDozens(valueDozens, valueUnit) {
  let dozen = null;

  // Casa dos 10
  if(valueDozens === "1" && (valueUnit >= "0" && valueUnit <= "9")) {
    if(valueDozens === "1" && valueUnit === "0") {
      dozen = "dez";
    }
    else if(valueDozens === "1" && valueUnit === "1") {
      dozen = "onze";
    }
    else if(valueDozens === "1" && valueUnit === "2") {
      dozen = "doze";
    }
    else if(valueDozens === "1" && valueUnit === "3") {
      dozen = "treze";
    }
    else if(valueDozens === "1" && valueUnit === "4") {
      dozen = "quatorze";
    }
    else if(valueDozens === "1" && valueUnit === "5") {
      dozen = "quinze";
    }
    else if(valueDozens === "1" && valueUnit === "6") {
      dozen = "dezesseis";
    }
    else if(valueDozens === "1" && valueUnit === "7") {
      dozen = "dezessete";
    }
    else if(valueDozens === "1" && valueUnit === "8") {
      dozen = "dezoito";
    }
    else if(valueDozens === "1" && valueUnit === "9") {
      dozen = "dezenove";
    }
  }
  // Casa dos 20
  else if(valueDozens === "2" && (valueUnit >= "0" && valueUnit <= "9")) {
  
    if(valueDozens === "2" && valueUnit === "0") {
      dozen = "vinte";
    }
    else if(valueDozens === "2" && valueUnit === "1") {
      dozen = "vinte"+" e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "2" && valueUnit === "2") {
      dozen = "vinte"+" e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "2" && valueUnit === "3") {
      dozen = "vinte"+" e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "2" && valueUnit === "4") {
      dozen = "vinte"+" e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "2" && valueUnit === "5") {
      dozen = "vinte"+" e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "2" && valueUnit === "6") {
      dozen = "vinte"+" e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "2" && valueUnit === "7") {
      dozen = "vinte"+" e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "2" && valueUnit === "8") {
      dozen = "vinte"+" e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "2" && valueUnit === "9") {
      dozen = "vinte"+" e " + returnUnity(valueUnit);
    }
  }
  // Casa dos 30
  else if(valueDozens === "3" && (valueUnit >= "0" && valueUnit <= "9")) {
      
    if(valueDozens === "3" && valueUnit === "0") {
      dozen = "trinta";
    }
    else if(valueDozens === "3" && valueUnit === "1") {
      dozen = "trinta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "3" && valueUnit === "2") {
      dozen = "trinta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "3" && valueUnit === "3") {
      dozen = "trinta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "3" && valueUnit === "4") {
      dozen = "trinta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "3" && valueUnit === "5") {
      dozen = "trinta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "3" && valueUnit === "6") {
      dozen = "trinta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "3" && valueUnit === "7") {
      dozen = "trinta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "3" && valueUnit === "8") {
      dozen = "trinta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "3" && valueUnit === "9") {
      dozen = "trinta" + " e " + returnUnity(valueUnit);
    }
  }
  // Casa dos 40
  else if(valueDozens === "4" && (valueUnit >= "0" && valueUnit <= "9")) {
          
    if(valueDozens === "4" && valueUnit === "0") {
      dozen = "quarenta";
    }
    else if(valueDozens === "4" && valueUnit === "1") {
      dozen = "quarenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "4" && valueUnit === "2") {
      dozen = "quarenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "4" && valueUnit === "3") {
      dozen = "quarenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "4" && valueUnit === "4") {
      dozen = "quarenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "4" && valueUnit === "5") {
      dozen = "quarenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "4" && valueUnit === "6") {
      dozen = "quarenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "4" && valueUnit === "7") {
      dozen = "quarenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "4" && valueUnit === "8") {
      dozen = "quarenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "4" && valueUnit === "9") {
      dozen = "quarenta" + " e " + returnUnity(valueUnit);
    }
  }
  // Casa dos 50
  else if(valueDozens === "5" && (valueUnit >= "0" && valueUnit <= "9")) {
              
    if(valueDozens === "5" && valueUnit === "0") {
      dozen = "cinquenta";
    }
    else if(valueDozens === "5" && valueUnit === "1") {
      dozen = "cinquenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "5" && valueUnit === "2") {
      dozen = "cinquenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "5" && valueUnit === "3") {
      dozen = "cinquenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "5" && valueUnit === "4") {
      dozen = "cinquenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "5" && valueUnit === "5") {
      dozen = "cinquenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "5" && valueUnit === "6") {
      dozen = "cinquenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "5" && valueUnit === "7") {
      dozen = "cinquenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "5" && valueUnit === "8") {
      dozen = "cinquenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "5" && valueUnit === "9") {
      dozen = "cinquenta" + " e " + returnUnity(valueUnit);
    }
  }
  // Casa dos 60
  else if(valueDozens === "6" && (valueUnit >= "0" && valueUnit <= "9")) {
                  
    if(valueDozens === "6" && valueUnit === "0") {
      dozen = "sessenta";
    }
    else if(valueDozens === "6" && valueUnit === "1") {
      dozen = "sessenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "6" && valueUnit === "2") {
      dozen = "sessenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "6" && valueUnit === "3") {
      dozen = "sessenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "6" && valueUnit === "4") {
      dozen = "sessenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "6" && valueUnit === "5") {
      dozen = "sessenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "6" && valueUnit === "6") {
      dozen = "sessenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "6" && valueUnit === "7") {
      dozen = "sessenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "6" && valueUnit === "8") {
      dozen = "sessenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "6" && valueUnit === "9") {
      dozen = "sessenta" + " e " + returnUnity(valueUnit);
    }
  }
  // Casa dos 70
  else if(valueDozens === "7" && (valueUnit >= "0" && valueUnit <= "9")) {
                      
    if(valueDozens === "7" && valueUnit === "0") {
      dozen = "setenta";
    }
    else if(valueDozens === "7" && valueUnit === "1") {
      dozen = "setenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "7" && valueUnit === "2") {
      dozen = "setenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "7" && valueUnit === "3") {
      dozen = "setenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "7" && valueUnit === "4") {
      dozen = "setenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "7" && valueUnit === "5") {
      dozen = "setenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "7" && valueUnit === "6") {
      dozen = "setenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "7" && valueUnit === "7") {
      dozen = "setenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "7" && valueUnit === "8") {
      dozen = "setenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "7" && valueUnit === "9") {
      dozen = "setenta" + " e " + returnUnity(valueUnit);
    }
  }
  // Casa dos 80
  else if(valueDozens === "8" && (valueUnit >= "0" && valueUnit <= "9")) {
                          
    if(valueDozens === "8" && valueUnit === "0") {
      dozen = "oitenta";
    }
    else if(valueDozens === "8" && valueUnit === "1") {
      dozen = "oitenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "8" && valueUnit === "2") {
      dozen = "oitenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "8" && valueUnit === "3") {
      dozen = "oitenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "8" && valueUnit === "4") {
      dozen = "oitenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "8" && valueUnit === "5") {
      dozen = "oitenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "8" && valueUnit === "6") {
      dozen = "oitenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "8" && valueUnit === "7") {
      dozen = "oitenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "8" && valueUnit === "8") {
      dozen = "oitenta" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "8" && valueUnit === "9") {
      dozen = "oitenta" + " e " + returnUnity(valueUnit);
    }
  }
  // Casa dos 90
  else if(valueDozens === "9" && (valueUnit >= "0" && valueUnit <= "9")) {
                              
    if(valueDozens === "9" && valueUnit === "0") {
      dozen = "noventa";
    }
    else if(valueDozens === "9" && valueUnit === "1") {
      dozen = "noventa" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "9" && valueUnit === "2") {
      dozen = "noventa" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "9" && valueUnit === "3") {
      dozen = "noventa" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "9" && valueUnit === "4") {
      dozen = "noventa" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "9" && valueUnit === "5") {
      dozen = "noventa" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "9" && valueUnit === "6") {
      dozen = "noventa" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "9" && valueUnit === "7") {
      dozen = "noventa" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "9" && valueUnit === "8") {
      dozen = "noventa" + " e " + returnUnity(valueUnit);
    }
    else if(valueDozens === "9" && valueUnit === "9") {
      dozen = "noventa" + " e " + returnUnity(valueUnit);
    }
  }
  return dozen;
}
// Returns the number in hundred
function returnHundred(valueHundred, valueDozens, valueUnit) {
  let hundred = null;

  // Casa dos 100 até 110
  if(valueHundred === "1" && valueDozens === "0" && (valueUnit >= "0" && valueUnit <= "9")) {

    if(valueHundred === "1"  && valueDozens === "0" && valueUnit === "0") {
      hundred = "cem"
    }
    else if(valueHundred === "1" && valueDozens === "0" && valueUnit === "1") {
      hundred = "cento"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "1" && valueDozens === "0" && valueUnit === "2") {
      hundred = "cento"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "1" && valueDozens === "0" && valueUnit === "3") {
      hundred = "cento"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "1" && valueDozens === "0" && valueUnit === "4") {
      hundred = "cento"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "1" && valueDozens === "0" && valueUnit === "5") {
      hundred = "cento"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "1" && valueDozens === "0" && valueUnit === "6") {
      hundred = "cento"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "1" && valueDozens === "0" && valueUnit === "7") {
      hundred = "cento"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "1" && valueDozens === "0" && valueUnit === "8") {
      hundred = "cento"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "1" && valueDozens === "0" && valueUnit === "9") {
      hundred = "cento"+" e " + returnUnity(valueUnit);
    }
  }
  else if(valueHundred === "1" && (valueDozens >= "1" && valueDozens <= "9")) {
    hundred = "cento" + " e " + returnDozens(valueDozens, valueUnit)
  }
  // Casa dos 200
  else if(valueHundred === "2" && valueDozens === "0" && (valueUnit >= "0" && valueUnit <= "9")) {

    if(valueHundred === "2"  && valueDozens === "0" && valueUnit === "0") {
      hundred = "duzentos"
    }
    else if(valueHundred === "2" && valueDozens === "0" && valueUnit === "1") {
      hundred = "duzentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "2" && valueDozens === "0" && valueUnit === "2") {
      hundred = "duzentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "2" && valueDozens === "0" && valueUnit === "3") {
      hundred = "duzentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "2" && valueDozens === "0" && valueUnit === "4") {
      hundred = "duzentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "2" && valueDozens === "0" && valueUnit === "5") {
      hundred = "duzentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "2" && valueDozens === "0" && valueUnit === "6") {
      hundred = "duzentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "2" && valueDozens === "0" && valueUnit === "7") {
      hundred = "duzentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "2" && valueDozens === "0" && valueUnit === "8") {
      hundred = "duzentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "2" && valueDozens === "0" && valueUnit === "9") {
      hundred = "duzentos"+" e " + returnUnity(valueUnit);
    }
  }
  else if(valueHundred === "2" && (valueDozens >= "1" && valueDozens <= "9")) {
    hundred = "duzentos" + " e " + returnDozens(valueDozens, valueUnit)
  }
  // Casa dos 300
  else if(valueHundred === "3" && valueDozens === "0" && (valueUnit >= "0" && valueUnit <= "9")) {

    if(valueHundred === "3"  && valueDozens === "0" && valueUnit === "0") {
      hundred = "duzentos"
    }
    else if(valueHundred === "3" && valueDozens === "0" && valueUnit === "1") {
      hundred = "trezentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "3" && valueDozens === "0" && valueUnit === "2") {
      hundred = "trezentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "3" && valueDozens === "0" && valueUnit === "3") {
      hundred = "trezentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "3" && valueDozens === "0" && valueUnit === "4") {
      hundred = "trezentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "3" && valueDozens === "0" && valueUnit === "5") {
      hundred = "trezentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "3" && valueDozens === "0" && valueUnit === "6") {
      hundred = "trezentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "3" && valueDozens === "0" && valueUnit === "7") {
      hundred = "trezentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "3" && valueDozens === "0" && valueUnit === "8") {
      hundred = "trezentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "3" && valueDozens === "0" && valueUnit === "9") {
      hundred = "trezentos"+" e " + returnUnity(valueUnit);
    }
  }
  else if(valueHundred === "3" && (valueDozens >= "1" && valueDozens <= "9")) {
    hundred = "trezentos" + " e " + returnDozens(valueDozens, valueUnit)
  }
  // Casa dos 400
  else if(valueHundred === "4" && valueDozens === "0" && (valueUnit >= "0" && valueUnit <= "9")) {

    if(valueHundred === "4"  && valueDozens === "0" && valueUnit === "0") {
      hundred = "quatrocentos"
    }
    else if(valueHundred === "4" && valueDozens === "0" && valueUnit === "1") {
      hundred = "quatrocentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "4" && valueDozens === "0" && valueUnit === "2") {
      hundred = "quatrocentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "4" && valueDozens === "0" && valueUnit === "3") {
      hundred = "quatrocentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "4" && valueDozens === "0" && valueUnit === "4") {
      hundred = "quatrocentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "4" && valueDozens === "0" && valueUnit === "5") {
      hundred = "quatrocentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "4" && valueDozens === "0" && valueUnit === "6") {
      hundred = "quatrocentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "4" && valueDozens === "0" && valueUnit === "7") {
      hundred = "quatrocentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "4" && valueDozens === "0" && valueUnit === "8") {
      hundred = "quatrocentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "4" && valueDozens === "0" && valueUnit === "9") {
      hundred = "quatrocentos"+" e " + returnUnity(valueUnit);
    }
  }
  else if(valueHundred === "4" && (valueDozens >= "1" && valueDozens <= "9")) {
    hundred = "quatrocentos" + " e " + returnDozens(valueDozens, valueUnit)
  }
  // Casa dos 500
  else if(valueHundred === "5" && valueDozens === "0" && (valueUnit >= "0" && valueUnit <= "9")) {

    if(valueHundred === "5"  && valueDozens === "0" && valueUnit === "0") {
      hundred = "quinhentos"
    }
    else if(valueHundred === "5" && valueDozens === "0" && valueUnit === "1") {
      hundred = "quinhentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "5" && valueDozens === "0" && valueUnit === "2") {
      hundred = "quinhentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "5" && valueDozens === "0" && valueUnit === "3") {
      hundred = "quinhentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "5" && valueDozens === "0" && valueUnit === "4") {
      hundred = "quinhentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "5" && valueDozens === "0" && valueUnit === "5") {
      hundred = "quinhentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "5" && valueDozens === "0" && valueUnit === "6") {
      hundred = "quinhentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "5" && valueDozens === "0" && valueUnit === "7") {
      hundred = "quinhentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "5" && valueDozens === "0" && valueUnit === "8") {
      hundred = "quinhentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "5" && valueDozens === "0" && valueUnit === "9") {
      hundred = "quinhentos"+" e " + returnUnity(valueUnit);
    }
  }
  else if(valueHundred === "5" && (valueDozens >= "1" && valueDozens <= "9")) {
    hundred = "quinhentos" + " e " + returnDozens(valueDozens, valueUnit)
  }
  // Casa dos 600
  else if(valueHundred === "6" && valueDozens === "0" && (valueUnit >= "0" && valueUnit <= "9")) {

    if(valueHundred === "6"  && valueDozens === "0" && valueUnit === "0") {
      hundred = "seiscentos"
    }
    else if(valueHundred === "6" && valueDozens === "0" && valueUnit === "1") {
      hundred = "seiscentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "6" && valueDozens === "0" && valueUnit === "2") {
      hundred = "seiscentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "6" && valueDozens === "0" && valueUnit === "3") {
      hundred = "seiscentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "6" && valueDozens === "0" && valueUnit === "4") {
      hundred = "seiscentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "6" && valueDozens === "0" && valueUnit === "5") {
      hundred = "seiscentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "6" && valueDozens === "0" && valueUnit === "6") {
      hundred = "seiscentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "6" && valueDozens === "0" && valueUnit === "7") {
      hundred = "seiscentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "6" && valueDozens === "0" && valueUnit === "8") {
      hundred = "seiscentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "6" && valueDozens === "0" && valueUnit === "9") {
      hundred = "seiscentos"+" e " + returnUnity(valueUnit);
    }
  }
  else if(valueHundred === "6" && (valueDozens >= "1" && valueDozens <= "9")) {
    hundred = "seiscentos" + " e " + returnDozens(valueDozens, valueUnit)
  }
  // Casa dos 700
  else if(valueHundred === "7" && valueDozens === "0" && (valueUnit >= "0" && valueUnit <= "9")) {

    if(valueHundred === "7"  && valueDozens === "0" && valueUnit === "0") {
      hundred = "setecentos"
    }
    else if(valueHundred === "7" && valueDozens === "0" && valueUnit === "1") {
      hundred = "setecentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "7" && valueDozens === "0" && valueUnit === "2") {
      hundred = "setecentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "7" && valueDozens === "0" && valueUnit === "3") {
      hundred = "setecentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "7" && valueDozens === "0" && valueUnit === "4") {
      hundred = "setecentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "7" && valueDozens === "0" && valueUnit === "5") {
      hundred = "setecentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "7" && valueDozens === "0" && valueUnit === "6") {
      hundred = "setecentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "7" && valueDozens === "0" && valueUnit === "7") {
      hundred = "setecentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "7" && valueDozens === "0" && valueUnit === "8") {
      hundred = "setecentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "7" && valueDozens === "0" && valueUnit === "9") {
      hundred = "setecentos"+" e " + returnUnity(valueUnit);
    }
  }
  else if(valueHundred === "7" && (valueDozens >= "1" && valueDozens <= "9")) {
    hundred = "setecentos" + " e " + returnDozens(valueDozens, valueUnit)
  }
  // Casa dos 800
  else if(valueHundred === "8" && valueDozens === "0" && (valueUnit >= "0" && valueUnit <= "9")) {

    if(valueHundred === "8"  && valueDozens === "0" && valueUnit === "0") {
      hundred = "oitocentos"
    }
    else if(valueHundred === "8" && valueDozens === "0" && valueUnit === "1") {
      hundred = "oitocentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "8" && valueDozens === "0" && valueUnit === "2") {
      hundred = "oitocentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "8" && valueDozens === "0" && valueUnit === "3") {
      hundred = "oitocentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "8" && valueDozens === "0" && valueUnit === "4") {
      hundred = "oitocentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "8" && valueDozens === "0" && valueUnit === "5") {
      hundred = "oitocentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "8" && valueDozens === "0" && valueUnit === "6") {
      hundred = "oitocentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "8" && valueDozens === "0" && valueUnit === "7") {
      hundred = "oitocentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "8" && valueDozens === "0" && valueUnit === "8") {
      hundred = "oitocentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "8" && valueDozens === "0" && valueUnit === "9") {
      hundred = "oitocentos"+" e " + returnUnity(valueUnit);
    }
  }
  else if(valueHundred === "8" && (valueDozens >= "1" && valueDozens <= "9")) {
    hundred = "oitocentos" + " e " + returnDozens(valueDozens, valueUnit)
  }
  // Casa dos 900
  else if(valueHundred === "9" && valueDozens === "0" && (valueUnit >= "0" && valueUnit <= "9")) {

    if(valueHundred === "9"  && valueDozens === "0" && valueUnit === "0") {
      hundred = "novecentos"
    }
    else if(valueHundred === "9" && valueDozens === "0" && valueUnit === "1") {
      hundred = "novecentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "9" && valueDozens === "0" && valueUnit === "2") {
      hundred = "novecentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "9" && valueDozens === "0" && valueUnit === "3") {
      hundred = "novecentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "9" && valueDozens === "0" && valueUnit === "4") {
      hundred = "novecentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "9" && valueDozens === "0" && valueUnit === "5") {
      hundred = "novecentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "9" && valueDozens === "0" && valueUnit === "6") {
      hundred = "novecentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "9" && valueDozens === "0" && valueUnit === "7") {
      hundred = "novecentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "9" && valueDozens === "0" && valueUnit === "8") {
      hundred = "novecentos"+" e " + returnUnity(valueUnit);
    }
    else if(valueHundred === "9" && valueDozens === "0" && valueUnit === "9") {
      hundred = "novecentos"+" e " + returnUnity(valueUnit);
    }
  }
  else if(valueHundred === "9" && (valueDozens >= "1" && valueDozens <= "9")) {
    hundred = "novecentos" + " e " + returnDozens(valueDozens, valueUnit)
  }
  return hundred;
}