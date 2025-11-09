import './Exe2.css'
import {useState} from "react";

function Exe2() {

    const [username,setUsername] = useState("")
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [phoneNumber,setPhoneNumber] = useState("")
    const [email,setEmail] = useState("")
    const [city,setCity] = useState("")

    const[subbmited,setSubbmited] = useState(false)

    const buttonSent = () => {
        setSubbmited(true)

        if (!username || !firstName || !lastName || !phoneNumber || !email || !city){
            alert("please fill all the field!")
            return
        }
        alert("Registered successfully!")
        console.log("username: ", username)
        console.log("firstName: ", firstName)
        console.log("lastName: ", lastName)
        console.log("phoneNumber: ", phoneNumber)
        console.log("email: ", email)
        console.log("city: " ,city)

    }


    return(
        <>
            <div>
                <h1>My New Site</h1>
                <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder={"Enter Your username"}/>
                {subbmited && username === "" && <p>Please enter username</p>}
                <br />
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder={"Enter your first name"}/>
                {subbmited && firstName === "" && <p>Please enter first name</p>}
                <br />
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder={"Enter your last name"}/>
                {subbmited && lastName === "" && <p>Please enter last name</p>}
                <br />
                <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder={"Enter your phone number"}/>
                {subbmited && phoneNumber === "" && <p>Please enter phone number</p>}
                <br />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"Enter your email"}/>
                {subbmited && email === "" && <p>Please enter email</p>}
                <br />
                <input value={city} onChange={(e) => setCity(e.target.value)} placeholder={"Enter your city"}/>
                {subbmited && city === "" && <p>Please enter city</p>}
                <br />
                <button onClick={buttonSent}>Press here</button>
            </div>
        </>
    )



}
export default Exe2