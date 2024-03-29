import React, { useRef, useState } from 'react'
import './contact.css'
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';


const Contact = ({styles}) => {

    const form = useRef(null)
    const [disable,setDisable] = useState(false)
    

    const handleSubmit = (e)=>{
        e.preventDefault()
        setDisable(true)
        if(e.target.from_name.value === "" || e.target.from_mail.value === "" || e.target.message.value === ""){
            return toast.error("Please fill out all the fields")
        }
        emailjs.sendForm('service_kat8l3k','template_x1eoout', form.current, "hwMd5wwtAWcMOdknf")
        .then((response) => {
            e.target.reset()
            toast.success("Message sent successfully")
            setDisable(false)
        }, (err) => {
            toast.error("Unable to send message!")
            setDisable(false)
        });
    }
    const handleClick = (url)=>{
        const a = document.createElement('a')
        a.setAttribute('href', url)
        a.setAttribute('target', "blank")
        a.click()
        a.remove()
    }
    
  return (
    <section id='contact'>
        <h2 className='contact_heading'>Contact Me</h2>
        <span className='contact_desc'>Please fill out the form to get in touch with me.</span>
        <form className='contact_form' onSubmit={handleSubmit} ref={form}>
            <input type="text" placeholder='Your Name' name='from_name' style={styles.input}/>
            <input type="email" placeholder='Your Email' name='from_mail' style={styles.input}/>
            <textarea name="message" rows="5" placeholder='Your Message' style={styles.input}></textarea>
            <button disabled={disable} style={styles.button}>Submit</button>
            <div className='social_media'>
                <FaGithub onClick={()=>handleClick("https://github.com/vickymj007")}/>
                <FaLinkedin onClick={()=>handleClick("https://www.linkedin.com/in/vignesh-m-780423132/")}/>
            </div>
        </form>
        <Toaster/>
    </section>
  )
}

export default Contact