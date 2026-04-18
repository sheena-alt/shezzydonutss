

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyBdJjHpUgvdOtTIAkBMlcpOZ3x53hvV6SM",
  authDomain: "shezzydonuts-e8ab5.firebaseapp.com",
  projectId: "shezzydonuts-e8ab5",
  storageBucket: "shezzydonuts-e8ab5.firebasestorage.app",
  messagingSenderId: "723007165099",
  appId: "1:723007165099:web:71e8b2e6b9642804d21dee",
  measurementId: "G-40WKH23TBT"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


export async function saveOrder(orderData) {
  try {
    const docRef = await addDoc(collection(db, "orders"), {
      ...orderData,
      createdAt: new Date()
    });
    console.log("Order saved with ID:", docRef.id);
    alert("✅ Order placed successfully!");
  } catch (error) {
    console.error("Error saving order:", error);
    alert("❌ Failed to place order");
  }
}