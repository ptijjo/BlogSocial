import { UserInterface } from '../models/user.interface';
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

//On crée une classe qui possede le CRUD d'un utilisateur
export class userController{

    //Méthode pour récuperer tous les utilisateurs
    public getUsers = async (req:Request, res:Response) => {
        try {

            const allUsers: UserInterface[] = await prisma.user.findMany();

            res.status(200).json({
                message: "Status ok",
                length :allUsers.length,
                data : allUsers
            })
            
            
        } catch (error) {
            res.status(400).json({
                message : error
            })
        }
    }

    //Méthode pour créer un utilisateur
    public createUser = async (req: Request, res: Response) => {
        try {

            //const data: UserInterface = req.body;

            const passwordHashed = await bcrypt.hash(req.body.password, 10);

            const newUser = await prisma.user.create({
                data: {
                    ...req.body,
                    password:passwordHashed
                }
            });

            res.status(201).json({
                message: "Status ok",
                data : newUser
            })
            
        } catch (error) {
            res.status(400).json({
                message : error
            })
        }
    }
}