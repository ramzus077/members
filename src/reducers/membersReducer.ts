import { CREATE_MEMBER_START, CREATE_MEMBER_SUCCESS, CREATE_MEMBER_FAILURE } from '../actions/action';
import { Member } from '../types'

let initialState: {
    members: Member[],
    isLoading: boolean,
    error: string | null
} = {
    members: [
        { id: 10, name: 'Ramzi Arif', age: 18, email: 'ramzi@aaa.ca' },
        { id: 18, name: 'Joe Lapin', age: 22, email: 'joe@aaa.ca' },
        { id: 11, name: 'Isabelle Bella', age: 22, email: 'isa@aaa.ca' },
        { id: 12, name: 'David Lefort', age: 48, email: 'lefort@aaa.ca' }],
    isLoading: false,
    error: null
}

const membersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CREATE_MEMBER_START:
            return { ...state, isLoading: true, error: null };
        case CREATE_MEMBER_SUCCESS:
            return Object.assign({}, state, { members: action.payload, isLoading: false })
        case CREATE_MEMBER_FAILURE:
            return { ...state, error: 'get members Failed.', loading: false };
        default:
            return state
    }
}

export default membersReducer;