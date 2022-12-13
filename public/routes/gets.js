"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const gets_1 = __importDefault(require("../controllers/gets"));
const router = express_1.default.Router();
router.get("/", gets_1.default.getAidnContent);
router.get("/aidn", gets_1.default.getAidnContent);
module.exports = router;
