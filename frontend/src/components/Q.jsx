import React from "react";
import { RiDeleteBin6Line } from "@remixicon/react";
import { useSelector } from "react-redux";
import { Qna } from "../services/qna.services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toast.css";

function Q({
  query = "",
  title = "",
  owner = {},
  id = "",
  answers = [],
  strech = false,
}) {
  const [wantToComment, setWantToComment] = React.useState(false);
  const [showAnswers, setShowAnswers] = React.useState(false);

  const [dummyAnswers, setDummyAnswers] = React.useState(answers);

  const userData = useSelector((state) => state.auth.data);

  const [answer, setAnswer] = React.useState("");

  const deleteQuestion = () => {
    Qna.deleteQuestion({ id })
      .then((res) => {
        console.log(res);
        toast.success("Question Deleted !", {
          theme: "light",
          className: "custom-toast-success",
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        toast.error(error.message, {
          theme: "light",
          className: "custom-toast-error",
        });
        console.log(err);
      });
  };

  const deleteAnswer = (id) => {
    Qna.deleteAnswer({ id })
      .then((res) => {
        console.log(res);
        setDummyAnswers((prev) => prev.filter((ans) => ans._id !== id));
        toast.success("Answer Deleted !", {
          theme: "light",
          className: "custom-toast-success",
        });
      })
      .catch((err) => {
        toast.error(error.message, {
          theme: "light",
          className: "custom-toast-error",
        });
        console.log(err);
      });
  };

  const respond = () => {
    if (!answer) return;

    const data = {
      id,
      answer,
    };

    Qna.respond(data)
      .then((res) => {
        console.log(res);
        // window.location.reload()
        // const ans = {
        //     owner : {
        //         fullname : userData.fullname,
        //         _id : userData._id
        //     },
        //     response : answer
        // }
        setDummyAnswers((prev) => [...prev, res.data]);
        setWantToComment(false);
        setAnswer("");
        toast.success("You responded successfully !", {
          theme: "light",
          className: "custom-toast-success",
        });
      })
      .catch((err) => {
        toast.error(error.message, {
          theme: "light",
          className: "custom-toast-error",
        });
        console.log(err);
      });
  };

  return (
    <div
      className={`${
        strech ? "w-[70vw]" : ""
      } w-full flex flex-col items-center justify-center font-mono px-2 sm:px-6 md:px-10 shadow-gray-300 shadow-lg rounded-lg py-4 relative`}
    >
      <h1 className="text-xl text-left sm:text-3xl font-bold mb-4">{title}</h1>
      {userData && userData._id === owner._id && (
        <button className="absolute top-2 right-2" onClick={deleteQuestion}>
          <RiDeleteBin6Line size={20} />
        </button>
      )}
      <div className="text-md sm:text-xl text-right max-w-5xl mb-4">
        Asked By - {owner.fullname}
      </div>
      <div className="w-full mb-12 flex items-center justify-start">
        <p className="break-words text-md sm:text-lg w-full text-start">{query}</p>
      </div>
      <div className="w-full flex flex-col items-start justify-center">
        <h1
          className="text-[16px] font-bold mb-4 text-cyan-600 cursor-pointer"
          onClick={() => setShowAnswers((prev) => !prev)}
        >
          Answers({dummyAnswers.length})
        </h1>
        {dummyAnswers.length !== 0 && showAnswers && (
          <ul className="w-full flex flex-col items-start justify-center rounded-lg gap-4">
            {dummyAnswers.map((answer) => (
              <li
                className={`${
                  strech ? "w-full" : "w-full"
                } shadow-lg py-4 rounded-lg justify-center shadow-gray-300 mb-2 px-2`}
              >
                <div className="flex justify-start mx-2 font-bold mb-2 text-orange-500">
                  by-{answer.owner.fullname}
                </div>
                <div className="break-words w-full mx-2 px-2 text-sm sm:text-lg text-start">
                  {" "}
                  <p>{answer.response}</p>
                </div>
                {userData && userData._id === answer.owner._id && (
                  <button
                    className="w-full flex items-center justify-end mt-2 mr-2"
                    onClick={() => deleteAnswer(answer._id)}
                  >
                    <RiDeleteBin6Line size={20} />
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      {userData && userData.type === "mentor" && (
        <div className="w-full border-t-[1px] border-slate-600 py-6">
          {/* commentbox */}
          <div className="w-full flex items-center justify-between mb-4">
            <button
              className="text-[16px] font-semibold text-cyan-600"
              onClick={() => setWantToComment((prev) => !prev)}
            >
              Comment
            </button>
          </div>
          {wantToComment && (
            <>
              <textarea
                name=""
                id=""
                placeholder="comment"
                className="outline-none w-full h-40 p-2 border-2 border-slate-300 rounded-md"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              ></textarea>
              <div className="w-full flex items-center justify-end mt-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded font-bold"
                  onClick={respond}
                >
                  Post
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Q;
