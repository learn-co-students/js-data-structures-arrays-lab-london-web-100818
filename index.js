// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
    drivers.push(name);
}

function destructivelyPrependDriver(name){
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
    drivers.pop();
}

function destructivelyRemoveFirstDriver(){
    drivers.shift();
}

function appendDriver(name){
    array = [...drivers.slice(), name]
    return array;
}

function prependDriver(name){
    array = [name, ...drivers.slice()];
    return array;
}

function removeLastDriver(){
    array = [...drivers.slice(0, drivers.length - 1)];
    return array;
}

function removeFirstDriver(){
    array = [...drivers.slice(1)];
    return array;
}




