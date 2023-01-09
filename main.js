import Screen from "./js/Screen";

const screen = new Screen(1000);

screen.turnOn([887,9], [959,629]);
screen.turnOn([454,398], [844,448]);

screen.turnOff([539,243], [559,965]);
screen.turnOff([370,819], [676,868]);
screen.turnOff([145,40], [370,997]);
screen.turnOff([301,3], [808,453]);

screen.turnOn([351,678], [951,908]);

screen.toggle([720,196], [897,994]);
screen.toggle([831,394], [904,860]);


console.log(screen.countOn());