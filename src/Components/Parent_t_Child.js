import React from 'react'
import AllChilds from './All_Childs'


function Parent_t_Child(props) {

    const Parents =
    {
        id: 1,
        parent: 'Jason Crejza',
        Address: '7485 Second Rd.Powder Springs, GA 30127',
        Phone: '0311-5522663',
        username: 'Danny_123',
        img: '1',
        Date_of_Birth: '29-10-1998',
        Gender: 'Male',
        email:'danny@123'



    }


    return (
        <>
        <div className='w-[1150px] bg-white rounded-[8px] border-[1px] absolute left-[400px] mt-[10px]'>
            <div className='flex'>
                <p className='w-[300px] font-Poppins m-10 text-2xl font-semibold  '>Parent Details</p>

            </div>
            <div className=' w-[100%] h-[300px] bg-white '>
                <img class="w-[180px] h-[180px] absolute -mt-2 ml-10 rounded-full" src={require('./profile/pf' + Parents.img + '.jpg')} alt="Neil image" />
                <div className='flex flex-col ml-[280px] font-Poppins text-lg gap-4 '>
                    <label className='text-[#6d6a6a]'> <label   className='text-xl font-medium  text-black '>Name: </label> {Parents.parent}</label>
                    <label className='text-[#6d6a6a]'>  <label className='text-xl font-medium text-black'>Username: </label>{Parents.username}</label>
                    <label className='text-[#6d6a6a]'>  <label className='text-xl font-medium text-black'>Date of Birth: </label>{Parents.Date_of_Birth}</label>
                    <label className='text-[#6d6a6a]'> <label className='text-xl font-medium text-black'>Gender: </label>{Parents.Gender}</label>
                    <label className='text-[#6d6a6a]'>  <label className='text-xl font-medium text-black'>Address: </label>{Parents.Address}</label>
                    <label className='text-[#6d6a6a]'> <label className='text-xl font-medium text-black'>Email: </label>{Parents.email}</label>
                </div>
            </div>




        </div>
         <AllChilds p={props.parent}/>


    </>
    )
}

export default Parent_t_Child