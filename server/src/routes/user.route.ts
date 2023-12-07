import { Router } from 'express';
import { Routes } from './index';
import { userController } from '../controllers/user.controller';


// On crée une classe UserRouter qui hérite de 'linterface User
export class UserRouter implements Routes{
     path="/users"; // le endpoint : http://localhost:port/path
     router = Router(); // on definit le router d'express
     userCtrl = new userController();

     constructor() {
        this.initializeRoutes();
      }
    
      private initializeRoutes() {
        this.router.get(`${this.path}`,this.userCtrl.getUsers); // Route pour avoir tous les utilisateurs
        this.router.get(`${this.path}/:id`); // Route pour avoir un utilisateur via son id
        this.router.post(`${this.path}`,this.userCtrl.createUser); // Creer un nouvel utilisateur
        this.router.put(`${this.path}/:id`); // Modifier un utilisateur via son id 
        this.router.delete(`${this.path}/:id`); // Supprimer un utilisateur via son id
      }
}