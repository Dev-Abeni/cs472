window.onload = tester; 

// let account = new Account(1234); 
// account.deposit(100);

let bank = new Bank();
console.log(bank.addAccount());
console.log(bank.savingsAcccount(10));
console.log(bank.addCheckingAccount(50));

let savingsAcccount = new SavingsAccount(1234, 10); 


function tester() {
    describe("getNumber", function() {
        it("should return the current account number", function() {
            assert.equal(account.getNumber(), 1234); 
        });
    });
    
    describe("deposit", function() {
        it("should throw an exception if amount is less than or equal to 0", function() {
            chai.expect(account.deposit(0)).to.throw(RangeError, "Deposit amount has to be greater than zero");
        });
    });

    describe("withdraw", function() {
        it("should throw an exception if amount is less than or equal to 0", function() {
            chai.expect(account.withdraw(0)).to.throw(RangeError, "Withdraw amount has to be greater than zero");
        });
    });

    describe("withdraw", function() {
        it("should throw an exception if withdraw is greater than the balance", function() {
            chai.expect(account.withdraw(150)).to.throw(Error, "Insufficient funds");
        });
    });

    describe("getBalance", function() {
        it("should return the available balance in the account", function() {
            assert.equal(account.getBalance(), 100);
        });
    });

    describe("toString", function() {
        it("should return a string with the account number and the available balance", function() {
            assert.equal(account.toString(), "Account 1234: balance 100");
        });
    });

    describe("endOfMonth", function() {
        it("should return an empty string", function() {
            assert.equal(account.endOfMonth(), "");
        });
    });

    describe("getInterest", function() {
        it("should return the interest rate for the account", function() {
            assert.equal(savingsAcccount.getInterest(), 10); 
        });
    });

    describe("addInterest", function() {
        it("should return the amount after adding interest rate", function() {
            assert.equal(savingsAcccount.addInterest(), 110); 
        });
    });

    mocha.run();
}