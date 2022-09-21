class CheckingAccount extends Account {
    constructor(number, overDraft) {
        super(number);
        this._overDraft = overDraft; 
    }

    getOverDraft(){
        return this._overDraft; 
    }

    setOverDraft(overDraft) {
        this._overDraft = overDraft;
    }

    withdraw(amount, overDraft) {
        if(amount > overDraft){
            throw new Error("Withdraw amount must not exceed the over draft limit");
        }
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    toString() {
        return "Checking Account " + this._number + ": balance " + this._balance + ": overdraft  " + this._overDraft;
    }

    endOfMonth() {
        const balance = super.getBalance(); 
        if(balance <= 0){
            return `Warning, low balance CheckingAccount ${super.getNumber()}: balance: ${balance} overdraft limit: ${this._overDraft}`; 
        }
    }
}