function start() {
    let year = prompt('Твій рік народження? (приклад: 1986)');
    let city = prompt('З якого ти міста ?');
    let sport = prompt('Твій улюблений вид спорту ?');
    const currentDate = new Date();
    const age = currentDate.getFullYear() - year;

    if (!isNaN(+year)) {
        let answerAge = `Твій рік народження ${year} тобі ${age}р.`;
        let answerCity = `Ти живеш у ${city}!!!`;
        let answerSport = `Твій улюблений вид спорту ${sport}`;

        switch (year) {
            case null:
                answerAge = `Жаль що ти невказав свій вік`;
                break;
        }

        switch (city) {
            case 'Київ':
                answerCity = `Ти живеш у Києві столиці України!!!`;
                break;
            case 'Лондон':
                answerCity = `Ти живеш у Лондоні столиці Великобританії!!!`;
                break;
            case 'Вашингтон':
                answerCity = `Ти живеш у Вашингтоні столиці USA!!!`;
                break;
            case '':
            case null:
                answerCity = `Жаль що ти невказав місто(((`;
                break;
        }

        switch (sport) {
            case 'Футбол':
                answerSport = `Твій улюблений вид спорту футбол,хочеш бути як Роналдо`;
                break;
            case 'Баскетбол':
                answerSport = `Твій улюблений вид спорту баскетбол,хочеш бути як Джордан`;
                break;
            case 'Бокс':
                answerSport = `Твій улюблений вид спорту бокс,хочеш бути як Тайсон`;
                break;
            case '':
            case null:
                answerSport = `Жаль що ти невказав вид спорту (((`;
                break;
        }
        alert(` ${answerAge}
                ${answerCity} 
                ${answerSport}`);
    } else {
        alert('Рік народження введено некоректно!!!');
        start();
    }
}
start();
