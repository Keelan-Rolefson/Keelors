"use strict";

const savePaletteButton = document.getElementById('savePaletteBtn');
let savedPaletteColorsContainer = document.getElementById('savedPaletteColorsContainer');
let savedPaletteColor = savedPaletteColorsContainer.firstElementChild;
let savedPaletteColorHex = savedPaletteColor.firstElementChild.firstElementChild;
let nameInput = document.getElementById('paletteNameInput');
let nameSpace = document.getElementById('paletteNameInput').value;
let colors = [];
let newPalettes = [];

function init() {
    window.onload
}

class Palette {
    constructor(name, colors) {
        this._name = name;
        this._colors = colors;
    }
    get name() {
        return this._name;
    }
    get colors() {
        return this._colors;
    }
    setName() {
        
    }
    setColors() {
        colors.forEach((_colors) => {
        })
    }
}

const paletteSummer = new Palette('Summer', ['#FFAF87','#FF8E72','#ED6A5E']);
const paletteAutumn = new Palette('Autumn', ['#A53F2B','#4C230A','#280004']);

newPalettes.push(paletteAutumn, paletteSummer);

nameInput.addEventListener('submit', () => {
    nameSpace = document.getElementById('paletteNameInput').value;
})

savePaletteButton.addEventListener('click', () => {
 let name = nameInput.value;
  for (let i = 0; i < swatchInputs.length; i++) {
   colors.push(swatchInputs[i].value);
   if (i === 0) {
    savedPaletteColor.style = "background-color: " + colors;
    savedPaletteColorHex.textContent = colors;
   }
   if (i > 0) {
    const newPaletteColor = savedPaletteColor.cloneNode(true);
    savedPaletteColorsContainer.appendChild(newPaletteColor);
    newPaletteColor.style = "background-color: " + colors[i];
    savedPaletteColorHex.textContent = colors[i];
   }  
  }    
 let newPalette = new Palette(name, colors);
 newPalette.setColors();
 newPalettes.push(newPalette);
});