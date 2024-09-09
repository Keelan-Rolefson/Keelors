const savePaletteButton = document.getElementById('savePaletteBtn');
const savedPalettesWrap = document.getElementById('savedPalettesWrap');
const savedPalettesContainer = document.getElementById('savedPalettesContainer');
const savedPaletteWrap = document.getElementById('savedPaletteWrap');
const savedPaletteContainer = document.getElementById('savedPaletteContainer');
let savedPaletteColorsContainer = document.getElementById('savedPaletteColorsContainer');
let savedPaletteColor = savedPaletteColorsContainer.firstChild.nextSibling;
const activePalette = document.getElementById('activePaletteWrap');
const addPaletteButton = document.getElementById('addPaletteBtn');

function savePalette() {
  for (let i = 0; i < swatchInputs.length; i++) {
  let color = swatchInputs[i].value;
   console.log(swatchInputs[i]);
   console.log(swatchInputs[i].value);
   if (i === 0) {
    savedPaletteColor.style = "background-color: " + color;
   }
   if (i > 0) {
   const newPaletteColor = savedPaletteColor.cloneNode(true);
   savedPaletteColorsContainer.appendChild(newPaletteColor);
   newPaletteColor.style = "background-color: " + color;
   }
  }
}

function newColor() {
}

savePaletteButton.addEventListener( 'click', savePalette );