import { CheckIcon } from '@heroicons/react/outline'
import { FC } from 'react';



export const LastPart: FC = () => {
  
    return (
        <div className=" divide-x-2" style={{ minHeight: '500px' }}>
            
            <footer  aria-labelledby="footer-heading ">
      
      <div className='footer-inside-wrapper '>
        <div className='flex justify-end py-36 bg-black'>
          
          <div className=" xl:mt-0 w-1/2 pr-20 ">
            <h3 className="text-5xl font-normal text-gray-400 tracking-wider ">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-base text-gray-300 text-lg">
              The latest news.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-indigo-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

        </div>
        {/* <div className="border-t border-gray-700 pt-6 pb-6 md:flex md:items-center md:justify-around">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1 pr-20">
            Terminos y condiciones | Politica de privacidad
          </p>
        </div> */}
      </div>
            </footer>
        </div>
    );
};