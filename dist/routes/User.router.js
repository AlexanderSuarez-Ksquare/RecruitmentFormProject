"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const User_repo_1 = require("../repositories/User.repo");
exports.UserRouter = (0, express_1.Router)();
// Create User
exports.UserRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, firstname, lastname, email, phone } = req.body;
        const newUser = yield (0, User_repo_1.createUser)({ username, firstname, lastname, email, phone });
        if (!newUser) {
            return res.sendStatus(500);
        }
        return res.status(201).json(newUser);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}));
// Get User by Username
exports.UserRouter.get("/:username", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.params.username;
    const foundUser = yield (0, User_repo_1.getUserByUsername)(username);
    if (!foundUser) {
        return res.sendStatus(404);
    }
    return res.json(foundUser);
}));
// Update User by Username
exports.UserRouter.put("/:username", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.params.username;
    const { username: newUsername, firstname, lastname, email, phone } = req.body;
    const updatedUser = yield (0, User_repo_1.updateUserByUsername)(username, { username: newUsername, firstname, lastname, email, phone });
    if (!updatedUser) {
        return res.sendStatus(404);
    }
    return res.json(updatedUser);
}));
// Delete User by Username
exports.UserRouter.delete("/:username", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.params.username;
    const success = yield (0, User_repo_1.deleteUserByUsername)(username);
    if (!success) {
        return res.sendStatus(404);
    }
    return res.sendStatus(204);
}));
exports.default = exports.UserRouter;
