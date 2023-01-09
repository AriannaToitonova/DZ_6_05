import {createSlice} from "@reduxjs/toolkit";

const numberSLice = createSlice({
    name: 'numberSLice',
    initialState: {
        oneInput: 0,
        twoInput: 0,
        result: 0
    },
    reducers: {
        oneAction: (state, action) => {
            state.oneInput = action.payload
        },
        twoAction: (state, action) => {
            state.twoInput = action.payload
        },
        plusAction: (state, action) => {
            state.result = state.oneInput !== 0 && state.twoInput!== 0 ? +state.oneInput + +state.twoInput : alert('Заполните оба поля для сложения ')
        },
        minusAction: (state, action) => {
            state.result = state.oneInput !== 0 && state.twoInput!== 0 ? +state.oneInput - +state.twoInput : alert('Заполните оба поля для вычитания')
        },
        multiAction: (state, action) => {
            state.result = state.oneInput !== 0 && state.twoInput!== 0 ? +state.oneInput * +state.twoInput : alert('Заполните оба поля для умножения')
        },
        divisAction: (state, action) => {
            state.result = state.oneInput !== 0 && state.twoInput!== 0 ? +state.oneInput / +state.twoInput : alert('Заполните оба поля для деления')
        }
    }
})

export const {oneAction,twoAction , plusAction, minusAction, divisAction, multiAction} =numberSLice.actions;

export default numberSLice.reducer