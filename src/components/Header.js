import Modalform from "./Modalform";

function Header({form,setForm,setSearchTerm,isSearch,setIssearchterm,setCompleted,setImportant,setUncompleted}) {
 
  const handleShow = ()=> setForm(true);
  return (
    <header id = "header" className = "flex flex-col md:flex-row md:space-x-6 md:w-[550px] w-full align-items-center  ">
      <div id = "time" className="md:py-2 md:hidden block mb-4">
            <h2 className="md:hidden block text-black font-bold mt-2 dark:text-white">TO-DO LIST</h2>
            <p className=" md:text-base text-xs  dark:text-slate-400">{new Date().toDateString()}</p>
       </div>
      <div className="bg-gray-50 justify-between dark:bg-slate-700 mx-auto md:w-[350px] w-[300px] my-auto flex rounded-lg  hover:border-2 hover:border-[#7c3aed] duration-100 md:py-1 " >
      
        <input type="text" placeholder="Search task" onChange = {(event)=>{setSearchTerm(event.target.value); 
          setIssearchterm(true);
          setCompleted(false);
          setImportant(false);
          setUncompleted(false);
          }} className="bg-gray-50 dark:text-white dark:bg-slate-700 outline-none p-2  text-md font ml-4" />
        
        <div className="my-auto mr-4 dark:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-search "
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        </div>
       
      </div>
      <div id = "time" className="md:py-2 ">
            <p className=" md:text-base text-xs text hidden md:block dark:text-white">{new Date().toDateString()}</p>
       </div>
      <div >
        
         <button type = "button"  className = "addbtn px-5 py-3  fixed top-96 mt-28  md:right-64 right-4 md:mt-4 sm:z-20 z-30 md:top-6" onClick = {handleShow}>Add new task</button>
         {form && <Modalform/>}
         
      </div>
      
      
    </header>
  );
}

export default Header;

