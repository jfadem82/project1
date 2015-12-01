var handValueArray = []
var suits = ['c', 'd', 'h', 's'];
var ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
var values = {
  A: 1,
  T: 10,
  J: 10,
  Q: 10,
  K: 10
} ;

var pack = ['Ac', '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', 'Tc', 'Jc', 'Qc', 'Kc', 'Ad', '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', 'Td', 'Jd', 'Qd', 'Kd', 'Ah', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', 'Th', 'Jh', 'Qh', 'Kh', 'As', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', 'Ts', 'Js', 'Qs', 'Ks']

var player1_hand = [] ;

var dealer_hand = [] ;

function deal(){
  hitDealer();
  hitDealer();
  hitMe();
  hitMe();
  console.log(dealer_hand);
  console.log(player1_hand);
  //evaluate();


}

function hitDealer () {
  var card = Math.floor((Math.random() * pack.length));
  console.log(pack[card]);
  dealer_hand.push(pack.splice(card, 1)[0]);
}

function hitMe () {

  var card = Math.floor((Math.random() * pack.length));
  console.log(pack[card]);
  player1_hand.push(pack.splice(card, 1)[0]);
  // var card = deal one random card from the pack array (remove it from the array)

  
  //evaluate();

}


function checkPlayerHand() {
  var sum = 0;
  for (var i = 0; i < player1_hand.length; i++) {
    var currentCard = player1_hand[i].split('')[0];
    console.log(currentCard)

    if(values[currentCard]){
      sum += parseInt(values[currentCard])
    } else {
      sum += parseInt(currentCard)
    }
    //if value > 21 then lose

  }
  return sum
}



/*function evaluate() {
  checkDealerHand();
  checkPlayerHand();
}*/

/*function evaluate(){
  function checkHand(player1_hand){
    
    /*else if ranks = 'T'
      return 10;
    else if ranks = 'J'
      return 10;
    else if ranks = 'Q'
      return 10;
    else if ranks = 'K'
      return 10;*/
   // else 
   //   return 10
   //var value = evaluate.ranks.player1_hand[0];
    //return value;

    

  //console.log(values.player1_hand);
  
  //};
//};

