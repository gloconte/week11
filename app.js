function funTotal() {
}

function askName() { // 20 points
    var name=prompt("Enter your name.")
    return name
}

function human() { // 20 points
    var human = 0;
    do{
        var num = Math.floor(Math.random() * 10) +1
    
        human = human + num;
       
    
        console.log(`Computer new number is ${"randomNum"}. Computer new total is ${human}.`)
    
        var decision = prompt ("Do you want a new number?")
    } while ((human < 20) && (decision = "Y")) 

    return human
}



function randomNumber() {  // 20
    var num = Math.floor(Math.random() * 10) +1
    return num
}


function gaiaQueen () {
do{
    var num = Math.floor(Math.random() * 10) +1

    human = human + num;
  

    console.log(`Computer new number is ${"randomNum"}. Computer new total is ${human}.`)

    var decision = prompt ("Do you want a new number?")
} while ((human < 20) && (decision = "Y"))

}

function comparingNumbers(computer, human) { // ?? 5 points?
    if (computer > human) {
        console.log("computer wins")
    } else if (human > computer) {
        console.log("Human wins")
    }

}

comparingNumbers(human(), gaiaQueen())








