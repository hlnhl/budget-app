import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

//function to change location & currency
const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    };

    return (
        <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
            </div>
            {
                <select name="Currency" id="Currency" defaultValue="£" onChange={event=>changeCurrency(event.target.value)}>
                    <option value="$">$ Dollar</option>
                    <option value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Rupee</option>
                </select>
            }
        </div>
    );
};

export default Currency;