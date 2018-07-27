import React, {Component} from "react";
import Users from './Users';


class UsersList extends Component {
    constructor(props) {
        super(props);
        
//        robimy cos do przechowywania danych
        this.state= {
            users: []
        }
        
    }
    
        addUser = (e) => {
            e.preventDefault();
            let nowyUzytkownik = {
                key: Date.now(),
                name: this._inputName.value
            }
            
            this.setState( (prevState) => {
                return {
                    users: prevState.users.concat(nowyUzytkownik)
                }
            });
//            czysci pole po wpisaniu imienia:
            this._inputName.value = "";
//            console.log(this._inputName.value);
            }
         removeUserFromState =(key) =>{
             
//                console.log(key);
             let filteredUsers = this.state.users.filter(user => user.key !==key);
             this.setState( () => {
                 return {
                 users: filteredUsers
             }
             })
//             console.log(filteredUsers);
    }
    
    render() {
        return (
        <div id="container">
            <h1> Users List </h1>
            <form onSubmit={this.addUser}>
            <input ref={(data) =>{this._inputName = data}}
             type="text" placeholder="Enter name"/>
            <input type="submit" value="Add user"/>
            </form>

            <Users usersList={this.state.users} removeUser={this.removeUserFromState} />
            </div>
        )
    }
}
export default UsersList;