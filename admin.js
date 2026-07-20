import { db } from "./firebase.js";

import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const productTable = document.getElementById("productTable");
const totalProducts = document.getElementById("totalProducts");
const addProductBtn = document.getElementById("addProductBtn");

loadProducts();

async function loadProducts() {

  productTable.innerHTML = "";

  const snapshot = await getDocs(collection(db, "products"));

  totalProducts.innerText = snapshot.size;

  if (snapshot.empty) {
    productTable.innerHTML = `
      <tr>
        <td colspan="6">No Products Available</td>
      </tr>
    `;
    return;
  }

  snapshot.forEach((item) => {

    const data = item.data();

    productTable.innerHTML += `
      <tr>

        <td>
          <img src="${data.image || ''}" width="60">
        </td>

        <td>${data.name}</td>

        <td>₹${data.price}</td>

        <td>${data.stock}</td>

        <td>${data.category}</td>

        <td>

          <button class="edit-btn" onclick="alert('Edit feature coming soon')">
            Edit
          </button>

          <button class="delete-btn" onclick="deleteProduct('${item.id}')">
            Delete
          </button>

        </td>

      </tr>
    `;

  });

}

window.deleteProduct = async function(id){

  if(confirm("Delete this product?")){

    await deleteDoc(doc(db,"products",id));

    alert("Product Deleted Successfully");

    loadProducts();

  }

}

addProductBtn.addEventListener("click",()=>{

  alert("Next Step: Add Product Form");

});
