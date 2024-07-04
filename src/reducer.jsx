const reducer = (state, action) => {

    switch (action.type) {

        case "SET_LOADING":
            return {

                ...state,
                isLoading: true,
            }

            case "Next_page":
                let pageNumInc = state.page+1 

                if (pageNumInc >= state.nbPages){

                    pageNumInc = 0;
                }
                

                return{
                    ...state,
                    page:pageNumInc
                }


                case "Prev_page":
                    let pageNum = state.page
                    if(pageNum <= 0 ){
                        pageNum = 0;
                    }
                    else{
                        pageNum = pageNum - 1
                    }
                    return{
                        ...state,
                        page:pageNum
                    }

        case "Remove_post":
            return {
                ...state,
                hits: state.hits.filter((curElement) => curElement.objectID != action.payload
                ),
            }

        case "Search_Query":
            return {
                ...state,
                query: action.payload,
            }

        case "GET_STORIES":

            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages:  action.payload.nbPages,
            };
    };
}


export default reducer;