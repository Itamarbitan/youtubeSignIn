class prod {
    constructor(nickname){
        this.nickname = nickname;
        this.listOfSubs = [];
        this.listOfVidoes = [];
    }

    addVid(video){
        this.listOfVidoes.push(video);
        this.listOfSubs.forEach(sub => { sub.message(video) });
    }
}


export {prod};