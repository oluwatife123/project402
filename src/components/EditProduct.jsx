import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [newImageFile, setNewImageFile] = useState(null); 
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setTitle(data.title || "");
          setPrice(data.price || "");
          setImageUrl(data.imageUrl || data.image || "");
        } else {
          alert("Product not found");
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        alert("Failed to load product");
        navigate("/");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id, navigate]);

  // Handle image file input change
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewImageFile(e.target.files[0]);
      // Preview the new image
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Upload image to Cloudinary
  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "project402"); // your preset here

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqvho18kf/image/upload", // your cloud name here
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return data.secure_url; // the uploaded image url
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !price) {
      alert("Title and price are required.");
      return;
    }

    setSaving(true);

    try {
      let updatedImageUrl = imageUrl;

      // If user selected a new image, upload it first
      if (newImageFile) {
        updatedImageUrl = await uploadImageToCloudinary(newImageFile);
      }

      // Update Firestore document
      const docRef = doc(db, "products", id);
      await updateDoc(docRef, {
        title,
        price: Number(price),
        imageUrl: updatedImageUrl,
        updatedAt: new Date(),
      });

      alert("Product updated successfully!");
      navigate(`/product/${id}`);
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading product data...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Edit Product</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-semibold">Title:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Price (in ₦):</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            min="0"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Product Image:</label>
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Product"
              className="w-48 h-48 object-cover rounded mb-2"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block"
          />
          <p className="text-sm text-gray-500 mt-1">
            Select a new image to replace the current one (optional)
          </p>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="bg-[#8B653E] text-white px-6 py-2 rounded hover:bg-[#623b14] transition disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
