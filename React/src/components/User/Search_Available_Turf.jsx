// Search_Available_Turf.jsx (React)

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "./Navbar";
import { FaArrowLeft } from "react-icons/fa";

function Search_Available_Turf() {
    // Form fields
    const [city, setCity] = useState("");
    const [area, setArea] = useState("");
    const [booking_date, setBookingDate] = useState("");

    sessionStorage.setItem("Booking_Date", booking_date);

    // State to store fetched turf data
    const [turfData, setTurfData] = useState([]);

    const navigate = useNavigate();

    // Function for back navigation
    const handleGoBack = () => {
        navigate(-1); // Goes back to previous page
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(
            `City: ${city}, Area: ${area}, Booking Date: ${booking_date}`
        );

        try {
            const response = await axios.get(
                "https://host-turf-managment-system-project.onrender.com/search-available-turf-submit",
                {
                    params: { city, area, booking_date },
                }
            );
            console.log("Response Data:", response.data); // Debugging log
            setTurfData(response.data.availableSlots); // Store response in state

            sessionStorage.setItem(
                "TurfData",
                JSON.stringify(response.data.availableSlots)
            );
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Function to handle slot selection
    const handleSelectSlot = (turfId, sloteId) => {
        console.log(`Selected Turf ID: ${turfId}, Slot ID: ${sloteId}`);
        toast.success(`Selected Turf ID: ${turfId}, Slot ID: ${sloteId}`);

        navigate(
            `/user/search-available-turf/selected-available-slote/${sloteId}/turfid/${turfId}`
        );
    };

    return (
        <>
            <Navbar />

            {/* OPTION 1: Back Button ABOVE the form (standalone) - RECOMMENDED */}
            <div className="max-w-4xl mx-auto px-6 pt-6">
                <button
                    onClick={handleGoBack}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                    <FaArrowLeft className="mr-2" />
                    <span className="hidden sm:inline">Back</span>
                </button>
            </div>

            <form
                onSubmit={handleSubmit}
                className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md lg:mt-6"
            >

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* City Input */}
                    <div className="space-y-1">
                        <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                        >
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                            placeholder="Enter City"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        />
                    </div>

                    {/* Area Input */}
                    <div className="space-y-1">
                        <label
                            htmlFor="area"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Area
                        </label>
                        <input
                            type="text"
                            id="area"
                            name="area"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                            required
                            placeholder="Enter Area"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        />
                    </div>

                    {/* Date Input */}
                    <div className="space-y-1">
                        <label
                            htmlFor="date"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Booking Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={booking_date}
                            onChange={(e) => setBookingDate(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-end">
                        <button
                            type="submit"
                            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Find Turf
                        </button>
                    </div>
                </div>
            </form>

            {/* Display data in table format */}
            {turfData?.length > 0 && (
                <div className="mt-6 overflow-x-auto">
                    <h2 className="text-xl font-bold mb-4 text-gray-800">
                        Available Turfs
                    </h2>
                    <div className="shadow-md rounded-lg overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Turf Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                                        City
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                                        Area
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                                        Pincode
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Light
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                                        Start
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                                        End
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {turfData.map((turf, index) => (
                                    <tr
                                        key={turf.slote_id}
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">
                                                {turf.turf_name}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                                            <div className="text-sm text-gray-500">
                                                {turf.city}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                                            <div className="text-sm text-gray-500">
                                                {turf.area}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                                            <div className="text-sm text-gray-500">
                                                {turf.pincode}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                    turf.light === "Yes"
                                                        ? "bg-green-100 text-green-800"
                                                        : "bg-red-100 text-red-800"
                                                }`}
                                            >
                                                {turf.light}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                ₹{turf.price_hr}/hr
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                                            <div className="text-sm text-gray-500">
                                                {turf.start_time}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                                            <div className="text-sm text-gray-500">
                                                {turf.end_time}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button
                                                onClick={() =>
                                                    handleSelectSlot(
                                                        turf.TURF_Id,
                                                        turf.slote_id,
                                                        index
                                                    )
                                                }
                                                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors"
                                            >
                                                Select
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
}

export default Search_Available_Turf;
