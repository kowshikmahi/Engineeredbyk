import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchLogs } from "../services/logsService";

export default function LearningLogs() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLogs();
  }, []);

  const loadLogs = async () => {
    try {
      const data = await fetchLogs();
      setLogs(data);
    } catch (error) {
      console.error("Error fetching learning logs:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section" id="learning-logs">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-tag">LEARNING LOGS</p>
        <h2>
          My <span className="gradient-text">Learning Logs</span>
        </h2>
      </motion.div>

      {loading ? (
        <div className="about-card glass">
          <p>Loading learning logs...</p>
        </div>
      ) : logs.length === 0 ? (
        <div className="about-card glass">
          <p>No learning logs added yet.</p>
        </div>
      ) : (
        <div className="timeline">
          {logs.map((log) => (
            <motion.div
              key={log.id}
              className="timeline-item glass"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>

              <h3>{log.title}</h3>

              <span>
                {log.date}
                {log.category ? ` • ${log.category}` : ""}
              </span>

              {log.summary && <p>{log.summary}</p>}

              {log.content && (
                <p style={{ marginTop: "12px", whiteSpace: "pre-line" }}>
                  {log.content}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}