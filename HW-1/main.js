let res = () => {
    let name = prompt("Вкажіть ваше імя");
    let conf = confirm(`Вас звати ${name}??`);
    conf ? confirm(`Привіт ${name}`) : res();
};

res();
