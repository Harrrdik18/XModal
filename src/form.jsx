import React, { useState, useEffect } from "react";
import "./XModal.css";

const XModal = ({ setIsOpenModal, setModalOpenBackground }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains("modalBackground")) {
        setIsOpenModal(false);
        setModalOpenBackground(false);
        setFormData({
          username: "",
          email: "",
          phone: "",
          dob: "",
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpenModal, setModalOpenBackground]);

  const handleFormDataChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const validationChecks = (e) => {
    e.preventDefault(); // Prevent form submission

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      window.alert("Invalid email. Please check your email address.");
      return;
    }

    if (formData.phone.length < 10) {
      window.alert(
        "Invalid phone number. Please enter a 10-digit phone number."
      );
      return;
    }

    const inputDate = new Date(formData.dob);
    const currentDate = new Date();
    if (inputDate > currentDate) {
      window.alert(
        "Invalid date of birth. Date of birth cannot be in the future."
      );
      return;
    }

    // If all validations pass, you can submit the form here
  };

  return (
    <div className="modalBackground">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <h1>Fill Details</h1>
        </div>
        <div className="modal-content">
          <form onSubmit={validationChecks}>
            <label htmlFor="username">
              <h3>Username:</h3>
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleFormDataChange}
              required
            />

            <label htmlFor="email">
              <h3>Email Address:</h3>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleFormDataChange}
              required
            />

            <label htmlFor="phone">
              <h3>Phone Number:</h3>
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleFormDataChange}
              required
            />

            <label htmlFor="dob">
              <h3>Date of Birth:</h3>
            </label>
            <input
              type="date"
              id="dob"
              value={formData.dob}
              onChange={handleFormDataChange}
              required
            />
            <div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default XModal;
