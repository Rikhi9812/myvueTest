<template>
    <header class="
                    flex
                    relative
                    flex-row
                    flex-nowrap
                    justify-start
                    mx-auto
                    lg:mt-[3.5em]
                    md:mt-[3.5em]
                    sm:mt-[3.5em]
                    py-[3em]
                    px-0
                    items-align
                    p-[3em]
                    lg:h-[70%]
                    md:h-[100%]
                    sm:h-[100%]
                    w-[calc(100%-12em)]
                    items-center
                    " style="
                    font-family: 'Noto Sans JP', sans-serif;
                    ">

        <svg class="
        absolute
        w-full
        lg:h-[100%]
        md:h-[100%]
        sm:h-[100%]
        z-0
        ">
            <rect width="100%" height="100%" vector-effect="non-scaling-stroke" stroke-width="2em"
            fill="transparent"
            stroke="#20bf55"
            stroke-dasharray="500%"
                shape-rendering="crispEdges" class="animii"></rect>
        </svg>

        <div class="
                w-[60%]
                lg:ml-[9rem]
                md:ml-[3rem]
                sm:ml-[3rem]
                z-10
                ">
                <h1 class="
                font-[900]
                font-mono
                md:text-[1.5rem]
                sm:text-[1.5rem]
                lg:text-[2.7rem]
                text-slate-100
                            ">
                        こんにちは。みんな様
            </h1>
            <div class="
                font-mono
                py-5
                ">
                <h2 class="
                    text-[#20bf55]
                    uppercase
                    text-[2.5rem]
                    font-[900]
                    ">ポートフォリオ</h2>
                <p class="
                text-[1.5rem]
                font-[900]
                py-3
                ">経験は浅いですが言語について知識はたくさん持っています。様々言語の技術に興味を持ち、できるだけ身にスキルをつけるようにしています。</p>
            </div>
            <a class="
                text-center
                uppercase
                font-bold
                bg-[#4985fe]
                h-12
                w-[180px]
                mt-5
                px-7
                py-3
                text-[1.1rem]
                transition
                ease-in-out
                duration-500
                    hover:bg-[#20bf55]
                    " href="#">View my work</a>
        </div>

</header></template>

<style scoped>
.animii {
    animation: test 6s linear forwards;
}

@keyframes test {
    

    0% {
        stroke-dashoffset: 500%;
    }
    100% {
        stroke-dashoffset: 0%;
    }

    
    
}
</style>