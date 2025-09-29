import { useState } from "react";
export const ContactForm = ({}) => {
    const [firstNameValue, setFirstNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [messageValue, setMessageValue] = useState("");
    const [confirmationTextValue, setConfirmationTextValue] = useState("");
    let disableButton = "";
    if(confirmationTextValue && firstNameValue && lastNameValue && emailValue && messageValue !== ""){
        disableButton = "disabled";
    }
    return(
        <>
            <p>{confirmationTextValue}</p>
            <label htmlFor="firstName">First name: </label>
            <input name="firstName" id="firstName" type="text" value={firstNameValue} onChange={(event) => setFirstNameValue(event.target.value)} /><br />
            <label htmlFor="lastName">Last name: </label>
            <input name="lastName" id="lastName" type="text" value={lastNameValue} onChange={(event) => setLastNameValue(event.target.value)} /><br />
            <label htmlFor="email">Email: </label>
            <input name="email" id="email" type="text" value={emailValue} onChange={(event) => setEmailValue(event.target.value)} /><br />
            <label htmlFor="message">Message: </label>
            <textarea name="message" id="message" value={messageValue} onChange={(event) => setMessageValue(event.target.value)}></textarea>

            {confirmationTextValue !== "" && firstNameValue !== "" && lastNameValue !== "" && emailValue !== "" && messageValue !== "" ? 
                <button 
                    onClick={() => {setConfirmationTextValue(`Thanks ${firstNameValue} ${lastNameValue}! We will contact you at ${emailValue}.`)
                        setFirstNameValue("")
                        setLastNameValue("")
                        setEmailValue("")
                        setMessageValue("")}
                    }>
                Send</button> 
                : 
                <button 
                    onClick={() => {setConfirmationTextValue(`Thanks ${firstNameValue} ${lastNameValue}! We will contact you at ${emailValue}.`)
                        setFirstNameValue("")
                        setLastNameValue("")
                        setEmailValue("")
                        setMessageValue("")}
                    } disabled>
                Send</button> 
            }
        </>
    )
}