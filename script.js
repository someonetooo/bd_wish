document.addEventListener("DOMContentLoaded", () => {
  // Generate calendar for a year
  const calendarGrid = document.getElementById("calendar-grid");
  const startDate = new Date("2025-02-15");
  const endDate = new Date("2026-02-14");
  const notes = {
    "2025-02-15": "This is your note for February 15, 2025.",
    // Add more notes as required
  };

  while (startDate <= endDate) {
    const dateDiv = document.createElement("div");
    dateDiv.textContent = startDate.toDateString().slice(4, 10);
    dateDiv.dataset.date = startDate.toISOString().split("T")[0];
    dateDiv.classList.add("date-box");
    dateDiv.addEventListener("click", () => {
      const note = notes[dateDiv.dataset.date] || "No note for this date.";
      showNoteModal(note);
    });
    calendarGrid.appendChild(dateDiv);
    startDate.setDate(startDate.getDate() + 1);
  }

  // Modal functionality
  const modal = document.getElementById("note-modal");
  const modalText = document.getElementById("note-text");
  const closeModal = document.getElementById("close-modal");

  function showNoteModal(note) {
    modalText.textContent = note;
    modal.classList.remove("hidden");
  }

  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Track user visits
  if (!localStorage.getItem("visit-history")) {
    localStorage.setItem("visit-history", JSON.stringify([]));
  }
  const visitHistory = JSON.parse(localStorage.getItem("visit-history"));
  visitHistory.push(new Date().toISOString());
  localStorage.setItem("visit-history", JSON.stringify(visitHistory));
});
