let numbers = [1, 2, 3]; 
let words = ["book", "laptop", "phone", "car"]; 

describe("sum", function() {
    it("add the values in the array", function() {
        assert.equal(sum(numbers), 6);
    });
});

describe("multiply", function() {
    it("multiply the values in the array", function (){
        assert.equal(multiply(numbers), 6)
    });
}); 

describe("reverse", function (){
    it("reverse the items in the array", function() {
        let reversed = ["car", "phone", "laptop", "book"]; 
        assert.deepEqual(reverse(words), reversed)
    });
});

describe("longest words", function (){
    it("returns the longest words in the array", function() {
        assert.deepEqual(words.filter(filterLongWords), ["phone", "laptop", "book"])
    });
});
