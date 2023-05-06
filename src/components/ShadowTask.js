import React from 'react'

function ShadowTask({listType,setForm}) {
  const showtask = " flex rounded-lg  mt-4 dark:bg-slate-800 dark:hover:bg-slate-700 mb-20 hover:bg-slate-300 text-white  border-2 border-dashed border-slate-300 items-center justify-center"
  return (
    <div id = "shadowoftask" className= {listType ? ` w-full h-40 ${showtask}`: ` w-60 h-56 ${showtask}`} onClick = {(e)=>setForm(true)}>
      <p className='text-slate-500 cursor-pointer dark:text-white '>Add new task</p>
    </div>
  )
}
export default ShadowTask;
