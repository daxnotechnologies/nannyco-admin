import React, { useState } from 'react';

const ChildModal = ({close}) => {


    return (


      <>


            <div id="authentication-modal" tabindex="-1" className={"overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"} aria-modal="true" role="dialog">
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">

                    <div className="relative bg-gray-300 rounded-lg shadow">
                        <button onClick={()=> close(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-black placeholder:text-black rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>


                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-black ">Enter Credentials</h3>
                            <form className="space-y-6" action="#">
                                <div>
                                    <input type="text" className="bg-gray-50 border border-gray-500 text-black placeholder:text-black text-sm rounded-lg block w-full p-2.5" placeholder="Child Name" required="" />
                                </div>
                                <div>
                                    <input type="number" className="bg-gray-50 border border-gray-500 text-black placeholder:text-black text-sm rounded-lg block w-full p-2.5" placeholder="Child Age " required="" />
                                </div>
                                <div>
                                    <input type="file" className="bg-gray-50 border border-gray-500 text-black placeholder:text-black text-sm rounded-lg block w-full p-2.5" placeholder="Photo " required="" />
                                </div>
                                <div className="flex items-center">
                                    <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-2" />
                                    <label for="link-checkbox" className="ml-2 text-sm font-medium text-gray-900"> Special Child</label>
                                </div>
                                <div className='flex justify-around'>
                                    <button type="button" className="text-white bg-[#7E66AD] border border-[#7E66AD] focus:ring-[#b195e9] focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Save</button>
                                    <button type="button" className="text-red-700 bg-white  border border-red-700 focus:ring-red-400 focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Discard</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </>
    );
}

export default ChildModal;
