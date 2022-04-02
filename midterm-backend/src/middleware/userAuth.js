const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const User = mongoose.model("Users")

module.exports= (req, res, next) =>{
	const { authorization } = req.headers

	if(!authorization){
		console.log("[userAuth]: Invalid JWT Token")
		return res.status(401).send({ error: "You must be logged in."})
	}

	const token = authorization.replace("Bearer ", "")
	jwt.verify(token, "SECRET_KEY", async(err, payload) => {
		if(err){
			console.log("[userAuth]: Invalid JWT Token")
			return res.status(401).send({ error: "You must be logged in." })
		}

		const { userId } = payload;
		const user = await User.findById(userId)
		req.user = user
		next()
	})
}