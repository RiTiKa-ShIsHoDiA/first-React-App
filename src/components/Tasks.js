import React from 'react'
function Tasks({listType,EachTask,handleDlt,handleImportant,handleCompleted,handleEdit}) {
  const myclass = "p-4 rounded-lg bg-[#7c3ede]  text-start text-white mb-4 mt-4 ";
  const dashedLine = "outline-dashed border-none outline-1 outline-gray-400 ";

  return (
    <div id="Each-task" >
      <div
        id="defaultTask"
       
        className ={listType ? ` w-full flex justify-between  ${myclass}`: ` w-60 ${myclass}`}
      >
      <div>
       <h3 className="font-bold mb-2">{EachTask.Name}</h3>
        <p className="text-slate-300 ">{EachTask.Desc}</p>
      
        <div className="flex space-x-2 mt-4 mb-4">
          <div className="text-center my-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-calendar4-week"
              viewBox="0 0 16 16"
            >
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
              <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
            </svg>
          </div>
          <span>{EachTask.Date}</span>
          {/*date add krni h task ki */}
         </div>
        </div>
        <hr className={listType ? `hidden` : dashedLine}/>
        <div id="functionality" className="mt-8 justify-between flex">
          <button className={EachTask.isCompleted === "on"?`text-green-700 bg-green-200 completed-btn`:"completed-btn text-yellow-700 bg-yellow-200"} onClick = {(e)=>handleCompleted(EachTask.id)}>
           {EachTask.isCompleted === "on" ? "completed" : "Uncompleted" } 
          </button>
          <div className="flex px-2 p-2 space-x-1" >
            <div className="hover:text-gray-800 hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  width="20"
              height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class= {EachTask.isImportant === "on" ? " stroke-rose-500 fill-rose-500 star-color" :"star-color fill-none"} 
                 onClick = {(e)=>{handleImportant(EachTask.id)
             }
           }
            ><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            
            ></path></svg>
          
            </div>
            <div className='hover:text-gray-800 hover:cursor-pointer' onClick={()=>handleDlt(EachTask.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-trash3-fill star-color"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
            </svg>
            </div>
            <div className='hover:text-gray-800 hover:cursor-pointer' onClick = {(e)=>{handleEdit(EachTask.id)}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-pencil-square star-color"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks
