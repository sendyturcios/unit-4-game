



// this creates a random number between 19 and 120 for our magic number 
random_result = Math.floor(Math.random() * 101) + 19;


//this adds the number to our document using the id of magic-number from the HTML
$("#magic-number").html(`Magic Number: ` + random_result);


// This is the array of images of our different crystals
var images = ["assets/images/blue.jpeg", "assets/images/green.jpeg", "assets/images/yellow.jpeg", "assets/images/red.jpeg"]



//this loop is for the 4 crystals - it assigns a random number between 1-12 to each crystal
for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) + 1;

    // this adds an atriubute to our variable named 'crystal' 
    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "id": 'crystal-' + i,
        "data-random": random

    });

    $(".crystals").append(crystal);


    // creates a variable with a new div (img) for our images
    // added an attribute that will reference array of images, and adjust width
    var img = $("<img>")
    img.attr("src", images[i]).attr("width", "170")


    $("#crystal-" + i).append(img)


    }
   


    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var userGuess = 0;



    $(".crystal").on('click', function () {
    
        var num = parseInt($(this).attr('data-random'));

        userGuess += num;

        console.log(userGuess);


        if (userGuess > random_result) {
            lost--;
        
        }

        else if (userGuess < random_result) {
            win++; 

        }
        
    
    });
















