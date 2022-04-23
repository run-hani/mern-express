import db from '../models/index.js'
import getDatabase from '../lambdas/getDatabase.js'

export default function UserService(){
    const User = db.User
    const dbo = getDatabase()
    const dbConnect = dbo.getDb();

    return {
        join(req, res){
            console.log(' ### 6. join 진입 ###' + JSON.stringify(req.body))
            new User(req.body).save(function(err){
                if(err){
                    res.status(500).json({message: err})
                    console.log('회원가입 실패')
                    return;
                }else{
                    console.log(' ### 7. join 성공 ###');
                    res.status(200).json({ok: 'ok'})
                }
            })

            
        },
        login(req, res){
            const data = req.body
            res.status(200).json({})
        }

    }
}
