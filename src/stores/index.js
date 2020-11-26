import {createContext,useContext} from 'react'
import {AuthStore} from './auth'

const storesContext=createContext({
    AuthStore:new AuthStore()
})

export const useStores=()=>useContext(storesContext);
