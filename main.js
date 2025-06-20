document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (key === 'Shift') {
    document.querySelectorAll('.key').forEach(keyEl => {
      const shifted = keyEl.getAttribute('data-shift');
      if (shifted) keyEl.textContent = shifted;
    });
  }
  const keyDiv = document.querySelector(`.key[data-key="${key}"]`);
  if (keyDiv) {
    keyDiv.classList.add('active');
    setTimeout(() => keyDiv.classList.remove('active'), 100);
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'Shift') {
    document.querySelectorAll('.key').forEach(keyEl => {
      const normal = keyEl.getAttribute('data-normal');
      if (normal) keyEl.textContent = normal;
    });
  }
});
