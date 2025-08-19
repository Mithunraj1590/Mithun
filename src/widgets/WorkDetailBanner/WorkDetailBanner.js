"use client"
import React from 'react';
import FadeAnim from '@/utilities/FadeAnim';
import Icon from '@/styles/Icons';
import Style from "./WorkDetailBanner.module.scss";

const WorkDetailBanner = (data) => {
    const bannerData = data?.data;

    return (
        <section className={`py-[50px] lg:py-[100px] mt-[100px] ${Style.workDetailBanner}`}>
            <FadeAnim>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
                        {/* Content Section */}
                        <div className="fade-elem">
                            <div className="mb-[20px]">
                                <span className="text-[18px] text-white">
                                    {bannerData?.date} • {bannerData?.category}
                                </span>
                                {bannerData?.featured && (
                                    <span className="ml-[15px] px-[12px] py-[4px] bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[12px] rounded-full">
                                        Featured
                                    </span>
                                )}
                            </div>
                            <h1 className="ttl text-h2 leading-[1.2] mb-[20px] text-white ">
                                {bannerData?.title}
                            </h1>
                            <p className="text-[20px] text-white leading-[1.6] mb-[40px]">
                                {bannerData?.description}
                            </p>
                            
                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-[20px]">
                                {bannerData?.url && (
                                    <a 
                                        href={bannerData.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-[10px] bg-white text-black px-[30px] py-[15px] rounded-[10px] hover:bg-gray-200 transition-all duration-300 text-center"
                                    >
                                        <Icon name="icon-play-button" className="w-[20px] h-[20px]" />
                                        View Live Project
                                    </a>
                                )}
                                {bannerData?.github && (
                                    <a 
                                        href={bannerData.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-[10px] border border-white text-white px-[30px] py-[15px] rounded-[10px] hover:bg-white hover:text-black transition-all duration-300 text-center"
                                    >
                                        <svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        View on GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                        
                        {/* Image Section */}
                        {bannerData?.image && (
                            <div className="fade-elem">
                                <div className="relative group">
                                    <img 
                                        src={bannerData.image} 
                                        alt={bannerData.title}
                                        className="w-full h-[500px] object-cover rounded-[30px] group-hover:scale-105 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </FadeAnim>
        </section>
    );
};

export default WorkDetailBanner;
