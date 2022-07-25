import React ,{useState} from 'react'

import Vector from '../assets/sort.png';
import Vector1 from '../assets/Filter.png';
import arrow1 from '../assets/arrw1.png';
import arrow2 from '../assets/arrw2.png';

import ParentDisplay from './ParentDisplay';
import Parent_t_Child from './Parent_t_Child';
import { Parents } from './Parents';

function AllParents
    () {
        const [dis,setdis]=useState(true)
        const [Ids,setids]= useState()

        const handleclick =(Id)=>{
            

            setdis(!dis)
            setids(Id)

        }
    
    return (
        <>
        {!dis ?
            <Parent_t_Child  parent={Ids} /> :
            <div className={!dis ? 'hidden' : ' w-[1150px] bg-white rounded-[8px] border-[1px] absolute left-[400px] mt-[10px]'}>
            <div className='flex'>
                <p className='w-[200px] font-Poppins m-10 text-2xl font-semibold  '>Parents</p>
                <div className='flex w-[100%] justify-end mt-10 mr-14 font-Poppins text-[#4B506D] font-medium space-x-5'>
                    <img src={Vector} alt='' className=' w-[17px] h-[14px] mt-[5px] ' />
                    <label>Sort</label>
                    <img src={Vector1} alt='' className=' w-[14px] h-[14px] mt-[5px] ' />
                    <label>Filter</label>
                </div>



            </div>
            <div className='text-[#4B506D] font-Poppins font-medium'>
                <label className='ml-14 absolute '>Parents</label>
                <div className='ml-[300px]'>
                    <div className='flex  '>
                        <label className='w-[250px]'>Address</label>
                        <label className='w-[170px]'>Phone</label>
                        <label className='w-[200px]'>UserName</label>

                    </div>
                </div>
                <hr />
            </div>

            {
                Parents.map((val, id) => {

                    const a = val.img
                    // eslint-disable-next-line react/jsx-pascal-case
                    return <ParentDisplay
                        key={id}
                        id={val.id}
                        parent={val.parent}
                        Address={val.Address}

                        Phone={val.Phone}
                        username={val.username}
                        img={require('./profile/img' + a + '.png')}
                        click= {handleclick}


                    />
                })
            }
            <div className='flex mb-7'>
                <div className='flex justify-end w-[90%] text-[#9FA2B4] space-x-40'>
                    <label>Rows per page 8</label>
                    <label >1-8 of 1240</label>

                </div>
                <img src={arrow1} alt='' className='  ' />
                <img src={arrow2} alt='' className='  ' />
            </div>


        </div>
         }
        
        </>
    )
}

export default AllParents
