import React, { useState, useEffect } from "react";

function EmployeeValidationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    employeeId: "",
    joiningDate: "",
  });

  const [errors, setErrors] = useState({
    name: "Name must be at least 4 characters long and only contain letters and spaces",
    email: "Email must be a valid email address",
    employeeId: "Employee ID must be exactly 6 digits",
    joiningDate: "Joining Date cannot be in the future.",
  });

  const [isValid, setIsValid] = useState(false);

  // Validate on every input change
  const validateForm = () => {
    let newErrors = {};

    if (!/^[a-zA-Z ]{4,}$/.test(form.name)) {
      newErrors.name =
        "Name must be at least 4 characters long and only contain letters and spaces";
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Email must be a valid email address";
    }

    if (!/^\d{6}$/.test(form.employeeId)) {
      newErrors.employeeId = "Employee ID must be exactly 6 digits";
    }

    if (!form.joiningDate || new Date(form.joiningDate) > new Date()) {
      newErrors.joiningDate = "Joining Date cannot be in the future.";
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    validateForm();
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setForm({
        name: "",
        email: "",
        employeeId: "",
        joiningDate: "",
      });
      setErrors({});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="layout-column align-items-center mt-20"
    >
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-name"
      >
        <input
          className="w-100"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          data-testid="input-name-test"
        />
        {errors.name && <p className="error mt-2">{errors.name}</p>}
      </div>

      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-email"
      >
        <input
          className="w-100"
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p className="error mt-2">{errors.email}</p>}
      </div>

      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-employee-id"
      >
        <input
          className="w-100"
          type="text"
          name="employeeId"
          value={form.employeeId}
          onChange={handleChange}
          placeholder="Employee ID"
        />
        {errors.employeeId && <p className="error mt-2">{errors.employeeId}</p>}
      </div>

      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-joining-date"
      >
        <input
          className="w-100"
          type="date"
          name="joiningDate"
          value={form.joiningDate}
          onChange={handleChange}
          placeholder="Joining Date"
        />
        {errors.joiningDate && (
          <p className="error mt-2">{errors.joiningDate}</p>
        )}
      </div>

      <button disabled={!isValid} data-testid="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default EmployeeValidationForm;
