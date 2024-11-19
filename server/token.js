import jwt from 'jsonwebtoken'; 

// Secret key for signing the token (keep this secure)
const SECRET_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJ2YWlzaG5hdmkiLCJpYXQiOjE3MzE5MjAxMDcsImV4cCI6MTczMjUyNDkwN30.KJVyD_B9aVRhhimqGtXYKSC9bnOTpvtNGiKg7xvCSb8";

// Function to generate a JWT
function generateJwt(payload, secretKey, options = {}) {
    /**
     * Generates a JWT token.
     * 
     * @param {Object} payload - The payload data to include in the token.
     * @param {string} secretKey - The secret key for signing the token.
     * @param {Object} options - Additional options (e.g., expiresIn).
     * 
     * @returns {string} - A signed JWT token.
     */
    return jwt.sign(payload, secretKey, options);
}

// Example usage
const payload = { userId: 123, username: "vaishnavi" }; // Replace with your payload
const options = { expiresIn: "7d" }; // Token expires in 1 hour

const token = generateJwt(payload, SECRET_KEY, options);

console.log("Generated JWT:", token);
function verifyJwt(token, secretKey) {
    try {
        const decoded = jwt.verify(token, secretKey);
        console.log("Decoded payload:", decoded);
        return decoded;
    } catch (err) {
        console.error("Token verification failed:", err.message);
        return null;
    }
}

// Example verification
verifyJwt(token, SECRET_KEY);