import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const LOGS_COLLECTION = "logs";
/* =========================
   GET ALL LOGS
========================= */
export async function fetchLogs() {
  const logsRef = collection(db, LOGS_COLLECTION);
  const q = query(logsRef, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
}

/* =========================
   CREATE LOG
========================= */
export async function addLog(logData) {
  const logsRef = collection(db, LOGS_COLLECTION);

  const payload = {
    title: logData.title || "",
    date: logData.date || "",
    category: logData.category || "",
    summary: logData.summary || "",
    content: logData.content || "",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  const docRef = await addDoc(logsRef, payload);
  return docRef.id;
}

/* =========================
   UPDATE LOG
========================= */
export async function updateLog(id, updatedData) {
  const logRef = doc(db, LOGS_COLLECTION, id);

  await updateDoc(logRef, {
    title: updatedData.title || "",
    date: updatedData.date || "",
    category: updatedData.category || "",
    summary: updatedData.summary || "",
    content: updatedData.content || "",
    updatedAt: serverTimestamp(),
  });
}

/* =========================
   DELETE LOG
========================= */
export async function deleteLog(id) {
  const logRef = doc(db, LOGS_COLLECTION, id);
  await deleteDoc(logRef);
}