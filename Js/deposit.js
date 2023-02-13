
document.getElementById('btn-deposit').addEventListener('click',()=>{
    const newDepositoAmount=getInputValueById('deposit-fleld');
    console.log(newDepositoAmount)
    const PreviousDepositTotal=getElementValuebyId('deposit-total');
   console.log(PreviousDepositTotal);

   //Calculate new deposit total;
   const newDepositTotal=newDepositoAmount+PreviousDepositTotal;

   //set deposit total
  setTextElementValueById('deposit-total',newDepositTotal);

  //get pvevious-Balance total
  const pveviousBalanceTotal=getElementValuebyId('total-deposit');
  console.log(pveviousBalanceTotal);
 const newBalanceTotal=newDepositTotal+pveviousBalanceTotal
 setTextElementValueById('total-deposit',newBalanceTotal)

})