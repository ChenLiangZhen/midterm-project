const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken");
const User = mongoose.model("Users")

const router = express.Router()

router.post("/api/signup", async (req, res) => {

	const { email, password } = req.body

	try{

		//以 User Model 建立新的使用者，並儲存使用者至資料庫
		const user = new User({ email, password })
		await user.save()

		//使用用戶 id 與伺服器端私鑰產生 Json Web Token，並回傳。 回傳的 Token 必須存放於使用者裝置。
		const token = jwt.sign({userId: user._id}, "SECRET_KEY")
		res.send({ token })

	} catch(e){

		res.status(422).send("Signup Failed: " + e)
		console.log("[Sign Up]: " + e)
	}

})

router.post('/api/signin', async(req, res) => {
	const {email, password } = req.body

	if(!email || !password){
		return res.status(422).send({ error: "must provide email and password."})
	}
	//尋找該 email 的使用者是否存在。 若不在則回傳錯誤。
	const user = await User.findOne({ email })
	if(!user){
		return res.status(422).send({ error: "invalid password of email"})
	}

	try{
		await user.comparePassword(password)
		const token = jwt.sign({ userId: user._id }, "SECRET_KEY")
		res.send({ token })
	}catch (e){
		return res.status(422).send({ error: "invalid password of email"})
	}
})

module.exports = router