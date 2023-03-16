var bill = document.getElementById("bill");
var person = document.getElementById("peoples");
var calculatorButton = document.querySelectorAll(".calcul-button");
var TipsPercentage;
var billValue;
var totalBill;
var customTips = document.getElementById("custom-tips");


calculatorButton.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      calculTips(e);
      displayTips();
      displayTotalBill(calculTotalBill());
    });
});

function cannotBeZero(e){
  const zero = document.querySelector(".zero")

  if (person.value === "0"){
    console.log("zob");
    person.style.border = "1px solid red";
    person.style.color = "red";
    zero.style.display = "block";
    zero.style.color = "red";
    TipsPercentage = 0;
  } else {
    person.style.border = "none";
    zero.style.display = "none";
    person.style.color = "";
    calculTips(e);
    displayTips();
    calculTotalBill();
    displayTotalBill(totalBill);
  }
}

function calculTips(e){
  if (person.value === '0') {
    TipsPercentage = 0;
} else {
    TipsPercentage = (e.target.value)/100;
    TipsPercentage= (TipsPercentage*(bill.value))/(person.value);
}
}

function displayTips(){
  const tip = document.getElementById("tips-bill");
  if (isNaN(TipsPercentage) || TipsPercentage === Infinity) {
      TipsPercentage = 0;
      tip.innerHTML = "$" + TipsPercentage;
  } else {

    tip.innerHTML = "$" + TipsPercentage.toFixed(2);
  }
}
function calculTotalBill(){
  totalBill =((bill.value)/(person.value))+TipsPercentage;
}

function displayTotalBill(){
  const total = document.getElementById("Total-bill");
  if (isNaN(totalBill) || totalBill === Infinity ) {
    totalBill = 0;
    total.innerHTML = "$"+totalBill;
  } else {
    total.innerHTML = "$"+totalBill.toFixed(2);
  }
}

person.addEventListener("input", function (e) {
  cannotBeZero(e);
})

customTips.addEventListener("input", function(e){
  calculTips(e);
  displayTips();
  calculTotalBill();
  displayTotalBill(totalBill);
  e.preventDefault();
});

const reset = document.querySelector(".reset-button");

reset.addEventListener("click", function(){
  TipsPercentage = 0;
  person.value = 0;
  displayTips();
  displayTotalBill(totalBill=0);
})