import React,{useState} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const[userList,setUserList]=useState([]);
  const userHandler=(uName,uAge)=>{
setUserList((prevUserList)=>{
  return[...prevUserList,{name:uName,age:uAge}]
});
  };
  return <div>
    <AddUser onAddUser={userHandler}/>
    <UsersList users={[]}/>
  </div>;
}

export default App;
