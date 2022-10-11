let btns = document.querySelectorAll('.btn');
let display = document.querySelector('#calculator-screen');
let calc = document.querySelector('.equal-sign');
let clear = document.querySelector('.clear');
let delBtn = document.querySelector('#del');

let user = prompt("Enter your name");
if (user == null || user == ""){
    alert("You canceled the prompt");
}
else{
    alert("Hello! " + user + ", welcome to Masudi Calculator");
}

let btnArr = [];
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

let doMath = function(){
    let value = display.textContent;
    if(!value){
        display.textContent = '';
    } else {
        display.textContent = eval(value);    
    }                
};
        

