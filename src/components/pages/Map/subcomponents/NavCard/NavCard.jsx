import React from 'react';

const NavCard = ({image, text, setState, state}) => {

    const updateValue = (value) => {
        console.log(state.currentStep + value)
        if(state.currentStep + value > 0 || state.currentStep + value < state) {
            setState({...state, currentStep: state.currentStep + value})
        } else {
            console.log("max or min value exceeded")
        }

    }

    const parseInstruction = (text) => {
        try {
            return text.replaceAll("<b>","").replaceAll("</b>","")
        } catch {
            return "{$invalidValue}"
        }
    }

    console.log(state.steps, state.currentStep, state.steps[state.currentStep])


    return (
        <div className='NavCard inline-flex max-w-md animation-slideRight fixed top-10 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white p-4 rounded-lg shadow-md'>
            <div className='inline'>
                <img src="" alt="" />
                <button
                    className='bg-custom-red hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    onClick={() => updateValue(-1)}
                    >{"<"}</button>
            </div>
            <div className='flex-1 max-w-xs p-2'>
                {parseInstruction(state.steps[state.currentStep].instructions)}
            </div>
            <div className='inline'>
                <button
                    className='bg-custom-red hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    onClick={() => updateValue(1)}
                    >{">"}</button>
            </div>
        </div>
    );
}

export default NavCard;
