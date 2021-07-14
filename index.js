
document.querySelector('#find').addEventListener('click',function(e){
   
    e.preventDefault();
    var loan=document.getElementById('amount').value;
    
    var interestRate=document.getElementById('tenure').value;
    var tenure=document.getElementById('apr').value;
   
    var noOfMonths=Math.floor(tenure);
    var monthlyRate=interestRate/(12*100);
    var onePlusR=Math.pow(1+monthlyRate,noOfMonths)
    var denominator=onePlusR-1;
    var emi=(loan*monthlyRate*(onePlusR/denominator)).toPrecision(5);
    var totalAmt=noOfMonths*parseFloat(emi);
    var totalInt=Math.floor(totalAmt-loan);

    var payableEmi=document.getElementById('emi');
    var payableamount=document.getElementById('totalAmt');
    var payableInt=document.getElementById('totalInt');
    payableEmi.innerHTML=parseFloat(emi);
    payableamount.innerHTML=parseFloat(totalAmt);
    payableInt.innerHTML=parseFloat(totalInt);
    
    
  
});
// window.onload = function() {
   
    
  
    
//     }