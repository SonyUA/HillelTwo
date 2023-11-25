let startOperation = () => {
    let numbers = prompt('Введіть два числа через пробіл цифру');
    let inArray = numbers.split(' ');
    let numOne = Number(parseFloat(inArray[0]));
    let numTwo = Number(parseFloat(inArray[1]));

    if (!isNaN(numOne) && !isNaN(numTwo)) {
        operation(numOne, numTwo);
    } else {
        alert('Щось пішло не так повторіть спробу');
        startOperation();
    }
};

let operation = (one, two) => {
    alert(`Введені номери ${one} та ${two}
        ${one} + ${two} = ${one + two},
        ${one} - ${two} = ${one - two},
        ${one} * ${two} = ${one * two},
        ${one} / ${two} = ${one / two}.
    `);
};
startOperation();
