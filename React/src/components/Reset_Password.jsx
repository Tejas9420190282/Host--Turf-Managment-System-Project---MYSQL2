
// ResetPassword.jsx (React)
// Updated ResetPassword.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isValidToken, setIsValidToken] = useState(null);

    // Verify token on component mount
    useEffect(() => {
        const verifyToken = async () => {
            try {
                const response = await axios.get(
                    `https://host-turf-managment-system-project.onrender.com/verify-reset-token/${token}`
                );
                setIsValidToken(response.data.success);
            } catch (err) {
                setIsValidToken(false);
                setError("Invalid or expired token");
            }
        };
        verifyToken();
    }, [token]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `https://host-turf-managment-system-project.onrender.com/reset-password/${token}`,
                { password }
            );
            setMessage(response.data.message);
            setTimeout(() => navigate("/"), 3000);
        } catch (err) {
            setError(err.response?.data?.message || "Error resetting password");
        }
    };

    if (isValidToken === null) return <div>Loading...</div>;
    if (isValidToken === false) return <div>{error || "Invalid token"}</div>;

    return (
        <div className="reset-password-container">
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="New password"
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {message && <div className="success">{message}</div>}
            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default ResetPassword;