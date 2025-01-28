document.addEventListener("DOMContentLoaded", () => {
  const notes = {
    "2025-02-15": "I hope today brings you the peace you deserve. Miss you!",
    "2025-02-16": "Each day without you feels incomplete, but I carry your thoughts with me always. Wishing you a calm and beautiful day.",
    "2025-02-17": "We’ve had our ups and downs, but nothing can erase the beautiful moments... Stay happy, Jaweria.",
    "2025-02-18": "Still remember the first time we started talking. Hope you're having a good day.",
    "2025-02-19": "Through every distance and silence, my heart still finds its way to you. Keep shining, no matter the hurdles.",
    "2025-02-20": "Sometimes, it feels like you’re just a thought away. I hope your day is full of laughter.",
    "2025-02-21": "Miss that peace I found just by talking to you. Keep smiling, pretty girl.",
    "2025-02-22": "Every day spent without you reminds me of how precious time with you truly is. You are always in my thoughts.",
  };

  const calendarGrid = document.getElementById("calendar-grid");
  const noteModal = document.getElementById("note-modal");
  const noteText = document.getElementById("note-text");
  const closeModal = document.getElementById("close-modal");

  // Generate dates from Feb 15, 2025 to Feb 14, 2026
  const startDate = new Date("2025-02-15");
  const endDate = new Date("2026-02-14");
  while (startDate <= endDate) {
    const dateString = startDate.toISOString().split("T")[0];
    const dateDiv = document.createElement("div");
    dateDiv.textContent = startDate.getDate();
    dateDiv.classList.add("date-cell");
    if (notes[dateString]) {
      dateDiv.addEventListener("click", () => {
        noteText.textContent = notes[dateString];
        noteModal.classList.remove("hidden");
      });
    } else {
      dateDiv.classList.add("empty");
    }
    calendarGrid.appendChild(dateDiv);
    startDate.setDate(startDate.getDate() + 1);
  }

  // Close modal
  closeModal.addEventListener("click", () => {
    noteModal.classList.add("hidden");
  });

  noteModal.addEventListener("click", (e) => {
    if (e.target === noteModal) {
      noteModal.classList.add("hidden");
    }
  });

  // History Tracking
  const visitHistory = JSON.parse(localStorage.getItem("visitHistory")) || [];
  const currentVisit = new Date().toLocaleString();
  visitHistory.push(currentVisit);
  localStorage.setItem("visitHistory", JSON.stringify(visitHistory));
});
