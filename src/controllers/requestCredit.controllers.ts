import { Request, Response } from 'express'
import user, { User } from '../models/user.models';
import { Credit } from '../models/user.models';


class requestCreditCtrl {

    async postRequestCredit(req: Request, res: Response) {
        let requtCredit = {
            mount: 0,
            saldo:0,
            expiresIn: new Date(),
            status: false,
            paid: false,
            createdAt: new Date()

        }

        const { id, mount, expiresIn } = req.body;
        const users = await user.findById(id);
        if (users) {
            if (users.credits.length > 0) {
                if(users.credits[0].status){
          
                    if(users.credits[users.credits.length -1].paid){
                        requtCredit.mount = mount;
                        requtCredit.saldo = mount;

                        requtCredit.status = true;
                        requtCredit.expiresIn = expiresIn;
                        requtCredit.paid = false;
                        requtCredit.createdAt = new Date();
                        // -----------------------
                        users.credits.push(requtCredit)
                        users.save();
                        res.json({
                            status: 200,
                            credito: true,
                            users
                        })
                        // -----------------------

                    }else {
                        res.json({
                            status: 200,
                            credito: false,
                            users
                        })
                    }
                } else{
                    res.json({
                        status: 200,
                        credito: false,
                        users
                    })
                }
           
            } else {
                var randomNumber = Math.random() >= 0.5;
                if (randomNumber) {
                    requtCredit.mount = mount;
                    requtCredit.saldo = mount;
                    requtCredit.status = true;
                    requtCredit.expiresIn = expiresIn;
                    requtCredit.paid = false;
                    requtCredit.createdAt = new Date();
                users.credits.push(requtCredit)

                    res.json({
                        status: 200,
                        credito: true,
                        users
                    })
                } else {
                    requtCredit = {
                        mount: mount,
                        saldo: mount,
                        expiresIn: new Date(expiresIn),
                        status: false,
                        paid: false,
                        createdAt: new Date()
                    }
                users.credits.push(requtCredit)

                    res.json({
                        status: 200,
                        credito: false,
                        users
                    })
                }

                users.save();

            }
      
        }

    }
}
export const requestCreditControllers = new requestCreditCtrl();