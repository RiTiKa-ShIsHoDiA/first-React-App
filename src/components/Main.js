import React, { useState ,createContext, useEffect} from 'react'
import Header from "./Header"
import Viewtask from './Viewtask';
import Tasks from './Tasks';
import ShadowTask from './ShadowTask'
import Modalform from "./Modalform"



const taskContext = createContext();
function Main() {
    const [form,setForm] = useState(false);
    const [taskList,setTasklist] = useState(JSON.parse(localStorage.getItem("taskList"))|| []);

   
    useEffect(()=>{
      localStorage.setItem("taskList",JSON.stringify(taskList));
    },[taskList]);
    console.log();
    const [listType ,setList] = useState(false);
    const[completedcount,setcompletedCount] = useState(0);
    const [isdarkmode,setdarkMode] = useState(false);
    const [searchTerm,setSearchTerm] = useState('');
    const [isSearch,setIssearchterm] = useState(false);
   
    useEffect(()=>{
      setcompletedCount(0);
      for (const itr of taskList) {
        if(itr.isCompleted === "on"){
          setcompletedCount( c => c + 1);
        }
      }
    },[taskList])
    const d = new Date();
    const [Task,setlocaltask] = useState({
      id : d.getMilliseconds() ,
      Name:"",
      Desc:"",
      Date: null,
      isCompleted:false,
      isImportant:false,
    })
    
   
    const task = "flex-col md:flex-row md:w-[800px]  items-center justify-start p-4 mt-8 md:px-4 md:py-4 broder-4 border-red-400 "
    const [updateorAdd,setUpdate] = useState(true);  

  function handleEdit(id){
    setUpdate(false)
      setForm(true);
    const obj = taskList.find((task)=>task.id === id);
    console.log(obj);
    setlocaltask(obj);
    console.log(taskList);
   // updateTask.setUpdate(false);
   
   
  }
    function handleDlt(id){
      var updatedList = (taskList).filter((task)=>task.id !== id);
      setTasklist(updatedList);
    }
    function handleImportant(id){
       var updated = []
       for (var itr of taskList) {
          if(itr.id === id){
            updated.push({...itr,isImportant:itr.isImportant === "on" ? false: "on"})
          }
          else{
            updated.push(itr);
          }
       }

      setTasklist(updated); 
    }
    function handleCompleted(id){
       console.log("handleCompleted");
       var updated = []
       for (var itr of taskList) {
          if(itr.id === id){
            updated.push({...itr,isCompleted:itr.isCompleted === "on" ? false: "on"})
          }
          else{
            updated.push(itr);
          }
       }

      setTasklist(updated); 
    }
    function handlehamburger(e){
    const navmenu = document.getElementById("menu-content");
    console.log("chala");
   
   /* e.target.classList.toggle("open");*/
    navmenu.classList.toggle("hidden");
    navmenu.classList.toggle("flex");
 }
 function handleRightHemburger(e){
  console.log("menu right");
     const menu = document.getElementById("nav-right");
    const icon = document.getElementById("usericon")
     menu.classList.toggle("hidden");
     menu.classList.toggle("block");
     icon.classList.toggle("block");
     icon.classList.toggle("hidden");
 }

 function handleAlldlt(){
  setTasklist([]);
 }
// 0 = all tasks
// 1 = completed tasks
// 2 = uncompleted tasks
// 3 = important tasks

const [completed,setCompleted] = useState(false);
const [uncompleted,setUncompleted] = useState(false);
const [important,setImportant] = useState(false);


function handleLeftNav(val){
  console.log("handleleftnav chala");
  setIssearchterm(false);
  if(val === 1){
    setCompleted(true);
    setUncompleted(false)
    setImportant(false)
    
  }
  else if(val === 2){
   setUncompleted(true)
   setCompleted(false);
   setImportant(false);
   
  }
  else if(val === 3 ){
    setImportant(true)
    setCompleted(false);
    setUncompleted(false);
   
  }
  else{
    setCompleted(false);
    setUncompleted(false)
    setImportant(false);
    
  }
}
function handleDarkmode(){
  setdarkMode((c)=>!c);
  document.documentElement.classList.toggle('dark');
}



  return (
    
    <main id="main" className='dark:bg-slate-800 '>
      <taskContext.Provider
        value={{
          form: form,
          setForm: setForm,
          taskList: taskList,
          setTasklist: setTasklist,
          Task: Task,
          setlocaltask: setlocaltask,
          updateorAdd: updateorAdd,
          setUpdate: setUpdate,
        }}
      >
        <div className="bg-slate-200 container h-full text-slate-500  flex dark:bg-slate-900 md:w-full w-[450px]">
          {/* left nav-bar*/}
          <nav className="  md:w-1/5 w-[50px] bg-slate-200 md:bg-gray-100 dark:bg-slate-800 ">
            {/**Desktop view*/}
            <div
              id="menu-content-desk"
              class=" md:block hidden top-0 bottom-0 text-md  dark:bg-slate-800   flex-col  bg-gray-100 text-gray-500 space-y-3 items-center"
            >
              <h2 className="font-xl font-bold mt-8 mb-4 dark:text-white">TO-DO LIST</h2>
              <button
                type="button"
                className="addbtn px-10 py-2  top-20 m"
                onClick={(e) => setForm(true)}
              >
                Add new task
              </button>
              {form && <Modalform />}
              <div className="nav-list ">
                <p className="nav-list-p" onClick = {()=>handleLeftNav(0)}>All Tasks</p>
                <p className="nav-list-p"  onClick = {()=>handleLeftNav(1)}>Completed Tasks</p>
                <p className="nav-list-p" onClick = {()=>handleLeftNav(2)}>Uncompleted Tasks</p>
                <p className="nav-list-p" onClick = {()=>handleLeftNav(3)}>Important Tasks</p>
              </div>
            </div>
            {/** hamburger button */}
            <div className="md:hidden p-2  "  >
              <button
                id="menu"
                type="button"
                className="z-40  mt-7 w-20 p-3 hamburger left-0 focus:outline-none "
                onClick={handlehamburger}
              >
                <span
                  className="hamburger-top "
                           ></span>
                <span
                  className="hamburger-middle"
                 
                ></span>
                <span
                  className="hamburger-bottom"
                  
                ></span>
              </button>
            </div>
            {/*Mobile view*/}
            <div
              id="menu-content"
              class="absolute  md:hidden hidden top-0 bottom-0 text-md dark:bg-slate-900  flex-col  bg-gray-100 text-gray-500 space-y-3 items-center"
            >
              <h2 className="font-xl font-bold  mt-8 mb-8 dark:text-white">TO-DO LIST</h2>
              <button
                type="button"
                className=" addbtn px-10 py-2 top-20 ml-4 mr-4"
                onClick={(e) => setForm(true)}
              >
                Add new task
              </button>
              {form && <Modalform />}

              <div className="nav-list ">
                <p className="nav-list-p" onClick = {()=>handleLeftNav(0)}>All Tasks</p>
                <p className="nav-list-p" onClick = {()=>handleLeftNav(1)}>Completed Tasks</p>
                <p className="nav-list-p" onClick = {()=>handleLeftNav(2)}>Uncompleted Tasks</p>
                <p className="nav-list-p" onClick = {()=>handleLeftNav(3)}>Important Tasks</p>
              </div>
            </div>
            
          </nav>
          <div className="md:px-4 w-full md:py-8  flex  ">
            <div className=' w-full'>
              <Header form={form} setForm={setForm}  setSearchTerm = {setSearchTerm} isSearch={isSearch} setIssearchterm = {setIssearchterm} setCompleted = {setCompleted} setImportant={setImportant} setUncompleted={setUncompleted}/>

              <h1>All tasks ({taskList.length} tasks)</h1>
              <Viewtask listType={listType} setList={setList} taskList = {taskList} setTasklist = {setTasklist}/>

              {/*<Tasks listType = {listType} />*/}
              <div className={!listType ? `grid-data` : `${task}`}>
                {taskList.filter((val)=>{
                  if(completed){
                      return val.isCompleted === "on" ? true : false;     
                  }
                  else if(important){
                    return val.isImportant === "on" ? true : false;     
                  }
                  else if(uncompleted){
                    return val.isCompleted === "on"? false : true;
                  }
                  else if(isSearch && searchTerm !== ""){
                    if(val.Name.toLowerCase().includes(searchTerm.toLowerCase()))
                      return true;
                    else 
                      return false;   
                  }
                  else{
                      return val;
                  }

                }).map((Task)=>{
                  return (<Tasks
                    key = {Task.id}
                    listType={listType}
                    EachTask={Task}
                    handleDlt={handleDlt}
                    handleImportant={handleImportant}
                    handleCompleted={handleCompleted}
                    handleEdit={handleEdit}
                  />);
                })}
               
                 
                <ShadowTask listType={listType} setForm = {setForm}/>
                {form && <Modalform/> }
              </div>
            </div>
            <div
              id="usericon"
              className="md:px-4 md:py-4 px-1 md:hidden block fixed md:right-12 right-0 pt-4  dark:bg-slate-900 dark:text-white bg-gray-200 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
                onClick={(e) => handleRightHemburger(e)}
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </div>
          </div>

          <nav id = "nav-right" className="h-full  container w-[200px] md:w-1/6 md:bg-gray-100 fixed right-0 dark:bg-slate-800 hidden md:block top-0 z-50 pb-52 bottom-4 ">
            
            {/*Mobile view*/}
            <div
              id="menu-right-content"
              class="text-md px-4  bg-gray-100 text-gray-500 md:space-y-3 h-full md:h-[693px] items-center dark:bg-slate-800 dark:text-white "
            >
              <div className='flex justify-between px-4'>
              <div className='mt-6 '>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
                onClick={(e) => handleRightHemburger(e)}
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
              </div>

              <h2 className="font-xl font-bold mt-8 mb-8">Hi, User</h2>
              </div>
             
              <div id = "dark-mode" className=' mx-auto ring-4 hover:ring-purple-500 ring-purple-700  hover:ring-offset-2 bg-gray-200 py-4 flex justify-center w-14 rounded-full text-black ' onClick = {handleDarkmode}>
             {!isdarkmode ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-moon-stars" viewBox="0 0 16 16">
  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
</svg>  }
             
              </div>
             <div id = "progress-bar">
                <div className='flex justify-between mt-8 font-semibold mb-2'>
                  <p>All Tasks</p>
                  <p>{completedcount}/{taskList.length}</p>
                </div>
                <progress id = "progress" max= "100" value = {completedcount*100 / (taskList.length)}></progress>
                <hr className='h-[2px] bg-gray-300 mt-4 mb-16'/>
             </div>
              
              
              <div >
              <button
                type="button"
                className=" addbtn px-6 py-2 top-80 hover:bg-red-600 hover:shadow-md hover:shadow-red-600 mb-20" 
                onClick = {handleAlldlt}
              >
               Delete all tasks
              </button>
              </div>
             <div className='bg-lime-200  text-lime-500 dark:bg-slate-700 font-semibold rounded-md md:py-4 '>
                <a href = "https://github.com/RiTiKa-ShIsHoDiA" className='md:mt-72 mt-20'>Project by @Ritika-Shishodia</a>
             </div>
    
             
            </div>
            
            
          </nav>
        </div>
      </taskContext.Provider>
    </main>
  );
  
}

export default Main;
export {taskContext};
