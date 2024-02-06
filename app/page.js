"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()
    setmainTask([...mainTask, {title, desc}]);
    setdesc("");
    settitle("");
  }
  
 
  let renderTask = <h2 className='text-center'>No Task Available</h2>
  let i = 0
  const deleteHandler = (i) =>{
     let copytask = [...mainTask]
     copytask.splice(i, 1)
     setmainTask(copytask)
  }

  if (mainTask>[i]){
   renderTask = mainTask.map((t, i)=>{
    return (
      <li key={i} className='flex items-center bg-slate-400 justify-between rounded m-5'>
        <div className='flex justify-between w-4/12'>
        <h5 className='text-xl px-2 font-semi-bold'> &#x2022; {t.title}</h5>
        <div>
          <p className='text-white'>|</p>
        </div>
        <h6 className='text-lg font-medium'> &#9702; {t.desc}</h6>
        </div>
        <button 
        onClick={()=>{
          deleteHandler(i)
          }}
        className='bg-red-400 text-white font-bold px-4 py-2 rounded '>Delete
        </button>
      </li> 
    );   
   });
  } else {
    let renderTask = <h2 className='text-center'>No Task Available</h2>
  }

  return (
    <>

     <h1 className='bg-gradient-to-r from-blue-300 to-purple-500 text-white p-5 text-5xl font-bold text-center'>To Do List</h1> 
     <div className='bg-teal-400 bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filte m-10 p-6'>
        <form className='flex flex-wrap justify-center m-5' onSubmit={submitHandler}>
          <input type='text' 
          placeholder='Enter Title Here' 
          value={title}
          onChange={(e)=>{
          settitle(e.target.value)
          }}
          className='text-2xl border-zinc-800  border-4 m-5 px-4 py-2'
          />

          <input type='text' 
          placeholder='Enter Description Here' 
          value={desc}
          onChange={(e)=>{
          setdesc(e.target.value)
          }}
          className='text-2xl border-zinc-800  border-4 m-5 px-4 py-2'
          />
          <button className='bg-black text-white px-4 py-2 text-2xl rounded m-6'>Add Task</button>
        </form>
        <div className='p-2 bg-slate-200 m-6 rounded'>
          <ul className= "py-2 px-3 bg-slate-300 rounded">
          {renderTask}
          </ul>
        </div>
     </div>
    </>
  )
}

export default page