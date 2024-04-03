import React from 'react';

const EndCard = (data) => {
    return (
        <div className='bg-blue-500 w-full fixed bottom-0'>
            <h1 className='text-center text-3xl text-white'>
                Route Finished!
            </h1>
            <h2 className='text-center text-2xl text-white'>Stats</h2>
            <div className='grid grid-cols-2'>
                <div className='p-2 pl-8'>
                    <div>First Stat</div>
                    <div>abc123</div>
                </div>
                <div className='p-2 pl-8'>
                    <div>First Stat</div>
                    <div>abc123</div>
                </div>
                <div className='p-2 pl-8'>
                    <div>First Stat</div>
                    <div>abc123</div>
                </div>
                <div className='p-2 pl-8'>
                    <div>First Stat</div>
                    <div>abc123</div>
                </div>
            </div>
        </div>
    );
}

export default EndCard;
