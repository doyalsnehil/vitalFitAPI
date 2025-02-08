const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/signUpModel");
const { sendErrorResponse } = require("../utils/errorHandler");
const { generateToken } = require("../utils/generateToken");
const bcrypt = require("bcryptjs");

require("dotenv").config();
exports.userLogin = async function(req, res) {
	const email = req.body.email;
	const password = req.body.password;

	try {
		const user = await User.findOne({ email });

		if (!user) {

			return sendErrorResponse(res, 401, "Incorrect Email or Password");

		}

		const passwordMatch = await bcrypt.compare(password, user.password);

		if (!passwordMatch) {
			return sendErrorResponse(res, 401, "Incorrect Email or Password ");
		}

		const token = generateToken(user._id, user.email);

		return res.status(200).json({ success: "user Logged in", token });
	} catch (err) {

		console.log("Error in Verifying user Data ", err);

		return sendErrorResponse(res, 500, "Internal Server Error");
	}
};
