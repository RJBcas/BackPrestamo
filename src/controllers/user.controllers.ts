import { Request, Response } from 'express'
import user, { User } from '../models/user.models';
import { Credit } from '../models/user.models';


class userCtrl {
    async getUsers(req: Request, res: Response) {
        const users = await user.find();
        console.log(users)
        // movies.forEach(element => {
        // const  GetMovies = {
        //     title : element.title ,
        //      author  : element.author,
        //       type : element.type, 
        //       quality : element.year.toLocaleDateString('en-US') }     
        //     moviesEnd.push(GetMovies)
        // });

        res.json(users);
    }
    async getUser(req: Request, res: Response) {


        const { id } = req.body;
        const users = await user.findById(id);

        res.json(users);
    }
    async getSingIn(req: Request, res: Response) {


        const { email, passaword } = req.body;
        const users = await user.findOne({ email: email, passaword: passaword })
        console.log(users);
        if (!users) {
            res.json({
                loggedIn: false,
            });
        } else {
            res.json({
                loggedIn: true,
                user: users
            });
        }

    }


    async  createUser(req: Request, res: Response) {

        const { name, email, ci, passaword } = req.body
        const users = await user.find({ ci: ci })


        if (users.length > 0) {
            res.json({
                status: 400,
                msj: 'Ya exite este usuario'
            })
        } else {
            let admin
            if (ci === "1234") {
                admin = true
            } else {
                admin = false;
            }
            const newUser: User = new user({
                name,
                email,
                ci,
                admin,
                passaword,
            });
            console.log(newUser)
            await newUser.save()
                .then(
                    () => {
                  
                        res.json({
                            status: 'Save success',
                            newUser

                        })
                    }
                ).catch(
                    err => {
                        console.error('esto es el error :=>', err)
                        res.json({
                            status: " error Explotar "
                        })
                    }
                )

        }

    }



    async deleteUser(req: Request, res: Response) {
        console.log('holaa4')

        const { id } = req.params;
        await user.findByIdAndDelete(id)
            .then(
                () => {
                    res.json({
                        status: 'delete success'
                    })
                }

            ).catch(

                err => {
                    console.error('esto es el error :=>', err)
                    res.json({
                        status: " error Explotar "
                    })
                }
            );;
    }

}
export const usersControllers = new userCtrl();