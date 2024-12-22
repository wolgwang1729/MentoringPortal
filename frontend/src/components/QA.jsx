import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Q from "./Q";
import { Qna } from "../services/qna.services";
import { use } from "react";
import { useSelector } from "react-redux";


export default function QA() {

  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)

  const authStatus = useSelector(state => state.auth.status);

  useEffect(()=>{

    Qna.allQuestions()
    .then((res)=>{
      console.log(res)
      setQuestions(res.data.data)
      setLoading(false)
    })
    .catch((err)=>{
      console.log(err)
      setLoading(false)
    })

  },[])

  return loading ? (<div className="h-screen w-full flex items-center justify-center"><div className="loader"></div> </div>): (
    <div className="w-full">
      <div className="inset-0 flex flex-col items-center justify-center text-white bg-black py-5 opacity-80 rounded-lg mb-8 mx-2 md:mx-16 mt-4">
        <h1 className="font-serif md:text-3xl font-bold mb-4">
          Questions & Answers
        </h1>
        <p className="font-serif md:text-xl text-center max-w-5xl px-1">
          Mentees can ask questions and mentors will comment and answer their
          queries. Engage with the community and get the guidance you need.
        </p>
      </div>
      <div className="inset-0 flex flex-col items-center justify-center py-5 opacity-80 rounded-lg mb-8 mx-2 md:mx-16 mt-4">
          {
            questions.length == 0? (
              <h1 className="font-serif md:text-3xl font-bold mb-4">
                No questions yet
              </h1>
            ):(
                <div className="flex flex-col gap-8 w-full justify-center px-2 sm:px-20 md:px-30 lg:px-44">
{                  questions.map((question)=>(
                    <Q key={question._id} id={question._id} title={question.title} query={question.query} owner={question.owner} answers={question.answers} strech/>
                  ))}
                </div>
            )
          }
      </div>

    </div>
  );
}
