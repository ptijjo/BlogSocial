import { App } from "./app";
import { UserRouter } from "./routes/user.route";


new App([ new UserRouter()]);


