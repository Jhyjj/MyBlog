import axios from "axios";
import { API_URL } from "../config/contansts";

const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

const initialState = {
    posts:{
        loading:false,
        data:null,
        error:null
    },
    post:{
        loading:false,
        data:null,
        error:null
    }
}

//액션생성함수

export const getPosts = (list)=> async dispatch =>{
    dispatch({type:GET_POSTS})
    try{
        const response = await axios.get(`${API_URL}/posts/${list}`)
        const result = response.data;
        console.log(result)
        dispatch({type:GET_POSTS_SUCCESS,result})
    }
    catch(e){
        dispatch({type:GET_POSTS_ERROR,error:e})
    }
}

//특정 포스트 하나만 조회하기
export const getPost = (no)=> async dispatch =>{
    dispatch({type:GET_POST})
    try{
        const response = await axios.get(`${API_URL}/post/${no}`)
        const result = response.data;
        console.log(result)
        dispatch({type:GET_POST_SUCCESS, result})
    }
    catch(e){
        dispatch({type:GET_POST_ERROR, error:e})
    }
}

//메인화면에서 최신 포스트 4개만 조회하기
export const getPostLatest = ()=> async dispatch =>{
    dispatch({type:GET_POSTS})
    try{
        const response = await axios.get(`${API_URL}/postLatest`)
        const result = response.data;
        console.log(result);
        dispatch({type:GET_POSTS_SUCCESS,result})
    }
    catch(e){
        dispatch({type:GET_POSTS_ERROR,error:e})
    }
}


//리듀서
export default function printPost(state=initialState,action){
    switch(action.type){
        case GET_POSTS:
            return{
                ...state,
                posts:{
                    loading:true,
                    data:null,
                    error:null
                }
            }
        case GET_POSTS_SUCCESS:
            return{
                ...state,
                posts:{
                    loading:false,
                    data:action.result,
                    error:null
                }
            }
        case GET_POSTS_ERROR:
            return{
                ...state,
                posts:{
                    loading:false,
                    data:null,
                    error:action.error
                }
            }
        
        case GET_POST:
            return{
                ...state,
                post:{
                    loading:true,
                    data:null,
                    error:null
                 }
            }
        case GET_POST_SUCCESS:
            return{
                ...state,
                post:{
                    loading:false,
                    data:action.result,
                    error:null
                }
            }
        case GET_POST_ERROR:
            return{
                ...state,
                post:{
                    loading:false,
                    data:null,
                    error:action.error
                }
            }
        default:
            return state
    }
}