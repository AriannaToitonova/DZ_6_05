import React from 'react';
import {oneAction , twoAction, plusAction, multiAction, minusAction, divisAction} from "../../store/numberSlice";
import {useDispatch, useSelector} from "react-redux";

function NumberPage() {
    const dispatch = useDispatch()
    const {result} = useSelector(state => state.numberReducer)

    const oneNumber = (e) => {
        dispatch(oneAction(e.target.value))
    }

    const twoNumber = (e) => {
        dispatch(twoAction(e.target.value))
    }

    const plus = () => {
        dispatch(plusAction())
    }

    const minus = () => {
        dispatch(minusAction())
    }
    const multi = () => {
        dispatch(multiAction())
    }
    const divis = () => {
        dispatch(divisAction())
    }
    return (
        <>
            <input
                type='number'
                placeholder='one number'
                onChange={oneNumber}
            />
            <input
                type='number'
                placeholder='two number'
                onChange={twoNumber}/>
            <br/>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <br />
            <button onClick={multi}>*</button>
            <button onClick={divis}>/</button>
            <br/>
            <h1>{result}</h1>
        </>
    );
}

export default NumberPage;