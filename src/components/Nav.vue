<template>
    <div class="
    fixed
    h-full
    w-24
    border-r-2
    border-slate-200
    top-0
    left-0
    px-4
    py-0
    bg-black
    z-20
    tracking-tight
    " id="head">
        <h1 class="
        my-12
        font-mono
        font-bold
        leading-tight
        text-base
        ">
            <a class="
            w-full
            overflow-hidden
            no-underline
            text-[#20bf55]
            tracking-[-1px]
            text-[1.5rem]
            " 
            href="#">Vue<span class="
            text-pink-500
            ">Js</span>
        </a>
        </h1>
        <div class="
        origin-center
        -rotate-90
        relative
        mt-12
        ">
            <ul class="
            flex
            absolute
            p-0
            m-0
            right-0
            top-1/2
            list-none
            items-center
            -translate-y-1/2
            no-underline
            ">
                <li class="
                flex
                items-center
                after:content-['·']
                after:text-[#20bf55]
                after:mx-[0.5em]
                after:my-[0]
                after:text-[1.5rem]              
                "><a class="
                    no-underline
                    transition
                    ease-in-out
                    duration-500
                    hover:text-[#20bf55]
                    block
                    mx-4
                    my-0
                    relative
                    whitespace-nowrap
                    font-mono
                    tracking-[.5px]
                    text-[1em]
                    text-[#4985fe]
                    capitalize
                    after:content-['']
                    after:absolute
                    after:block
                    after:h-[2px]
                    after:w-[7rem]
                    after:bg-[#20bf55]
                    after:top-[3.7rem]
                    "
                    :class="getin ? 'after:block' : 'after:hidden'"
                     href="#getintouch">Get In Touch</a></li>
                <li class="
                flex
                items-center
                after:content-['·']
                after:text-[#20bf55]
                after:mx-[0.5em]
                after:my-[0]
                after:text-[1.5rem] 
                "><a class="
                    no-underline
                    transition
                    ease-in-out
                    duration-500
                    hover:text-[#20bf55]
                    block
                    mx-4
                    my-0
                    relative
                    whitespace-nowrap
                    font-mono
                    tracking-[.5px]
                    text-[1em]
                    text-[#4985fe]
                    after:block
                    after:content-['']
                    after:absolute
                    after:h-[2px]
                    after:w-[5rem]
                    after:bg-[#20bf55]
                    after:top-[3.7rem]
                    "
                    :class="aboutme ? 'after:block' : 'after:hidden'"
                     href="#aboutme">About Me</a>
                    </li>
                <li class="
                flex
                items-center
                "><a class="
                    no-underline
                    transition
                    ease-in-out
                    duration-500
                    hover:text-[#20bf55]
                    block
                    mx-4
                    my-0
                    relative
                    whitespace-nowrap
                    font-mono
                    tracking-[.5px]
                    text-[1em]
                    text-[#4985fe]
                    after:block
                    after:content-['']
                    after:absolute
                    after:h-[2px]
                    after:w-[7.5rem]
                    after:bg-[#20bf55]
                    after:top-[3.7rem]
                    "
                    :class="work ? 'after:block' : 'after:hidden'"
                     href="#selectedwork">Selected Work</a></li>
            </ul>
        </div>
    </div>
</template>


<script>

export default {
    data() {
        return {
            aboutme: false,
            getin: false,
            work: false
        };
    },
       
   created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll (event) {
      if(window.scrollY >= 400 && window.scrollY < 4283.63623046875) {
        this.work= true;
      } else{
        this.work= false
      }


      if(window.scrollY >= 4200 && window.scrollY < 5162.72705078125) {
        this.aboutme= true;
      } else{
        this.aboutme= false
      }

      if(window.scrollY >= 5100.72705078125 && window.scrollY < 6049.0908203125) {
        this.getin= true;
      } else{
        this.getin= false
      }


      if(window.scrollY > 0) {
        console.log(window.scrollY)
    }
}
  }
}

</script>


