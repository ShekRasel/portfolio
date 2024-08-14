import React from 'react';

function Contact() {
  return (
    <div className="bg-neutral-900  md:h-auto flex items-center justify-center py-20 " id="contact">
      <div className="bg-neutral-800 rounded-lg shadow-lg p-4  lg:py-8 lg:px-20 md:px-10 max-w-[300px] lg:max-w-[1050px] md:max-w-[680px] w-full mx-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-4 md:mb-6 font-serif">
          Contact Me
        </h2>
        <form className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 lg:gap-6 md:gap-6">
            <div>
              <label htmlFor="firstname" className="block text-sm font-medium text-white">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="mt-1 block w-full p-2 md:p-3 border border-yellow-500 rounded-sm bg-neutral-800 text-yellow-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label htmlFor="lastname" className="block text-sm font-medium text-white">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="mt-1 block w-full p-2 md:p-3 border border-yellow-500 rounded-sm bg-neutral-800 text-yellow-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Enter your last name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full p-2 md:p-3 border border-yellow-500 rounded-sm bg-neutral-800 text-yellow-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full p-2 md:p-3 border border-yellow-500 rounded-sm bg-neutral-800 text-yellow-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full p-2 md:p-3 border border-yellow-500 rounded-sm bg-neutral-800 text-yellow-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 md:py-3 px-4 md:px-6 border border-transparent shadow-sm text-md lg:text-xl md:text-md font-semibold rounded-md text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
