const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
 // Get token from header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]
  if (!token)
    return res.status(401).json({success: false, message: 'Access Denied: No Token Provided' });
  try {
    const decoded = jwt.verify(token, process.env.MEHR_E_AMAN_SECRET_KEY);
    req.user = decoded; // decoded = { userId: '...' }
    next();
  } catch (err) {
    res.status(400).json({ success: false, message: 'Invalid Token' });
  }
};

module.exports = authMiddleware;
