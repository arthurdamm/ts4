"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5000;
app.get('/', async (req, res) => {
    const str = 'Hello Express!!!';
    res.json(str);
});
app.listen(port, () => console.log(`Running on port ${port}!!!!`));
//# sourceMappingURL=main.js.map