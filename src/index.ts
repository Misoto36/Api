import Server from "./models/server";
import dotenv from 'dotenv';

dotenv.config();

const app = new Server();

app.listen();