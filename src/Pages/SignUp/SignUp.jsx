import React from 'react'
import background from '../../Assets/login-background.jpg'
import { SubmitButton } from '../../Styles/Components/Button'
import './SignUp.styles.scss'

const SignUp = () => {
    return (
        <div className="loginContainer">
        <div className="formContainer">
            <div className="inputContainer">
                <h1>Have you Been to a trip recently?</h1>
                <div className="subText">Share your itenary with the world and connect with fellow travellers </div>
                <form>
                <label > Full Name:
                    <input placeholder= "John Smith" type="text" name="name" />
                </label>
                <label > Email
                    <input placeholder= "example@gmail.com" type="text" name="name" />
                </label>
                <label > Password
                    <input placeholder= "Enter Password" type="text" name="name" />
                </label>
                <label > Confirm Password
                    <input placeholder= "Confirm Password" type="text" name="name" />
                </label>
                </form>
                <SubmitButton> SIGN UP </SubmitButton>
            </div>
        </div>
        <div className="imageContainer">
            <img className="backgroundImage"src={background}></img>

        </div>

    </div>
    )
}

export default SignUp
