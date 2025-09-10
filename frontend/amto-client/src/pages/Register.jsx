import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("individual");
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    saccoName: "",
    contactPerson: "",
    contactEmail: "",
    contactPhone: "",
    numberOfVehicles: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "password") {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password) => {
    let strength = "Weak";
    if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
      strength = "Strong";
    } else if (password.length >= 6) {
      strength = "Medium";
    }
    setPasswordStrength(strength);
  };

  const validate = () => {
    let newErrors = {};

    if (accountType === "individual") {
      if (!form.fname.trim()) newErrors.fname = "First name is required";
      if (!form.lname.trim()) newErrors.lname = "Last name is required";
      if (!form.email.trim()) newErrors.email = "Email is required";
      if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    } else {
      if (!form.saccoName.trim())
        newErrors.saccoName = "Sacco / Company name is required";
      if (!form.contactPerson.trim())
        newErrors.contactPerson = "Contact person is required";
      if (!form.contactEmail.trim())
        newErrors.contactEmail = "Contact email is required";
      if (!form.contactPhone.trim())
        newErrors.contactPhone = "Contact phone is required";
    }

    if (!form.password) newErrors.password = "Password is required";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // 🔹 Later: send to backend
    localStorage.setItem("token", "dummy-token");
    navigate("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center h-full"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>

      {/* Account Type */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Registering as:</label>
        <select
          name="accountType"
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
          className="border rounded w-full p-3"
        >
          <option value="individual">Individual</option>
          <option value="sacco">Sacco / Transport Company</option>
        </select>
      </div>

      {accountType === "individual" ? (
        <>
          <div className="mb-4">
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              value={form.fname}
              onChange={handleChange}
              className={`border rounded w-full p-3 ${
                errors.fname ? "border-red-500" : ""
              }`}
            />
            {errors.fname && <p className="text-red-500 text-sm">{errors.fname}</p>}
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              value={form.lname}
              onChange={handleChange}
              className={`border rounded w-full p-3 ${
                errors.lname ? "border-red-500" : ""
              }`}
            />
            {errors.lname && <p className="text-red-500 text-sm">{errors.lname}</p>}
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={`border rounded w-full p-3 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className={`border rounded w-full p-3 ${
                errors.phone ? "border-red-500" : ""
              }`}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
        </>
      ) : (
        <>
          <div className="mb-4">
            <input
              type="text"
              name="saccoName"
              placeholder="Sacco / Transport Company Name"
              value={form.saccoName}
              onChange={handleChange}
              className={`border rounded w-full p-3 ${
                errors.saccoName ? "border-red-500" : ""
              }`}
            />
            {errors.saccoName && (
              <p className="text-red-500 text-sm">{errors.saccoName}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="contactPerson"
              placeholder="Contact Person"
              value={form.contactPerson}
              onChange={handleChange}
              className={`border rounded w-full p-3 ${
                errors.contactPerson ? "border-red-500" : ""
              }`}
            />
            {errors.contactPerson && (
              <p className="text-red-500 text-sm">{errors.contactPerson}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="contactEmail"
              placeholder="Contact Email"
              value={form.contactEmail}
              onChange={handleChange}
              className={`border rounded w-full p-3 ${
                errors.contactEmail ? "border-red-500" : ""
              }`}
            />
            {errors.contactEmail && (
              <p className="text-red-500 text-sm">{errors.contactEmail}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="contactPhone"
              placeholder="Contact Phone Number"
              value={form.contactPhone}
              onChange={handleChange}
              className={`border rounded w-full p-3 ${
                errors.contactPhone ? "border-red-500" : ""
              }`}
            />
            {errors.contactPhone && (
              <p className="text-red-500 text-sm">{errors.contactPhone}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="number"
              name="numberOfVehicles"
              placeholder="Number of Vehicles (optional)"
              value={form.numberOfVehicles}
              onChange={handleChange}
              className="border rounded w-full p-3"
            />
          </div>
        </>
      )}

      {/* Password */}
      <div className="mb-4">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className={`border rounded w-full p-3 ${
            errors.password ? "border-red-500" : ""
          }`}
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

        {form.password && (
          <p
            className={`text-sm mt-1 ${
              passwordStrength === "Weak"
                ? "text-red-500"
                : passwordStrength === "Medium"
                ? "text-yellow-500"
                : "text-green-600"
            }`}
          >
            Password strength: {passwordStrength}
          </p>
        )}
      </div>

      <div className="mb-4">
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          className={`border rounded w-full p-3 ${
            errors.confirmPassword ? "border-red-500" : ""
          }`}
        />
        {errors.confirmPassword ? (
          <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
        ) : (
          form.confirmPassword &&
          form.confirmPassword === form.password && (
            <p className="text-green-600 text-sm">Passwords match ✅</p>
          )
        )}
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white w-full py-3 rounded hover:bg-green-700"
      >
        Register
      </button>

      <p className="text-center mt-4 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}
