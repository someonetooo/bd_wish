[2:17 PM, 1/28/2025] ~Naeem: .voice…
[2:17 PM, 1/28/2025] ~Naeem: // Calendar Data (Hidden Notes)
const notes = {
  "2025-02-15": "You are the light of my life. ❤️",
  "2025-03-01": "Every day with you is a blessing. 🌸",
  // Add more dates and notes here
};

// Generate Calendar
function generateCalendar() {
  const calendar = document.getElementById('calendar');
  let currentDate = new Date('2025-02-15');
  const endDate = new Date('2026-02-14');

  while (currentDate <= endDate) {
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();
    const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();

    const monthContainer = document.createElement('div');
    monthContainer.classList.add('calendar-month');
    monthContainer.innerHTML = <h3>${month} ${year}</h3><div class="calendar-days"></div>;

    const daysContainer = monthContainer.querySelector('.calendar-days');
    for (let i = 1; i <= daysInMonth; i++) {
      const day = document.createElement('div');
      day.classList.add('calendar-day');
      day.textContent = i;
      const dateKey = ${year}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(i).padStart(2, '0')};
      if (notes[dateKey]) {
        day.addEventListener('click', () => showNote(notes[dateKey]));
      }
      daysContainer.appendChild(day);
    }

    calendar.appendChild(monthContainer);
    currentDate.setMonth(currentDate.getMonth() + 1);
  }
}

// Show Note Popup
function showNote(note) {
  const popup = document.getElementById('note-popup');
  const noteText = document.getElementById('note-text');
  noteText.textContent = note;
  popup.style.display = 'flex';
}

// Close Popup
document.getElementById('close-popup').addEventListener('click', () => {
  document.getElementById('note-popup').style.display = 'none';
});

// Initialize Calendar
generateCalendar();
