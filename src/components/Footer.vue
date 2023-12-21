<template>
    <footer class="h-[80px] w-full flex items-center">
        <ul class="flex w-full text-center">
            <li class="w-3/12 li-dec font-semibold"><span class="span-dec relative" :class="{ 'active2': isRouteActive('/') }">Home</span></li>
            <li class="w-3/12 li-dec font-semibold"><span class="span-dec relative" :class="{ 'active2': isRouteActive('/about') }">About</span></li>
            <li class="w-3/12 li-dec font-semibold"><span class="span-dec relative" :class="{ 'active2': isRouteActive('/AgentsNPartners') }">Agents & Partners</span></li>
            <li class="w-3/12 li-dec font-semibold"><span class="span-dec relative" :class="{ 'active2': isRouteActive('/TestCenters') }">Authorized Test Centers</span></li>
        </ul>
    </footer>
</template>

<script>
    export default {
        name:"Footer",
        methods:{
            isRouteActive(route) {
                // console.log(this.$route.fullPath);
                return this.$route.fullPath === route;
            },
        }
    }
</script>

<style scoped>
.active2 {
    @apply w-1/2
    }
</style>