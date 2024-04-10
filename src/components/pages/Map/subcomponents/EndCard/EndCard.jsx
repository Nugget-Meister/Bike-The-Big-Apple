import React from 'react';
import { useNavigate } from 'react-router';
const EndCard = ({data, state, setState}) => {

    let navigate = useNavigate();
    return (
        <div className='font-gotham-condensed-bold z-20 w-full fixed bottom-0 bg-bike-blue h-1/2 overflow-auto'>
            <h1 className='text-center text-5xl text-white p-5'>
                Route Finished!
            </h1>
            <h2 className='text-center text-4xl text-white p-3'>Stats</h2>
            <div className='grid grid-cols-2 text-center'>
                <div className='text-3xl -2 pl-8 text-white'>
                    <div>First Stat</div>
                    <div>abc123</div>
                </div>
                <div className='text-3xl p-2 pl-8 text-white'>
                    <div>First Stat</div>
                    <div>abc123</div>
                </div>
                <div className='text-3xl p-2 pl-8 text-white'>
                    <div>First Stat</div>
                    <div>abc123</div>
                </div>
                <div className='text-3xl p-2 pl-8 text-white'>
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
