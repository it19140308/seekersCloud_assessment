import Navbar from "./Component/Navbar/Navbar";
import CreateProgram from "./Pages/CreateProgram/CreateProgram";
import ListPrograme from "./Pages/ListPrograme/ListPrograme";
import Home from "./Pages/Home/Home";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import CreateStudent from "./Pages/CreateStudent/CreateStudent";
import ListProgrameStudent from "./Pages/List Students/ListProgrameStudent";
import UpdatePrograme from  "./Pages/UpdatePrograme/UpdatePrograme";
import ListStudent from "./Pages/ListStudents/ListStudent";

function App() {
  return (
    

    <BRouter>
    <Routes>

      <Route path="/" Component={Home}></Route>
      <Route path="/programe/add" Component={CreateProgram}></Route>
      <Route path="/programe/" Component={ListPrograme}></Route>
      <Route path="/Student/add" Component={CreateStudent}></Route>
      <Route path="/programe/Students" Component={ListProgrameStudent}></Route>
      <Route path="/programe/update/id" Component={UpdatePrograme}></Route>
      <Route path="/Student/" Component={ListStudent}></Route>
   
     


    </Routes>
   </BRouter>
  
  );
}

export default App;
