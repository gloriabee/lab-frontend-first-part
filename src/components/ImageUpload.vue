<script setup lang="ts">
    import Uploader from 'vue-media-upload'
    import { computed, ref } from 'vue';
import { server } from 'typescript';
import { useAuthStore } from '@/stores/auth';
const authStore=useAuthStore()
    interface Props{
        modelValue?: string[]
    }

    const props=withDefaults(defineProps<Props>(),{
        modelValue:()=>[]
    })

    const convertStringToMedia=(str: string[]) : any=>{
        return str.map((element:string)=>{
            return{
                name: element
            }
        })
    }

    const emit=defineEmits(['update:modelValue'])
    const convertMediaToString=(media:any):string[]=>{
        const output: string[] =[]
        media.forEach((element:any)=>{
            output.push(element.name)
        })
        return output
    }

    const media=ref(convertStringToMedia(props.modelValue))
    const uploadUrl=ref(import.meta.env.VITE_UPLOAD_URL)
    const onChanged=(files: any)=>{
        emit('update:modelValue',convertMediaToString(files))
    }

    const authorizeHeader=computed(()=>{
        return {authorization: authStore.authorizationHeader}
    })
</script>

<template>
    <Uploader 
    :server="uploadUrl" 
    @change="onChanged"
     :media="media"
     :headers="authorizeHeader"></Uploader>
</template>

