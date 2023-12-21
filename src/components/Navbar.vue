<template>
    <header class="h-[80px] absolute w-full z-[999999999] text-white top-10" :class="{'top-0' : !isRouteActive('/')}">
        <div class="flex w-11/12 mx-auto h-full">
            <div class="md:w-1/12 w-6/12 h-full flex items-center"><img src="../assets/ECSA-logo.png" class="h-full " alt=""></div>
            <nav class="md:w-11/12 w-6/12 flex items-center">
                <button class="resposive-icon px-3 py-2 text-white bg-secondry-1 hidden text-2xl" @click="toggleMenuBar" v-if="!menubarOpen"><i class="fa-solid fa-bars"></i></button>
                <button class="resposive-icon px-3 py-2 text-white bg-secondry-1 hidden text-2xl" @click="toggleMenuBar" v-if="menubarOpen"><i class="fa-solid fa-x"></i></button>
                <ul class="flex flex-wrap ul-menu justify-between text-center w-full" v-if="menubarOpen || windowWidth >= 800">
                    <li class="menu-item li-dec"><span class="span-dec relative" :class="{ 'active2': isRouteActive('/') }">Home</span></li>
                    <li class="menu-item li-dec"><span class="span-dec relative">About ECSA</span></li>
                    <li class="menu-item li-dec relative" @click="toggleSubMenu('1')">
                        <p class=""><span class="span-dec relative">Graduated Studies <i class="fa-solid fa-chevron-down ms-2 transition-all duration-700" :class="iconRotate1"></i></span></p>
                        <ul class="sub-menu md:mt-0 w-full mt-5" v-if="subMenu1 || windowWidth >= 1024.999999999999999">
                            <router-link to="/honordoctor"><li :class="{ active: isRouteActive('/honordoctor') }" @click="toggleMenuBar">Honor Doctorate</li></router-link>
                            <router-link to="/DPApage"><li :class="{ active: isRouteActive('/DPApage') }" @click="toggleMenuBar">DBA</li></router-link>
                            <router-link to="/MBApage"><li :class="{ active: isRouteActive('/MBApage') }" @click="toggleMenuBar">MBA</li></router-link>
                            <router-link to="/ProfessionalDoctorate"><li :class="{ active: isRouteActive('/ProfessionalDoctorate') }" @click="toggleMenuBar">Professional Doctorate Degree</li></router-link>
                            <router-link to="/ProfessionalMaster"><li :class="{ active: isRouteActive('/ProfessionalMaster') }" @click="toggleMenuBar">Professional Master Degree</li></router-link>
                        </ul>
                    </li>
                    <li class="menu-item li-dec relative" @click="toggleSubMenu('2')">
                        <span class="span-dec relative">Undergraduate Studies<i class="fa-solid fa-chevron-down ms-2 transition-all duration-700" :class="iconRotate2"></i></span>
                        <ul class="sub-menu md:mt-0 mt-5" v-if="subMenu2 || windowWidth >= 1024.999999999999999">
                            <router-link to="/ProfessionalBachelor"><li :class="{ active: isRouteActive('/ProfessionalBachelor') }" @click="toggleMenuBar">Professional Bachelor</li></router-link>
                            <router-link to="/ProfessionalDiploma"><li :class="{ active: isRouteActive('/ProfessionalDiploma') }" @click="toggleMenuBar">Professional Diploma</li></router-link>
                        </ul>
                    </li>
                    <li class="menu-item li-dec relative" @click="toggleSubMenu('3')">
                        <span class="span-dec relative">Programs<i class="fa-solid fa-chevron-down ms-2 transition-all duration-700" :class="iconRotate3"></i></span>
                        <ul class="sub-menu md:mt-0 mt-5" v-if="subMenu3 || windowWidth >= 1024.999999999999999">
                            <router-link to="/honordoctor"><li :class="{ active: isRouteActive('/honordoctor') }" @click="toggleMenuBar">Honor Doctorate</li></router-link>
                            <router-link to="/DPApage"><li :class="{ active: isRouteActive('/DPApage') }" @click="toggleMenuBar">DBA</li></router-link>
                            <router-link to="/ProfessionalDoctorate"><li :class="{ active: isRouteActive('/ProfessionalDoctorate') }" @click="toggleMenuBar">Professional Doctorate Degree</li></router-link>
                            <router-link to="/MBApage"><li :class="{ active: isRouteActive('/MBApage') }" @click="toggleMenuBar">MBA</li></router-link>
                            <router-link to="/ProfessionalMaster"><li :class="{ active: isRouteActive('/ProfessionalMaster') }" @click="toggleMenuBar">Professional Master Degree</li></router-link>
                            <router-link to="/ProfessionalBachelor"><li :class="{ active: isRouteActive('/ProfessionalBachelor') }" @click="toggleMenuBar">Professional Bachelor</li></router-link>
                            <router-link to="/ProfessionalDiploma"><li :class="{ active: isRouteActive('/ProfessionalDiploma') }" @click="toggleMenuBar">Professional Diploma</li></router-link>
                        </ul>
                    </li>
                    <li class="menu-item li-dec"><span class="span-dec relative">Agents & Partners</span></li>
                    <li class="menu-item li-dec"><span class="span-dec relative">Authorized Test Centers</span></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name:'NavBar',
        data(){
            return{
                NotHomePage:false,
                quickLinks:false,
                iconRotate:'rotate-0',
                iconRotate1:'rotate-0',
                iconRotate2:'rotate-0',
                iconRotate3:'rotate-0',
                menubarOpen:false,
                windowWidth: window.innerWidth,
                currentRoute: '',
                subMenu1: false,
                subMenu2: false,
                subMenu3: false,
            }
        },
        methods:{
            isRouteActive(route) {
                // console.log(this.$route.fullPath);
                return this.$route.fullPath === route;
            },
            toggleMenuBar(){
                this.menubarOpen = !this.menubarOpen;
                this.closeAllSub();
            },
            updateWindowWidth() {
                this.windowWidth = window.innerWidth;
            },
            toggleSubMenu(num){
                if (this.windowWidth < 1024) {
                    if (num == '1') {
                    this.subMenu1= !this.subMenu1;
                    this.subMenu2= false;
                    this.subMenu3= false;
                    this.iconRotate1 = this.subMenu1 ? '-rotate-90' : 'rotate-0'
                    this.iconRotate2 = this.subMenu2 ? '-rotate-90' : 'rotate-0'
                    this.iconRotate3 = this.subMenu3 ? '-rotate-90' : 'rotate-0'
                } else if(num == '2'){
                    this.subMenu2= !this.subMenu2;
                    this.subMenu1= false;
                    this.subMenu3= false;
                    this.iconRotate1 = this.subMenu1 ? '-rotate-90' : 'rotate-0'
                    this.iconRotate2 = this.subMenu2 ? '-rotate-90' : 'rotate-0'
                    this.iconRotate3 = this.subMenu3 ? '-rotate-90' : 'rotate-0'
                }else{
                    this.subMenu3= !this.subMenu3;
                    this.subMenu2= false;
                    this.subMenu1= false;
                    this.iconRotate1 = this.subMenu1 ? '-rotate-90' : 'rotate-0'
                    this.iconRotate2 = this.subMenu2 ? '-rotate-90' : 'rotate-0'
                    this.iconRotate3 = this.subMenu3 ? '-rotate-90' : 'rotate-0'
                }
                }
            },
            closeAllSub(){
                this.subMenu3= false;
                this.subMenu2= false;
                this.subMenu1= false;
                this.iconRotate1 = this.subMenu1 ? '-rotate-90' : 'rotate-0'
                this.iconRotate2 = this.subMenu2 ? '-rotate-90' : 'rotate-0'
                this.iconRotate3 = this.subMenu3 ? '-rotate-90' : 'rotate-0'
            },
        },
        watch: {
            $route(to) {
            // Update currentRoute when the route changes
            this.currentRoute = to.name;
            },
        },
        beforeUnmount() {
            window.removeEventListener('resize', this.updateWindowWidth);
        },
        mounted() {
            // Add a listener to update windowWidth when the window is resized
            window.addEventListener('resize', this.updateWindowWidth);
        },
    }
</script>

<style scoped>
@media (max-width: 797.999999999999999px){
    .resposive-icon{
        display: block;
        margin-left: auto;
    }
    .ul-menu{
        position: absolute;
        top: 90px;
        left: 0;
        z-index: 9999999;
        @apply bg-primary-2 block w-full text-white
        /* display: none; */
    }
    .ul-menu li{
        @apply hover:bg-primary-3
    }

    .sub-menu{
        @apply w-full relative top-2
    }
    .sub-menu li{
        @apply w-full static 
    }
    .menu-item{
        @apply pt-2 font-semibold
    }
    .active2 {
        @apply bg-primary-2 text-white
    }   
}
</style>