class Bank {
    static nextNumber; 
    
    constructor() {
        this.accounts = [];
        nextNumber = (Math.random() * (1000 - 100));
    }

    getNextNumber() {
        return this.nextNumber;
    }

    addAccount() {
        let account = new Account(this.getNextNumber()); 
        this.accounts.push(account);
        return this.getNextNumber();
    }

    addSavingsAccount(interest) {
        let savingsAcccount = new SavingAccount(this.getNextNumber(), interest); 
        this.account.push(savingsAcccount); 
        return this.getNextNumber();
    }

    addCheckingAccount(overdraft) {
        let checkingAccount = new CheckingAccount(this.getNextNumber(), overdraft);
        this.account.push(checkingAccount); 
        return this.getNextNumber();
    }

    closeAccount(number) {
        let account = this.accounts.find(num => num === number); 
        this.accounts.splice(this.accounts.indexOf(account), 1);
        return account;
    }

    endOfMonth(){ 
        let accountInfo = this.accounts.map(acc => acc.endOfMonth());
        console.log(accountInfo);
    }

}