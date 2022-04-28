var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// combine multiple values like so
console.log(playerName, playerHealth, playerAttack);


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    
    // while (enemyHealth > 0) {
    while (playerHealth > 0 && enemyHealth > 0) {

        // Prompt to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to chose" );

        // if player chooses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
        
        // Confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");

            // Subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("Player Money: " + playerMoney);
            break;
            }
        }

        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );



        // Check enemies health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            // Award player money for winning
            playerMoney = playerMoney + 20;

            // Exit loop since enemy is dead
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        

        // Subtract the value of "enemyAttack" from the value of "playerHealth" and use that value to update the value in the "playerHealth" variable
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // Check player's health
        if (playerHealth <= 0) {    
            window.alert(playerName + " has died!");
            // Exit loop if player is dead
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } // end of while loop
};  // end of fight function

for (var i = 0; i < enemyNames.length; i++) {
    
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i+1));

        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;

        fight(pickedEnemyName);
    } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}
