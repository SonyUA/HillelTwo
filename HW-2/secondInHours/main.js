const secondsInHours = () => {
    let hours = prompt('Add hours');
    if (!isNaN(parseFloat(hours))) {
        let sec = hours * 60 * 60;
        alert(`У ${hours} годин ${sec} секунд`);
    } else {
        alert('Щось пішло не так повторіть спробу !!!');
        secondsInHours();
    }
};
secondsInHours();
