const paletteCollection = [];

function addPalette() {
    let newPalette = savedPaletteWrap.cloneNode(true);
    savedPalettesWrap.append(newPalette);
    paletteCollection.push(newPalette);
    console.log(paletteCollection);
}

addPaletteButton.addEventListener('click', addPalette);

// Save Palette

function savePalette() {
    for (let i = 0; i < swatchInputs.length; i++) {
        console.log(swatchInputs[i].value);

    }
}

savePaletteButton.addEventListener('click', savePalette);

// Focus Palette

function focusPalette(event) {
    if (event.target.className.includes('saved_palette_name_container')) {
        event.target.classList.toggle('saved_palette_name_container_focus');
        event.target.parentNode.classList.toggle('saved_palette_container_focus');
        event.target.parentNode.parentNode.classList.toggle('saved_palette_wrap_focus');
        event.target.parentNode.parentNode.focus();
    }
}

savedPalettesContainer.addEventListener('click', focusPalette);