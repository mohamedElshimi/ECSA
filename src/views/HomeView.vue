<template>
  <div>
    <section class="h-screen w-full img-overlay relative">
      <div class="w-full h-full relative" v-if="banner == 'banner1'">
        <img src="../assets/Images/banner1.jpg" class="h-full w-full" alt="">
        <button class="fa-solid fa-chevron-down ms-2 transition-all duration-700 absolute z-30 left-10 text-3xl rotate-90 text-white top-1/2 -translate-y-1/2" @click="prevSlide"></button>
        <button class="fa-solid fa-chevron-down ms-2 transition-all duration-700 absolute z-30 right-10 text-3xl -rotate-90 text-white top-1/2 -translate-y-1/2" @click="nextSlide"></button>
        <div class="absolute text-white z-20 qoute-out text-center" :class="{'qoute-animat' : text==='text1'}">
          <h2 class="lg:text-4xl md:text-2xl text-xl font-semibold">Welcome to</h2>
          <h1 class="lg:text-5xl md:text-3xl text-2xl font-semibold">European College</h1>
        </div>
      </div>
      <div class="w-full h-full relative" v-if="banner == 'banner2'">
        <button class="fa-solid fa-chevron-down ms-2 transition-all duration-700 absolute z-30 left-10 text-3xl rotate-90 text-white top-1/2 -translate-y-1/2" @click="prevSlide"></button>
        <button class="fa-solid fa-chevron-down ms-2 transition-all duration-700 absolute z-30 right-10 text-3xl -rotate-90 text-white top-1/2 -translate-y-1/2" @click="nextSlide"></button>
        <img src="../assets/Images/banner2.jpg" class="h-full w-full" alt="">
        <div class="absolute text-white z-20 qoute-out text-center" :class="{'qoute-animat' : text==='text2'}">
          <h2 class="lg:text-4xl md:text-2xl text-xl font-semibold">Welcome to</h2>
          <h1 class="lg:text-5xl md:text-3xl text-2xl font-semibold">European College</h1>
        </div>
      </div>
      <div class="w-full h-full relative" v-if="banner == 'banner3'">
        <button class="fa-solid fa-chevron-down ms-2 transition-all duration-700 absolute z-30 left-10 text-3xl rotate-90 text-white top-1/2 -translate-y-1/2" @click="prevSlide"></button>
        <button class="fa-solid fa-chevron-down ms-2 transition-all duration-700 absolute z-30 right-10 text-3xl -rotate-90 text-white top-1/2 -translate-y-1/2" @click="nextSlide"></button>
        <img src="../assets/Images/banner3.jpg" class="h-full w-full" alt="">
        <div class="absolute text-white z-20 qoute-out text-center" :class="{'qoute-animat' : text==='text3'}">
          <h2 class="lg:text-4xl md:text-2xl text-xl font-semibold">Welcome to</h2>
          <h1 class="lg:text-5xl md:text-3xl text-2xl font-semibold">European College</h1>
        </div>
      </div>
    </section>
    <section class="flex flex-wrap lg:w-10/12 w-11/12 mx-auto relative z-30 -mt-11 mb-10 card">
      <div class="md:w-4/12 w-full">
        <div class="w-full bg-primary-1 flex py-5 px-10 text-white items-center">
          <i class="fa-solid fa-building-columns text-2xl"></i>
          <p class="ms-3 lg:text-2xl md:text-xl text-lg font-semibold">About ECSA</p>
        </div>
        <div>
          <img src="../assets/Images/about-1-1.jpg" class="w-full h-full" alt="about">
        </div>
      </div>
      <div class="md:w-4/12 w-full">
        <div class="w-full bg-primary-2 flex py-5 px-10 text-white items-center">
          <i class="fa-solid fa-graduation-cap text-2xl"></i>
          <p class="ms-3 lg:text-2xl md:text-xl text-lg font-semibold">Scholarship</p>
        </div>
        <div>
          <img src="../assets/Images/scholarships2-1.png" alt="scholarships">
        </div>
      </div>
      <div class="md:w-4/12 w-full">
        <div class="w-full bg-primary-3 flex py-5 px-10 text-white items-center">
          <i class="fa-solid fa-book-open text-2xl"></i>
          <p class="ms-3 lg:text-2xl md:text-xl text-lg font-semibold">Digital Library</p>
        </div>
        <div>
          <img src="../assets/Images/digital-library-1.png" alt="digital-library">
        </div>
      </div>
    </section>
    <section class="img2-overlay w-full lg:h-[400px] h-[1140px] flex  items-end lg:justify-end justify-center" :class="{'img2-overlay2':windowWidth<1024}">
      <div class="text-white relative lg:-translate-x-1/4 -translate-y-1/4 text-center md:p-0 px-5">
        <h2 class="lg:text-4xl md:text-3xl text-2xl font-bold">Apply for Admission</h2>
        <h3 class="md:text-lg text-base my-3 text-gray-400">Applications are now open</h3>
        <p class="text-gray-400">We don’t just give students an education and experiences <br> that set them up for success in a career. We help them <br> succeed in their career—to discover a field they’re <br> passionate about and dare to lead it</p>
        <button class="prim1-btn mt-5 font-semibold">Apply Now</button>
      </div>
    </section>
    <section>
      <div class="lg:w-10/12 w-11/12 mx-auto my-10">
        <h2 class="text-4xl text-primary-3 border-b-4 border-primary-3 pb-2">ECSA Programs</h2>
        <div class="flex flex-wrap mt-5">
          <div class="lg:w-3/12 md:w-6/12 w-full px-3 pt-3">
            <div class="card border-2 border-primary-1 pb-0">
              <img src="../assets/Images/infection-control.jpg" class="card-image" alt="Infection Control">
              <h2 class="card-title">Master in Infection Control</h2>
              <div class="flex w-full">
                <button class="prim1-btn w-6/12">Details</button>
                <hr class="rotate-90 w-[2px]">
                <button class="prim1-btn w-6/12">Register</button>
              </div>
            </div>
          </div>
          <div class="lg:w-3/12 md:w-6/12 w-full px-3 pt-3">
            <div class="card border-2 border-primary-1 pb-0">
              <img src="../assets/Images/total-quality-management.jpg" class="card-image" alt="Quality Management">
              <h2 class="card-title">Doctorate in Total Quality Management</h2>
              <div class="flex w-full">
                <button class="prim1-btn w-6/12">Details</button>
                <hr class="rotate-90 w-[2px]">
                <button class="prim1-btn w-6/12">Register</button>
              </div>
            </div>
          </div>
          <div class="lg:w-3/12 md:w-6/12 w-full px-3 pt-3">
            <div class="card border-2 border-primary-1 pb-0">
              <img src="../assets/Images/Nutrition1.jpg" class="card-image" alt="Nutrition">
              <h2 class="card-title">Master of Applied Nutrition & Dietetics</h2>
              <div class="flex w-full">
                <button class="prim1-btn w-6/12">Details</button>
                <hr class="rotate-90 w-[2px]">
                <button class="prim1-btn w-6/12">Register</button>
              </div>
            </div>
          </div>
          <div class="lg:w-3/12 md:w-6/12 w-full px-3 pt-3">
            <div class="card border-2 border-primary-1 pb-0">
              <img src="../assets/Images/hospital-management.jpg" class="card-image" alt="Hospital Management">
              <h2 class="card-title">Master in Hospital Management</h2>
              <div class="flex w-full">
                <button class="prim1-btn w-6/12">Details</button>
                <hr class="rotate-90 w-[2px]">
                <button class="prim1-btn w-6/12">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="img3-overlay h-screen flex flex-wrap items-center">
      <div class="w-10/12 mx-auto relative z-20 text-white">
        <div class="lg:w-6/12 md:w-8/12 w-10/12 lg:m-0 mx-auto text-center">
          <h2 class="lg:text-3xl font-bold md:text-2xl text-xl">Searching for Certificate/ Authentication</h2>
          <h3 class="lg:text-2xl md:text-xl text-lg font-semibold my-5 text-[#F6D50A]">Registration Verification</h3>
          <p>This fraud prevention system can be used to verify ECSA credentials held by candidates world-wide. The Credential Identification Code can be found on all certificates issued by ECSA. Upon entering the Identification Code or your email, authentication details relating to the holder of the credentials will be presented.</p>
        </div>
        <input type="search" placeholder="Search..." class="w-full mt-5 text-black input-field">
      </div>
    </section>
    <section class="h-[100px] flex flex-wrap">
      <div class="w-8/12 bg-secondry-2 relative overflow-hidden">
        <div class="w-10/12 mx-auto">
        <button class="fa-solid fa-chevron-down ms-2 transition-all duration-700 absolute z-30 left-10 text-3xl rotate-90 text-white top-1/2 -translate-y-1/2" @click="prevQoute"></button>
        <p class="absolute -right-[100%] top-1/2 -translate-y-1/2 text-white font-semibold transition-all duration-500" :class="{'foot-qoute-in':footQoute == 'q1'}">Build your Skills</p>
        <p class="absolute -right-[100%] top-1/2 -translate-y-1/2 text-white font-semibold transition-all duration-500" :class="{'foot-qoute-in':footQoute == 'q2'}">Improve your Experience</p>
        <p class="absolute -right-[100%] top-1/2 -translate-y-1/2 text-white font-semibold transition-all duration-500" :class="{'foot-qoute-in':footQoute == 'q3'}">Develop your Career</p>
        <button class="fa-solid fa-chevron-down ms-2 transition-all duration-700 absolute z-30 right-10 text-3xl -rotate-90 text-white top-1/2 -translate-y-1/2" @click="nextQoute"></button>
        </div>
      </div>
      <button class="w-4/12 bg-primary-1 text-xl font-semibold text-white">Apply to ECSA</button>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'HomeView',
    data(){
      return{
        banner:'banner1',
        text:'text1',
        inter:'',
        windowWidth: window.innerWidth,
        footQoute : 'q1'
      }
    },
    created(){
      this.makeInter()
    },
    methods:{
      makeAnimate(num){
        setTimeout(()=>{
          this.text = `text${num}`
        },100)
      },
      makeInter(){
        this.inter = setInterval(()=>{
        if (this.banner == 'banner1') {
          this.banner = 'banner2'
          this.makeAnimate(2)
        } else if(this.banner == 'banner2'){
          this.banner = 'banner3'
          this.makeAnimate(3)
        }else{
          this.banner = 'banner1'
          this.makeAnimate(1)
        }
      },5000)
      },
      nextSlide(){
        clearInterval(this.inter)
        if (this.banner == 'banner1') {
          this.banner = 'banner2'
          this.makeAnimate(2)
        } else if(this.banner == 'banner2'){
          this.banner = 'banner3'
          this.makeAnimate(3)
        }else{
          this.banner = 'banner1'
          this.makeAnimate(1)
        }
        setTimeout(this.makeInter,5000)
      },
      updateWindowWidth() {
          this.windowWidth = window.innerWidth;
          console.log(this.windowWidth);
      },
      prevSlide(){
        clearInterval(this.inter)
        if (this.banner == 'banner3') {
          this.banner = 'banner2'
          this.makeAnimate(2)
        } else if(this.banner == 'banner2'){
          this.banner = 'banner1'
          this.makeAnimate(3)
        }else{
          this.banner = 'banner3'
          this.makeAnimate(1)
        }
        setTimeout(this.makeInter,5000)
      },
      prevQoute(){
        if (this.footQoute == 'q3') {
          this.footQoute = 'q2'
        } else if(this.footQoute == 'q2'){
          this.footQoute = 'q1'
        }else{
          this.footQoute = 'q3'
        }
      },
      nextQoute(){
        if (this.footQoute == 'q1') {
          this.footQoute = 'q2'
        } else if(this.footQoute == 'q2'){
          this.footQoute = 'q3'
        }else{
          this.footQoute = 'q1'
        }
      }
    },
    beforeUnmount() {
          window.removeEventListener('resize', this.updateWindowWidth);
          console.log(this.windowWidth);
      },
      mounted() {
          window.addEventListener('resize', this.updateWindowWidth);
          console.log(this.windowWidth);
      },
  }
</script>

<style scoped>
.img-overlay::before{
  content: '';
  width: 100%;
  height: 100%;
  background: #0000009a;
  position: absolute;
  left: 0;
  z-index: 10;
}
.qoute-out{
  @apply -translate-x-full top-1/2 -translate-y-1/2 transition-all duration-700 delay-[3500]
}
.qoute-animat{
  @apply -translate-x-1/2 left-1/2 transition-all duration-700 delay-[3500]
}
.img2-overlay{
  background: url(../assets/Images/Addmission.jpg) center;
  background-size: 100% 100%;
}
.img2-overlay2{
  background: url(../assets/Images/Addmission2.jpg) center;
  background-size: 100% 100%;
}
.img3-overlay{
  background: url(../assets/Images/banner1.jpg) center;
  background-size: 100% 100%;  
  position: relative;
}
.img3-overlay::before{
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  z-index: 12;
  background-color: #202052bd;
}
.foot-qoute-in{
  @apply right-1/2 translate-x-1/2 transition-all duration-500
}
</style>