import { prod } from "./producers.js";
import { sub} from "./subs.js"

class state {
    constructor(Boolean){
        this.systemState = Boolean;
    }

    addUser(nickname){
        if (this.systemState){
            return new sub(nickname);
        }
        else {console.log('were sorry , please comeback when the system is on')};

    }

    addProd(nickname){
        if (this.systemState){
            return new prod(nickname) ;
        }
        else {console.log('were sorry , please comeback when the system is on')};

    }

    status(bool){
        this.systemState = bool
    }

}

export {state};