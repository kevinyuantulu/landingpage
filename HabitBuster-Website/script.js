const descriptions = {
  vibration: 'Vibration gives you a cue on your connected phone when matching motion is detected.',
  sound: 'An optional phone chime adds an audible reminder. Choose a bundled sound in the HabitBuster app.',
  silent: 'Silent tracking records received detections without foreground vibration, sound, or the watch alert light. Passive notifications are controlled separately.',
};
document.querySelectorAll('[data-mode]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-mode]').forEach((option) => {
      const selected = option === button;
      option.classList.toggle('active', selected);
      option.setAttribute('aria-pressed', String(selected));
    });
    document.getElementById('mode-description').textContent = descriptions[button.dataset.mode];
  });
});
