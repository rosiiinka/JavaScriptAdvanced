function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}
describe("Test group #1", function() {
    //za wseki put kogato iskam da ne se pazi stara stohnost
    let calc;
    beforeEach(function() {
        calc = createCalculator();
    });
    it('should be object, instance of calculator', () => {
        expect(calc).to.be.an('object');
    });
    it('should have add, subtract, get functions', () => {
        expect(calc.hasOwnProperty('add')).to.be.true;
        expect(calc.hasOwnProperty('subtract')).to.be.true;
        expect(calc.hasOwnProperty('get')).to.be.true;
    });
    it("should return 5 after {add 3; add 2}", function() {
        calc.add(3); calc.add(2);
        expect(calc.get()).to.be.equal(5);
    });
    it("should return 5 after {add 3; add 2}", function() {
        calc.subtract(3); calc.subtract(2);
        expect(calc.get()).to.be.equal(-5);
    });
    it("should return 5 after {add 3; add 2}", function() {
        calc.add(5.3); calc.subtract(1.1);
        expect(calc.get()).to.be.equal(4.2);
    });
    it("should return 5 after {add 3; add 2}", function() {
        calc.add(10); calc.subtract('7'); calc.add('-2'); calc.subtract(-1);
        expect(calc.get()).to.be.equal(2);
    });
    it("should return 5 after {add 3; add 2}", function() {
        calc.add('hello');
        expect(calc.get()).to.be.NaN        ;
    });
    it("should return 5 after {add 3; add 2}", function() {
        calc.subtract('hello');
        expect(calc.get()).to.be.NaN();
    });

});
// create; get  0
// create; add(2); add(3); get  5
// create; subtract(3); subtract(2); get  -5
// create; add(5.3); subtract(1.1); get  4.2
// create; add(10); subtract('7'); add('-2'); subtract(-1); get  2
// create; add('hello'); get  NaN
// create; subtract('hello'); get  NaN
