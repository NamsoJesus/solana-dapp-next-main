import { FC } from 'react';
import Image from 'next/image'

export const Carrousel: FC = () => {
    return (
        <>
            <div className="slider">
                <div className="slide-track">
                <div className="slide">
                        <img src="/public/image1.jpg" />
                    </div>
                    <div className="slide">
                        <img src='/public/image2.jpg' />
                    </div>
                    <div className="slide">
                        <img src='/public/image3.jpg' />
                    </div>
                    <div className="slide">
                        <img src='/public/image4.jpg' />
                    </div>
                    <div className="slide">
                        <img src='/public/image5.jpg' />
                    </div>
                    <div className="slide">
                        <img src='/public/image6.jpg' />
                    </div>
                    <div className="slide">
                        <img src='/public/image7.jpg' />
                    </div>
                    <div className="slide">
                        <img src='/public/image8.jpg' />
                    </div>
                    <div className="slide">
                        <img src='/public/image9.jpg' />
                    </div>
                    <div className="slide">
                        <img src='/public/image10.jpg' />
                    </div>
                </div>
            </div>
        </>
    );
};