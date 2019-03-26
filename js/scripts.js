function PigDice(){
  this.players = [player1,player2];
}

PigDice.prototype.addPlayer= function(player){
  this.players.push(player);
}

var rollsCounter=0

Player.prototype.rollDice =function(){
  var diceValue= Math.floor(Math.random() * 6)+1;
  rollsCounter++;
  return this.diceValue;

}

function switchPlayer(){
  if(index === 0){
    index =1;
  }
  else{
    index=0;
  }
}

function Player(){
  // this.playerName = name;
  this.rollsCounter = 0;
  this.current= 0;
  this.score= 0;

}


Player.prototype.countCurrent= function(diceValue){
  this.current += diceValue;
  return  this.current;
}

Player.prototype.countScore= function(){
  return this.score += this.current;
}


  function reset(){
    $("#new-game")[0].reset();
}





$(document).ready(function(){
  var index = 0;
  // var newPigDice = new  PigDice();

  var player1 = new Player();
  var player2 = new Player();

  function textResult(){
    $(".current1").text(player1.current);
    $(".current2").text(player2.current);
    $(".score1").text(player1.score);
    $(".score2").text(player2.score);

  }

  $("#new-game").submit(function(event){
    event.preventDefault();

    reset();
  });

  $("#roll").click(function(){
    var diceValue = rollDice();

    $(".dice-value").text(diceValue);
    if (index===0){
      if(diceValue === 1){
        player1.current=0;
        player1.score=0;
        textResult();
        switchPlayer();
      }
      else{
        player1.countCurrent(diceValue);
        player1.countScore();
        textResult();
      }
    }
    else{
      if(diceValue === 1){
        player2.current=0;
        player2.score=0;
        switchPlayer();
        textResult();
      }
      else{
        player2.countCurrent(diceValue);
        player2.countScore();
        textResult();
      }
    }


  });

  $("#hold").click(function(){
    switchPlayer();
  });







});
