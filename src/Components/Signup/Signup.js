import React,{useState} from 'react'
import './Signup.css'
import {Link,useNavigate} from 'react-router-dom'

function Signup() {
    let navigate = useNavigate();

    let inputs_obj = {
        fname: '',
        lname: '',
        phone: '',
        email: '',
        password: '',
        cpassword: '',
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
        if(inputs.fname === '' || inputs.lname === '' || inputs.email === '' || inputs.password === '' || inputs.cpassword===''){
            setWarning(true);
          }else{
                setWarning(false);
                if(inputs.password!==inputs.cpassword){
                    setPasswordWarning(true);
                }else{
                    navigate('/home')
                }
            }
    }
    return (
        <div>
            <div className='signupParentDiv'>
                <h1>SignUP</h1>
                <form onSubmit={handleChange}>
                    <label htmlFor="fname">First Name</label>
                    <br />
                    <input 
                        className='input'
                        type="text"
                        name='fname'
                        value = {inputs.fname || ''}
                        onChange = {handleSubmit}
                        
                    />
                    <br />
                    <label htmlFor="fname">Last Name</label>
                    <br />
                    <input 
                        className='input'
                        type="text"
                        name='lname'
                        value = {inputs.lname || ''} 
                        onChange = {handleSubmit}   
                    />
                    <br />
                    <label htmlFor="fname">Email</label>
                    <br />
                    <input 
                        className='input'
                        type="email"
                        if='fname'
                        name='email'
                        value = {inputs.email || ''}
                        onChange = {handleSubmit} 
                    />
                    <br />
                    <label htmlFor="lname">Phone</label>
                    <br />
                    <input 
                        className='input' 
                        type="tel"
                        name='phone'
                        value = {inputs.phone || ''} 
                        onChange = {handleSubmit}   
                    />
                    <br />
                    <label htmlFor="lname">Password</label>
                    <br />
                    <input 
                        className='input'
                        type="password"
                        name='password'
                        value = {inputs.password || ''} 
                        onChange = {handleSubmit}   
                    />
                    <br />
                    <label >Confirm Password</label>
                    <br />
                    <input 
                        className='input'
                        type="password"
                        name='cpassword'
                        value = {inputs.cpassword || ''}
                        onChange = {handleSubmit}   
                    />
                    <br />
                    {warning && <p >Please input all the fields</p>}
                    {pwarning && <p >Password doesn't match!</p>}
                    <br/>
                    <br />
                    <button>Signup</button>
                </form>
                <Link to ='/login'>Login</Link>

            </div>
        </div>
    )
}

export default Signup
