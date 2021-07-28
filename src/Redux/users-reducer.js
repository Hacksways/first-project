const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SWITCH_IS_FETCHING = 'SWITCH_IS_FETCHING';


let initialState = {
    users: [],
    pageSize: 10,
    totalCountUsers: 0,
    currentPage: 1,
    isFetching: false,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_TOTAL_COUNT_USERS:
            return {...state, totalCountUsers: action.count}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SWITCH_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalCountUsers = (totalUsersCount) => ({type: SET_TOTAL_COUNT_USERS, count: totalUsersCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setSwitchIsFetching = (isFetching) => ({type: SWITCH_IS_FETCHING, isFetching});


export default usersReducer;