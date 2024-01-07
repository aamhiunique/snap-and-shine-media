import { InboxIcon } from '@heroicons/react/outline'
import React from 'react'
import imgAppScreen from "../../assets/products/3.png";
const apiUrl = process.env.REACT_APP_API_URL;


const Featuresection = () => {

  return (
    <>
    <div className="relative pt-16 pb-32 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                      <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Let's Elevate Your Brand:</h2>
                    <p className="mt-4 text-lg text-gray-500">Join hands with Snap&Shine Media and unlock the potential of your brand. Captivate your audience, amplify your message, and watch your brand shine in the digital sphere. Together, let's create content that leaves a lasting impact.</p>
                    <p className="mt-4 text-lg text-gray-500">Ready to take the next step? Contact us today to discuss how we can transform your brand's storytelling journey.</p>
                    <div className="mt-6">
                      <a href={apiUrl} target='_blank' rel="noreferrer" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src={imgAppScreen} alt="Inbox user interface" />
                </div>
              </div>
            </div>
          </div>
          
        </div></>
  )
}

export default Featuresection