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
exports.AddressExtraInfoRouter = void 0;
const express_1 = require("express");
const AddressExtraInfo_repo_1 = require("../repositories/AddressExtraInfo.repo");
exports.AddressExtraInfoRouter = (0, express_1.Router)();
exports.AddressExtraInfoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const newAddressExtraInfo = yield (0, AddressExtraInfo_repo_1.createAddressExtraInfo)(data);
        if (newAddressExtraInfo) {
            return res.send(newAddressExtraInfo);
        }
        else {
            return res.sendStatus(500);
        }
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}));
exports.AddressExtraInfoRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const addressExtraInfo = yield (0, AddressExtraInfo_repo_1.getAddressExtraInfoById)(id);
        if (addressExtraInfo) {
            return res.send(addressExtraInfo);
        }
        else {
            return res.sendStatus(404);
        }
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}));
exports.AddressExtraInfoRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const data = req.body;
        const updatedAddressExtraInfo = yield (0, AddressExtraInfo_repo_1.updateAddressExtraInfoById)(id, data);
        if (updatedAddressExtraInfo) {
            return res.send(updatedAddressExtraInfo);
        }
        else {
            return res.sendStatus(404);
        }
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}));
exports.AddressExtraInfoRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const success = yield (0, AddressExtraInfo_repo_1.deleteAddressExtraInfoById)(id);
        if (success) {
            return res.sendStatus(200);
        }
        else {
            return res.sendStatus(404);
        }
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}));
