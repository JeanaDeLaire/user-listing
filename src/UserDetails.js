import React from 'react';
import './UserDetails.css';

export const UserDetails = (props) => {
    let count = 1;
    return (
        <table className="UserDetails-table">
            <thead className="UserDetails-header">
                <tr>
                    <th></th>
                    <th>Full Name</th>
                    <th>Gender</th>
                    <th>Country of Origin</th>
                    <th>DOB</th>
                    <th>This Year's Birthday Status</th>
                </tr>
            </thead>
                <tbody>
                    {
                        props.users.map(user =>
                            <tr key={user.dob.date}>
                                <td className="UserDetails-number">{count++}.</td>
                                <td>{user.name.first} {user.name.last}</td>
                                <td>{user.gender} </td>
                                <td>{user.location.country} </td>
                                <td>{props.dateFormat(user.dob.date)} </td>
                                <td>{props.checkBirthday(props.date, user.dob.date)} </td>
                            </tr>
                        )
                    }
                </tbody>
        </table>

            )
        }
        
