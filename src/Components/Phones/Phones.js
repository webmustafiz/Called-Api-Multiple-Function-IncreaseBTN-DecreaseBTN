import React from 'react';
import { useState } from 'react';
import './Phones.css'
import Swal from 'sweetalert2'

const Phones = () => {
    const [count, setcount] = useState(0) 
    const increase = () => {
        if (count <= 90 ? setcount(count + 10) :
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: "you can't cross over the Hundred",
                })
                )
            {
        }
    }
// deacrease funtion  =======
    const decrease = () => {
        if (count >= 1 ? setcount(count - 10) :
            Swal.fire(
        'You cannot Read A negetive Value',
        'That thing is still around?',
        'question'
)
                )          
            {
        }
    }
    return (
        <div>
            <h1 id='counter'>{count} %</h1>
            <button id='increase' onClick={increase}>Increase</button>
            <button id='decrease' onClick={decrease}>Decrease</button>
        </div>
    );
};
export default Phones;