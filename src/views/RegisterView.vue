<script setup lang="ts">
 import InputText from '@/components/InputText.vue';
 
</script>


<template>
   <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-auto w-auto" 
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"/>
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Register your account
            </h2>

        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" @submit.prevent="">
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <InputText type="text"  placeholder="Email address" />
                </div>
                <div>
                    <label for="username" class="block text-sm font-medium leading-6 text-gray-900">
                        Username
                    </label>
                    <InputText type="text"  placeholder="Username" />
                </div>
                <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                        </div>
                    <InputText type="password"placeholder="Password" />
                </div>

                    <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Sign in
                        </button>
                    </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
                Try to login here
            </p>
        </div>
    </div>
</template>



<style scoped>

</style>