import express from 'express';
import controller from '../controllers/auth';
const _router = express.Router();

_router.post('/signup', controller.signup);
//_router.post('/login', controller.login);

export const router = _router ;