import React from 'react'
import { Button } from './Button';



export const Header = ({ logo }) => {
    const HeaderItem = ['Home', 'About', 'Destination', 'Contact'];

    React.useEffect(() => {



    }, []);


    return (
        <div className='header-container bg-slate-50 border border-b-2 shadow-sm w-full h-[10vh] text-center justify-between fixed z-50'>
            <div className='header-content inline-flex justify-between w-[90em] relative top-8'>
                <div className='logo'><h2 className='font-bold'>{logo}</h2></div>
                <div className='header-item-container'>
                    <ul className='inline-flex space-x-10 relative'>
                        {HeaderItem.map(item => (
                            <li className='hover:cursor-default hover:text-slate-400'>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='buttons-content space-x-5'>
                    <Button text={"Login"} />
                    <Button text={"Signup"} />
                </div>
            </div>
        </div>
    )
}
