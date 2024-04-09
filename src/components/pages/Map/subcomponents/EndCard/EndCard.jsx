import React from 'react';
import { useNavigate } from 'react-router';
const EndCard = ({data, state, setState}) => {

    let navigate = useNavigate()
    return (
        <div className='z-20 w-full fixed bottom-0 bg-bike-blue'>
            <h1 className='text-center text-3xl text-white'>
                Route Finished!
            </h1>
            <h2 className='text-center text-2xl text-white'>Stats</h2>
            <div className='grid grid-cols-2'>
                <div className='p-2 pl-8 text-white'>
                    <div>First Stat</div>
                    <div>abc123</div>
                </div>
                <div className='p-2 pl-8 text-white'>
                    <div>First Stat</div>
                    <div>abc123</div>
                </div>
                <div className='p-2 pl-8 text-white'>
                    <div>First Stat</div>
                    <div>abc123</div>
                </div>
                <div className='p-2 pl-8 text-white'>
                    <div>First Stat</div>
                    <div>abc123</div>
                </div>
                <button 
                    onClick={()=>{
                        navigate('/profile')
                        // setState({...state, tracking: false, endedRoute: false})
                        }
                    }
                    className='w-full bg-custom-red hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline col-span-2'>
                    Continue to Profile
                </button>
            </div>
        </div>
    );
}

export default EndCard;