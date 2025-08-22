import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: ''
    //   });
    
    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //       ...formData,
    //       [name]: value
    //     });
    //   };
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Form submitted", formData);
    //     // Here, you can handle the form submission (e.g., send to an API)
    //     // For now, it just logs the data to the console.
    //   };
        

    return(
    <>
        <div className="min-h-screen bg-yellow-600 flex items-center justify-center p-4">
           <div className="relative min-h-screen w-[90vw] max-w-5xl bg-amber-50 shadow-red-50 overflow-hidden">
            <div className= "absolute inset-0 overflow-y-auto max-h-[80vh]">
              <div className="relative z-20 p-6 flex justify-between items-start">
          <div className="text-lg font-bold">NOIREX</div>
          <div className="flex gap-6 text-sm">
            <Link to="/Home">Home</Link>
            <Link to="/Eats">Eats</Link>
            <Link to="/Drinks">Drinks</Link>
            <Link to="/Arts">Art</Link>
            <Link to="/Law">Law</Link>
            <Link to="/Therapy">Therapy</Link>
            <Link to="/About">About Us</Link>
          </div>
          </div>
          
          {/* Contact Form */}
              
      '<div className='container-contact'>'
        <div className="contact-form mb-20 flex items-center justify-center">
         <form>
        <div >
          <label htmlFor="name"></label>
          <input 
            type="text" 
            placeholder="Your Name" 
            required
            className="w-80 h-10 mt-10 bg-amber-50 bg-opacity-80 border border-4 border-black flex p-4 justify-end flex-col"
            />
                  </div>
               
            <div>
          <label htmlFor="email"></label>
          <input 
            type="email" 
            placeholder="Your Email" 
            required
            className="w-80 h-10 mt-6 bg-amber-50 bg-opacity-80 border border-4 border-black flex p-4 justify-end flex-col"
          />
        </div>

        <div>
          <label htmlFor="message"></label>
          <textarea 
            id="message" 
            name="message" 
            placeholder="Your Message" 
            required 
            style={{ color: 'black'}}
            className="w-80 h-60 mt-6 bg-amber-50 bg-opacity-80 border border-4 border-black flex p-5 justify-end flex-col"
          ></textarea>
        </div>
        <div className="contact-form flex items-center justify-center">
        <button type="submit" className="w-16 h-8 mt-6 bg-amber-50 bg-opacity-80 border border-4 border-black items-center 
        flex justify-center flex-col text-sm text-black">SUBMIT</button></div>
      </form>
            </div>            
          </div> 

           </div>
        </div>
        </div>
       
          </>
  )
}

export default Contact;