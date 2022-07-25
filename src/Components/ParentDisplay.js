import React ,{useState}from 'react'
import ParentModal from './ParentModal'
import Parent_t_Child from './Parent_t_Child'


function ParentDisplay(props) {
    
    const [open, setopen] = useState(false)
    const [nestedModal,setnestedModal]=useState(false)
  

    return (
        <div >
      

                <div onClick={()=>{setnestedModal(true)}} className='text-black font-Poppins font-medium w-[100%] h-[100px]'>
                    {
                        nestedModal && <a href='/All_Parent/Parent_t_Child'></a>
                    }
                <img class="w-[44px] h-[44px] absolute -mt-2 ml-10 rounded-full" src={props.img} alt="Neil image"/>
                    <label className='ml-24 absolute '  onClick={()=> props.click(props.id)}>{props.parent}</label>
                    <div className='ml-[300px]'>
                <div className='flex  '>

                {/* <div className='absolute z-10' style={{ backgroundImage: `url(${props.img})` }}>
  </div>{console.log(props.img)} */}

                            <label className='w-[250px] flex flex-col'>{props.Address}</label>
                            <label className='w-[170px]'>{props.Phone}</label>
                            <label className='w-[200px]'>{props.username}</label>
                            <div className='w-[200px]'>
                            <button onClick={()=>{setopen(true)}} type="button" class="text-white bg-[#7E66AD]  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
                            {open && <ParentModal
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

export default ParentDisplay