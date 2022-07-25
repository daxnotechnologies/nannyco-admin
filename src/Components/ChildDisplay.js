import React ,{useState}from 'react'
import ChildModal from './ChildModal'


function ChildDisplay(props) {

    const [open, setopen] = useState(false)
  return (
    <div>
      

    <div className='text-black font-Poppins font-medium w-[100%] h-[100px]'>
    <img className="w-[44px] h-[44px] absolute -mt-2 ml-10 rounded-full" src={props.img} alt="Neil image"/>
        <label className='ml-24 absolute '>{props.name}</label>
        <div className='ml-[300px]'>
    <div className='flex  '>

    {/* <div className='absolute z-10' style={{ backgroundImage: `url(${props.img})` }}>
</div>{console.log(props.img)} */}

                <label className='w-[250px] flex flex-col'>{props.age}</label>
                <label className='w-[250px]'>{props.special}</label>
                <div className='w-[200px]'>
                <button onClick={()=>{setopen(true)}} type="button" class="text-white bg-[#7E66AD]  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
                            {open && <ChildModal
                            close={setopen}
                            />}
                <button type="button" class="ml-[20px] text-red-700 bg-white  border border-red-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Delete</button>

                </div>
               
            </div>

        </div>
        <hr  className='mt-10'/>

    </div>





</div>


)

}

export default ChildDisplay