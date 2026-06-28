import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/firebase/firebaseConfig";

const COLLECTION = "clientWorks";

/* ============================================
   GET ALL CLIENT WORKS
============================================ */

export async function getAllProjects() {
  try {
    const q = query(
      collection(db, COLLECTION),
      orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
}

/* ============================================
   GET FEATURED PROJECTS
============================================ */

export async function getFeaturedProjects() {
  try {
    const q = query(
      collection(db, COLLECTION),
      where("featured", "==", true)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
}

/* ============================================
   GET PROJECT BY ID
============================================ */

export async function getClientWork(id) {
  try {
    const ref = doc(db, COLLECTION, id);

    const snapshot = await getDoc(ref);

    if (!snapshot.exists()) return null;

    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
  } catch (err) {
    console.error(err);
    return null;
  }
}

/* ============================================
   GET PROJECT BY SLUG
============================================ */

export async function getProjectBySlug(slug) {
  try {
    const q = query(
      collection(db, COLLECTION),
      where("slug", "==", slug)
    );

    const snapshot = await getDocs(q);

    if (snapshot.empty) return null;

    return {
      id: snapshot.docs[0].id,
      ...snapshot.docs[0].data(),
    };
  } catch (err) {
    console.error(err);
    return null;
  }
}

/* ============================================
   CREATE PROJECT
============================================ */

export async function addClientWork(data) {
  try {
    const docRef = await addDoc(
      collection(db, COLLECTION),
      {
        ...data,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }
    );

    return docRef.id;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

/* ============================================
   UPDATE PROJECT
============================================ */

export async function updateClientWork(id, data) {
  try {
    const ref = doc(db, COLLECTION, id);

    await updateDoc(ref, {
      ...data,
      updatedAt: serverTimestamp(),
    });

    return true;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

/* ============================================
   DELETE PROJECT
============================================ */

export async function deleteClientWork(id) {
  try {
    await deleteDoc(doc(db, COLLECTION, id));
    return true;
  } catch (err) {
    console.error(err);
    throw err;
  }
}