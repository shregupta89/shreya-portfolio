import React from "react";
// import { Card, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactMe: React.FC = () => {
  return (
    <section id="contactme" className="w-full flex justify-center py-16">
      <div className="w-full  p-8 ">
        <div>
         
          <h1 className="text-4xl font-bold mb-6">Reach Out Before The Robot Takes Over</h1>
          <p className="text-gray-600 text-center mb-8">
            My inbox is always open. Whether you have a question or just want to say hello, I’ll try my best to get back to you! Feel free to mail me about any relevant job updates.
          </p>
          <div className="flex justify-center">
            <Button className="text-lg">Get in touch</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
