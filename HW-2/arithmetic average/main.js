let start = () => {
    let threeNumbers = prompt('Введіть 3 числа через пробіл');
    let arr = threeNumbers.split(' ');
    let numberOne = Number(parseFloat(arr[0]));
    let numberTwo = Number(parseFloat(arr[1]));
    let numberThree = Number(parseFloat(arr[2]));
    if (!isNaN(numberOne) && !isNaN(numberTwo) && !isNaN(numberThree)) {
        let arithmetik = (numberOne + numberTwo + numberThree) / 3;
        alert(`Середнє арифметичне чисел ${numberOne},${numberTwo},${numberThree} буде ${arithmetik}`);
    } else {
        alert(`Щось пішло не так`);
        start();
    }
};
start();
