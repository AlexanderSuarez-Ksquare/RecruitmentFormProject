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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAddressExtraInfoById = exports.updateAddressExtraInfoById = exports.getAddressExtraInfoById = exports.createAddressExtraInfo = void 0;
const addressextrainfo_1 = __importDefault(require("../models/addressextrainfo"));
// Create
const createAddressExtraInfo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield addressextrainfo_1.default.create(data);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createAddressExtraInfo = createAddressExtraInfo;
// Read by ID
const getAddressExtraInfoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield addressextrainfo_1.default.findByPk(id);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.getAddressExtraInfoById = getAddressExtraInfoById;
// Update by ID
const updateAddressExtraInfoById = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addressExtraInfo = yield addressextrainfo_1.default.findByPk(id);
        if (addressExtraInfo) {
            yield addressExtraInfo.update(data);
            return addressExtraInfo;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.updateAddressExtraInfoById = updateAddressExtraInfoById;
// Delete by ID
const deleteAddressExtraInfoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addressExtraInfo = yield addressextrainfo_1.default.findByPk(id);
        if (addressExtraInfo) {
            yield addressExtraInfo.destroy();
            return true;
        }
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
exports.deleteAddressExtraInfoById = deleteAddressExtraInfoById;
