import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  addLog,
  fetchLogs,
  deleteLog,
  updateLog,
} from "../services/logsService";

const initialForm = {
  title: "",
  category: "",
  date: "",
  summary: "",
  content: "",
};

export default function AdminPage() {
  const [form, setForm] = useState(initialForm);
  const [logs, setLogs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadLogs();
  }, []);

  const loadLogs = async () => {
    try {
      const data = await fetchLogs();
      setLogs(data);
    } catch (error) {
      console.error("Error loading logs:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (editingId) {
        await updateLog(editingId, form);
        setMessage("Log updated successfully.");
      } else {
        await addLog(form);
        setMessage("Log added successfully.");
      }

      setForm(initialForm);
      setEditingId(null);
      await loadLogs();
    } catch (error) {
      console.error("Error saving log:", error);
      setMessage("Failed to save log.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (log) => {
    setForm({
      title: log.title || "",
      category: log.category || "",
      date: log.date || "",
      summary: log.summary || "",
      content: log.content || "",
    });
    setEditingId(log.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    try {
      await deleteLog(id);
      await loadLogs();
    } catch (error) {
      console.error("Error deleting log:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setForm(initialForm);
  };

  return (
    <div className="admin-page">
      <div className="admin-dashboard">
        <div className="admin-header glass">
          <div>
            <h2>Admin Panel</h2>
            <p className="admin-subtitle">
              Add, edit and manage your learning logs.
            </p>
          </div>

          <div className="admin-header-actions">
            <Link to="/" className="secondary-btn small-btn">
              ← Back to Portfolio
            </Link>
          </div>
        </div>

        <div className="admin-layout">
          <div className="admin-form-card glass">
            <h3>{editingId ? "Edit Learning Log" : "Add Learning Log"}</h3>

            <form className="admin-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="category"
                placeholder="Category"
                value={form.category}
                onChange={handleChange}
              />

              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="summary"
                placeholder="Short summary"
                value={form.summary}
                onChange={handleChange}
              />

              <textarea
                rows="7"
                name="content"
                placeholder="Write learning log content..."
                value={form.content}
                onChange={handleChange}
              ></textarea>

              <div className="admin-form-actions">
                <button type="submit" className="primary-btn small-btn" disabled={loading}>
                  {loading
                    ? "Saving..."
                    : editingId
                    ? "Update Log"
                    : "Save Log"}
                </button>

                {editingId && (
                  <button
                    type="button"
                    className="secondary-btn small-btn"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                )}
              </div>

              {message && <p className="success-text">{message}</p>}
            </form>
          </div>

          <div className="admin-form-card glass">
            <h3>Existing Logs</h3>

            <div className="admin-logs-list">
              {logs.length === 0 ? (
                <p className="admin-log-summary">No logs found.</p>
              ) : (
                logs.map((log) => (
                  <div className="admin-log-card glass" key={log.id}>
                    <small className="log-category">
                      {log.category || "General"}
                    </small>

                    <h4>{log.title}</h4>
                    <p className="admin-log-date">{log.date}</p>

                    {log.summary && (
                      <p className="admin-log-summary">{log.summary}</p>
                    )}

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
    </div>
  );
}