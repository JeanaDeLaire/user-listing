import React from 'react';
import './UserDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'


export const UserDetails = (props) => {
    // count to number table
    let count = 1;
    let sortIcon = <FontAwesomeIcon icon={faSort} >/</FontAwesomeIcon>

    return (
        <table className="UserDetails-table">
            <thead className="UserDetails-header">
                <tr>
                    <th></th>
                    <th><button onClick={() => props.sortUsersByNestedData("name", "first")}>First Name {sortIcon}</button></th>
                    <th><button onClick={() => props.sortUsersByNestedData("name", "last")}>Last Name {sortIcon}</button></th>
                    <th><button onClick={() => props.sortUsers("gender")}>Gender {sortIcon}</button></th>
                    <th><button onClick={() => props.sortUsersByNestedData("location", "country")}>Country of Origin {sortIcon}</button></th>
                    <th>DOB</th>
                    <th>Birthday Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.map(user =>
                        <tr key={user.dob.date}>
                            <td className="UserDetails-number">{count++}.</td>
                            <td>{user.name.first}</td>
                            <td>{user.name.last}</td>
                            <td>{user.gender} </td>
                            <td>{user.location.country}</td>
                            <td>{props.dateFormat(user.dob.date)}</td>
                            <td>{props.checkBirthday(props.date, user.dob.date)} </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

