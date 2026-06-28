import { useState } from "react";
import {
  addClientWork,
  updateClientWork,
} from "@/services/clientWorks";

const CLOUD_NAME = "dnk97apqa";
const UPLOAD_PRESET = "portfolio_upload";

export default function ProjectForm({
  editingProject,
  onFinish,
}) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: editingProject?.title || "",
    client: editingProject?.client || "",
    category: editingProject?.category || "",
    description: editingProject?.description || "",
    fullDescription: editingProject?.fullDescription || "",
    technologies:
      editingProject?.technologies?.join(", ") || "",
    githubUrl: editingProject?.githubUrl || "",
    liveUrl: editingProject?.liveUrl || "",
    featured: editingProject?.featured || false,
  });

  const [thumbnail, setThumbnail] = useState(null);
  const [gallery, setGallery] = useState([]);

  //------------------------------------------
  // Upload Image
  //------------------------------------------

  async function uploadImage(file) {
    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();

    return result.secure_url;
  }

  //------------------------------------------
  // Upload Gallery
  //------------------------------------------

  async function uploadGallery(files) {
    const urls = [];

    for (const file of files) {
      const url = await uploadImage(file);
      urls.push(url);
    }

    return urls;
  }

  //------------------------------------------
  // Handle Input
  //------------------------------------------

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  }

  //------------------------------------------
  // Submit
  //------------------------------------------

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      let thumbnailUrl =
        editingProject?.thumbnail || "";

      if (thumbnail) {
        thumbnailUrl = await uploadImage(
          thumbnail
        );
      }

      let galleryUrls =
        editingProject?.gallery || [];

      if (gallery.length > 0) {
        galleryUrls = await uploadGallery(
          gallery
        );
      }

      const projectData = {
        title: form.title,

        slug: form.title
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "-"),

        client: form.client,

        category: form.category,

        description: form.description,

        fullDescription: form.fullDescription,

        technologies: form.technologies
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        githubUrl: form.githubUrl,

        liveUrl: form.liveUrl,

        thumbnail: thumbnailUrl,

        gallery: galleryUrls,

        featured: form.featured,
      };

      if (editingProject?.id) {
        await updateClientWork(
          editingProject.id,
          projectData
        );
      } else {
        await addClientWork(projectData);
      }

      alert("Project Saved Successfully");

      if (onFinish) onFinish();

    } catch (err) {
      console.error(err);
      alert("Failed to save project.");
    } finally {
      setLoading(false);
    }
  }

  //------------------------------------------

  return (
    <form
      className="project-form"
      onSubmit={handleSubmit}
    >
      <h2>
        {editingProject
          ? "Edit Project"
          : "Add New Project"}
      </h2>

      <input
        name="title"
        placeholder="Project Title"
        value={form.title}
        onChange={handleChange}
        required
      />

      <input
        name="client"
        placeholder="Client Name"
        value={form.client}
        onChange={handleChange}
      />

      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
      />

      <textarea
        rows="3"
        name="description"
        placeholder="Short Description"
        value={form.description}
        onChange={handleChange}
      />

      <textarea
        rows="6"
        name="fullDescription"
        placeholder="Full Description"
        value={form.fullDescription}
        onChange={handleChange}
      />

      <input
        name="technologies"
        placeholder="React, Firebase, Tailwind CSS..."
        value={form.technologies}
        onChange={handleChange}
      />

      <input
        name="githubUrl"
        placeholder="GitHub URL"
        value={form.githubUrl}
        onChange={handleChange}
      />

      <input
        name="liveUrl"
        placeholder="Live Website URL"
        value={form.liveUrl}
        onChange={handleChange}
      />

      <label>Thumbnail</label>

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setThumbnail(e.target.files[0])
        }
      />

      <label>Gallery Images</label>

      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) =>
          setGallery([...e.target.files])
        }
      />

      <div className="checkbox-group">
        <input
          id="featured"
          name="featured"
          type="checkbox"
          checked={form.featured}
          onChange={handleChange}
        />

        <label htmlFor="featured">
          Featured Project
        </label>
      </div>

      <button
        className="primary-btn"
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Uploading..."
          : editingProject
          ? "Update Project"
          : "Add Project"}
      </button>
    </form>
  );
}