import axios from "axios";

const CLOUD_NAME = "dnk97apqa";
const UPLOAD_PRESET = "portfolio_upload";

const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

/**
 * Upload Single Image
 */
export const uploadImage = async (file) => {
  try {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    const response = await axios.post(CLOUDINARY_URL, formData);

    return response.data.secure_url;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw error;
  }
};

/**
 * Upload Multiple Images
 */
export const uploadGallery = async (files) => {
  try {
    const uploads = Array.from(files).map((file) => uploadImage(file));

    return await Promise.all(uploads);
  } catch (error) {
    console.error(error);
    throw error;
  }
};