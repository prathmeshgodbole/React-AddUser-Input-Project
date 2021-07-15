import React,{useState} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const[usersList,setUsersList]=useState([]);
  const userHandler=(uName,uAge)=>{
setUsersList((prevUserList)=>{
  return[...prevUserList,{name:uName,age:uAge}]
});
  };
  return <div>
    <AddUser onAddUser={adduserHandler}/>
    <UsersList users={[]}/>
  </div>;
}

export default App;
