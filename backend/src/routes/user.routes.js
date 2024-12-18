import {
    registerUser,
    loginUser,
    logoutUser,
    getUser,
    postQuestion,
    viewAllQuestions,
    viewMyQuestions,
    deleteQuestion,
    deleteAnswer,
    vote,
    respond
} from "../controllers/user.controllers.js"

import {Router} from "express"
import {isLoggedIn} from "../middlewares/auth.middleware.js"

const router = Router();

router.route("/register").post(registerUser);//
router.route("/login").post(loginUser);//
router.route("/view-all-questions").get(viewAllQuestions);//

//secured routes
router.route("/logout").get(isLoggedIn,logoutUser);//
router.route("/get-user").get(isLoggedIn,getUser);//
router.route("/post-question").post(isLoggedIn,postQuestion);//
router.route("/view-my-questions").get(isLoggedIn,viewMyQuestions);//
router.route("/delete-question").post(isLoggedIn,deleteQuestion);//
router.route("/delete-answer").post(isLoggedIn,deleteAnswer);
// router.route("/vote").post(isLoggedIn,vote);//
router.route("/respond").post(isLoggedIn,respond);

export default router