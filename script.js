import {state} from './stateSingleton.js'

let stateStatus = new state(true)


let youtuber1 = stateStatus.addProd('jj');
let jayson = stateStatus.addUser('Jsmooth');
let kevin =  stateStatus.addUser('easymoneysniper7');
kevin.joinChannel(youtuber1);
jayson.joinChannel(youtuber1);
youtuber1.addVid('interview with lebron');
stateStatus.status(false);
console.log(stateStatus.systemState)
let anthony = stateStatus.addUser('the brow');
