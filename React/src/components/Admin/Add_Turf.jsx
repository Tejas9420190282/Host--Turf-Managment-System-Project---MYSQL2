// Add_Turf.jsx (React)

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa";

function Add_Turf() {
    const [form, setForm] = useState({
        turf_name: "",
        area: "",
        city: "",
        pincode: "",
        light: "",
        price_hr: "",
        equipment: "",
        openingTime: "",
        closingTime: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://host-turf-managment-system-project.onrender.com/add-turf-submit",
                form
            );
            console.log("Turf created successfully:", response.data);
            toast.success("Turf created successfully!");

            navigate(response.data.redirect);
        } catch (error) {
            console.error("Error creating turf:", error);
            toast.error("Error creating turf. Please try again.");
        }
    };

    const handleGoBack = () => {
        navigate(-1); // Go back to previous page
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Back Button */}
            <div className="container mx-auto px-4 pt-6">
                <button
                    onClick={handleGoBack}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
                >
                    <FaArrowLeft className="mr-2" />
                    <span className="hidden sm:inline">Back</span>
                </button>
            </div>

            {/* Form Container */}
            <div className="flex justify-center items-center pb-8">
                <div className="w-full max-w-2xl mx-4 bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Form Header */}
                    <div className="bg-blue-600 px-6 py-4">
                        <h2 className="text-2xl font-bold text-white">
                            Create New Turf
                        </h2>
                    </div>

                    {/* Form Content */}
                    <div className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Grid Layout for Form Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Turf Name */}
                                <div className="col-span-1">
                                    <label className="block text-gray-700 font-medium mb-1">
                                        Turf Name
                                    </label>
                                    <input
                                        type="text"
                                        name="turf_name"
                                        value={form.turf_name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Area */}
                                <div className="col-span-1">
                                    <label className="block text-gray-700 font-medium mb-1">
                                        Area
                                    </label>
                                    <input
                                        type="text"
                                        name="area"
                                        value={form.area}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* City */}
                                <div className="col-span-1">
                                    <label className="block text-gray-700 font-medium mb-1">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={form.city}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Pincode */}
                                <div className="col-span-1">
                                    <label className="block text-gray-700 font-medium mb-1">
                                        Pincode
                                    </label>
                                    <input
                                        type="text"
                                        name="pincode"
                                        value={form.pincode}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Light */}
                                <div className="col-span-1">
                                    <label className="block text-gray-700 font-medium mb-1">
                                        Lighting Available
                                    </label>
                                    <select
                                        name="light"
                                        value={form.light}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Select Option</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                                {/* Price per Hour */}
                                <div className="col-span-1">
                                    <label className="block text-gray-700 font-medium mb-1">
                                        Price per Hour (₹)
                                    </label>
                                    <input
                                        type="number"
                                        name="price_hr"
                                        value={form.price_hr}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Equipment */}
                                <div className="col-span-1">
                                    <label className="block text-gray-700 font-medium mb-1">
                                        Equipment Available
                                    </label>
                                    <select
                                        name="equipment"
                                        value={form.equipment}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Select Option</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                                {/* Opening Time */}
                                <div className="col-span-1">
                                    <label className="block text-gray-700 font-medium mb-1">
                                        Opening Time
                                    </label>
                                    <input
                                        type="time"
                                        name="openingTime"
                                        value={form.openingTime}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Closing Time */}
                                <div className="col-span-1">
                                    <label className="block text-gray-700 font-medium mb-1">
                                        Closing Time
                                    </label>
                                    <input
                                        type="time"
                                        name="closingTime"
                                        value={form.closingTime}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Create Turf
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Add_Turf;


/* 
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Add_Turf() {
    const [form, setForm] = useState({
        turf_name: "",
        area: "",
        city: "",
        pincode: "",
        light: "",
        price_hr: "",
        equipment: "",
        openingTime: "",
        closingTime: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://host-turf-managment-system-project.onrender.com/add-turf-submit",
                form
            );
            console.log("Turf created successfully:", response.data);
            toast.success("Turf created successfully!");

            navigate(response.data.redirect);
        } catch (error) {
            console.error("Error creating turf:", error);
            toast.error("Error creating turf. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Create Turf
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Turf Name
                    <div>
                        <label className="block text-gray-700 font-semibold">
                            Turf Name:
                        </label>
                        <input
                            type="text"
                            name="turf_name"
                            value={form.turf_name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        />
                    </div>

                    {/* Area
                    <div>
                        <label className="block text-gray-700 font-semibold">
                            Area:
                        </label>
                        <input
                            type="text"
                            name="area"
                            value={form.area}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        />
                    </div>

                    {/* City 
                    <div>
                        <label className="block text-gray-700 font-semibold">
                            City:
                        </label>
                        <input
                            type="text"
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        />
                    </div>

                    {/* Pincode 
                    <div>
                        <label className="block text-gray-700 font-semibold">
                            Pincode:
                        </label>
                        <input
                            type="text"
                            name="pincode"
                            value={form.pincode}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        />
                    </div>

                    {/* Light 
                    <div>
                        <label className="block text-gray-700 font-semibold">
                            Light:
                        </label>
                        <select
                            name="light"
                            value={form.light}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    {/* Price per Hour 
                    <div>
                        <label className="block text-gray-700 font-semibold">
                            Price/hr:
                        </label>
                        <input
                            type="text"
                            name="price_hr"
                            value={form.price_hr}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        />
                    </div>

                    {/* Equipment 
                    <div>
                        <label className="block text-gray-700 font-semibold">
                            Equipment:
                        </label>
                        <select
                            name="equipment"
                            value={form.equipment}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    {/* Opening Time 
                    <div>
                        <label className="block text-gray-700 font-semibold">
                            Opening Time:
                        </label>
                        <input
                            type="time"
                            name="openingTime"
                            value={form.openingTime}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        />
                    </div>

                    {/* Closing Time 
                    <div>
                        <label className="block text-gray-700 font-semibold">
                            Closing Time:
                        </label>
                        <input
                            type="time"
                            name="closingTime"
                            value={form.closingTime}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        />
                    </div>

                    {/* Submit Button
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Submit Data
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Add_Turf;
 */