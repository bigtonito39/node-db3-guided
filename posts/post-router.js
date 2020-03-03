const express = require("express")
const postModel = require("./post-model")

const router = express.Router({
	//this will allow to use :id coming from parent router, which in this case its user-router
	mergeParams: true,
})

router.get("/", async (req, res, next) => {
	try {
		const { id } = req.params
		const posts = await postModel.findByUserId(id)

		res.json(posts)
	} catch(err) {
		next(err)
	}
})

module.exports = router