import controller from "../controller/index.js";


export default function (app) {
	// User endpoints
	app.post("/user/", controller.insertUser); // insert one sample
	app.get("/user/", controller.getAllUsers); // get all samples
	app.post("/user/login/", controller.loginUser); // insert one sample
	app.get("/user/:id", controller.getOneUser); // get one sample
	// app.put("/user/:id", controller.updateUser); // update one sample
	// app.delete("/user/:id", controller.deleteUser); // delete one sample
	// app.get("/sample/search/:search", controller.searchSamples); // search samples	

	// Travel endpoints
	app.post("/travel/", controller.insertTravel); // insert one sample
	app.get("/travel/:email", controller.getAllTravels); // insert one sample
}
