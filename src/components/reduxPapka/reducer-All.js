const SET_BOOKS = "SET_BOOKS";
const SET_QUERY = "SET_QUERY";
const SET_SORT = "SET_SORT";

let initialState = {
    books: [],
    query: "",
    sort: ''
};

export const generalReducer = (state = initialState, action) => {
    //debugger
    switch (action.type) {
        case SET_BOOKS:
            return {...state, books: action.payload }
        case SET_QUERY:
            return {...state, query: action.payload }
        case SET_SORT:
            return {...state, sort: action.payload }
        default:
            return state;
    }
};


export const setBooks = (books) => {
    return {
        type: SET_BOOKS,
        payload: books,
    };
};
export let setQuery = (query) => {
    return {
        type: SET_QUERY,
        payload: query,
    };
};
export let setSort = (sort) => {
    return {
        type: SET_SORT,
        payload: sort,
    };
};

export let thunkSetQuery = (query) => (dispatch) => {
    dispatch(setQuery(query))
}
export let thunkSetBooks = (books) => (dispatch) => {
    dispatch(setBooks(books))
}
export let thunkSetSort = (sort) => (dispatch) => {
    dispatch(setSort(sort))
}