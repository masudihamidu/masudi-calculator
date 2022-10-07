const btns = document.querySelectorAll('.btn');
const display = document.querySelector('#calculator-screen');
const calc = document.querySelector('.equal-sign');
const clear = document.querySelector('.clear');
const delBtn = document.querySelector('#del');

const user = prompt("Enter your name");
if (user == null || user == ""){
    alert("You canceled the prompt");
}
else{
    alert("Hello! " + user + ", welcome to Masudi Calculator");
}

const btnArr = [];
for(var i=0; i<btns.length; i++){
    btnArr.push(btns[i]);
}
btnArr.forEach(function(btn){
    btn.addEventListener('click', function(e){
        display.textContent += e.target.textContent;
    });
});


clear.addEventListener('click', function(){
    display.textContent = '';
});

calc.addEventListener('click', function(){
    doMath();
});

delBtn.addEventListener('click', function(){
    display.textContent = display.textContent.substr(0, display.textContent.length - 1);
});

const doMath = function(){
    const value = display.textContent;
    if(!value){
        display.textContent = '';
    } else {
        display.textContent = eval(value);    
    }                
};
        

