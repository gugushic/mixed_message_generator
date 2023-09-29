function randomMessage () {
    let messagesObj = {
        'innerAnimal': ['tiger', 'elephant', 'snake', 'eagle', 'jaguar'],
        'status': ['angry', 'hungry', 'worried about something', 'happy', 'freaked out', 'in love'],
        'action': ['must eat something', 'must get some sleep', 'must dance like a monkey', 'must jump like really high'],
        get animal() {
            return this.innerAnimal[Math.floor(Math.random() * this.innerAnimal.length)];
        },
        get statusRandom () {
            return this.status[Math.floor(Math.random() * this.status.length)];
        },
        get actionRandom () {
          return this.action[Math.floor(Math.random() * this.action.length)];
        }
    }
    console.log (`Your inner animal is ${messagesObj.animal}.`);
    console.log(`Your are currently ${messagesObj.statusRandom}.`);
    console.log(`You definitely ${messagesObj.actionRandom}!`);
  
};

randomMessage();


