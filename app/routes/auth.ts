import express from 'express';
import controller from '../controllers/auth';
const _router = express.Router();

  /**
   * @swagger
   * components:
   *   schemas:
   *     User:
   *       type: object
   *       required:
   *         - nome
   *       properties:
   *         id:
   *           type: integer
   *           description: ID auto-gerado
   *         name:
   *           type: string
   *           description: nome do utilizador
   *         email:
   *           type: string
   *           description: email do utilizador
   *         password:
   *           type: string
   *           description: password do utilizador
   *       example:
   *         name: "Super User"
   *         email: "SU@email.com"
   *         password: "ere+rwrewrw"
   *
   */

    /**
   * @swagger
   *  tags:
   *    name: User
   *    description: User existentes na aplicação
   */

  /**
   * @swagger
   * /signup:
   *   post:
   *     summary: Criar um novo utilizador
   *     tags: [User]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/User'
   *     responses:
   *       200:
   *         description:
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/User'
   *       500:
   *         description: Some server error
   */

_router.post('/signup', controller.signup);
//_router.post('/login', controller.login);

export const router = _router ;