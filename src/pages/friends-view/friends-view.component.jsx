import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Card, Button} from 'react-bootstrap';
import './friends-view.style.css';
import friends from '../../icons/friends.svg'
import {setContact} from "../../actions/action";

const FriendsView = () => {
    const contacts = useSelector(state => state.contacts.contacts)
    const dispatch = useDispatch();

    const deleteHandler = (data) => {
        dispatch(setContact(
            contacts.filter( el => el.id !== data.id )
        ))
    }

    if(contacts.length > 0) {
        return (
            <div id="friendsView" className="container rounded p-3 mt-4">
                {contacts.map(contact => {
                    return (
                        <Card key={contact.id} style={{width: '18rem'}}>
                            <Card.Img variant="top"
                                      src={contact.profilePicture ? contact.profilePicture : "https://via.placeholder.com/250/343a40/FFFFFF/?text=Profile+picture"}/>
                            <Card.Body>
                                <Card.Title><h3>{contact.firstName} {contact.lastName}</h3></Card.Title>
                                <Card.Text>
                                    <p><strong>Phone:</strong> {contact.phone}</p>
                                    <p><strong>Address:</strong> {contact.address}</p>
                                    <p><strong>Address supp:</strong> {contact.addressSup}</p>
                                    <p><strong>City:</strong> {contact.city}</p>
                                    <p><strong>Zip:</strong> {contact.zip}</p>
                                </Card.Text>
                                <Button onClick={deleteHandler} variant="danger">Delete</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        );
    }
    return (
        <div className="container text-center rounded p-3 mt-4">
            <h1>No friends added for now :)</h1>
            <img id="friends_img" src={friends} alt="friends"/>
        </div>
    )
}
export default FriendsView;
