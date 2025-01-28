document.addEventListener("DOMContentLoaded", () => {  
  // Notes for respective dates  
  const notes = {  
    "2025-02-15": "I hope today brings you the peace you deserve. Miss you!",  
    "2025-02-16": "Each day without you feels incomplete, but I carry your thoughts with me always. Wishing you a calm and beautiful day.",  
    "2025-02-17": "We’ve had our ups and downs, but nothing can erase the beautiful moments... Stay happy, Jaweria.",  
    "2025-02-18": "Still remember the first time we started talking. Hope you're having a good day.",  
    // Continue adding notes for the other days...  
  };  

  // Calendar DOM elements  
  const calendarGrid = document.getElementById("calendar-grid");  
  const noteModal = document.getElementById("note-modal");  
  const noteText = document.getElementById("note-text");  
  const closeModal = document.getElementById("close-modal");  

  // Generate dates from February 15, 2025, to February 14, 2026  
  const startDate = new Date("2025-02-15");  
  const endDate = new Date("2026-02-14");  
  while (startDate <= endDate) {  
    const dateString = startDate.toISOString().split("T")[0]; // YYYY-MM-DD format  
    const dateDiv = document.createElement("div");  
    dateDiv.textContent = startDate.toDateString(); // e.g., "Sat Feb 15 2025"  
    dateDiv.classList.add("date-cell");  

    if (notes[dateString]) {  
      // If there's a note for the date  
      dateDiv.addEventListener("click", () => {  
        noteText.textContent = notes[dateString];  
        noteModal.style.display = "flex"; // Show the modal  
      });  
    } else {  
      dateDiv.classList.add("empty"); // No note available  
    }  

    calendarGrid.appendChild(dateDiv);  
    startDate.setDate(startDate.getDate() + 1); // Move to the next day  
  }  

  // Close modal when "X" button or overlay is clicked  
  closeModal.addEventListener("click", () => {  
    noteModal.style.display = "none"; // Hide the modal  
  });  

  noteModal.addEventListener("click", (e) => {  
    if (e.target === noteModal) {  
      noteModal.style.display = "none"; // Hide the modal when clicking outside the modal content  
    }  
  });  

  // History Tracking  
  const saveVisitHistory = () => {  
    const visitHistory = JSON.parse(localStorage.getItem("visitHistory")) || [];  
    const currentVisit = new Date().toLocaleString(); // e.g., "1/28/2025, 10:00:00 AM"  
    visitHistory.push(currentVisit);  
    localStorage.setItem("visitHistory", JSON.stringify(visitHistory));  
    console.log("Visit History Updated:", visitHistory); // For testing purposes  
  };  

  saveVisitHistory(); // Save the visit on page load  
});
