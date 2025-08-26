import {TextField, Button} from '@mui/material'
import { useState } from 'react';

function RegistrationForm(){
    const[fullName, setFullName] = useState('');
    const[PhoneNumber, setPhoneNumber] = useState('');
    const[Email, setEmail] = useState('');
    function handleSubmit(event){
        event.preventDefault();
        if(!fullName){
            alert('please fill all required fields.');
            return;
        }
        alert("Successfully submitted: \n " + "Fullname: " +fullName);
        setFullName('');
    }
         
    function handleReset(){
        setFullName('');
    }
    return(
        <div>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <TextField
                    label = "FullName"
                    value = {fullName}
                    onChange = {(e) => setFullName(e.target.value)}
                    required
                    fullWidth
                    margin="normal"
                    />
                    <TextField
                    label="Phone Number"
                    value={PhoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    fullWidth
                    margin="normal"
                    />
                    <TextField
                    label="Email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    fullWidth
                    margin="normal"
                    />

                    <Button
                    type = "submit"
                    value = "contained"
                    color = "primary"
                    >Submit</Button>
                    <Button
                     type = "reset"
                    value = "contained"
                    color = "secondary"
                    >Reset</Button>    
                    
            </form>

        </div>
    );
}
export default RegistrationForm;