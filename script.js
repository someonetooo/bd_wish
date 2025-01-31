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
