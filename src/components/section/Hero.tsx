import react, { useState } from "react";
export default function Hero() {
    const [menu, setMenu] = useState(false);
    return (
        <section className="bg-white">
            <div className="w-full relative pb-10 px-6 xl:px-0">
                <img className="absolute w-full inset-0 h-full object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png" alt="we care family" />
                <nav className="lg:hidden relative z-40">
                    <div className="flex py-6 justify-between items-center px-4">
                        <a aria-label="we care company logo" href="javascript:void(0)">
                            <h1 className="text-2xl text-red-500 font-bold">Filter <span className="text-blue-500">Resume</span></h1>
                        </a>
                        <div className="flex items-center">
                            <ul id="list" className={`${menu ? '' : 'hidden'} p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16`}>
                                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <a href="javascript:void(0)">
                                        <span className="ml-2 font-bold">Products</span>
                                    </a>
                                </li>
                                <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                                    <a href="javascript:void(0)">
                                        <span className="ml-2 font-bold">Claims</span>
                                    </a>
                                </li>
                                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                    <a href="javascript:void(0)">
                                        <span className="ml-2 font-bold">Renewals</span>
                                    </a>
                                </li>
                                <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                                    <a href="javascript:void(0)">
                                        <span className="ml-2 font-bold">Reports</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="xl:hidden">
                                <img id="open" className={` ${menu ? 'hidden' : ''} close-m-menu`} onClick={() => setMenu(!menu)} src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg1.svg" alt="menu" />
                                <div id="close" className={` ${menu ? '' : 'hidden'} close-m-menu`} onClick={() => setMenu(!menu)}>
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg2.svg" alt="cross" />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <nav role="navigation" aria-label="Main" className="hidden relative z-10 w-full lg:flex justify-between items-center p-20">
                    <div className="w-1/6">
                        <a aria-label="we care company logo" href="javascript:void(0)">
                            <h1 className="text-2xl text-red-500 font-bold">Filter <span className="text-blue-500">Resume</span></h1>
                        </a>
                    </div>
                    <div className="w-5/6">
                        <div className="flex items-center justify-end">
                            <ul className="text-gray-800 lg:space-x-8 flex items-center leading-none">
                                <li>
                                    <a className="hover:text-indigo-500 text-lg focus:text-indigo-500" href="#">Products</a>
                                </li>
                                <li className="ml-4 hover:text-indigo-500 ">
                                    <a className="focus:text-indigo-500 text-lg" href="javascript:void(0)">Claims</a>
                                </li>
                                <li className="ml-4 hover:text-indigo-500 focus:text-indigo-500">
                                    <a className="focus:text-indigo-500 text-lg" href="javascript:void(0)">Renewal</a>
                                </li>
                                <li className="ml-4 hover:text-indigo-500 focus:text-indigo-500">
                                    <a className="focus:text-indigo-500 text-lg" href="javascript:void(0)">Support</a>
                                </li>
                            </ul>
                            <div className="pl-40">
                                <button role="button" aria-label="live chat" className=" bg-gradient-to-r from-blue-500 to-red-500 hover:bg-indigo-600 text-white px-6 py-2 font-semibold rounded focus:outline-none">Get Started</button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
                    <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                        <img role="img" aria-label="people smiling" className="mx-auto rounded-lg" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/235894883/original/89c6e9b168fcf7df21779cb60896a2e5a5296368/make-professional-resume-design-or-clean-cv-template.jpg" alt="people smiling" />
                    </div>
                    <div role="contentinfo" className="w-full lg:w-1/2 h-full">

                        <h1 className="text-indigo-700 text-4xl lg:text-6xl font-black mb-8">Find Optimized Resume For Your Company</h1>
                        <p className="text-gray-800 font-regular mb-8">FilterResume helps you find most relevent resumes for job.</p>
                        <div className="md:w-[70%] md:mx-auto bg-white lg:mt-16 py-4 px-4 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center shadow-lg rounded-lg">
                            <div className="sm:flex items-center py-2">
                                <div className="flex items-center">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg4.svg" alt="icon" />
                                    <input aria-label="Doctor name" className="w-24 xl:w-20 leading-none tracking-normal text-gray-800 ml-2.5 placeholder-black outline-none" placeholder="Resumes" readOnly />
                                </div>
                                <div className="flex items-center sm:mx-4 xl:mx-14 my-6 lg:my-0">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg5.svg" alt="icon" />
                                    <input aria-label="zip code" className="w-24 xl:w-24 leading-none tracking-normal text-gray-800 ml-2.5 placeholder-black outline-none" placeholder="Job Description" readOnly />
                                </div>
                                <div className="flex items-center">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg6.svg" alt="icon" />
                                    <input aria-label="insurance" className="w-24 xl:w-24 leading-none tracking-normal text-gray-800 ml-2.5 placeholder-black outline-none" placeholder="Filter" readOnly />
                                </div>
                            </div>
                            <button role="button" aria-label="search" className="focus:bg-indigo-700 focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2 text-white bg-indigo-600 hover:bg-indigo-700 mt-4 sm:mt-0 p-3 lg:-ml-8 rounded w-full sm:w-auto relative">
                                <img className="absolute right-0 mr-2 sm:mr-auto sm:relative icon icon-tabler icon-tabler-search cursor-pointer" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg7.svg" alt="search" />
                                <input aria-label="search" className="sm:hidden border-b border-gray-300 w-full bg-transparent pr-6 outline-none" readOnly />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

