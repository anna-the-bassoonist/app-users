import React, {Component} from "react";

class Users extends Component {
    constructor(props) {
        super(props);
        
        this.createUser = this.createUser.bind(this);
    }
    
removeUser(user){
//    console.log(user);
    this.props.removeUser(user.key);
}    
createUser(user) {
    return <li onClick={() => this.removeUser(user)} key={user.key} >{user.name}</li>
}


    render(){
        
        let usersList = this.props.usersList;
        let users = usersList.map(this.createUser);
        console.log(usersList);
        return(
        <ul id="users">
                {users}
        </ul>
        );
    }}
    
    export default Users;