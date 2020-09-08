
const initState ={
    url:'http://newsapi.org/v2/top-headlines?country=eg&apiKey=69ebdeb9f7ce4f3eb2a2a925a4392ab8',
    category:'general',
    country:'eg'
}

const reducer = (state = initState, action)=>{
    if(action.type.toString() == 'SEARCH'){
        return {
            ...state,
            country:action.val
        }
    }else if (action.type.toString() == 'CHANGE_CATEGORY'){
        return {
        ...state,
        category: action.val.toUpperCase(),
        url: 'http://newsapi.org/v2/top-headlines?country=' + state.country + '&category='+action.val+'&apiKey=69ebdeb9f7ce4f3eb2a2a925a4392ab8',
        }
    }
    return state;

}

export default  reducer;
