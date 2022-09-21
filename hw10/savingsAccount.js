class SavingsAccount extends Account {
    constructor(number, interest){
        super(number);
        this._interest = interest; 
    }

    getInterest() {
        return this._interest; 
    }

    setInterest(interest) {
        this._interest = interest;
    }

    addInterest() {
        console.log("balance " + super.getBalance())
        super._balance += (super.getBalance() * this._interest) / 100;
    }
    
    toString() {
        return "Saving Account " + super.getNumber() + ": balance " + super.getBalance();
    }

    endOfMonth() {
        return `Interest added SavingsAccount ${super.getNumber()}: balance: ${super.getBalance()} interest: ${this.getInterest()}`
    }
}