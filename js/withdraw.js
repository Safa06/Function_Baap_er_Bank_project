document.getElementById('btn-withdraw').addEventListener(
    'click',function(){
        const newWithdrawAmount = getInputValueById('withdraw-field');

        const previousWithdrawTotal = getElementValueById('withdraw-total');

        const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

        setElementValueById('withdraw-total',newWithdrawTotal);

        
        const previousBalanceTotal = getElementValueById('balance-total');
        const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;

        setElementValueById('balance-total',newBalanceTotal);

 
    }
)