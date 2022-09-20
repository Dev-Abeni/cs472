let bannedWordsTest = ["not", "hell"];
let textTest = { word: "Hell of a woman!!" }

window.onload = tester;

function tester() {
    describe("banned word filter", function() {
        it("returns a new string after filtering some banned words", function() {
            assert.equal(filter(bannedWordsTest, textTest), "of a woman!")
        });
    });

    mocha.run();
}