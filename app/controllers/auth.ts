import { Request, Response, NextFunction } from 'express';
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import secret from "../config/secret";

const signup = async (req: Request, res: Response) => {
    if( !req.body.name || !req.body.email || !req.body.password){
        res.status(400).send({ message: "Content can to be empty"});
        return;
    }

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,8)
    })

    newUser.save((err, user) => {
        if(err) res.status(502).send({message: "Erro", err})
        res.status(200).send({message: "Utilizador criado com sucesso"})
    })

};

export default { signup }