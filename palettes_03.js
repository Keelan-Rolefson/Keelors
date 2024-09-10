"use strict";

const savePaletteButton = document.getElementById('savePaletteBtn');
let savedPaletteColorsContainer = document.getElementById('savedPaletteColorsContainer');
let savedPaletteColor = savedPaletteColorsContainer.firstElementChild;
let savedPaletteColorHex = savedPaletteColor.firstElementChild.firstElementChild;
let nameInput = document.getElementById('paletteNameInput');
let colors = [];
let newPalettes = [];


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
    setColors() {
        colors.forEach((_colors) => {
        })
    }
}

const paletteSummer = new Palette('Summer', ['#FFAF87','#FF8E72','#ED6A5E']);
const paletteAutumn = new Palette('Autumn', ['#A53F2B','#4C230A','#280004']);

newPalettes.push(paletteAutumn, paletteSummer);

nameInput.addEventListener('input', () => {
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
   console.log(colors);
   newPalette.setColors();
   newPalettes.push(newPalette);
});