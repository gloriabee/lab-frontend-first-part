import type { Organizer } from "@/types";
import axios from "axios";
import apiClient from "./AxiosClient";

export default{
    // getOrganizers(perPage: Number, page:Number){
    //     return apiClient.get('/organizers?_limit='+perPage+'&_page='+page)
    // },
    getOrganizer(id: Number){
        return apiClient.get('/organizers/'+id)
    },
    saveOrganizer(organizer: Organizer){
        return apiClient.post('/organizers',organizer)
    },

    getOrganizers(){
        return apiClient.get('/organizers')
    }

}