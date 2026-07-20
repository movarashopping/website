import { db } from "./firebase.js";

import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const productTable = document.getElementById("productTable");

loadProducts();

async function loadProducts() {

  productTable.innerHTML = "";

  try {

    const snapshot = await getDocs(collection(db, "products"));

    if (snapshot.empty) {

      productTable.innerHTML = `
      <tr>
        <td colspan="6">No Products Found</td>
      </tr>
      `;

      return;
    }

    snapshot.forEach((product) => {

      const data = product.data();

      productTable.innerHTML += `

      <tr>

      <td>
      <img src="${data.image || 'https://via.placeholder.com/70'}"
      width="70">
      </td>

      <td>${data.name}</td>

      <td>₹${data.price}</td>

      <td>${data.stock}</td>

      <td>${data.category}</td>

      <td>

      <button class="edit-btn"
      onclick="editProduct('${product.id}')">
      Edit
      </button>

      <button class="delete-btn"
      onclick="deleteProduct('${product.id}')">
      Delete
      </button>

      </td>

      </tr>

      `;

    });

  } catch (error) {

    console.error(error);

    productTable.innerHTML = `
    <tr>
      <td colspan="6">
      Error Loading Products
      </td>
    </tr>
    `;

  }

}

window.deleteProduct = async function(id){

if(confirm("Delete Product?")){

await deleteDoc(doc(db,"products",id));

alert("Product Deleted Successfully");

loadProducts();

}

}

window.editProduct=function(id){

alert("Edit Product ID : "+id);

// आगे edit-product.html पर redirect करेंगे

// window.location="edit-product.html?id="+id;

}
