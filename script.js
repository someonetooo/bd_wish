document.addEventListener("DOMContentLoaded", () => {
  const notes = {
    "2025-02-15": "I hope today brings you the peace you deserve. Miss you!",
    "2025-02-16": "Each day without you feels incomplete, but I carry your thoughts with me always. Wishing you a calm and beautiful day.",
    "2025-02-17": "We’ve had our ups and downs, but nothing can erase the beautiful moments... Stay happy, Jaweria.",
    "2025-02-18": "Still remember the first time we started talking. Hope you're having a good day.",
    "2025-02-19": "Through every challenge, know you’re always in my thoughts. Sending love your way today.",
  };

  const today = new Date().toISOString().split("T")[0];
  const todayNote = notes[today] || "No note for today, but you're always in my thoughts!";

  document.getElementById("view-note").addEventListener("click", function () {
    document.getElementById("note-text").textContent = todayNote;
    document.getElementById("note-modal").classList.remove("hidden");
  });

  document.getElementById("close-modal").addEventListener("click", function () {
    document.getElementById("note-modal").classList.add("hidden");
  });
});
