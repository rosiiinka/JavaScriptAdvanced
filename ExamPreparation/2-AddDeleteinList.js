let list = (function () {
    let data = [];
    return {
        add: function (item) {
            data.push(item);
        },
        delete: function (index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function () {
            return data.join(", ");
        }
    };
})();
let looku = require('../lookup-char').lookupChar;
let expect = require('chai').expect;

describe('test #1', function () {
    it('should have add, delete, toString functions', () => {
        expect(list.hasOwnProperty('add')).to.be.true;
        expect(list.hasOwnProperty('delete')).to.be.true;
        expect(list.hasOwnProperty('toString')).to.be.true;
    });
    describe('test add', function () {
        it('should be object, instance of calculator', () => {
            expect(list.toString()).to.be.equal("");
        });
        it('should be object, instance of calculator', () => {
            list.add(6);
            expect(list.toString()).to.be.equal("6");
        });
        it('should be object, instance of calculator', () => {
            list.add("Marto");
            expect(list.toString()).to.be.equal("Marto");
        });
        it('should be object, instance of calculator', () => {
            list.add("Marto");
            list.add("Tosho");
            list.add("Zaho");
            expect(list.toString()).to.be.equal("Marto, Tosho, Zaho");
        });
    })

    describe('test delete', function () {
        it('should be object, instance of calculator', () => {
            expect(list.delete('Pesho')).to.be.equal(undefined);
        });
        it('should be object, instance of calculator', () => {
            expect(list.delete(3.4)).to.be.equal(undefined);
        });
        it('should be object, instance of calculator', () => {
            list.add(15);
            list.delete(3.4);
            expect(list.toString()).to.be.equal('15');
        });

        it('should be object, instance of calculator', () => {
            expect(list.delete(0)).to.be.equal(undefined);
            expect(list.toString()).to.be.equal("");
        });
        it('should be object, instance of calculator', () => {
            list.add(3);
            list.add('two');
            expect(list.delete(2)).to.be.equal(undefined);
        });
        it('should be object, instance of calculator', () => {
            list.add(3);
            expect(list.delete(0)).to.be.equal('3');
        });
        it('should be object, instance of calculator', () => {
            list.add(3);
            list.add(10);
            list.add(8);
            list.delete(2);
            expect(list.toString()).to.be.equal("3, 10");
        });
        it('should be object, instance of calculator', () => {
            list.add(3);
            list.add(10);
            list.add(30);
            list.add(8);
            list.delete(2);
            expect(list.toString()).to.be.equal("3, 10, 8");
        });


    });
});

