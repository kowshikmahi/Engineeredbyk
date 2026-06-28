import { useState } from "react";
import Dashboard from "../components/admin/Dashboard";
import AdminLogs from "../components/AdminLogs";

export default function AdminPage() {
  const [tab, setTab] = useState("projects");

  return (
    <div className="admin-page">
      <div className="admin-dashboard">

        <div className="admin-header glass">
          <div>
            <h2>Portfolio CMS</h2>
            <p>Manage your portfolio and learning logs.</p>
          </div>
        </div>

        <div className="admin-tabs">
          <button
            className={`admin-tab ${tab === "projects" ? "active" : ""}`}
            onClick={() => setTab("projects")}
          >
            Client Works
          </button>

          <button
            className={`admin-tab ${tab === "logs" ? "active" : ""}`}
            onClick={() => setTab("logs")}
          >
            Learning Logs
          </button>
        </div>

        {tab === "projects" ? <Dashboard /> : <AdminLogs />}

      </div>
    </div>
  );
}