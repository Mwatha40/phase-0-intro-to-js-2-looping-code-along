
function writeCards(names,) {
    let thankYouMessages = [];

    for (let i = 0; i < names.length; i++) {
        let message = 'Thank you, ${names){i}}, for the wonderful ${eventName} surprise gift!';
        thankYouMessages.push(message);

    }
    return thankYouMessages;
}

const names=["Guadalupe","Ollie","Aki"];
const eventNames="birthday";
const messages=writeCards(names,eventName);
console.log(i);

function countDown(number){
    for (let i=number;i>=0;i--){
        console.log(i);
    }
}

countDown(10);