// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-storage.js";

// Firebase Configuration

const firebaseConfig = {
  apiKey: "AIzaSyBcQHcVWbS9kv7r0_IC5MeOaiU1KCk_wwg",
  authDomain: "movarashopping.firebaseapp.com",
  projectId: "movarashopping",
  storageBucket: "movarashopping.firebasestorage.app",
  messagingSenderId: "752467563905",
  appId: "1:752467563905:web:fdd0812d741f99eaf20480"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Export Firebase Services

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
