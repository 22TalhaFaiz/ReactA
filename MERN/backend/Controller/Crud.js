const User = require("../Collection/User"); 
const crypt = require("bcrypt");
const mail = require("nodemailer");
require("dotenv").config()

const secure_info = mail.createTransport({
    service: "gmail",
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSKEY
    }
})



const Crud = {
    create : async function(req,res){
        try {
            const {Name,Email,Passw, Age} = req.body;
            const email_check = await User.findOne({email : Email})
            if(email_check){
                res.status(409).json({msg : "Email Already Exist"})

            }
            else{
                const crypt_pass = crypt.hashSync(Passw,15)
                const save_data = new User({
                    name: Name,
                    email: Email,
                    password: crypt_pass,
                    age:Age,
                })
                save_data.save()
                res.status(201).json({m : "User Registered Sucessfully"})


                const EmailBodyInfo = {
                    to: e,
                    from: process.env.EMAIL,
                    subject: "Account Has Been Registered",
                    html: `<h3>Hello ${Name}</h3></br><p>Your Account Has Been Registered</p>`
                }
                secure_info.sendMail(EmailBodyInfo, function(e,i){
                    if(e){
                        console.log(e)
                    }
                    else{
                        console.log("Email Has Been Sent")
                    }
                })
            }
           
        } catch (error) {
            res.status(201).json({m : error.message})
        }
    },
    read : async function(req,res){
        try {
            const user_data = await User.find()
            res.status(201).json(user_data)
            
        } catch (error) {
            console.log(error.msg)
            res.status(504).json({msg : error.msg})
            
        }
    }




}

module.exports = Crud