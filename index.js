/* Distribute the goats and the car to the doors randomly:
    items = []
    Generate a random number i from 0 to 2. In the i position of the
    items = [] array I will put the car and in the remaining two positions
    I will put the goats.

 */

/* Function to make the selected door inactive and change the instructions text */
function doorInactive(current_door, current_button, number_of_door){
    document.getElementById(current_door).classList.add("door-image-selected");
    document.getElementById(current_button).classList.add("inactive");
    document.querySelector(".instructions").innerHTML = "You chose the " + number_of_door + " door!";
    setTimeout(function() {
        document.querySelector(".instructions").innerHTML = "Now I will help you and I will expose one of the wrong doors!"}, 2000);
}

function changeOption(){
    setTimeout(function(){
        document.querySelector(".instructions").innerHTML = "Now I will give you the option to change your initial choice.\nDo you want to change your initial door?"
        document.getElementById("yes-button").classList.remove("hided-button");
        document.getElementById("no-button").classList.remove("hided-button");
    }, 8000);
}

function nobuttonLost(current_door, current_button, choosenDoor){
    document.getElementById(current_door).classList.remove("door-image-selected");
    document.getElementById(current_button).classList.remove("inactive");
    document.querySelectorAll("img")[choosenDoor].src = "./goat.webp";
    document.querySelector(".instructions").innerHTML = "You lost!";
    document.getElementById("yes-button").classList.add("hided-button");
    document.getElementById("no-button").classList.add("hided-button");
    for (b=0; b<3; b++){
        document.querySelectorAll(".door")[b].classList.add("inactive");
    }


}

function nobuttonWon(current_door, current_button, choosenDoor){
    document.getElementById(current_door).classList.remove("door-image-selected");
    document.getElementById(current_button).classList.remove("inactive");
    console.log("I am working");
    document.querySelectorAll("img")[choosenDoor].src = "./car.webp";
    document.querySelector(".instructions").innerHTML = "You WON!";
    document.getElementById("yes-button").classList.add("hided-button");
    document.getElementById("no-button").classList.add("hided-button");
    for (b=0; b<3; b++){
        document.querySelectorAll(".door")[b].classList.add("inactive");
    }
}

function yesbuttonLost(l){
    console.log("The m " + l + " is this")
    document.querySelectorAll("img")[l].src = "./goat.webp";
    document.querySelector(".instructions").innerHTML = "You lost!";
    document.getElementById("yes-button").classList.add("hided-button");
    document.getElementById("no-button").classList.add("hided-button");
    for (b=0; b<3; b++){
        document.querySelectorAll(".door")[b].classList.add("inactive");
    }
}

function yesbuttonWon(l){
    console.log("The m " + l + " is this")
    document.querySelectorAll("img")[l].src = "./car.webp";
    document.querySelector(".instructions").innerHTML = "You WON!";
    document.getElementById("yes-button").classList.add("hided-button");
    document.getElementById("no-button").classList.add("hided-button");
    for (b=0; b<3; b++){
        document.querySelectorAll(".door")[b].classList.add("inactive");
    }
}

/* Creat the array with the items */
var items = [];
var random_number = Math.floor(Math.random() * 3);
/* var random_number = 1; */
console.log(random_number);
for (var i = 0; i<3; i++){
    if (i === random_number){
        items[i] = "car";
    } else {
        items[i] = "goat";
    }
}
console.log(items);

var choice = 0;
var exposed = 0;
var myLenght = document.querySelectorAll(".door").length;

for (var i=0; i < myLenght; i++){
    var myButton = document.querySelectorAll(".door")[i];
    myButton.addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);

        switch(buttonInnerHTML){
            case "1st door":
                choice = 0;
                current_door = "first-door";
                current_button = "firstButton";
                number_of_door = "first";
                doorInactive(current_door, current_button, number_of_door);
                
                
                setTimeout(function(){
                    if (random_number === 0){    
                        expose_number = Math.floor((Math.random()*2) + 1)
                        console.log("The expose number is " + expose_number)
                        document.querySelectorAll("img")[expose_number].src = "./goat.webp";
                        exposed = expose_number;
                        
                    } 
                    else if (random_number !== 0 ) {

                            for (j=0; j<3; j++){
                                if (j!==0 && j!==random_number){
                                    console.log(items[j]);
                                    document.querySelectorAll("img")[j].src = "./goat.webp";
                                    exposed = j;

                                }
                            }
                        }
                    }, 6000);
                
                changeOption();
               

                setTimeout(function(){
                    for (n=0; n<2; n++){
                    var choiceButton = document.querySelectorAll(".yes-no-buttons")[n];
                    choiceButton.addEventListener("click", function(){
                        var choiceInnerhtml = this.innerHTML;
                        console.log(choiceInnerhtml);

                        switch(choiceInnerhtml){
                            case "Yes":
                                for (var m=0; m<3; m++){
                                    if (m!==choice && m!==exposed){
                                        my_item = items[m];
                                        l = m;
                                        switch(my_item){
                                            case "goat":
                                                yesbuttonLost(l);
                                                break;
                                            case "car":
                                                yesbuttonWon(l);
                                                break;

                                        }
                                    }
                                }
                                break;
                            case "No":
                                my_item = items[choice];
                                console.log(my_item);
                                switch(my_item){
                                    case "goat":
                                        current_door = "first-door";
                                        current_button = "firstButton";
                                        choosenDoor = choice;
                                        nobuttonLost(current_door, current_button, choosenDoor);
                                        break;
                                    case "car":
                                        current_door = "first-door";
                                        current_button = "firstButton";
                                        choosenDoor = choice;
                                        nobuttonWon(current_door, current_button, choosenDoor);
                                        break;

                                }
                                
                        }
                    })
                    }
                }, 4000);
                
              
                break;
            case "2nd door":
                choice = 1;
                current_door = "second-door";
                current_button = "secondButton";
                number_of_door = "second";
                doorInactive(current_door, current_button, number_of_door);
                
               
                setTimeout(function(){
                    if (random_number === 1){   

                        expose_number = Math.floor(Math.random()*2)
                        if (expose_number===1){
                            expose_number = 2
                        }
                        console.log("The expose number is " + expose_number)
                        document.querySelectorAll("img")[expose_number].src = "./goat.webp";
                        exposed = expose_number;
                        
                    } 
                    else if (random_number !== 1) {
                           
                            for (j=0; j<3; j++){
                                if (j!==1 && j!==random_number){
                                    console.log(items[j]);
                                    document.querySelectorAll("img")[j].src = "./goat.webp";
                                    exposed = j;

                                }
                            }
                        }
                    }, 6000);
                
                changeOption();

                setTimeout(function(){
                    for (n=0; n<2; n++){
                    var choiceButton = document.querySelectorAll(".yes-no-buttons")[n];
                    choiceButton.addEventListener("click", function(){
                        var choiceInnerhtml = this.innerHTML;
                        console.log(choiceInnerhtml);

                        switch(choiceInnerhtml){
                            case "Yes":
                                for (var m=0; m<3; m++){
                                    if (m!==choice && m!==exposed){
                                        my_item = items[m];
                                        l = m;
                                        switch(my_item){
                                            case "goat":
                                                yesbuttonLost(l);
                                                break;

                                            case "car":
                                                yesbuttonWon(l);
                                                break;

                                        }
                                    }
                                }
                                break;
                            case "No":
                                my_item = items[choice];
                                console.log(my_item);
                                switch(my_item){
                                    case "goat":
                                        current_door = "second-door";
                                        current_button = "secondButton";
                                        choosenDoor = choice;
                                        nobuttonLost(current_door, current_button, choosenDoor);
                                        break;
                                    case "car":
                                        current_door = "second-door";
                                        current_button = "secondButton";
                                        choosenDoor = choice;
                                        nobuttonWon(current_door, current_button, choosenDoor);
                                        break;

                                }
                                
                        }
                    })
                    }
                }, 4000);
                break;

            case "3rd door":
                choice = 2;
                current_door = "third-door";
                current_button = "thirdButton";
                number_of_door = "third";
                doorInactive(current_door, current_button, number_of_door);
               
                
                setTimeout(function(){
                    if (random_number === 2){   
                        expose_number = Math.floor(Math.random()*2)
                        console.log("The expose number is " + expose_number)
                        document.querySelectorAll("img")[expose_number].src = "./goat.webp";
                        exposed = expose_number;
                        
                    } 
                    else if (random_number !== 2 ) {
                           
                            for (j=0; j<3; j++){
                                if (j!==2 && j!==random_number){
                                    console.log(items[j]);
                                    document.querySelectorAll("img")[j].src = "./goat.webp";
                                    exposed = j;

                                }
                            }
                        }
                    }, 6000);
                
                changeOption();

                setTimeout(function(){
                    for (n=0; n<2; n++){
                    var choiceButton = document.querySelectorAll(".yes-no-buttons")[n];
                    choiceButton.addEventListener("click", function(){
                        var choiceInnerhtml = this.innerHTML;
                        console.log(choiceInnerhtml);

                        switch(choiceInnerhtml){
                            case "Yes":
                                for (var m=0; m<3; m++){
                                    if (m!==choice && m!==exposed){
                                        my_item = items[m];
                                        l = m;
                                        switch(my_item){
                                            case "goat":
                                                yesbuttonLost(l);
                                                break;
                                            case "car":
                                                yesbuttonWon(l);
                                                break;

                                        }
                                    }
                                }
                                break;
                            case "No":
                                my_item = items[choice];
                                console.log(my_item);
                                switch(my_item){
                                    case "goat":
                                        current_door = "third-door";
                                        current_button = "thirdButton";
                                        choosenDoor = choice;
                                        nobuttonLost(current_door, current_button, choosenDoor);
                                        break;
                                    case "car":
                                        current_door = "third-door";
                                        current_button = "thirdButton";
                                        choosenDoor = choice;
                                        nobuttonWon(current_door, current_button, choosenDoor);
                                        break;

                                }
                                
                        }
                    })
                    }
                }, 4000);

               
        }


    }

    );
} 

