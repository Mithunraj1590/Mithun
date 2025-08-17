"use client"
import React from 'react';
import FadeAnim from '@/utilities/FadeAnim';
import Style from "./ImageGrid.module.scss";

const ImageGrid = (data) => {
    const gridData = data?.data;

    return (
        <section className={`py-[100px] ${Style.imageGrid}`}>
            <FadeAnim>
                <div className="container">
                    <div className="mb-[80px] fade-elem">
                        <h2 className="text-h2 leading-[0.8] mb-[50px] text-white">
                            {gridData?.title}
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] fade-elem">
                        {gridData?.images?.map((image, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-[20px]">
                                <img 
                                    src={image} 
                                    alt={`Project Image ${index + 1}`}
                                    className="w-full h-[300px] object-cover group-hover:scale-110 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-[50px] h-[50px] bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                            <svg className="w-[24px] h-[24px] text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeAnim>
        </section>
    );
};

export default ImageGrid;
