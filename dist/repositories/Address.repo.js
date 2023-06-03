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
exports.deleteAddressById = exports.updateAddressById = exports.getAddressById = exports.createAddress = void 0;
const address_1 = __importDefault(require("../models/address"));
// Create
const createAddress = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield address_1.default.create(data);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createAddress = createAddress;
// Read by ID
const getAddressById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield address_1.default.findByPk(id);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.getAddressById = getAddressById;
// Update by ID
const updateAddressById = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const address = yield address_1.default.findByPk(id);
        if (address) {
            yield address.update(data);
            return address;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.updateAddressById = updateAddressById;
// Delete by ID
const deleteAddressById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const address = yield address_1.default.findByPk(id);
        if (address) {
            yield address.destroy();
            return true;
        }
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
exports.deleteAddressById = deleteAddressById;
exports.default = {
    createAddress: exports.createAddress,
    getAddressById: exports.getAddressById,
    updateAddressById: exports.updateAddressById,
    deleteAddressById: exports.deleteAddressById,
};
