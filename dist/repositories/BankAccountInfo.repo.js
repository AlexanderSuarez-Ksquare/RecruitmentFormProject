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
exports.deleteBankAccountInfoById = exports.updateBankAccountInfoById = exports.getBankAccountInfoById = exports.createBankAccountInfo = void 0;
const bankaccountinfo_1 = __importDefault(require("../models/bankaccountinfo"));
// Create
const createBankAccountInfo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield bankaccountinfo_1.default.create(data);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createBankAccountInfo = createBankAccountInfo;
// Read by ID
const getBankAccountInfoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield bankaccountinfo_1.default.findByPk(id);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.getBankAccountInfoById = getBankAccountInfoById;
// Update by ID
const updateBankAccountInfoById = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bankAccountInfo = yield bankaccountinfo_1.default.findByPk(id);
        if (bankAccountInfo) {
            yield bankAccountInfo.update(data);
            return bankAccountInfo;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.updateBankAccountInfoById = updateBankAccountInfoById;
// Delete by ID
const deleteBankAccountInfoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bankAccountInfo = yield bankaccountinfo_1.default.findByPk(id);
        if (bankAccountInfo) {
            yield bankAccountInfo.destroy();
            return true;
        }
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
exports.deleteBankAccountInfoById = deleteBankAccountInfoById;
