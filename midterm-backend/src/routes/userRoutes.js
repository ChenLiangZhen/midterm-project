const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken");
const User = mongoose.model("Users")

const router = express.Router()

router.post("/api/signup", async (req, res) => {

	const { email, password } = req.body

	try{
		const user = new User({ email, password })
		await user.save()

		const token = jwt.sign({userId: user._id}, "SECRET_KEY")

		res.send({ token })

		const sgMail = require('@sendgrid/mail')
		sgMail.setApiKey(process.env.SENDGRID_API_KEY)
		const msg = {
			to: 'test@example.com', // Change to your recipient
			from: 'test@example.com', // Change to your verified sender
			subject: 'Sending with SendGrid is Fun',
			text: 'and easy to do anywhere, even with Node.js',
			html: '<strong>and easy to do anywhere, even with Node.js</strong>',
		}
		sgMail
			.send(msg)
			.then(() => {
				console.log('Email sent')
			})
			.catch((error) => {
				console.error(error)
			})

	} catch(e){

		res.status(422).send("Post request failed: " + e)
		console.log("Error caught: " + e)
	}

})

router.post('/api/signin', async(req, res) => {
	const {email, password } = req.body

	if(!email || !password){
		return res.status(422).send({ error: "must provide email and password."})
	}
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