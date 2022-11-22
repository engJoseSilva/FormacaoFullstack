import http from 'http';
import express , {Express} from 'express';
import morgan from 'morgan';
import { router as PostRouter } from './routes/posts';
import { router as AuthRouter } from './routes/auth';
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from 'swagger-jsdoc';

import mongoose from 'mongoose';
import mongoConfig from './config/mongo';

// mongoose.connect(mongoConfig.url).then(() => {
//     console.log("Connected")
// }).catch( err => {
//     console.log("Erro " + err)
// }) 

const router: Express = express();

router.use(express.urlencoded({extended: false}));

router.use(express.json());

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "API Formação",
        version: "0.1.0",
        description:
          "This is a simple CRUD API",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Eng. José Silva",
          url: "https://zepedro.vercel.app",
          email: "info@email.com",
        },
      },
      servers: [
        {
          url: "http://localhost:8080/",
        },
      ],
    },
    apis: ["./app/routes/*.ts"],
  };

  const specs = swaggerJSDoc(options);
router.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);


router.use('/', PostRouter);
router.use('/', AuthRouter);

router.listen ( 8080, () => {
    console.log("Servidor started ")
})

export default router;