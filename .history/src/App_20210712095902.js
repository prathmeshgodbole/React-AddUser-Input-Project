import React,{useState} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const[usersList,setUsersList]=useState([]);
  const addUserHandler=(uName,uAge)=>{
setUsersList((prevUsersList)=>{
  return[...prevusersList,{name:uName,age:uAge}]
});
  };
  return <div>
    <AddUser onAddUser={addUserHandler}/>
    <UsersList users={[]}/>
  </div>;
}

export default App;
