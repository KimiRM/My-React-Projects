import React, { useState } from "react";
import './Contact.css';
import Input from "../Input/input";
import TextArea from "../Input/textarea";
import Button from "../buttons/button";
import { Link } from "react-router-dom";
import ReviewMessage from "../ReviewMessage/reviewMessage";

const Contact = () => {
  const [emailValue, setEmailValue] = useState("");
  const [subjectValue, setSubjectValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [errors, setError] = useState({email: '',subject: '', description: ''});
  const [isSubmit,setSubmit] = useState(false);

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleEmailInput = (event) => {
    if (validateEmail(event.target.value)) {
      setEmailValue(event.target.value);
      setError({
        ...errors,
        email: "",
      });
    } else {
      setError({
        ...errors,
        email: "Email is not valid",
      });
    }
  };

  const validateSubject = (subject) => {
    const pattern = /\w+/g;
    return pattern.test(subject);
  }

  const handleSubjectinput=(event) => {
    if (validateSubject(event.target.value)) {
      setSubjectValue(event.target.value);
      setError({
        ...errors,
        subject: "",
      });
    } else {
      setError({
        ...errors,
        subject: "Subject is not valid",
      });
    }
  }

  const validateDescription = (desc) => {
    const pattern = /\w+\s/g;
    return pattern.test(desc);
  }

  const handleDecriptioninput=(event) => {
    if (validateDescription(event.target.value)) {
      setDescriptionValue(event.target.value);
      setError({
        ...errors,
        description: "",
      });
    } else {
      setError({
        ...errors,
        description: "Description is not valid",
      });
    }
  }

  const handleSubmit = () => {
    if(validate()){
        setSubmit(!isSubmit);
    }
    
  }

  const handleBack = () => {
    setSubmit(!isSubmit);
  }

  const validate = () => {
    let flag = true;
    Object.keys(errors).forEach(element => {
        if (errors[element] !=='') flag = false; 
    })
      if (emailValue.trim() === '') {
    setError(prev => ({
      ...prev,
      email: "Email cannot be empty"
    }));
    flag = false;
  }
  
  if (subjectValue.trim() === '') {
    setError(prev => ({
      ...prev,
      subject: "Subject cannot be empty"
    }));
    flag = false;
  }
  
  if (descriptionValue.trim() === '') {
    setError(prev => ({
      ...prev,
      description: "Description cannot be empty"
    }));
    flag = false;
  }
    console.log(flag)
    return flag
  }
  
  return (
    <div className="Contact-form" >
      <div className="Form-container" style={{display: isSubmit? 'none' : 'flex'}}>
        <Input
          onChange={handleSubjectinput}
          inputClassName={"Contact"}
          placeHolder={"Subject"}
          label={"Subject: "}
        ></Input>
        {errors.subject && <span className="ErrorMessage">{errors.subject}</span>}
        <Input
          onChange={handleEmailInput}
          inputClassName={"Contact"}
          placeHolder={"person@gmail.com"}
          label={"Email: "}
        ></Input>
        {errors.email && <span className="ErrorMessage">{errors.email}</span>}
        <TextArea
          onChange={handleDecriptioninput}
          inputClassName={"Contact-textarea"}
          label={"Description: "}
          placeholder={"Enter Description"}
          labelClassName={"Contact-label"}
        ></TextArea>
        {errors.description && <span className="ErrorMessage">{errors.description}</span>}
        <div className="Button-wrapper">
          <Link to="/Home">
            <span class="material-symbols-outlined">keyboard_backspace</span>
          </Link>
          <Button onClick={handleSubmit} className={"Submit-btn"} children={"Submit"} />
        </div>
      </div>

        <div className="SubmitMessage-wrapper" style={{display: isSubmit? 'flex' : 'none'}}>
            <div className="SubmitMessage">
                <Button onClick={handleBack} className='ReviewMessage-icon' children={<i className={"fa-solid fa-arrow-left"}></i>} title="Go Back"/>
                <span>Message Sent Successfully <span style={{color: "green"}}><i class="fa-solid fa-check"></i></span></span>
            </div>

            <ReviewMessage subject={subjectValue} email={emailValue} description={descriptionValue} ></ReviewMessage> 
        </div>

    </div>
  );
};

export default Contact;
