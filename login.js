import { auth } from "./firebase.js";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");

// अगर पहले से लॉगिन है तो सीधे Admin Panel खोलो
onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "admin.html";
  }
});

// Login Button
loginBtn.addEventListener("click", async () => {

  const userEmail = email.value.trim();
  const userPassword = password.value;

  if (!userEmail || !userPassword) {
    message.style.color = "red";
    message.innerText = "Please enter email and password.";
    return;
  }

  try {

    await signInWithEmailAndPassword(
      auth,
      userEmail,
      userPassword
    );

    message.style.color = "green";
    message.innerText = "Login Successful...";

    setTimeout(() => {
      window.location.href = "admin.html";
    }, 1000);

  } catch (error) {

    message.style.color = "red";

    switch (error.code) {
      case "auth/invalid-credential":
        message.innerText = "Invalid email or password.";
        break;

      case "auth/user-not-found":
        message.innerText = "User not found.";
        break;

      case "auth/wrong-password":
        message.innerText = "Wrong password.";
        break;

      case "auth/invalid-email":
        message.innerText = "Invalid email address.";
        break;

      default:
        message.innerText = error.message;
    }
  }

});
