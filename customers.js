import { db } from "./firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const customerTable = document.getElementById("customerTable");

loadCustomers();

async function loadCustomers() {

  customerTable.innerHTML = "";

  try {

    const snapshot = await getDocs(collection(db, "customers"));

    if (snapshot.empty) {

      customerTable.innerHTML = `
      <tr>
        <td colspan="6">No Customers Found</td>
      </tr>
      `;

      return;
    }

    snapshot.forEach((customer) => {

      const data = customer.data();

      customerTable.innerHTML += `
      <tr>

        <td>
          <img src="${data.photo || 'https://via.placeholder.com/50'}"
          width="50"
          height="50"
          style="border-radius:50%;">
        </td>

        <td>${data.name || "-"}</td>

        <td>${data.email || "-"}</td>

        <td>${data.mobile || "-"}</td>

        <td>${data.totalOrders || 0}</td>

        <td style="color:green;font-weight:bold;">
          ${data.status || "Active"}
        </td>

      </tr>
      `;

    });

  } catch (error) {

    console.error(error);

    customerTable.innerHTML = `
    <tr>
      <td colspan="6">Error Loading Customers</td>
    </tr>
    `;

  }

}
