import React,{useState} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  us
  return <div>
    <AddUser onAddUser={userHandler}/>
    <UsersList users={[]}/>
  </div>;
}

export default App;