document.addEventListener("DOMContentLoaded", function() {
    const calendar = document.getElementById("calendar");
    const modal = document.getElementById("note-modal");
    const noteText = document.getElementById("note-text");
    const closeBtn = document.querySelector(".close");

    let startDate = new Date(2025, 1, 15); // 15 Feb 2025
    let endDate = new Date(2026, 1, 14);   // 14 Feb 2026
    let currentDate = new Date(startDate);

    let notes = {
        "2025-02-15": "Today is the beginning of something special 💖",
        "2025-03-01": "March brings new happiness 🌸",
        "2025-04-10": "A little kindness goes a long way 😊",
        "2025-05-22": "Always be yourself, you are amazing! ✨",
        "2025-06-15": "Dream big and chase it 🚀",
        "2025-07-30": "Smile, because life is beautiful 😍",
        "2025-08-05": "You are loved and appreciated ❤️",
        "2025-09-18": "Every day is a new beginning 🌞",
        "2025-10-27": "Believe in yourself 💪",
        "2025-11-12": "Enjoy the little things 🎶",
        "2025-12-25": "Merry Christmas! 🎄🎁",
        "2026-01-01": "Happy New Year! 🎉",
        "2026-02-14": "Happy Valentine's Day! 💕"
    };

    while (currentDate <= endDate) {
        let dateStr = currentDate.toISOString().split('T')[0]; 

        let dateDiv = document.createElement("div");
        dateDiv.className = "date";
        dateDiv.innerText = currentDate.getDate() + " " + currentDate.toLocaleString('en-us', { month: 'short' });

        dateDiv.addEventListener("click", function() {
            let message = notes[dateStr] || "No special note for today! 😊";
            noteText.innerText = message;
            modal.style.display = "flex";
        });

        calendar.appendChild(dateDiv);

        currentDate.setDate(currentDate.getDate() + 1); 
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
