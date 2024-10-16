import { defineStore } from "pinia";
import axios from "axios";
import apiClient from "@/services/AxiosClient";
import type { Organizer } from "@/types";


export const useAuthStore=defineStore('auth',{
    state:()=>({
        token:null as string | null,
        user:null as Organizer | null
    }),
    getters:{
        currentUserName():string{
            return this.user?.name || ''
        },
        isAdmin():boolean{
            return this.user?.roles.includes('ROLE_ADMIN') || false
        },
        authorizationHeader():string{
            return `Bearer ${this.token}`
        }
    },
    actions:{
        login(email: string,password: string){
            return apiClient
            .post('/api/v1/auth/authenticate',{
                username: email,
                password: password
            })
            .then((response)=>{
                console.log(response.data);
                this.token=response.data.access_token;
                this.user=response.data.user;
                localStorage.setItem('access_token',this.token as string)
                localStorage.setItem('user',JSON.stringify(this.user))
                axios.defaults.headers.common['Authorization']= `Bearer ${this.token}`
                return response
            })
           
        },
        logout(){
            console.log('logout')
            this.token=null
            this.user=null
            localStorage.removeItem('access_token')
            localStorage.removeItem('user')
        },
        reload(token:string, user:Organizer){
            this.token=token
            this.user=user
        }
    }
})