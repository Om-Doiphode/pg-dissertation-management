const express = require("express");
const {
  createPDF,
  summarize,
  fetchAllThesis,
  firstSubmission,
  fetchNotifications,
  updateFeedback,
} = require("../controllers/thesisControllers");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", createPDF);
router.post("/summarize", summarize);
router.post("/submitThesis", protect, firstSubmission);
router.get("/", protect, fetchAllThesis);
router.get("/thesis-notifications", protect, fetchNotifications);
router.post("/feedback", updateFeedback);

module.exports = router;