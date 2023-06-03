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
exports.deleteGovernmentInfoById = exports.updateGovernmentInfoById = exports.getGovernmentInfoById = exports.createGovernmentInfo = void 0;
const governmentinfo_1 = __importDefault(require("../models/governmentinfo"));
// Create
const createGovernmentInfo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield governmentinfo_1.default.create(data);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createGovernmentInfo = createGovernmentInfo;
// Read by ID
const getGovernmentInfoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield governmentinfo_1.default.findByPk(id);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.getGovernmentInfoById = getGovernmentInfoById;
// Update by ID
const updateGovernmentInfoById = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const governmentInfo = yield governmentinfo_1.default.findByPk(id);
        if (governmentInfo) {
            yield governmentInfo.update(data);
            return governmentInfo;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.updateGovernmentInfoById = updateGovernmentInfoById;
// Delete by ID
const deleteGovernmentInfoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const governmentInfo = yield governmentinfo_1.default.findByPk(id);
        if (governmentInfo) {
            yield governmentInfo.destroy();
            return true;
        }
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
exports.deleteGovernmentInfoById = deleteGovernmentInfoById;
