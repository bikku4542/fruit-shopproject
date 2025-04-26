import React, { useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import axios from 'axios';

export default function AdminAddItems() {
  const [formData, setFormData] = useState({
    itemTitle: '',
    itemDetails: '',
    itemImage: '',
    itemPrice: '',
    itemCategory: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === 'itemCategory' ? String(value) : value;
    setFormData(prev => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', {
        name: formData.itemTitle,
        description: formData.itemDetails,
        image: formData.itemImage,
        price: formData.itemPrice,
        category: formData.itemCategory
      });
      setMessage("Item successfully added!");
    } catch (error) {
      console.log(error);
      setMessage("Failed to add item.");
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="container-fluid d-flex align-items-center justify-content-center vh-100 bg-dark text-light">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Add New Item</h2>
          <form onSubmit={handleSubmit} method="POST">
            <div className="form-group">
              <label htmlFor="itemTitle">Item Title</label>
              <input
                type="text"
                className="form-control"
                id="itemTitle"
                name="itemTitle"
                placeholder="e.g. Fresh Tomatoes"
                value={formData.itemTitle}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="itemPrice">Price (₹)</label>
              <input
                type="text"
                className="form-control"
                id="itemPrice"
                name="itemPrice"
                placeholder="e.g. 50"
                value={formData.itemPrice}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="itemImage">Image URL</label>
              <input
                type="text"
                className="form-control"
                id="itemImage"
                name="itemImage"
                placeholder="Paste image link here"
                value={formData.itemImage}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="itemCategory">Category</label>
              <select
                className="form-control"
                id="itemCategory"
                name="itemCategory"
                value={formData.itemCategory}
                onChange={handleChange}
                required
              >
                <option value="">Choose Category</option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Bakery">Bakery</option>
                <option value="Protein">Protein</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="itemDetails">Details</label>
              <input
                type="text"
                className="form-control"
                id="itemDetails"
                name="itemDetails"
                placeholder="Short description of the item"
                value={formData.itemDetails}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-warning btn-block mt-3">
              Submit Item
            </button>
            {message && <p className="mt-3">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
