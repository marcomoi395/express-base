/*
"use strict";

const express = require("express");
const { apiKey, permission } = require("../auth/checkAuth");
const router = express.Router();

// Check API
router.use(apiKey);
// Check Permission
router.use(permission("0000"));

router.use("/v1/api/product", require("./product"));

module.exports = router;
*/
