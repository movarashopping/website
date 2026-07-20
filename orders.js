import { db } from "./firebase.js";

import {
  collection,
  getDocs,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const ordersTable = document.getElementById("ordersTable");

loadOrders();

async function loadOrders() {

  ordersTable.innerHTML = "";

  const snapshot = await getDocs(collection(db, "orders"));

  if (snapshot.empty) {
    ordersTable.innerHTML = `
      <tr>
        <td colspan="6">No Orders Found</td>
      </tr>
    `;
    return;
  }

  snapshot.forEach((order) => {

    const data = order.data();

    ordersTable.innerHTML += `
      <tr>

        <td>${order.id}</td>

        <td>${data.customerName || "-"}</td>

        <td>₹${data.amount || 0}</td>

        <td>${data.payment || "Online"}</td>

        <td>${data.status || "Pending"}</td>

        <td>

          <select onchange="updateStatus('${order.id}',this.value)">

            <option ${data.status=="Pending"?"selected":""}>Pending</option>

            <option ${data.status=="Shipped"?"selected":""}>Shipped</option>

            <option ${data.status=="Delivered"?"selected":""}>Delivered</option>

            <option ${data.status=="Cancelled"?"selected":""}>Cancelled</option>

          </select>

        </td>

      </tr>
    `;

  });

}

window.updateStatus = async function(id,status){

  await updateDoc(doc(db,"orders",id),{

    status:status

  });

  alert("Order Status Updated");

  loadOrders();

}
