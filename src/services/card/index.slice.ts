import {IProduct} from "@/services";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: IProduct[] = []

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<IProduct>) => {
            state.push(action.payload)
        },
        removeItem: (state, action: PayloadAction<{ id: number }>) => {
            return state.filter(p => p.id === action.payload.id)
        }
    }
})

export const cardReducer = cardSlice.reducer
export const cardActions = cardSlice.actions
