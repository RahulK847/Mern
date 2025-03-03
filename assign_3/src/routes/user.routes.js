const { createNewUserService } = require('../services/user.services');
const router = require('express').Router();

router.post("/create", async (req, res) => {
  try {
    const result = await createNewUserService(req.body);
    if (result.success) {
      return res.status(201).json(result);
    } else {
      return res.status(400).json(result);
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Internal Server Error"
    });
  }
});

module.exports = router;