import { Request, Response } from 'express'
import user, { User } from '../models/user.models';
import { Credit } from '../models/user.models';


class paidCreditCtrl {

    async postPaidCredit(req: Request, res: Response) {

        const { id, mount } = req.body;
        const users = await user.findById(id);
        if (users) {
            if(users.credits[users.credits.length -1]){
                if(users.credits[users.credits.length -1].status && !users.credits[users.credits.length -1].paid){
                    const newMount = users.credits[users.credits.length-1].saldo - mount;
                    console.log(users.credits[users.credits.length-1].saldo )
                    console.log(mount)
                    
                    console.log(users.credits[users.credits.length-1].saldo - mount)
                    users.credits[users.credits.length-1].saldo = newMount;

                    if( newMount === 0){
            
                        users.credits[users.credits.length-1].paid = true;
                    }
                    users.save();
                    res.json({
                        status:200,
                        users
                    })
                }else{
                 
                    res.json({
                        status:400,
                        paid: false,
                        msj:'no tiene nada que pagar',
                        users
                    })
                }
                
            }
           
        }


    }
}
export const paidCreditControllers = new paidCreditCtrl();