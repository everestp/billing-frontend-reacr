
import UserForm from "../../components/UserFrom/UserForm"
import UserList from "../../components/UserList/UserList"
import "./ManageUsers.css"
const ManageUsers = () => {
  return (
    <div className='users-container text-light'>
    <div className="left-column">
   <UserForm/>
    </div>
    <div className="right-column">
     <UserList/>
    </div>
        </div>
  )
}

export default ManageUsers