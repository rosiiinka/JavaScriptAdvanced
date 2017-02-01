let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe("Test group #1", function () {
    describe('test cases for addFive(nums) function', function () {
        it('should have add, subtract, sum functions', () => {
            expect(mathEnforcer.hasOwnProperty('addFive')).to.be.true;
            expect(mathEnforcer.hasOwnProperty('subtractTen')).to.be.true;
            expect(mathEnforcer.hasOwnProperty('sum')).to.be.true;
        });
        it('should be object, instance of calculator', () => {
            expect(mathEnforcer.addFive("2")).to.be.undefined;
        });
        it('should be object, instance of calculator', () => {
            expect(mathEnforcer.addFive(65)).to.be.equal(70);
        });
        it('should be object, instance of calculator', () => {
            expect(mathEnforcer.addFive(-4)).to.be.equal(1);
        });
        it('should be object, instance of calculator', () => {
            expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
        });
        it('should be object, instance of calculator', () => {
            expect(mathEnforcer.addFive(-2.4)).to.be.equal(-2.4 + 5);
        });
        it('should be object, instance of calculator', () => {
            expect(mathEnforcer.addFive(-10.4)).to.be.equal(-10.4 + 5);
        });
    });
    describe('test cases for subtractTeb(nums) function', function () {
        it('should be object, instance of calculator', () => {
            expect(mathEnforcer.subtractTen("2")).to.be.undefined;
        });
        it('should be object, instance of calculator', () => {
            expect(mathEnforcer.subtractTen(9)).to.be.equal(-1);
        });
        it('should be object, instance of calculator', () => {
            expect(mathEnforcer.subtractTen(30)).to.be.equal(20);
        });
        it('should be object, instance of calculator', () => {
            expect(mathEnforcer.subtractTen(20.4)).to.be.equal(20.4 - 10);
        });
        it('should be object, instance of calculator', () => {
            expect(mathEnforcer.subtractTen(-2)).to.be.equal(-2 - 10);
        });
        it('should be object, instance of calculator', () => {
            expect(mathEnforcer.subtractTen(2)).to.be.equal(2 - 10);
        });
    });
    describe('test cases for sum(numA, numB) function', function () {
        it('should be object, instance of calculator', () => {
            expect(mathEnforcer.sum("2", 9)).to.be.undefined;
        });
        it('should be object, instance of calculator', () => {
            expect(mathEnforcer.sum(2, "9")).to.be.undefined;
        });
        it('should be object, instance of calculator', () => {
            expect(mathEnforcer.sum("2", "9")).to.be.undefined;
        });
        it('should be object, instance of calculator', () => {
            expect(mathEnforcer.sum(30, 1)).to.be.equal(31);
        });
        it('should be object, instance of calculator', () => {
            expect(mathEnforcer.sum(-6, 10)).to.be.equal(4);
        });
        it('should be object, instance of calculator', () => {
            expect(mathEnforcer.sum(-6.4, 11)).to.be.equal(-6.4 + 11);
        });
        it('should be object, instance of calculator', () => {
            expect(mathEnforcer.sum(-6, 11.5)).to.be.equal(-6.4 + 11);
        });
        it('should be object, instance of calculator', () => {
            expect(mathEnforcer.sum(-6, -13)).to.be.equal(-6 + (-13));
        });
        it('should be object, instance of calculator', () => {
            expect(mathEnforcer.sum(-6.2, -13.4)).to.be.equal(-6.2 + (-13.4));
        });
        it('should be object, instance of calculator', () => {
            expect(mathEnforcer.sum(6, -10)).to.be.equal(-4);
        });

    });
});
