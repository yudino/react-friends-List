import React from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import {addContact} from "../../actions/action";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css/animate.min.css';



const FormBlock = () => {
    const { register,
        handleSubmit,
        reset,
        formState,
        formState: { errors }
    } = useForm({ defaultValues:
            {
                profilePicture: "",
                lastName : "",
                firstName : "",
                phone: "",
                address: "",
                addressSup: "",
                city: "",
                zip: "",
            }
    });
    const dispatch = useDispatch();
    const onSubmit = data => {
        dispatch(addContact(data))
        store.addNotification({
            title: 'Friends',
            message: 'Your friend has been successfully added',
            type: 'success',                         // 'default', 'success', 'info', 'warning'
            insert: 'bottom',
            container: 'bottom-center',                // where to position the notifications
            animationIn: ['animate__animated animate__fadeIn'],     // animate.css classes that's applied
            animationOut: ['animate__animated animate__fadeOut'],   // animate.css classes that's applied
            dismiss: {
                duration: 3000
            }
        })
    };
    const [submittedData, setSubmittedData] = React.useState({});
    React.useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ ...submittedData });
        }
    }, [formState, submittedData, reset]);

    return (
        <Form id="formBlock" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formGridProfilePicture">
                <Form.Label>Profile picture</Form.Label>
                <Form.Control type="text" placeholder="http://..."
                              {...register("profilePicture",
                                  {pattern: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g })}/>
                {errors.profilePicture && errors.profilePicture.type === 'pattern' &&<small className="text-danger font-weight-bold">http or https url needed</small>}
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Lastname *</Form.Label>
                    <Form.Control type="text" placeholder="Enter your lastname"
                                  {...register("lastName", {required: true, pattern: /^[A-Za-z]+$/i})}/>
                    {errors.lastName && errors.lastName.type === 'required' && <small className="text-danger font-weight-bold">Field required</small>}
                    {errors.lastName && errors.lastName.type === 'pattern' && <small className="text-danger font-weight-bold">Only letters allowed</small>}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>Firstname *</Form.Label>
                    <Form.Control type="text" placeholder="Enter your firstname"
                                  {...register("firstName", {required: true, pattern: /^[A-Za-z]+$/i })}/>
                    {errors.firstName && errors.firstName.type === 'required' && <small className="text-danger font-weight-bold">Field required</small>}
                    {errors.firstName && errors.firstName.type === 'pattern' && <small className="text-danger font-weight-bold">Only letters allowed</small>}
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridPhone">
                <Form.Label>Phone *</Form.Label>
                <Form.Control type="tel" placeholder="Your phone"
                              {...register("phone", {required: true, pattern: /^(0|\+33)[1-9]( *[0-9]{2}){4}$/, maxLength: 12 })}/>
                <small>Format: 0XXXXXXXXX or +33XXXXXXXXX</small><br></br>
                {errors.phone && errors.phone.type === 'required' && <small className="text-danger font-weight-bold">phone must be write properly</small>}
                {errors.phone && errors.phone.type === 'pattern' && <small className="text-danger font-weight-bold">only numbers allowed</small>}
                {errors.phone && errors.phone.type === 'maxLength' && <small className="text-danger font-weight-bold">phone numbers too long</small>}
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Your address"
                              {...register("address")}/>
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Address supplement</Form.Label>
                <Form.Control type="text" placeholder="Apartment, studio, floor..."
                              {...register("addressSup")}/>
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Your city"
                                  {...register("city")}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Your zip"
                                  {...register("zip", {pattern: /^[0-9]{5}$/ })}/>
                    {errors.zip && errors.zip.type === 'pattern' && <small className="text-danger font-weight-bold">5 numbers required</small>}
                </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default FormBlock;
