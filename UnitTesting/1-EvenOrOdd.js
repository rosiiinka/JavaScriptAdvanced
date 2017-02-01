function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe("Test group #1", function() {
    it("should return undefined when not a string", function()  {
        expect(isOddOrEven(677)).to.be.equal("Function did not return the correct result");
    });
    it('should return undefined on {new Date}', () => {
        expect(isOddOrEven(new Date())).to.be.undefined;
    });
    it("should return undefined when not a string", function() {
        expect(isOddOrEven("five")).to.be.equal("even","Function did not return the correct result");
    });
    it("should return undefined when not a string", function() {
        expect(isOddOrEven("two")).to.be.equal("odd","Function did not return the correct result");
    });
    it('should return even on {""}', () => {
        expect(isOddOrEven("")).to.equal('even');
    });
});