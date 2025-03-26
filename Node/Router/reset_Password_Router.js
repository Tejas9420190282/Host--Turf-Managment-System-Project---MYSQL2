

// reset_Password_Router.js (Node)

const express = require('express');
const { forgotPassword_Controller } = require('../Controler/ForgotPassword_Controller');
const { resetPassword_Controller } = require('../Controler/ResetPassword_Controller');
const { verifyResetToken } = require('../Controler/verifyResetToken');

const reset_Password_Router = express.Router();

reset_Password_Router.post("/reset-password/:token", resetPassword_Controller);

resetPassword_Controllerget("/verify-reset-token/:token", verifyResetToken);

exports.reset_Password_Router = reset_Password_Router;


