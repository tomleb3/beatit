import { combineReducers } from 'redux'
import { playerReducer } from './playerReducer'

export const rootReducer = combineReducers({
    playerModule: playerReducer,
})