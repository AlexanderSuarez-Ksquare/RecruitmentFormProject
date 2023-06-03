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
exports.deleteSkillById = exports.updateSkillById = exports.getSkillById = exports.createSkill = void 0;
const skill_1 = __importDefault(require("../models/skill"));
// Create
const createSkill = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield skill_1.default.create(data);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createSkill = createSkill;
// Read by ID
const getSkillById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield skill_1.default.findByPk(id);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.getSkillById = getSkillById;
// Update by ID
const updateSkillById = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skill = yield skill_1.default.findByPk(id);
        if (skill) {
            yield skill.update(data);
            return skill;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.updateSkillById = updateSkillById;
// Delete by ID
const deleteSkillById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skill = yield skill_1.default.findByPk(id);
        if (skill) {
            yield skill.destroy();
            return true;
        }
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
exports.deleteSkillById = deleteSkillById;
