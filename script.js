function playerButton(e) {
    const options = ["lapis", "papyrus", "scalpellus"];
  
    if (e.target.id == "lapis") {
      player.currentChoice = options[0];
    } else if (e.target.id == "papyrus") {
      player.currentChoice = options[1];
    } else {
      player.currentChoice = options[2];
    }
  
    const player = {
      currentChoice: null
    };
    const computer = {
      currentChoice: null
    };
    const choices = ["lapis", "papyrus", "scalpellus"];
  
    player.currentChoice = choices[0];
  
    function computerChooses() {
      const randomIndex = Math.floor(Math.random() * choices.length);
      computer.currentChoice = choices[randomIndex];
    }
  
    function compareChoices() {
      computerChooses();
      if (computer.currentChoice === player.currentChoice) {
        displayResult(
          "It's a tie! The computer and player both chose " +
            computer.currentChoice
        );
      } else if (computer.currentChoice === choices[0]) {
        if (player.currentChoice === choices[1]) {
          displayResult(
            "The player wins! The computer chose " +
              computer.currentChoice +
              " and the player chose " +
              player.currentChoice
          );
        } else {
          displayResult(
            "The computer wins! The computer chose " +
              computer.currentChoice +
              " and the player chose " +
              player.currentChoice
          );
        }
      } else if (computer.currentChoice === choices[1]) {
        if (player.currentChoice === choices[2]) {
          displayResult(
            "The player wins! The computer chose " +
              computer.currentChoice +
              " and the player chose " +
              player.currentChoice
          );
        } else {
          displayResult(
            "The computer wins! The computer chose " +
              computer.currentChoice +
              " and the player chose " +
              player.currentChoice
          );
        }
      } else if (computer.currentChoice === choices[2]) {
        if (player.currentChoice === choices[0]) {
          displayResult(
            "The player wins! The computer chose " +
              computer.currentChoice +
              " and the player chose " +
              player.currentChoice
          );
        } else {
          displayResult(
            "The computer wins! The computer chose " +
              computer.currentChoice +
              " and the player chose " +
              player.currentChoice
          );
        }
      }
    }
    function displayResult(result) {
      const resultText = document.createElement("p");
      resultText.innerText = result;
      document.body.appendChild(resultText);
    }
    compareChoices();
  }
  
  function displayResult(result) {
    textResult = document.createElement("p");
    textResult.innerText = result;
    document.body.appendChild(textResult);
  }
  document.getElementById("lapis").addEventListener("click", playerButton);
  
  document.getElementById("papyrus").addEventListener("click", playerButton);
  
  document.getElementById("scalpellus").addEventListener("click", playerButton);
  