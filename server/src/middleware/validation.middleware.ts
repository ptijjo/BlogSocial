import { plainToInstance } from 'class-transformer';
import { validateOrReject, ValidationError } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

/**
 * On crée une fonction validationMiddleware
 * on va recuperer un objet en json qu'on transformera en classe avec plainToInstance
 * Ensuite on le fera passer par notre validateur afin de vérifier si toutes les contraintes sont respectées
 */

export const ValidationMiddleware = (type:any) => {
    
    return (req:Request,res:Response,next:NextFunction) => {
        const verification = plainToInstance(type,req.body)
    }
}