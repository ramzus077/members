import { CREATE_MEMBER, CREATE_MEMBER_START, CREATE_MEMBER_SUCCESS, CREATE_MEMBER_FAILURE } from './action';

export const createMember = (newMember) => {
    return (dispatch: any, getState: any) => {
        dispatch({ type: CREATE_MEMBER_START });
        try {
            dispatch({ type: CREATE_MEMBER_SUCCESS, payload: newMember });
        } catch (error) {
            dispatch({ type: CREATE_MEMBER_FAILURE, payload: error })
        }

    }
}
