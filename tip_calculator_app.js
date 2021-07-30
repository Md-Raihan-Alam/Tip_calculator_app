//all buttons gets color and background-color upgraded=solved
//warning-text is not appearing case of secondCnt bool problem
let letters = /[^0-9]/g;
const totalBillAmount=document.querySelector('#bill_pay');
const peopleNumber=document.querySelector('.poeple_amount');
const availableAmount=document.querySelectorAll('.amount');
const customAmount=document.querySelector('#custom_amount');
const resetBtn=document.querySelector('.reset');
const warningText=document.querySelector('.warning');
let tipAmountResult=document.querySelector('.tip_total');
let totalPersonResult=document.querySelector('.total_amount');
let firstCnt=false;
let secondCnt=false;
let thirdCnt=false;
let tipPercentage;
let billAmount;
let totalPeople;
peopleNumber.value="0";
totalBillAmount.value="0"
customAmount.value="Custom";
availableAmount.forEach((e)=>{
    e.addEventListener('click',function(e2){
        tipPercentage=e.dataset.amount;
        availableAmount.forEach((e3)=>{
            e3.classList.remove('active');
        });
        e2.target.classList.add('active');
        secondCnt=true;
        upgradingResult();
    });
});
//value update
customAmount.addEventListener('click',()=>{
    customAmount.value="";
     availableAmount.forEach((e3)=>{
            e3.classList.remove('active');
     });
});
totalBillAmount.addEventListener('click',()=>{
    totalBillAmount.value="";
});
peopleNumber.addEventListener('click',()=>{
    peopleNumber.value="";
});
//input restriction
customAmount.addEventListener('keyup',function(e){
        customAmount.value=customAmount.value.replace(letters,'');
        tipPercentage=customAmount.value/100;
        secondCnt=true;
        upgradingResult();
});
totalBillAmount.addEventListener('keyup',function(){
    totalBillAmount.value=totalBillAmount.value.replace(letters,'');
    billAmount=totalBillAmount.value;
    firstCnt=true;
    upgradingResult();
});
peopleNumber.addEventListener('keyup',function(){
    peopleNumber.value=peopleNumber.value.replace(letters,'');
    totalPeople=peopleNumber.value;
    thirdCnt=true;
    upgradingResult();
});
function showResult(){
peopleNumber.style.border="none";
warningText.innerText='';
let tipAmount=(billAmount*tipPercentage).toFixed(2);
let tipPerPerson=tipAmount/totalPeople;
let billPerPerson=billAmount/totalPeople;
let totalPayPerPerson=(tipPerPerson+billPerPerson).toFixed(2);
tipAmountResult.innerText=`$${tipAmount}`;
totalPersonResult.innerText=`$${totalPayPerPerson}`;
}
function upgradingResult(){
    if(firstCnt===true){
        if(secondCnt===true){
                setTimeout(()=>{
                    if(thirdCnt===true){
                        peopleNumber.style.border="none";
                        warningText.innerText='';
                        showResult();
                    }else{
                        warningText.innerText=`Can't be zero`;
                        peopleNumber.style.border="1px solid red";
                    }
                },3000);
        }
    }else{
        setTimeout(()=>{
            console.log('code is not working');
        },2000)
    }
}
resetBtn.addEventListener('click',
function(){
    totalBillAmount.value='0';
    peopleNumber.value='0'
    customAmount.value='Custom';
    tipAmountResult.innerText=`$0.00`;
    totalPersonResult.innerText=`$0.00`;
    peopleNumber.style.border="none";
    warningText.innerText=``;
      availableAmount.forEach((e3)=>{
            e3.classList.remove('active');
        });
    firstCnt=false;
    secondCnt=false;
    thirdCnt=false;
});