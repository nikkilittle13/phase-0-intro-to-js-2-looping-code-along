function writeCards(names) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
  }
  return messages;
}

function countDown(number) {
  for (let countDown = number; countDown >= 0; countDown--) {
    console.log(countDown);
  }
}