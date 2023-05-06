import React, {useContext, createContext  } from 'react'
import {taskContext} from "./Main"
import "../script"
const taskUpdater = createContext();
function Modalform() {
 
 
  const newTask = useContext(taskContext);
 function handleChange(e) {
  newTask.setlocaltask({ ...newTask.Task, isCompleted: e.target.checked })
 }
 
  //for button update or edit 
  
  function handleSubmit(e){
    e.preventDefault();
    var updated = [];
    if(newTask.updateorAdd)
       newTask.setTasklist([...newTask.taskList,newTask.Task]);
    else{
      for (var itr of newTask.taskList) {
        if(itr.id === newTask.Task.id){
          updated.push(newTask.Task)
        }
        else{
          updated.push(itr);
        }
     }
     newTask.setTasklist(updated);
    }
     newTask.setUpdate(true);
     const d = new Date()
     newTask.setlocaltask({id : d.getMilliseconds() ,
      Name:"",
      Desc:"",
      Date: null,
      isCompleted:false,
      isImportant:false,})
     handleClose();
  }
  const handleClose = () =>{newTask.setForm(false);
    newTask.setUpdate(true);
    const d = new Date();
    newTask.setlocaltask({id : d.getMilliseconds() ,
      Name:"",
      Desc:"",
      Date: null,
      isCompleted:false,
      isImportant:false,})
  }
  ;
  return (
    <div className=" text-left text-slate-800 py-10 ">
    {/*  <taskUpdater.Provider value = {{setask:newTask.setlocaltask}}>*/}

    
      <form
        onSubmit={handleSubmit}
        className="p-4 py-4 bg-gray-300 fixed dark:bg-slate-800 dark:text-white  md:w-1/3 w-[300px] top-8 mx-auto rounded-md md:right-[35%] right-16 "
      >
        <div className='flex justify-between'>
        <h4 className="font-medium text-2xl mb-4">Add a task</h4>
        <i className='inline text-gray-800 dark:text-white' onClick={handleClose} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-x-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
          </svg>
        </i>
        </div>
        
        <label  className="mt-8 mb-0">
          Title
        
        <br />
        <input
          type="text"
          placeholder="e.g, study for test"
          id="title"
          name="title"
          className="w-full mb-4 mt-1 dark:bg-slate-700"
          value={newTask.Task.Name}
          onChange={(e) => newTask.setlocaltask({ ...newTask.Task, Name: e.target.value })}
          required
        />
        </label>
        <br />
        <label >
          Date
        <br />
        <input type="date" id="date" name="date" value = {newTask.Task.Date} className="dark:bg-slate-700 dark:text-white w-full mb-4 mt-1"   onChange={(e) => newTask.setlocaltask({ ...newTask.Task, Date: e.target.value })} required/>
        </label>
        <br />
        <label >
        Description
        <br />
        <textarea
          id="description"
          name="description"
          placeholder="e.g, study for test"
          value = {newTask.Task.Desc}
          className="w-full mt-1 mb-4 dark:bg-slate-700 rounded-md p-2 outline-none border-2 hover:border-[#7c3aed] duration-100"
          onChange={(e) => newTask.setlocaltask({ ...newTask.Task, Desc: e.target.value })}
          required
        ></textarea>
        </label>
        <br />
        <label >
        <input type="checkbox" id="completed" checked =  {newTask.Task.isCompleted !== false ? "yes":""}  name="completed"  onChange={(e) => {newTask.setlocaltask({ ...newTask.Task, isCompleted:newTask.Task.isCompleted === "on" ? false:"on"})}}/>
        &nbsp;Mark as completed 
         </label>
        <br />
        <label >
        <input type="checkbox" id="important" checked =  {newTask.Task.isImportant !== false ? "yes":""} name="important"  onChange={(e) => newTask.setlocaltask({ ...newTask.Task, isImportant:newTask.Task.isImportant === "on" ? false:"on"})} />
        &nbsp;Mark as important
        </label>
        <button className="btn w-full mt-4">{newTask.updateorAdd ? "Add a task":"Edit a task"}</button>
      </form>
    {/*  </taskUpdater.Provider>*/}
    </div>
  );
}

export default Modalform;
export {taskUpdater};
