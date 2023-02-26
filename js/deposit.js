// add event listener in deposit btn

document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputValueById('deposit-field');
    const previousDepositTotal = getElementValueById('deposit-total');

    const newDepositTotal  = newDepositAmount + previousDepositTotal;
    setElementValueById('deposit-total',newDepositTotal);


    
    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal  + newDepositAmount;
    setElementValueById('balance-total',newBalanceTotal);

})