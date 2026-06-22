import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const logsRef = collection(db, "learningLogs");

export async function addLog(logData) {
  const cleanedData = {
    title: logData.title?.trim() || "",
    category: logData.category?.trim() || "",
    date: logData.date || "",
    summary: logData.summary?.trim() || "",
    content: logData.content?.trim() || "",
    createdAt: serverTimestamp(),
  };

  return await addDoc(logsRef, cleanedData);
}

export async function fetchLogs() {
  const q = query(logsRef, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((docItem) => ({
    id: docItem.id,
    ...docItem.data(),
  }));
}

export async function deleteLog(id) {
  await deleteDoc(doc(db, "learningLogs", id));
}

export async function updateLog(id, updatedData) {
  const cleanedData = {
    title: updatedData.title?.trim() || "",
    category: updatedData.category?.trim() || "",
    date: updatedData.date || "",
    summary: updatedData.summary?.trim() || "",
    content: updatedData.content?.trim() || "",
  };

  await updateDoc(doc(db, "learningLogs", id), cleanedData);
}