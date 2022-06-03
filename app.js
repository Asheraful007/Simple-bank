//Login button event handelar
document.getElementById("login-btn").addEventListener("click", function(){
    let loging_area = document.getElementById("login-area");
    loging_area.style.display="none";
    let transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display="block";
});



//Deposit button event handelar
    document.getElementById('deposit-btn').addEventListener("click",function(){
    let depositAmount = document.getElementById("depositAmount").value;
    let depositNum = parseFloat(depositAmount);
    depositAmount = document.getElementById("depositAmount").value ="";
    
    let currentDeposit = document.getElementById("currentDeposit").innerText;
    let currentDepositNum = parseFloat(currentDeposit);
    let totalDeposit = depositNum + currentDepositNum;
    document.getElementById("currentDeposit").innerText = totalDeposit;

    let currentBalance = document.getElementById("currentBalance").innerText;
    let currentBalanceNum = parseFloat(currentBalance);
    let totalBalance = currentDepositNum + currentBalanceNum;
    document.getElementById("currentBalance").innerText = totalBalance;

});

//Widraw

let widrawBtn = document.getElementById("addWidraw");
    widtrawBtn.addEventListener("click", function{
let widrawAmount = document.getElementById("widteawAmount").value;
let widrawNum = parseFloat(widrawAmount);
});