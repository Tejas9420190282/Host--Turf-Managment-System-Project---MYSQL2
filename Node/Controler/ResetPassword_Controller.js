
// resetPassword_Controller.js (Node)

const bcrypt = require("bcrypt");
const { mySqlConnectionPool } = require("../Config/Db");

const resetPassword_Controller = async (req, res) => {
    try {
        const { token } = req.params;
        const { password } = req.body;

        if (!password) {
            return res.status(400).json({
                success: false,
                message: "Password is required",
            });
        }

        // Find user with valid token
        const [userResult] = await mySqlConnectionPool.query(
            "SELECT * FROM user WHERE resetToken = ? AND resetTokenExpiry > ?",
            [token, Date.now()]
        );
        
        if (!userResult[0]) {
            return res.status(400).json({
                success: false,
                message: "Invalid or expired token",
            });
        }

        // Update password
        const hashedPassword = await bcrypt.hash(password, 10);
        await mySqlConnectionPool.query(
            "UPDATE user SET password = ?, resetToken = NULL, resetTokenExpiry = NULL WHERE email = ?",
            [hashedPassword, userResult[0].email]
        );

        res.status(200).json({
            success: true,
            message: "Password updated successfully",
        });
    } catch (error) {
        console.error(`Error in resetPassword_Controller: ${error.message}`);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

module.exports = { resetPassword_Controller };
