import { Router,Request, Response } from "express";
import Container from "typedi";
import { UserController } from "./presentation/controller/userController";

const router = Router();
const userController = Container.get(UserController);
router.get('/users', async(
    _req: Request,
    res: Response
    ) =>{
      res
      .status(200)
      .json(await userController.handler());
  });

  router.get('/mmm',(
    _req: Request,
    res: Response
    ) =>{ 
    res.status(200).json({
      nome : 'ricardo', 
      telefone : '222222'
    });
  });


  export {router}
