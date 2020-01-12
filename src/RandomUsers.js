import React, { Component } from 'react';
import { fetchTwentyUsers } from './randomApi'
import './RandomUsers.css';
import { UserDetails } from './UserDetails'


class RandomUsers extends Component {
    state = {
        users: [],
        date: {},
        count: 0,
    }


    componentDidMount() {
        this.getUsers()
        this.getDate()
    }

    getUsers = () => {
        return fetchTwentyUsers()
            .then(res => {
                // reset the state of user to reflect accurate data
                this.setState({ users: res.data.results })
            })
    }

    getDate = () => {
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        today = mm + dd;
        this.setState({
            date: today,
        })
    }

    length = 10;
    dateFormat = (date) => date.substring(0, this.length);

    checkBirthday = (date, dob) => {
        const mm = dob.slice(5, 7)
        const dd = dob.slice(8, 10)
        const birthday = mm + dd
        let result = ''
        if (date === birthday) {
            result = <span>is today!</span>
        } else if (date < birthday) {
            result = <span>has yet to occur this year</span>
        } else {
            result = <span className="RandomUser-past-birthday">already happened</span>
        }
        return result;
    }

    render() {

        return (
            <div className="RandomUsers-Wrapper">
                <UserDetails 
                    date={this.state.date}
                    users={this.state.users}
                    dateFormat={this.dateFormat} 
                    checkBirthday={this.checkBirthday}
                />
            </div>
        )
    }
}



export default RandomUsers;