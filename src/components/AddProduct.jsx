import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Show image preview
  useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(imageFile);
    } else {
      setImagePreview(null);
    }
  }, [imageFile]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !price || !description || !imageFile) {
      alert("Please fill in all fields!");
      return;
    }

    if (isNaN(price) || Number(price) <= 0) {
      alert("Please enter a valid price greater than 0.");
      return;
    }

    const currentUser = auth.currentUser;
    if (!currentUser) {
      alert("You must be logged in to add a product.");
      return;
    }

    setLoading(true);

    try {
      // Upload image to Cloudinary
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "project402");

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/dqvho18kf/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error("Image upload failed.");
      }

      const data = await res.json();
      const imageUrl = data.secure_url;

      // Save product details to Firestore
      await addDoc(collection(db, "products"), {
        title,
        price: parseFloat(price),
        description,
        imageUrl,
        userId: currentUser.uid,
        createdAt: serverTimestamp(),
      });

      alert("Product added successfully!");
      navigate("/"); // Redirect to home or products page
    } catch (error) {
      console.error("Error adding product: ", error);
      alert("Failed to add product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-[#8B653E]">
        Add New Product
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="border p-2 rounded"
        />

        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="mt-2 rounded max-h-48 object-cover"
          />
        )}

        <button
          type="submit"
          className="bg-[#8B653E] text-white px-4 py-2 rounded mt-2"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
