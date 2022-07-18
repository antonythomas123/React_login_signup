import React,{useState} from 'react'
import './Login.css'
import Home from '../Home/Home'
import {Routes,Route,Link,useNavigate} from 'react-router-dom'
import Signup from '../Signup/Signup'

function Login() {
    let navigate = useNavigate()

    let inputs_obj ={
        username: '',
        password: ''
    }
    const[inputs,setInputs]=useState(inputs_obj);
    const[warning, setWarning] = useState(false);
    const[pwarning,setPasswordWarning] = useState(false)

    const handleSubmit = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values =>({...values,[name] : value}))
        
    }
    const handleChange = (event) => {
        event.preventDefault();
        if(inputs.username==='' && inputs.password===''){
            setWarning(true)
        }else{
            setWarning(false)
            if(inputs.username !== 'admin' && inputs.password!=='1234'){
                setPasswordWarning(true);
            }else{
                navigate('/home')
            }
        }
    }
    
    return (
        <div>
            <Routes>
            <Route path ='/home'element = {<Home/>} />
            <Route path = '/signup' element={<Signup/>} />
            </Routes>
            <div className='loginParentDiv'>
            <h3>Login</h3>
                <form onSubmit={handleChange}>
                    <label>Username</label>
                    <br/>
                    <input 
                        className='input' 
                        type="text" 
                        value = {inputs.email || ''}
                        onChange = {handleSubmit}
                        name='email'/>
                    <br />
                    <label>Password</label>
                    <br />
                    <input 
                        className='input' 
                        type="password"
                        value = {inputs.password || ''}
                        onChange = {handleSubmit}  
                        name='password' />
                    <br />
                    {warning && <p >Please input all the fields</p>}
                    {pwarning && <p >Incorrect Username & Password!</p>}

                    <br />
                        <button >Login</button>
                </form>
                    <Link to='/signup'>Sign Up?</Link>
                    
            </div>
        </div>
        
    )
}

export default Login
