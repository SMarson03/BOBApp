import React from 'react';
import backgroundImage from '../Images/Bronze.jpg';
import Navbar from '../Navbar';

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
        <div
          className="bg-cover bg-gray-900 h-screen overflow-auto">
          <Navbar/>
          <div className="header"><h1 className='ml-6 mt-4 text-white text-center bold font-bold text-9xl'>NoireX</h1></div>
          <div className="subheader"><h2 className='ml-6 text-red-900 text-center bold font-bold text-2xl'>A Black Owned Directory</h2></div>
          

        <div className="contact-form mb-20 flex items-center justify-center">
         <form>
        <div >
          <label htmlFor="name"></label>
          <input 
            type="text" 
            placeholder="Your Name" 
            required
            style={{ color: 'white'}}
            className="w-80 h-10 mt-10 bg-black bg-opacity-80 border border-4 rounded-2xl rounded-tl border-black flex p-4 justify-end flex-col"
            />
        </div>

        <div>
          <label htmlFor="email"></label>
          <input 
            type="email" 
            placeholder="Your Email" 
            required
            className="text-white w-80 h-10 mt-6 bg-black bg-opacity-80 border border-4 rounded-2xl rounded-tl border-black flex p-4 justify-end flex-col"
          />
        </div>

        <div>
          <label htmlFor="message"></label>
          <textarea 
            id="message" 
            name="message" 
            placeholder="Your Message" 
            required 
            style={{ color: 'white'}}
            className="w-80 h-60 mt-6 bg-black bg-opacity-80 border border-4 rounded-2xl rounded-tl border-black flex p-5 justify-end flex-col"
          ></textarea>
        </div>
        <div className="contact-form flex items-center justify-center">
        <button type="submit" className="w-16 h-8 mt-6 bg-red-900 bg-opacity-80 border border-4 rounded-2xl rounded-tl border-black items-center 
        flex justify-center flex-col text-sm text-white">SUBMIT</button></div>
      </form>
            </div>
          </div>
    </>
    )
}

export default Contact;