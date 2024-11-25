// Welcome to my first attempt at real JavaScript. God help me

    // Locate the display on the DOM
    const displayScreen = document.getElementById('display');

    // Locate each number button on the DOM
    const displayNumber = document.getElementsByClassName('number');

    // Locate operators on the DOM
    const operator = document.getElementsByClassName('operator');

    // Locate clear button on the DOM
    const allClear = document.getElementById('clear');

    // Define the function that will grab the text from a number button
    function onClick(event) {
       const buttonText = event.target.innerText;
       displayScreen.value += buttonText;

       // If the clicked button is an operator...
       if (event.target.classList.contains('operator')) {
        // Remove .operator-active class from any currently active operator
        const activeOperator = document.querySelector('.operator-active');
        if (activeOperator) {
            activeOperator.classList.remove('operator-active');
        }
        
        // Add .operator-active class to the clicked operator button
        event.target.classList.add('operator-active');
    } else {
        // Proceed with normal flow for number buttons
    }

    // Iterate over each operator button
        for (let i = 0; i < operator.length; i++) {
            const operatorButton = operator[i];
            operatorButton.addEventListener('click', onClick)
        }
    
    }

    // Iterate over each number button in the calulator
    for (let i = 0; i < displayNumber.length; i++) {
        const button = displayNumber[i];
         button.addEventListener('click', onClick)
    }

    // Add event listener to 'AC' button
    allClear.addEventListener('click', clearDisplay);

    // Clear the display when 'AC' is clicked
    function clearDisplay() {
        displayScreen.value = '';

        // Remove the 'operator-active' class from any operator button
        for (let i = 0; i < operator.length; i++) {
            operator[i].classList.remove('operator-active');
        }
    }