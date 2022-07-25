import React from 'react'

import Vector from '../assets/sort.png';
import Vector1 from '../assets/Filter.png';
import ChildDisplay from './ChildDisplay';

function AllChilds
    (props) {
        console.log(props.p)

    const Children = [
        {
            id: 1,
            pid: 1,
            name: 'Jason Crejza',
            age: '2 years 5 months',
            specialchild: 'No',
            img: '1',



        },
        {
            id: 2,
            pid: 1,
            name: 'Emily Watson',
            age: '2 years',
            specialchild: 'Yes',
            img: '2',



        },
        {
            id: 3,
            pid: 2,
            name: 'Sarah Taylor',
            age: '1 years 2 months',
            specialchild: 'no',
            img: '1',


        },
        {
            id: 4,
            pid: 2,
            name: 'Jeff Kim ',
            age: '4 years 5 months',
            specialchild: 'yes',
            img: '2',


        },
        {
            id: 5,
            pid: 3,
            name: 'Steve Shaprio',
            age: '3 years 5 months',
            specialchild: 'yes',
            img: '2',


        },
        {
            id: 6,
            pid: 3,
            name: 'Robert Downey',
            age: '1 year',
            specialchild: 'yes',
            img: '1',


        },
    ]
    return (
        <div className='w-[1150px] bg-white rounded-[8px] border-[1px] absolute left-[400px] top-[450px]'>
            <div className='flex'>
                <p className='w-[200px] font-Poppins m-10 text-2xl font-semibold  '>Children</p>
                <div className='flex w-[100%] justify-end mt-10 mr-14 font-Poppins text-[#4B506D] font-medium space-x-5'>
                    <img src={Vector} alt='' className=' w-[17px] h-[14px] mt-[5px] ' />
                    <label>Sort</label>
                    <img src={Vector1} alt='' className=' w-[14px] h-[14px] mt-[5px] ' />
                    <label>Filter</label>
                </div>



            </div>
            <div className='text-[#4B506D] font-Poppins font-medium'>
                <label className='ml-14 absolute '>Name</label>
                <div className='ml-[300px]'>
                    <div className='flex  '>
                        <label className='w-[250px]'>Age</label>
                        <label className='w-[250px]'>Special Child</label>



                    </div>
                </div>
                <hr />
            </div>

            {
                Children.filter(function (child) {
                    return child.pid === props.p;
                }).map((val, id) => {

                    const a = val.img

                    return <ChildDisplay
                        key={id}

                        name={val.name}
                        special={val.specialchild}
                        age={val.age}
                    




                        img={require('./profile/bb' + a + '.jpg')}


                    />
                })
            }



        </div>
    )
}

export default AllChilds
