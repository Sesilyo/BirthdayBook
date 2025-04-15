import { defineProperties } from "ethers";

function RegisterForm()
{
    return (
        <>
            <p>Birthdaybook</p>
            <p>By Sesilyo</p>
            <p>Register</p>

            <form>
                <label>First Name</label><br/>
                <input type="text" required></input><br/>

                <label>Middle Name</label><br/>
                <input type="text" placeholder="Optional"></input><br/>

                <label>Last Name</label><br/>
                <input type="text" required></input><br/>

                <label>Email</label><br/>
                <input type="email" required></input><br/>

                <label>Password</label><br/>
                <input type="password" required></input><br/>
                
                <input type="submit"></input>
            </form>
        </>
    );
}

export default RegisterForm