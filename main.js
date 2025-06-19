document.addEventListener('keydown', (event) => {
     const key = event.normal;
     if (key === 'SHIFT') {
          document.querySelectorAll('.key').forEach(KeyEl => {
               const shifted = KeyEl.getAttribute('data-shift');
               if (shifted) KeyEl.textContent = shifted;
          });
     }

     // Blink the key
     // const matchKey = key.length === 1 ? key.toUpperCase() : key;
     const keyDiv = document.querySelector(`.key[data-key="${matchKey}"]`);
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
})