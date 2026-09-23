(() => {
  const clock = document.getElementById('utc-clock');
  const year = document.getElementById('year');
  const days = document.querySelectorAll('.week span');
  function update() {
    const now = new Date();
    clock.textContent = now.toISOString().slice(11, 19);
    clock.dateTime = now.toISOString();
    year.textContent = String(now.getUTCFullYear());
    const today = (now.getUTCDay() + 6) % 7;
    const dayProgress = (now.getTime() % 86400000) / 86400000;
    days.forEach((day, i) => {
      day.classList.toggle('today', i === today);
      day.style.setProperty('--fill', i < today ? 1 : i === today ? dayProgress : 0);
    });
  }
  update();
  window.setInterval(update, 1000);
})();
