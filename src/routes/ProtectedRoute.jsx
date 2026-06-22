import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });

    return () => unsubscribe();
  }, []);

  if (user === undefined) {
    return (
      <div className="admin-page">
        <div className="admin-auth-card glass">
          <h2>Checking access...</h2>
        </div>
      </div>
    );
  }

  return user ? children : <Navigate to="/admin-login" replace />;
}