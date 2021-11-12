"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// import helmet from 'helmet';
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./libs/db"));
const User_1 = __importDefault(require("./models/User"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
// app.use(helmet());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', async (req, res) => {
    const str = 'Hello Express!!!';
    return res.json(str);
});
app.get('/users', async (req, res) => {
    try {
        const users = await User_1.default.findAll();
        return res.json(users.map(({ firstName, lastName, email, }) => ({
            firstName,
            lastName,
            email,
        })));
        return res.json({ users });
    }
    catch (error) {
        console.log({ error });
        return res.json({ error });
    }
});
try {
    console.log({ db: db_1.default, User: User_1.default });
    app.listen(port, () => console.log(`Running on port ${port}!!`));
    // doStuffWithUser();
}
catch (err) {
    console.log({ err });
}
//# sourceMappingURL=main.js.map