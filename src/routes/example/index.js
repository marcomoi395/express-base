/*
"use strict";

const express = require("express");
const router = express.Router();
const accessController = require("../../controllers/access.controller");
const asyncHandler = require("../../helper/asyncHandler");
const { authentication } = require("../../auth/authUtils");

// Signup
router.post("/shop/signup", asyncHandler(accessController.signUp));
router.post("/shop/login", asyncHandler(accessController.login));

// Authentication
router.use(authentication);

// Logout
router.post("/shop/logout", asyncHandler(accessController.logout));
router.post(
    "/shop/handleRefreshToken",
    asyncHandler(accessController.handleRefreshToken),
);

module.exports = router;
*/
