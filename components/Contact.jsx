import React from "react";
import "./style.css";
import { MailOutlined, PhoneOutlined, HomeFilled  } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
const Contact = () => {
  return (
    <>
      <div className="contact-sec" id="contact">
        <div className="container">
        <h2 className="h2-style text-center">Contact Me</h2>
          <div className="contact-info">
            <div className="row align">
                
            <div className="col-sm-6">
           
                <Image
                  src="/images/Contact.jpg"
                  alt="contact-image"
                  height={500}
                  width={500}
                />
              </div>
              <div className="col-sm-6">
             <div className="contact-links">
               <h3>
                <Link href="mailto:">
                 <MailOutlined /> : sunainamarwaha8@gmail.com
                 </Link>
               </h3>
             </div>
             <div className="contact-links">
               <h3 >
               <Link href="tel:">
                 <PhoneOutlined /> : 7814796053
                 </Link>
               </h3>
             </div> 
             <div className="contact-links">
               <h3>
                 <HomeFilled  /> : Mohali, Punjab
               </h3>
             </div>

           </div>
             
              
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
