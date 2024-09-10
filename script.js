"use strict";

const swatches = document.getElementById('swatchesWrap');
const swatch = document.getElementById('swatchWrap0');
const addSwatchButton = document.getElementById('addSwatchBtn');
let swatchInputs = document.querySelectorAll('.swatch_input');
let hexValues = document.querySelectorAll('span.hex_value');
let rgbValues = document.querySelectorAll('span.rgb_value');


swatches.addEventListener('input', (event) => {
    if(event.target.tagName === 'INPUT') {
        const color = event.target.value;
        let hexText = event.target.parentNode.nextSibling.nextSibling.childNodes[1];
        let rgbText = event.target.parentNode.nextSibling.nextSibling.childNodes[5];
        hexText.textContent = color;
        rgbText.textContent = hexToRgb(color);

    }
    function hexToRgb(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `(${r}, ${g}, ${b})`;
    }
})

// Add swatch

function addSwatch() {
    if (swatchInputs.length === 4) {
        let newRow = swatches.cloneNode(true);
        activePalette.append(newRow);
    }
    if (swatchInputs.length != 4) {
        let newSwatch = swatch.cloneNode(true);
        swatches.append(newSwatch);
        swatchInputs = document.querySelectorAll('input.swatch_input');
        hexValues = document.querySelectorAll('span.hex_value');
        rgbValues = document.querySelectorAll('span.rgb_value');
    } else {
        return
    }
}

addSwatchButton.addEventListener('click', addSwatch);

