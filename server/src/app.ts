import express from "express";
import http from "http";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import { Routes } from "./routes";
import "dotenv/config";

export class App{
    app: express.Application;
    port: string |number;
    server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
    

    constructor(routes: Routes[]) {
        this.app = express();
        this.server = http.createServer(this.app);
        this.port = 8080;
        
        
        this.initialisation();
        this.initializeRoute(routes);
        this.listen();
    };

    private listen() {
        this.server.listen(this.port, () => {
            console.log(`Notre serveur tourne correctement sur le port : ${this.port}`);
            
        })
    };

    private initialisation() {
        this.app
            .use(cors())
            .use(morgan("dev"))
            .use(express.json())
    };

    private initializeRoute(routes: Routes[]){
        routes.forEach(route => {
            this.app.use("/",route.router)
        });
    };

} 



