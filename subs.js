class sub {
    constructor(nickname){
        this.nickname = nickname;
    }

    joinChannel(producer){
        producer.listOfSubs.push(this);
        console.log(`you have subscribe to ${producer.nickname} channel`);
    }

    message(video){
        console.log(`check out the new ${video} `)
    }
}

export {sub};