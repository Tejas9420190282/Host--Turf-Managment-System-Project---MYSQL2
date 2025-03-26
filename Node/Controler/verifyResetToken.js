
// verifyResetToken.js
const { mySqlConnectionPool } = require("../Config/Db");

const verifyResetToken = async (req, res) => {
    try {
        const { token } = req.params;
        
        const [userResult] = await mySqlConnectionPool.query(
            "SELECT * FROM user WHERE resetToken = ? AND resetTokenExpiry > ?",
            [token, Date.now()]
        );
        
        res.status(200).json({
            success: !!userResult[0],
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Token verification failed",
        });
    }
};

module.exports = { verifyResetToken };
