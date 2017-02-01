function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}
describe("Test group #1", function() {
    it('should return undefined on rgbToHexColor([])', () => {
        expect(rgbToHexColor([])).to.be.undefined;
    });
    it('should return #B0171F on rgbToHexColor(214, 117, 122)', () => {
        expect(rgbToHexColor(214, 117, 122)).to.equal('#d6757a');
        expect(rgbToHexColor(214, 117, 122)).to.be.an('string');
    });

    it('should return undefined on rgbToHexColor(176,	23,	-31)', () => {
        expect(rgbToHexColor(176, 23, -31)).to.be.undefined;
    });

    it('should return #000000 on rgbToHexColor(0, 0, 0)', () => {
        expect(rgbToHexColor(0,0,0)).to.be.equal('#000000');
    });

    it('should return #FFFFFF on rgbToHexColor(255, 255, 255)', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('should return #002264 on rgbToHexColor(0, 34, 100)', () => {
        expect(rgbToHexColor(0, 34, 100)).to.be.equal('#002264');
    });

    it('should return undefined on rgbToHexColor(0, 34)', () => {
        expect(rgbToHexColor(0, 34)).to.be.undefined;
    });

    it('should return undefined on rgbToHexColor(255, 255, 256)', () => {
        expect(rgbToHexColor(255, 255, 256)).to.be.undefined;
    });

    it('should return undefined on rgbToHexColor(0, -1, 0)', () => {
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    });

    it('should return undefined on rgbToHexColor(0)', () => {
        expect(rgbToHexColor(0)).to.be.undefined;
    });

    it('should return undefined on rgbToHexColor("pesho")', () => {
        expect(rgbToHexColor("pesho")).to.be.undefined;
    });
});
