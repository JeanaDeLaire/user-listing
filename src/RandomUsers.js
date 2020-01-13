import React, { Component } from 'react';
import { fetchTwentyUsers } from './randomApi'
import './RandomUsers.css';
import { UserDetails } from './UserDetails'


class RandomUsers extends Component {
    state = {
        users: [],
        date: {},
    }

    // call 20 users only once on component render and get formatted current date object
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

    // sort helper for one level nested data (ex: user.gender)
    sortUsers = (trait) => {
        const sortedUsers = this.state.users.sort((a, b) => (a[trait] > b[trait]) ? 1 : -1)
        this.setState({ users: sortedUsers })
    }

    // sort helper for deep nested data (ex: user.location.country)
    sortUsersByNestedData = (keyA, keyB) => {
        const sortedUsers = this.state.users.sort((a, b) => (a[keyA][keyB] > b[keyA][keyB]) ? 1 : -1)
        this.setState({ users: sortedUsers })
    }

    // helper to format dob to compare to current date
    dateFormat = (date) => date.substring(0, 10);

    checkBirthday = (date, dob) => {
        const mm = dob.slice(5, 7)
        const dd = dob.slice(8, 10)
        const birthday = mm + dd
        let result = ''
        if (date === birthday) {
            result = <span className="RandomUsers-today-birthday">is today!</span>
        } else if (date < birthday) {
            result = <span>has yet to occur this year</span>
        } else {
            result = <span className="RandomUsers-past-birthday">already happened</span>
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
                    sortUsers={this.sortUsers}
                    sortUsersByNestedData={this.sortUsersByNestedData}
                />
            </div>
        )
    }
}



export default RandomUsers;