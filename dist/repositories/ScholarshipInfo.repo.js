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
exports.deleteScholarshipInfoById = exports.updateScholarshipInfoById = exports.getScholarshipInfoById = exports.createScholarshipInfo = void 0;
const scholarshipinfo_1 = __importDefault(require("../models/scholarshipinfo"));
// Create
const createScholarshipInfo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield scholarshipinfo_1.default.create(data);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createScholarshipInfo = createScholarshipInfo;
// Read by ID
const getScholarshipInfoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield scholarshipinfo_1.default.findByPk(id);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.getScholarshipInfoById = getScholarshipInfoById;
// Update by ID
const updateScholarshipInfoById = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const scholarshipInfo = yield scholarshipinfo_1.default.findByPk(id);
        if (scholarshipInfo) {
            yield scholarshipInfo.update(data);
            return scholarshipInfo;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.updateScholarshipInfoById = updateScholarshipInfoById;
// Delete by ID
const deleteScholarshipInfoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const scholarshipInfo = yield scholarshipinfo_1.default.findByPk(id);
        if (scholarshipInfo) {
            yield scholarshipInfo.destroy();
            return true;
        }
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
exports.deleteScholarshipInfoById = deleteScholarshipInfoById;
