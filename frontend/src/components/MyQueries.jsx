import React from 'react'
import { Qna } from '../services/qna.services'
import Q from './Q'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './toast.css'

function MyQueries() {


    const [questions, setQuestions] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [title, setTitle] = React.useState("")
    const [query, setQuery] = React.useState("")

    const postQuestion = () => {
        if (!title || !query) {
            return;
        }

        Qna.postQuestion({ title, query })
        .then((res) => {
            console.log(res)
            setQuestions(prev => [...prev, res.data])
            setTitle("")
            setQuery("")
            toast.success("Question Posted !",{
                theme : "light",
                className : "custom-toast-success"
                })
        })
        .catch((err) => {
            toast.error(error.message,{
                theme : "light",
                className : "custom-toast-error"
                })
            console.log(err)
        })
    }

    React.useEffect(()=>{

    Qna.myQuestions()
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
    <div className='w-full h-screen py-4 flex' >
        <div className='w-2/3 h-screen'>
            <h2 className='text-2xl text-center font-mono my-8 font-bold text-orange-500'>Your Queries ({questions.length})</h2>
            <div className="inset-0 py-5 opacity-80 rounded-lg mb-8 mx-2 md:mx-16 mt-4 overflow-y-auto h-[50vh]">
                {
                    questions.length == 0? (
                    <h1 className="font-serif md:text-3xl font-bold mb-4 mt-8">
                        No questions yet! <br />
                        <span className='opacity-0'>.</span><br />
                        Post Now
                    </h1>
                    ):(
                        <div className="flex flex-col gap-12">
                          {questions.map((question)=>(
                            <Q key={question._id} id={question._id} title={question.title} query={question.query} owner={question.owner} answers={question.answers}/>
                        ))}
                        </div>
                    )
                }
            </div>
        </div>
        <div className='w-1/3 h-screen border-l-[1px] border-black flex flex-col gap-4 px-4'>
                <h2 className='text-2xl text-center font-mono my-8 font-bold'>Post Question</h2>
                <input type="text" placeholder='Title' className='py-2 px-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <textarea placeholder='Query' className='h-36 py-2 px-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white' value={query} onChange={(e)=>setQuery(e.target.value)}/>
                <button className='bg-cyan-600 text-white rounded-md px-4 py-2 font-bold' onClick={postQuestion}>Post</button>
        </div>
    </div>
  )
}

export default MyQueries