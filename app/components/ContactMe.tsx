"use client"
import React from "react";
// import { Card, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Typewrite from '../helper/Typewrite'

const ContactMe: React.FC = () => {
  return (
    <section id="contactme" className="bg-white border-t-2 border-border w-full flex justify-start py-16">
      <div className="w-full  p-8 ">
        <div>
         
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            <span className="text-contrast">
              <Typewrite
              examples={["REACH OUT","REACH OUT","REACH OUT"]}/></span>
              BEFORE AI TAKES OVER</h1>
          <p className="text-gray-600  mb-8">
          Feel free to hit me up anytime! Whether you’ve got a question, just wanna chat, or are looking to collaborate on a project, I’m here for it. I’ll do my best to get back to you! 
          </p>
          <div className="flex justify-center">
            <Button className="text-lg"
            onClick={() =>{
              if (typeof window !== 'undefined')window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=shregupta89@gmail.com",
                "_blank"
              )}
            }>Get in touch</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
