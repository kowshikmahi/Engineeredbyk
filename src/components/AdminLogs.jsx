import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import {
  fetchLogs,
  addLog,
  deleteLog,
  updateLog,
} from "../services/logsService";

const initialForm = {
  title: "",
  category: "",
  summary: "",
  content: "",
  date: "",
};

export default function AdminLogs() {
  const [userChecked, setUserChecked] = useState(false);
  const [logs, setLogs] = useState([]);
  const [formData, setFormData] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [statusMsg, setStatusMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function loadLogs() {
    try {
      const data = await fetchLogs();
      setLogs(data);
    } catch (error) {
      console.error("Error loading logs:", error);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/admin");
      } else {
        setUserChecked(true);
        loadLogs();
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMsg("");
    setLoading(true);

    try {
      if (editingId) {
        await updateLog(editingId, formData);
        setStatusMsg("Log updated successfully.");
      } else {
        await addLog(formData);
        setStatusMsg("Log added successfully.");
      }

      setFormData(initialForm);
      setEditingId(null);
      await loadLogs();
    } catch (error) {
      console.error("Error saving log:", error);
      setStatusMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (log) => {
    setEditingId(log.id);
    setFormData({
      title: log.title || "",
      category: log.category || "",
      summary: log.summary || "",
      content: log.content || "",
      date: log.date || "",
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this learning log?");
    if (!confirmDelete) return;

    try {
      await deleteLog(id);
      setStatusMsg("Log deleted successfully.");
      await loadLogs();
    } catch (error) {
      console.error("Error deleting log:", error);
      setStatusMsg("Delete failed.");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin");
  };

  if (!userChecked) {
    return (
      <div className="admin-page">
        <div className="glass admin-auth-card">
          <h2>Checking authentication...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-dashboard section">
        <div className="admin-header glass">
          <div>
            <p className="section-tag">ADMIN PANEL</p>
            <h2>Manage Learning Logs</h2>
          </div>

          <div className="admin-header-actions">
            <Link to="/" className="secondary-btn small-btn">
              View Portfolio
            </Link>
            <button className="primary-btn small-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>

        <div className="admin-layout">
          <div className="admin-form-card glass">
            <h3>{editingId ? "Edit Learning Log" : "Add New Learning Log"}</h3>

            <form onSubmit={handleSubmit} className="admin-form">
              <input
                type="text"
                name="title"
                placeholder="Log title"
                value={formData.title}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="category"
                placeholder="Category (React / JavaScript / Firebase / Project)"
                value={formData.category}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="date"
                placeholder="Date (e.g. 22 Jun 2026)"
                value={formData.date}
                onChange={handleChange}
                required
              />

              <textarea
                name="summary"
                placeholder="Short summary"
                rows="3"
                value={formData.summary}
                onChange={handleChange}
                required
              />

              <textarea
                name="content"
                placeholder="Detailed learning log content"
                rows="8"
                value={formData.content}
                onChange={handleChange}
                required
              />

              {statusMsg && <p className="success-text">{statusMsg}</p>}

              <div className="admin-form-actions">
                <button
                  type="submit"
                  className="primary-btn admin-btn"
                  disabled={loading}
                >
                  {loading
                    ? editingId
                      ? "Updating..."
                      : "Publishing..."
                    : editingId
                    ? "Update Log"
                    : "Publish Log"}
                </button>

                {editingId && (
                  <button
                    type="button"
                    className="secondary-btn admin-btn"
                    onClick={() => {
                      setEditingId(null);
                      setFormData(initialForm);
                      setStatusMsg("");
                    }}
                  >
                    Cancel Edit
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="admin-logs-list">
            {logs.length === 0 ? (
              <div className="glass admin-log-card">
                <p>No logs found. Add your first learning log.</p>
              </div>
            ) : (
              logs.map((log) => (
                <div key={log.id} className="glass admin-log-card">
                  <div className="admin-log-top">
                    <div>
                      <span className="log-category">{log.category}</span>
                      <h4>{log.title}</h4>
                      <p className="admin-log-date">{log.date}</p>
                    </div>
                  </div>

                  <p className="admin-log-summary">{log.summary}</p>

                  <div className="admin-log-actions">
                    <button
                      className="secondary-btn small-btn"
                      onClick={() => handleEdit(log)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn small-btn"
                      onClick={() => handleDelete(log.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}