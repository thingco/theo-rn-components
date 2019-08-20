export function hexToRgbVector(hexValue) {
    const rgbComponents = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexValue);
    if (rgbComponents !== null && rgbComponents.length === 4) {
        // NOTE the initial comma here is not an error: the first element is
        // the original input string and should be ignored.
        const [, r, g, b] = rgbComponents;
        return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)];
    }
    else {
        throw new Error(`Unreadable colour hex: ${hexValue}`);
    }
}
export function rgbComponentToHex(rgbComponent) {
    const hex = rgbComponent.toString(16);
    return hex.padStart(2, "0");
}
export function rgbVectorToHex([r, g, b]) {
    return `#${rgbComponentToHex(r)}${rgbComponentToHex(g)}${rgbComponentToHex(b)}`;
}
export function tintRgbComponent(rgbComponent, tintPercent) {
    if (tintPercent >= 0 && tintPercent <= 1) {
        return Math.floor(rgbComponent + (255 - rgbComponent) * tintPercent);
    }
    else {
        throw new Error(`Tint percent value must be between 0 and 1 inclusive, value given was ${tintPercent}.`);
    }
}
export function tintHex(hexValue, tintPercent) {
    const [r, g, b] = hexToRgbVector(hexValue);
    return rgbVectorToHex([
        tintRgbComponent(r, tintPercent),
        tintRgbComponent(g, tintPercent),
        tintRgbComponent(b, tintPercent),
    ]);
}
//# sourceMappingURL=colour-functions.js.map