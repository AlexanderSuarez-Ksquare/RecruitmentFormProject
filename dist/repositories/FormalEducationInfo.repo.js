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
exports.deleteFormalEducationInfoById = exports.updateFormalEducationInfoById = exports.getFormalEducationInfoById = exports.createFormalEducationInfo = void 0;
const formaleducationinfo_1 = __importDefault(require("../models/formaleducationinfo"));
// Create
const createFormalEducationInfo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield formaleducationinfo_1.default.create(data);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createFormalEducationInfo = createFormalEducationInfo;
// Read by ID
const getFormalEducationInfoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield formaleducationinfo_1.default.findByPk(id);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.getFormalEducationInfoById = getFormalEducationInfoById;
// Update by ID
const updateFormalEducationInfoById = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const formalEducationInfo = yield formaleducationinfo_1.default.findByPk(id);
        if (formalEducationInfo) {
            yield formalEducationInfo.update(data);
            return formalEducationInfo;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.updateFormalEducationInfoById = updateFormalEducationInfoById;
// Delete by ID
const deleteFormalEducationInfoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const formalEducationInfo = yield formaleducationinfo_1.default.findByPk(id);
        if (formalEducationInfo) {
            yield formalEducationInfo.destroy();
            return true;
        }
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
exports.deleteFormalEducationInfoById = deleteFormalEducationInfoById;
