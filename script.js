document.addEventListener("DOMContentLoaded", () => {  
  const notes = {  
    // Your existing notes object  
    // ... (keep all the existing notes)  
  };  

  const calendarGrid = document.getElementById("calendar-grid");  
  const noteModal = document.getElementById("note-modal");  
  const noteText = document.getElementById("note-text");  
  const modalDate = document.getElementById("modal-date");  
  const closeModal = document.getElementById("close-modal");  

  // Visitor History Tracking  
  function trackVisitorHistory() {  
    const visitTimestamp = new Date().toISOString();  
    const visitorInfo = {  
      timestamp: visitTimestamp,  
      userAgent: navigator.userAgent,  
      referrer: document.referrer  
    };  

    // Store in localStorage (you can replace this with a backend solution for more security)  
    let visitorHistory = JSON.parse(localStorage.getItem('bd_wish_visitor_history') || '[]');  
    visitorHistory.push
