document.addEventListener("DOMContentLoaded", () => {  
  const notes = {  
    "2025-02-15": "I hope today brings you nothing but happiness. Always thinking of you!",  
    "2025-02-16": "You're my sunshine on the darkest days!",  
    "2025-02-17": "Remember, you're never alone. I'm always here for you.",  
    // Add all notes here for each day till 2026-02-14...  
  };  

  const calendarWrapper = document.getElementById("calendar-wrapper");  
  const noteModal = document.getElementById("note-modal");  
  const noteText = document.getElementById("note-text");  
  const closeModal = document.getElementById("close-modal");  

  const startDate = new Date("2025-02-15");  
  const endDate = new Date("2026-02-14");  

  const months = {};  

  // Generate calendar data  
  while (startDate <= endDate) {  
    const yearMonth = startDate.toISOString().slice(0, 7); // Get "2025-02"  
    const dateString = startDate.toISOString().split("T")[0]; // Get "2025-02-15"  

    if (!months[yearMonth]) {  
      months[yearMonth] = [];  
    }  

    months[yearMonth].push({  
      date: startDate.getDate(),  
      note: notes[dateString] || null,  
    });  

    startDate.setDate(startDate.getDate() + 1); // Increment day  
  }  

  // Render calendar  
  for (const [month, dates] of Object.entries(months)) {  
    const monthDiv = document.createElement("div");  
    monthDiv.className = "month";  

    const monthTitle = document.createElement("h3");  
    monthTitle.textContent = new Date(`${month}-01`).toLocaleString("default", {  
      month: "long",  
      year: "numeric",  
    });  

    const datesDiv = document.createElement("div");  
    datesDiv.className = "dates";  

    dates.forEach(({ date, note }) => {  
      const dateDiv = document.createElement("div");  
      dateDiv.textContent = date;  
      dateDiv.className = note ? "date" : "date empty";  

      if (note) {  
        dateDiv.addEventListener("click", () => {  
          noteText.textContent = note;  
          noteModal.style.display = "flex";  
        });  
      }  

      datesDiv.appendChild(dateDiv);  
    });  

    monthDiv.appendChild(monthTitle);  
    monthDiv.appendChild(datesDiv);  
    calendarWrapper.appendChild(monthDiv);  
  }  

  // Close modal on click  
  closeModal.addEventListener("click", () => {  
    noteModal.style.display = "none";  
  });  

  noteModal.addEventListener("click", (e) => {  
    if (e.target === noteModal) {  
      noteModal.style.display = "none";  
    }  
  });  

  // Record visit history in local storage  
  const visitHistory = JSON.parse(localStorage.getItem("visitHistory")) || [];  
  const currentVisit = new Date().toLocaleString();  
  visitHistory.push(currentVisit);  
  localStorage.setItem("visitHistory", JSON.stringify(visitHistory));  
});
