  import {
    FaFacebookSquare,
    FaGithub,
    FaLinkedin,
    FaLocationArrow,
    FaMailBulk,
  } from "react-icons/fa";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import { useEffect, useRef } from "react";
  import emailjs from "@emailjs/browser";
  import Swal from "sweetalert2";
  import message from "../../assets/message.png"
  
  
  const Message = () => {
    useEffect(() => {
      AOS.init({ duration: 3000 });
    }, []);
  
    
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_pv6ux1o",
          "template_lsmustf",
          form.current,
          "pF56YZibcTeyvPztH"
        )
        .then(
          (result) => {
            console.log(result.text);

            
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Message sent successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    return (
      <div id="contact" className="my-14 w-4/5 mx-auto">
       
        <div className="">
            <h1 className="text-2xl text-center font-semibold mb-8">You can send your message here!!!</h1>
          <div className="flex flex-col lg:flex-row-reverse gap-5 ">
            <div className="w-full lg:w-1/2">
                <img src={message} alt="" className="rounded-lg" />
            </div>
            <div className="w-full lg:w-1/2">
                <form className="col-span-2" ref={form} onSubmit={sendEmail}>
                <div className="flex gap-3">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-lg">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      name="user_name"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-lg">Email *</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      name="user_email"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-lg">Subject</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    name="subject"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message *</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-24"
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="w-52 mx-auto mt-8">
                    <input type="submit" value="Send" className="btn text-black  bg-rose-300 border-none  w-24 hover:text-black" />
                </div>
                
                </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Message;