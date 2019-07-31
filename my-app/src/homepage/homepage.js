import React from 'react';
import axios from "axios";

export class HomePage extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'React'
        };
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                this.setState({
                    users: response.data,
                    name:"Shashank"
                })
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })


    }

    render() {
        var myuser=this.state.users;
        var user = myuser.map((user)=>{return user.name;});
        return (
            <div>
                I am a homePage with name {this.state.name} and users {user}.
            </div>
        );
    }
}
