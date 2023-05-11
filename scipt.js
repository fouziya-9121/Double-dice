
const firstRandomNum = Math.floor(Math.random()* 6) + 1
const firstDiceImage = 'dices/dice' + firstRandomNum + '.png';
document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage);

const secondRandomNum = Math.floor(Math.random()* 6) + 1
const secondDiceImage = 'dices/dice' + secondRandomNum + '.png';
document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage);

if(
    firstRandomNum > secondRandomNum){
        document.querySelector('h1').innerHTML = 'The winner is Fouziya';
    }
    else if (
        firstRandomNum < secondRandomNum){
            document.querySelector('h1').innerHTML = 'The winner is soujanya';

        }
        else{  

                document.querySelector('h1').innerHTML = 'Its draw';
    
            }
