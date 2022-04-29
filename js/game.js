var fight = function(enemy) {
    
    // while (enemy.health > 0) {
    while (playerInfo.health > 0 && enemy.health > 0) {

        // Prompt to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to chose" );

        // if player chooses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
        
            // Confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");

                // Subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("Player Money: " + playerInfo.money);
                break;
            }
        }

        // Generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);

        // Log a resulting message to the console so we know that it worked
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );



        // Check enemies health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");

            // Award player money for winning
            playerInfo.money = playerInfo.money + 20;
    
            // Exit loop since enemy is dead
            break;
        }
        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        

        // Subtract the value of "enemy.attack" from the value of "playerInfo.health" and use that value to update the value in the "playerInfo.health" variable

        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);

        // Log a resulting message to the console so we know that it worked
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );

        // Check player's health
        if (playerInfo.health <= 0) {    
            window.alert(playerInfo.name + " has died!");
            // Exit loop if player is dead
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    } // end of while loop
};  // end of fight function


// Function to start a new game
var startGame = function() {
    console.log(playerInfo.name, playerInfo.health, playerInfo.attack);

    // Reset player stats
    // playerInfo.health = 100;
    // playerInfo.attack = 10;
    // playerInfo.money = 10;

    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));

            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);

            fight(pickedEnemyObj);

            // if we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                // Ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                // If yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
                
            }
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    // after the loop ends, player is either out of health or enemies to fight, so run the end game function
    endGame();
}

// Function to end the entire game
var endGame = function() {
    // If player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }

    // Ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // Restart game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
    
}

var shop = function() {
    // Ask player what they'd like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.")

    // Use switch to carry out action
    switch (shopOptionPrompt) {

        case "REFILL": // New case
        case "refill":
            playerInfo.refillHealth();
            break;

        case "UPGRADE": // New case
        case "upgrade":
            playerInfo.upgradeAttack;
            break;

        case "LEAVE": // New case
        case "leave":
            window.alert("Leaving the store.");

            // Do nothing so the function will end
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");

            // Call shop() again to force player to pick a valid option
            shop();
            break;
    }
}

// Function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min +1) + min);

    return value;
}

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,

    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },

    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    },

    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    }
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },

    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },

    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

// Start the game when the page loads
startGame();