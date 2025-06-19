document.addEventListener('keydown', (event) => {
  const key = event.key;
  
  if (key === 'Shift') {
    // Show shifted characters
    document.querySelectorAll('.key').forEach(keyEl => {
      const shifted = keyEl.getAttribute('data-shift');
      if (shifted) keyEl.textContent = shifted;
    });
  }

  // Blink the key
//   const matchKey = key.length === 1 ? key.toUpperCase() : key;
//   console.log(matchKey);
  const keyDiv = document.querySelector(`.key[data-key="${key}"]`);
  if (keyDiv) {
    keyDiv.classList.add('active');
    setTimeout(() => keyDiv.classList.remove('active'), 200);
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'Shift') {
    // Revert to normal characters
    document.querySelectorAll('.key').forEach(keyEl => {
      const normal = keyEl.getAttribute('data-normal');
      if (normal) keyEl.textContent = normal;
    });
  }
});
