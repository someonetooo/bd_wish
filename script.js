import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC34hFstLYJ1_3xKICJWGAm3tr8T_G5S2U",
  authDomain: "birthdaywishestracker.firebaseapp.com",
  projectId: "birthdaywishestracker",
  storageBucket: "birthdaywishestracker.firebasestorage.app",
  messagingSenderId: "885197151988",
  appId: "1:885197151988:web:132a9d413386c863c948a1",
  measurementId: "G-BBL4Z3H6KX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

// Authentication Logic
document.getElementById("sign-in").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      document.getElementById("auth-message").textContent = "Signed in successfully!";
      console.log("User signed in:", user);
    })
    .catch((error) => {
      document.getElementById("auth-message").textContent = error.message;
      console.error("Error signing in:", error);
    });
});

document.getElementById("sign-up").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      document.getElementById("auth-message").textContent = "Signed up successfully!";
      console.log("User signed up:", user);
    })
    .catch((error) => {
      document.getElementById("auth-message").textContent = error.message;
      console.error("Error signing up:", error);
    });
});

// Handle Auth State
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("auth-container").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
  } else {
    document.getElementById("auth-container").classList.remove("hidden");
    document.getElementById("content").classList.add("hidden");
  }
});

// Log Visit Function
function logVisit() {
  const userAgent = navigator.userAgent;
  const visitTime = new Date().toLocaleString();

  const visitsRef = ref(database, 'visits');
  push(visitsRef, {
    device: userAgent,
    time: visitTime
  });
}

// Log visit when the page loads
logVisit();

// Calendar and Modal Logic (Existing Code)
document.addEventListener("DOMContentLoaded", function() {
  const calendar = document.getElementById("calendar");
  const modal = document.getElementById("note-modal");
  const noteText = document.getElementById("note-text");
  const closeBtn = document.querySelector(".close");

  let startDate = new Date(2025, 1, 15); // 15 Feb 2025
  let endDate = new Date(2026, 1, 14);   // 14 Feb 2026
  let currentDate = new Date(startDate);

  let notes = {
    "2025-02-15": "I hope today brings you the peace you deserve. Miss you!"  };

  while (currentDate <= endDate) {
    let dateStr = currentDate.toISOString().split('T')[0]; 

    let dateDiv = document.createElement("div");
    dateDiv.className = "date";
    dateDiv.innerText = currentDate.getDate() + " " + currentDate.toLocaleString('en-us', { month: 'short' });

    dateDiv.addEventListener("click", function() {
      let message = notes[dateStr] || "No special note for today! 😊. Visit after this month ....";
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
