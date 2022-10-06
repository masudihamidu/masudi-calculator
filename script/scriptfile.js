  // declaring variables        
    const btns = document.querySelectorAll('.btn');
    const display = document.querySelector('#calculator-screen');
    const calc = document.querySelector('.equal-sign');
    const clear = document.querySelector('.clear');
    const delBtn = document.querySelector('#del');
    
    // attach event listeners to the individual buttons.
    const btnArr = [];
    for(var i=0; i<btns.length; i++){
        btnArr.push(btns[i]);
    }
    btnArr.forEach(function(btn){
        btn.addEventListener('click', function(e){
            display.textContent += e.target.textContent;
        });
    });
    
    // attach event listener to the clear button
    clear.addEventListener('click', function(){
        display.textContent = '';
    });
    
    // attach event listener to the equal to button
    calc.addEventListener('click', function(){
        doMath();
    });
    
    // attach event listener to the delete button
    delBtn.addEventListener('click', function(){
        display.textContent = display.textContent.substr(0, display.textContent.length - 1);
    });
    /* I removed the last character in the displayer everytime the delete button is pressed */
    
    // creating a function that does the math
    const doMath = function(){
        const value = display.textContent;
        if(!value){
            display.textContent = '';
            /* added this if clause to make sure that when the = button is pressed and the display has no values, it will not output 'undefined'. (comment the if block and see the result) */
        } else {
            display.textContent = eval(value);    
        }                
    };
            
    
