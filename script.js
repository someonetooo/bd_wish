document.addEventListener("DOMContentLoaded", () => {  
  const notes = {  
    "2025-02-15": "I hope today brings you the peace you deserve. Miss you!",  
    "2025-02-16": "Each day without you feels incomplete...",  
    // Add remaining notes here  
  };  

  const calendarWrapper = document.getElementById("calendar-wrapper");  
  const noteModal = document.getElementById("note-modal");  
  const noteText = document.getElementById("note-text");  
  const closeModal = document.getElementById("close-modal");  

  const startDate = new Date("2025-02-15");  
  const endDate = new Date("2026-02-14");  

  const months = {};  

  while (startDate <= endDate) {  
    const yearMonth = startDate.toISOString().slice(0, 7); // e.g., "2025-02"  
    const dateString = startDate.toISOString().split("T")[0]; // e.g., "2025-02-15"  

    if (!months[yearMonth]) {  
      months[yearMonth] = [];  
    }  

    months[yearMonth].push({  
      date: startDate.getDate(),  
      note: notes[dateString] || null,  
    });  

    startDate.setDate(startDate.getDate() + 1);  
  }  

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

  closeModal.addEventListener("click", () => {  
    noteModal.style.display = "none";  
  });  

  noteModal.addEventListener("click", (e) => {  
    if (e.target === noteModal) {  
      noteModal.style.display = "none";  
    }  
  });  

  // Visit History  
  const visitHistory = JSON.parse(localStorage.getItem("visitHistory")) || [];  
  const currentVisit = new Date().toLocaleString();  
  visitHistory.push(currentVisit);  
  localStorage.setItem("visitHistory", JSON.stringify(visitHistory));  
  console.log("Visit History:", visitHistory);  
});
