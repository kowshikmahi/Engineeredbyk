import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/config";

const COLLECTION = "learningLogs";

/* ------------------------------
   GET ALL LOGS
------------------------------ */

export async function getAllLogs() {
  const q = query(
    collection(db, COLLECTION),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

/* ------------------------------
   GET SINGLE LOG
------------------------------ */

export async function getLog(id) {
  const snapshot = await getDoc(
    doc(db, COLLECTION, id)
  );

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}

/* ------------------------------
   CREATE LOG
------------------------------ */

export async function createLog(log) {
  return await addDoc(
    collection(db, COLLECTION),
    {
      ...log,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    }
  );
}

/* ------------------------------
   UPDATE LOG
------------------------------ */

export async function updateLog(id, log) {
  return await updateDoc(
    doc(db, COLLECTION, id),
    {
      ...log,
      updatedAt: serverTimestamp(),
    }
  );
}

/* ------------------------------
   DELETE LOG
------------------------------ */

export async function deleteLog(id) {
  return await deleteDoc(
    doc(db, COLLECTION, id)
  );
}