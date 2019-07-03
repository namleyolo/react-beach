let hash = require('object-hash');

class BlockChain {
    constructor() {
        this.chain = [] ;
        this.curr_transactions = [] ;
    }

    addNewBlock(prevhash) {
       let block =  {
           index : this.chain.length + 1 ,
           timestamp : Date.now(), 
           transactions : this.curr_transactions,
        //    hash : null,
           prevhash: prevhash,
       }
        this.hash = hash(block);
        // add to chain
       this.chain.push(block);
       this.curr_transactions = [] ;
       return block ; 
    }
    addNewTransaction(sender, recipe, amount) {
        this.curr_transactions.push({sender,recipe,amount});
    }
    lastBlock() {
        return this.chain.slice(-1)[0];
    }
    isEmpty() {
        return this.chain.length == 0;
    }
}