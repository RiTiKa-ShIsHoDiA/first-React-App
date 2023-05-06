
function Viewtask({listType,setList,taskList,setTasklist}) {
  
  const handleClick = (e)=>{
     e.preventDefault();
    setList((current)=> !current);
    
  }
 
  const handleSort = (e)=>{
    const Value = e.target.value;
    

    if(Value === "Earlier"){
    
     taskList.sort((task1,task2)=>{
        const date1 = new Date(task1.Date);
        const date2 = new Date(task2.Date);
        console.log(date1);
        console.log(date2);
      return date1 - date2;
     })
    
     setTasklist([...taskList]);
    }
    else if(Value === "Completed"){
      const compTask = [];
      const unCompTask = [];
      taskList.forEach(element => {
        if(element.isCompleted === "on"){
          compTask.push(element);
        }
        else{
          unCompTask.push(element);
        }
      });
       setTasklist([...compTask,...unCompTask]);
    }
    else if(Value === "UnCompleted"){
      const compTask = [];
      const unCompTask = [];
      taskList.forEach(element => {
        if(element.isCompleted === "on"){
          compTask.push(element);
        }
        else{
          unCompTask.push(element);
        }
      });
      setTasklist([...unCompTask,...compTask]);
      
    }
    else{
     
      taskList.sort((task1,task2)=>{
        const date1 = new Date(task1.Date);
        const date2 = new Date(task2.Date);
        console.log(date1);
        console.log(date2);
      return date2 - date1;
     })
    
     setTasklist([...taskList]); 
    }
   
   

  }
  return (
    <div id="view" className="flex justify-between  md:px-8 md:w-[700px] w-[300px] md:mx-2 mx-auto ">
      <div id="icon" className = "flex space-x-4 p-3 dark:text-white">
        <div id="viewList" className= {listType ? "text-[#7c3aed]":""} onClick = {handleClick}>
          {/*  change hover it on click color effect*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-list-ul"
            viewBox="0 0 16 16"
          
          >
            <path
              fillRule="evenodd"
              d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            />
          </svg>
        </div>
        <div id="viewgrid" className= {!listType ? "text-[#7c3aed]":""} onClick = {handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-grid"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
           </svg>
         </div>
      </div>
      <div id = 'sort' className=" ">
          <select name = "sort " id = "sort"   onChange ={handleSort} className='p-4 md:w-full w-[120px] rounded-md dark:text-white  dark:bg-slate-700 hover:border-2 hover:border-[#7c3aed] outline-none '>
             <option value = "" hidden >Sort by</option>
            <option value = "Earlier">Earlier first</option>
            <option value = "Later">Later first</option>
            <option value = "Completed">Completed first</option>
            <option value = "UnCompleted">Uncompleted first</option>
          </select>
      </div>
    </div>
  );
}

export default Viewtask;
