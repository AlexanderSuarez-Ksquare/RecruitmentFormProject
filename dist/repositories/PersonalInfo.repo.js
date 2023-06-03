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
exports.deletePersonalInfoById = exports.updatePersonalInfoById = exports.getPersonalInfoById = exports.createPersonalInfo = void 0;
const personalinfo_1 = __importDefault(require("../models/personalinfo"));
// Create
const createPersonalInfo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield personalinfo_1.default.create(data);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createPersonalInfo = createPersonalInfo;
// Read by ID
const getPersonalInfoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield personalinfo_1.default.findByPk(id);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.getPersonalInfoById = getPersonalInfoById;
// Update by ID
const updatePersonalInfoById = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personalInfo = yield personalinfo_1.default.findByPk(id);
        if (personalInfo) {
            yield personalInfo.update(data);
            return personalInfo;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.updatePersonalInfoById = updatePersonalInfoById;
// Delete by ID
const deletePersonalInfoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personalInfo = yield personalinfo_1.default.findByPk(id);
        if (personalInfo) {
            yield personalInfo.destroy();
            return true;
        }
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
exports.deletePersonalInfoById = deletePersonalInfoById;
