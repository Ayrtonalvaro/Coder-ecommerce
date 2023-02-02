import React, { useState } from "react";
import { useRef } from "react";

const FormCheckOut = ({ createOrder }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
    };

    setName(data.name);
    setPhone(data.phone);
    setEmail(data.email);
  };


  return (
    <div>
      <form className="mt-6" ref={form}>
        <div className="mb-2">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-800"
          >
            Name
          </label>
          <input
            name="name"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-800"
          >
            Phone
          </label>
          <input
            name="phone"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800"
          >
            Email
          </label>
          <input
            name="email"
            type="email"
            className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div>
          <p className="text-xs text-red-600 cursor-default ">
            Los datos son correctos?
          </p>
          <button onClick={handleSubmit}>Si</button>
        </div>

        <div className="mt-6">
          <button
            onClick={() => createOrder(name, phone, email)}
            className=" px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            Finalizar compra
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormCheckOut;
