function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
}
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
    return string.charAt(index);
}

describe("Test group #1", function() {

    it("should return unidefined when first is not a string", function() {
        expect(lookupChar(78,4)).to.be.undefined;
    });
    it("should return unidefined when first is not a integer", function() {
        expect(lookupChar("pesho", "two")).to.be.undefined;
    });
    it('should return undefined on lookupChar("test", 1.23)', function() {
        expect(lookupChar("test", 5.25)).to.equal(undefined);
    });
    it("should return unidefined when first is not a integer", function() {
        expect(lookupChar("pesho", 5)).to.be.equal("Incorrect index");
    });
    it("should return unidefined when first is not a integer", function() {
        expect(lookupChar("pesho", 10)).to.be.equal("Incorrect index");
    });
    it("should return unidefined when first is not a integer", function() {
        expect(lookupChar("pesho", -3)).to.be.equal("Incorrect index");
    });
    it("should return unidefined when first is not a integer", function() {
        expect(lookupChar("pesho", 0)).to.be.equal("p");
    });
    it("should return unidefined when first is not a integer", function() {
        expect(lookupChar("pesho", 3)).to.be.equal("h");
    });




});
