<template>
    <div>
        <div class="bg-slate-800">
            <nav class="
                            container
                            px-6
                            py-8
                            mx-auto
                            md:flex md:justify-between md:items-center
                          ">
                <div class="flex items-center justify-between">
                    <router-link to="/" class="
                                text-xl
                                font-bold
                                text-green-500
                                text-2xl
                                hover:text-blue-400
                                z-0
                              ">Vue<span class="text-pink-500">JS</span>
                    </router-link>
                    <!-- Mobile menu button -->
                    <div @click="myOpen()" :class="open ? 'flex' : 'hidden'" class="md:hidden">
                        <button type="button" class="
                                  text-slate-100
                                ">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path fill-rule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                </path>
                            </svg>
                        </button>
                    </div>

                    <div @click="myClose()" :class="close ? 'flex' : 'hidden'" class="md:hidden">
                        <button type="button" class="text-slate-100">
                            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path
                                    d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z">
                                </path>
                            </svg>
                        </button>

                    </div>
                </div>


                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <ul :class="showMenu ? 'flex' : 'hidden'" class="
                              flex-col
                              mt-8
                              space-y-4
                              md:flex
                              md:space-y-0
                              md:flex-row
                              md:items-center
                              md:space-x-10
                              md:mt-0
                              z-10
                            ">
                    <li class="text-sm font-normal text-slate-100 hover:text-green-500">
                        Home
                    </li>
                    <li class="text-sm font-normal text-slate-100 hover:text-green-500">
                        About Me
                    </li>
                    <li class="text-sm font-normal text-slate-100 hover:text-green-500">
                        Contact Me
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showMenu: false,
            close: false,
            open: true
        };
    },
    methods: {
        myClose: function () {
            this.showMenu = false,
                this.close = false,
                this.open = true
        },
        myOpen: function () {
            this.showMenu = true,
                this.close = true,
                this.open = false
        }
    }
};
</script>
  
  


