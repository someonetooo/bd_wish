document.addEventListener("DOMContentLoaded", () => {
  const notes =  {
    "2025-02-15": "I hope today brings you the peace you deserve. Miss you!",
    "2025-02-16": "Each day without you feels incomplete, but I carry your thoughts with me always. Wishing you a calm and beautiful day.",
    "2025-02-17": "We’ve had our ups and downs, but nothing can erase the beautiful moments... Stay happy, Jaweria.",
    "2025-02-18": "Still remember the first time we started talking. Hope you're having a good day.",
    "2025-02-19": "Through every distance and silence, my heart still finds its way to you. Keep shining, no matter the hurdles.",
    "2025-02-20": "Sometimes, it feels like you’re just a thought away. I hope your day is full of laughter.",
    "2025-02-21": "Miss that peace I found just by talking to you. Keep smiling, pretty girl.",
    "2025-02-22": "Every day spent without you reminds me of how precious time with you truly is. You are always in my thoughts.",
    "2025-02-23": "Sometimes I wonder how things would have been if we could have met. But for now, I hold on to the thoughts we shared.",
    "2025-02-24": "With every new day, I feel a bit closer to understanding the bond we share. Can’t wait to hear from you soon.",
    "2025-02-25": "Even if we never meet, I carry your memories with me in the quietest of moments. Stay safe and happy.",
    "2025-02-26": "Life has its twists, but I know whatever path we are on, it leads us somewhere meaningful. Take care, Jaweria.",
    "2025-02-27": "Hope you're not feeling sad anymore, focusing on self-improvement now. Keep smiling!",
    "2025-02-28": "Our conversations may have paused, but they never truly stopped. You’re always in my thoughts.",
    "2025-03-01": "Sometimes the heart knows what words can’t say. Wishing you peace today, wherever you are.",
    "2025-03-02": "I remember how things felt like they might never work out, but... Stay happy pretty girl.",
    "2025-03-03": "It’s possible that we might never meet, a harsh reality check. Spend your time doing things that create lasting memories.",
    "2025-03-04": "Through every chat and every silence, I know we’ve grown in ways that words can't express. Miss you.",
    "2025-03-05": "No matter where life takes us,..Stay happy, Jaweria.",
    "2025-03-06": "Remember that you’re stronger than you think. May today bring you the same peace you bring to me.",
    "2025-03-07": "I guess you might get bored reading my random lines, right? Alright, from now on, I'll stick to something more... Take care of that beautiful mind of yours! And hey, don’t forget to show yourself some love today."
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
  dateDiv.textContent = startDate.toDateString();
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
});
