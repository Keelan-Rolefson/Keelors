"use strict";

const savePaletteButton = document.getElementById('savePaletteBtn');
const savedPaletteWrap = document.getElementById('savedPaletteWrap');
const savedPaletteContainer = document.getElementById('savedPaletteContainer');
const savedPalettesWrap = document.getElementById('savedPalettesWrap');
const savedPalettesContainer = document.getElementById('savedPalettesContainer');
const addPaletteButton = document.getElementById('addPaletteBtn');
const activePalette = document.getElementById('activePaletteWrap');
const swatches = document.getElementById('swatchesWrap');
const swatch = document.getElementById('swatchWrap0');
const swatchId = document.getElementById('swatchWrap0').id;
const addSwatchButton = document.getElementById('addSwatchBtn');
let swatchInputs = document.querySelectorAll('.swatch_input');
let hexValues = document.querySelectorAll('span.hex_value');
let rgbValues = document.querySelectorAll('span.rgb_value');

let swatchIds = [];

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
    if (swatchIds.length === 4) {
        let newRow = swatches.cloneNode(true);
        activePalette.append(newRow);
    }
    if (swatchIds.length != 4) {
        let newSwatch = swatch.cloneNode(true);
        let newId = swatchId.slice(0,10).concat(swatchIds.length+1);
        swatches.append(newSwatch);
        newSwatch.id = newId;
        swatchIds.push(newId);
        swatchInputs = document.querySelectorAll('input.swatch_input');
        hexValues = document.querySelectorAll('span.hex_value');
        rgbValues = document.querySelectorAll('span.rgb_value');
    } else {
        return
    }
}

addSwatchButton.addEventListener('click', addSwatch);

