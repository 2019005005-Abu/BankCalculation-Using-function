/**
 *s-1:add event listener
 */
    document.getElementById('btn-withdraw').addEventListener("click",()=>{
    console.log("money has been withdrawn")
    const  newWithDreawAmaount=getInputValueById('withdraw-input');
    console.log(newWithDreawAmaount);
    const previousWithdrawAmount=getElementValuebyId('withdraw-amount');
    console.log(previousWithdrawAmount);
    const TotalWithdrawAmount=newWithDreawAmaount+previousWithdrawAmount;
    console.log(TotalWithdrawAmount);
    const withdrawTotal=setTextElementValueById('withdraw-amount',TotalWithdrawAmount);
    

    const previousBalanceTotal=getElementValuebyId('total-deposit');
    console.log(previousBalanceTotal);
    const newBalanceTotal=previousBalanceTotal-TotalWithdrawAmount;
    setTextElementValueById('total-deposit',newBalanceTotal);


})