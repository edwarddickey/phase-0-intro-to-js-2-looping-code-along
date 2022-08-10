// Code your solutions in this file
function writeCards(cards, event){
    let thankYouCards = []
    for(let i=0;i< cards.length; i++){
        
        thankYouCards.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards
}
function countDown(start){
    while(start>0){
        console.log(start);
        start -=1;
    }
    console.log(start);
}