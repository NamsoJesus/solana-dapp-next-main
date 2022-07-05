import { FC } from 'react';

export const SecondCuarter: FC = () => {
    return (
        <div className=" bg-white divide-x-2 pb-60 " >
            <div className='header w-full h-20 bg-black header-gradient-transparency flex items-center'>
                <h1 className='pl-20 text-5xl text-black'>Lorem, ipsum dolor.</h1>
            </div>
            <div className="relative">
          <h2 className="text-center text-5xl leading-8 font-extrabold tracking-tight text-gray-900 mt-60">
          Possimus magnam voluptatum cupiditate
          </h2>
          <p className="mt-10 max-w-3xl mx-auto text-center text-2xl text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum 
          </p>
        </div>
        <div className='mt-20 flex'> 
          <div className="text">
          <dl className="space-y-10 md:space-y-0  md:gap-x-8 md:gap-y-10">
           
              <div  className="relative">
                <dt>
                  
                  <h1 className="ml-16 text-lg leading-6 font-medium text-gray-900 text-3xl">Lorem, ipsum dolor.</h1>
                </dt>
                <p className="mt-2 ml-16 text-base text-gray-500 text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor </p>
              </div>
            
          </dl>
          <dl className="space-y-10 md:space-y-0  md:gap-x-8 md:gap-y-10 mt-10">
           
              <div  className="relative">
                <dt>
                  
                  <h1 className="ml-16 text-lg leading-6 font-medium text-gray-900 text-3xl">Lorem, ipsum dolor.</h1>
                </dt>
                <p className="mt-2 ml-16 text-base text-gray-500 text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor </p>
              </div>
            
          </dl>
          <dl className="space-y-10 md:space-y-0  md:gap-x-8 md:gap-y-10 mt-10">
           
              <div  className="relative">
                <dt>
                  
                  <h1 className="ml-16 text-lg leading-6 font-medium text-gray-900 text-3xl">Lorem, ipsum dolor.</h1>
                </dt>
                <p className="mt-2 ml-16 text-base text-gray-500 text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor </p>
              </div>
            
          </dl>
        </div>
        <div className='card w-1/2'>
        <div className="bg-black pr-2 overflow-hidden shadow rounded-lg w-64 h-96">
      <div className="px-4 py-5 sm:p-6">hello</div>
    </div>
        </div>
        </div>
        
        </div>
    );
};