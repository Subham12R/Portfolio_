import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Contacts = () => {
  return (
    <>
      <div className="h-auto lg:h-max" id='contacts'>
        <div className="bg-zinc-900 text-white p-5">
          {/* Page Title */}
          <div className="flex justify-center items-center text-center">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5">
            {/* Contact Form */}
            <div className="w-auto shadow-md rounded-md h-max p-4 bg-zinc-800 ">
              <h3 className="text-xl font-bold text-gray-200 text-center mb-4">Contact</h3>
              <Separator className="my-4" />
              <form>
                <div className="text-gray-200 flex flex-col gap-4">
                  <div>
                    <label htmlFor="name">Name</label>
                    <Input type="text" placeholder="Name" className="focus:bg-zinc-700/50 focus:text-white"/>
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <Input type="email" placeholder="Email" className="focus:bg-zinc-700/50 focus:text-white"/>
                  </div>
                  <div>
                    <label htmlFor="subject">Subject</label>
                    <Input type="text" placeholder="Subject" className="focus:bg-zinc-700/50 focus:text-white" />
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <Textarea placeholder="Type your message here." className="focus:bg-zinc-700/50 focus:text-white" />
                  </div>
                  <div>
                    <Button type="submit" className="w-full hover:bg-blue-800 p-4 transition-all duration-500 ease-in-out">
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Details Card */}
            <div className="w-auto shadow-md rounded-md h-relative p-4 bg-zinc-800">
              <h3 className="text-xl font-bold text-gray-200 text-center mb-4">Contact Details</h3>
              <Separator className="my-4" />
              <div className="text-gray-200 space-y-4">
                <p>
                  <strong>Name:</strong> Subham Karmakar
                </p>
                <p>
                  <strong>Email:</strong> rikk4335@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> 9434474878
                </p>
                <p>
                  <strong>Address:</strong> Kolkata, West Bengal, India
                </p>
              </div>
              <div className="mt-5">
                <h4 className="text-lg font-bold text-gray-200">Socials</h4>
                <div className="flex gap-4 mt-2">
                  {/* Social Icons */}
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current">
                      <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-red-600 hover:text-red-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current">
                      <path
                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current">
                      <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </a>

                  <a href="https://github.com/Subham12R" className="text-blue-600 hover:text-blue-800">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24"
                    height="24"
                    viewBox="0 0 496 512"
                    className="fill-current">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                    </svg>
                  </a>

                  <a href="https://github.com/Subham12R" className="text-blue-600 hover:text-blue-800">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24"
                    height="24"
                    viewBox="0 0 448 512"
                    className="fill-current">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                    </svg>
                  </a>



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
