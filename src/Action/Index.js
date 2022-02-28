import { GETALLUSERLIST, GETALLUSERLISTSUCCESS, ISUSERDETAILSMODALOPEN, CLOSEUSERDETAILSMODAL, DELETEUSER } from "./ActionTypes"


export const AllUserList = () => {
    return {
        type: GETALLUSERLIST
    }
}

export const getAllUserListSuccess = (payload) => {
    return {
        type: GETALLUSERLISTSUCCESS,
        payload: payload
    }
}

export const openUserDetailsModal = () => {
    return {
        type: ISUSERDETAILSMODALOPEN
    }
}

export const clolseUserDetailsModal = () => {
    return {
        type: CLOSEUSERDETAILSMODAL
    }
}

export const deleteUserFromList = (payload) => {
    return {
        type: DELETEUSER,
        payload: payload
    }
}
