
// Profile.jsx (React)

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Profile() {
    const user = sessionStorage.getItem("Username");
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem("Username");
        sessionStorage.removeItem("Token");
        toast.success("Logged out successfully!");
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start pt-20 px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <div className="text-center mb-8">
                    <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 mb-4">
                        <span className="text-2xl font-bold text-blue-600">
                            {user?.charAt(0).toUpperCase()}
                        </span>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">
                        Welcome, {user}!
                    </h1>
                    <p className="text-gray-600">Manage your account details</p>
                </div>

                <div className="space-y-6">
                    <div className="border-t border-gray-200 pt-6">
                        <h2 className="text-lg font-medium text-gray-900 mb-4">
                            Account Information
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-500">Username</p>
                                <p className="text-sm font-medium text-gray-900">{user}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Member since</p>
                                <p className="text-sm font-medium text-gray-900">-</p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Profile;