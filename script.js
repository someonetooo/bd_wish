// script.js
const calendarGrid = document.getElementById('calendar-grid');
const notes = {
  '2025-02-15': 'You are the love of my life. Happy Birthday!',
  '2025-02-16': 'Every day with you is a blessing.',
  '2025-02-17': 'You make my world brighter.',
  // Add more dates and notes here
};

function createCalendar() {
  const startDate = new Date('2025-02-15');
  const endDate = new Date('2026-02-14');

  let currentMonth = startDate.getMonth();
  let monthBox = null;

  for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
    if (d.getMonth() !== currentMonth) {
      currentMonth = d.getMonth();
      monthBox = null;
    }

    if (!monthBox) {
      monthBox = document.createElement('div');
      monthBox.className = 'month-box';
      monthBox.innerHTML = <h3>${d.toLocaleString('default', { month: 'long', year: 'numeric' })}</h3><div class="calendar-days"></div>;
      calendarGrid.appendChild(monthBox);
    }

    const dateStr = d.toISOString().split('T')[0];
    const dayDiv = document.createElement('div');
    dayDiv.className = 'calendar-day';
    dayDiv.textContent = d.getDate();
    dayDiv.addEventListener('click', () => {
      alert(notes[dateStr] || 'No note for this day.');
    });
    monthBox.querySelector('.calendar-days').appendChild(dayDiv);
  }
}

createCalendar();
