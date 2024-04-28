import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook , BsInstagram , BsTwitterX , BsGithub , BsLinkedin} from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-orange-500">
      <div className="w-full max-w-7xl mx-auto">
         <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-5">
            <Link to="/" className='self-center whitespace-nowrap text-lg 
               sm:text-xl font-semibold dark:text-white'>
               <span className='px-2 py-1 bg-gradient-to-r
               from-blue-500 to-green-400 rounded-lg text-white'>Athhar's</span>
                  Blog
            </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
               <div className="">
               <Footer.Title title="About" />
               <Footer.LinkGroup col>
                  <Footer.Link
                     href="https://100jsprojects.com"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     100 JS Projects
                  </Footer.Link>
                  <Footer.Link
                     href="https://www.linkedin.com/in/mohamed-athhar-19a5b3227/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Athhar's Blog
                  </Footer.Link>
               </Footer.LinkGroup>

               </div>
               <div className="">
               <Footer.Title title="Follow Us" />
               <Footer.LinkGroup col>
                  <Footer.Link
                     href="https://github.com/AthharPro"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Github
                  </Footer.Link>
                  <Footer.Link
                     href=""
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     LinkedIn
                  </Footer.Link>
               </Footer.LinkGroup>

               </div>
               <div className="">
               <Footer.Title title="Legal" />
               <Footer.LinkGroup col>
                  <Footer.Link
                     href="#"
                  >
                     Privacy Policy
                  </Footer.Link>
                  <Footer.Link
                     href="#"
                  >
                     Terms &amp; Conditions
                  </Footer.Link>
               </Footer.LinkGroup>

               </div>
            </div>
         </div>
         <Footer.Divider/>
         <div className="w-full sm:items-center sm:flex sm:justify-between">
            <Footer.Copyright 
               href='#'
               by="Athhar's Blog"
               year={new Date().getFullYear()}
            />
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center" >
               <Footer.Icon href="#" icon={BsFacebook} />
               <Footer.Icon href="#" icon={BsInstagram} />
               <Footer.Icon href="#" icon={BsTwitterX} />
               <Footer.Icon href="#" icon={BsGithub} />
               <Footer.Icon href="#" icon={BsLinkedin} />
            </div>
         </div>
      </div>
    </Footer>
  );
}
