document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");
    const startDate = new Date("2025-02-15");
    const endDate = new Date("2026-02-15");

    let currentDate = startDate;

    while (currentDate <= endDate) {
        const dateBox = document.createElement("div");
        dateBox.textContent = currentDate.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
        });
        dateBox.addEventListener("click", () => {
            alert(`Here's your message for ${dateBox.textContent}!`);
        });
        calendar.appendChild(dateBox);
        currentDate.setDate(currentDate.getDate() + 1);
    }
});
