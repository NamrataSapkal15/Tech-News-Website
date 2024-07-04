import React, { useReducer, useState, useEffect } from "react";
import { useContext } from 'react'
import reducer from "./reducer";

let API = "http://hn.algolia.com/api/v1/search?";


const intialState = {

    isLoading: true,
    query: "html",
    nbpages: 0,
    page: 0,
    hits: [],
}



const AppContext = React.createContext();

// to create a provider function
const AppProvider = ({ children }) => {


    const [state, dispatch] = useReducer(reducer, intialState);
    const fetchApiData = async (url) => {

        dispatch({ type: 'SET_LOADING' });

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type: 'GET_STORIES',
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                },
            });
        }
        catch (error) {
            console.log(error);
        }
    }

    // to remove the post
    const removePost = (post_ID) => {
        dispatch({ type: "Remove_post", payload: post_ID })
    }

    // to search post

    const searchPost = (searchQuery) => {
        dispatch({
            type: "Search_Query",
            payload: searchQuery,
        })
    }

    // pagination
    const getNextPage = () => {
        dispatch({
            type: "Next_page",


        });
    }


    const getPrevPage = () => {
        dispatch({
            type: "Prev_page",


        });
    }


    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);

    }, [state.query,state.page]
    );

    return (
        <AppContext.Provider value={{ ...state, removePost, searchPost, getNextPage, getPrevPage }}>
            {children}
        </AppContext.Provider>
    );
};


// custum hooks 
const useGloabalContext = () => {
    return useContext(AppContext);


};

export { AppContext, AppProvider, useGloabalContext };