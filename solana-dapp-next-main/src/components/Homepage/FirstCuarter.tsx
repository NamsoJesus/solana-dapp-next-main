import { Dots } from 'components/icons';
import { FC } from 'react';
import { Carrousel } from './carrousel/Carrousel';


export const FirstCuarter: FC = () => {
    return (
        <div className=" bg-white divide-x-2 first_quarter_background_gradient pl-20 pr-20" style={{ height: '1400px' }}>
        

           <div className="title-wrapper flex flex-col h-3/6 justify-center ">

                <div className="title text-7xl leading-loose uppercase font-4 font-color tracking-wide	h-56 font-big-letters"> <h1>Lorem ipsum dolor sit<br/><br/>amet consectetur.</h1> </div>
                <div className="subtitle text-2xl  font-4 text-white tracking-wide font-small-letters"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/>Earum magnam excepturi voluptate odio.</p></div> 
                   
                   
                
            </div>

            <div className="carrousel-wrapper flex pl-20">
            <div className="carrousel-title-subtitle flex flex-col justify-between">
        <div className="carrousel-title text-5xl mt-12">
        <h1 className="leading-none">Lorem ipsum<br/> dolor.</h1>
        </div>
        <div className="carrousel-subtitle text-2xl mb-8">
        <p className="font-small-letters">Lorem ipsum dolor sit<br/> amet consectetur adipisicing elit. Natus!</p>
        </div>
            </div>
            <div className="carrousel flex justify-evenly w-full">
            <div className="bg-white  overflow-hidden shadow rounded-lg w-64 h-96">
      <div className="px-4 py-5 sm:p-6">hello</div>
    </div>
    <div className="bg-white pr-2 overflow-hidden shadow rounded-lg w-64 h-96">
      <div className="px-4 py-5 sm:p-6">hello</div>
    </div>
           
    <div className="bg-white overflow-hidden shadow rounded-lg w-64 h-96">
      <div className="px-4 py-5 sm:p-6">hello</div>
    </div>
           
   
           
           
            </div>
            </div>
        </div>
    );
};