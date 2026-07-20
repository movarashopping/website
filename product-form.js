import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const form = document.getElementById("productForm");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const price = Number(document.getElementById("price").value);
  const stock = Number(document.getElementById("stock").value);
  const category = document.getElementById("category").value;
  const image = document.getElementById("image").value.trim();
  const description = document.getElementById("description").value.trim();

  if (!name || !price || !stock || !category) {
    alert("Please fill all required fields.");
    return;
  }

  try {

    await addDoc(collection(db, "products"), {

      name,
      price,
      stock,
      category,
      image,
      description,
      createdAt: serverTimestamp()

    });

    alert("Product Added Successfully!");

    form.reset();

    window.location.href = "products.html";

  } catch (error) {

    console.error(error);

    alert("Error: " + error.message);

  }

});
