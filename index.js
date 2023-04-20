// Code your solutions in this file

function writeCards(names, occasion) {
    let messages = [];
    for (let name of names) {
      let message = `Thank you, ${name}, for the wonderful ${occasion} gift!`;
      messages.push(message);
    }
    return messages;
  }


function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }
  
  countDown(10);