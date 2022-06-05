import {React,useState,useContext} from 'react'
import background from '../../Assets/login-background.jpg'
import { SubmitButton } from '../../Styles/Components/Button'
import './LogIn.styles.scss'
import {UserContext} from '../../Context/UserContext'; 
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'


const LogIn = () => {
    const[email,setEmail] = useState();
    const navigate = useNavigate();
    const[password,setPassword] = useState();
    const { setJwt,setAuthenticated,user,baseUrl,setCurrentUser} = useContext(UserContext);


    const logInHandler = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
             },
            body: JSON.stringify({ 
                "email": email,
                "password": password,
             })}
        fetch(baseUrl + '/login',requestOptions)
        .then((response)=> response.json())
        .then((data)=>{
            console.log(JSON.stringify(data))
            if(data.status == 200){
                setJwt(data)
                navigate('/');
                setAuthenticated(() => true);
            }
            
        })
    
    }
    return (
        <div className="loginContainer">
            <div className="formContainer">
                <div className="inputContainer">
                    <h1>Log Into our Global Itenary</h1>
                    <div className="subText">Share your itenary with the world and connect with fellow travellers </div>
                    <form>
                    <label > Email
                        <input placeholder= "example@gmail.com" onChange={(e) =>{setEmail(e.target.value);}} type="text" name="name" />
                    </label>
                    <label > Password
                        <input placeholder= "Enter Password" onChange={(e) =>{setPassword(e.target.value);}} type="password" name="name" />
                    </label>

                    </form>
                    <SubmitButton> LOG IN</SubmitButton>
                    <Link to='/signup'>Sign up to join the team!</Link>
                </div>
            </div>
            <div className="imageContainer">
                <img className="backgroundImage"src={background}></img>

        </div>
        </div>
    )
}

export default LogIn
