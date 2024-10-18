<template>
  <section
    class="max-w-[1600px] h-[600px] max-md:h-[541px] max-[360px]:h-[562px] mx-auto"
  >
    <div
      class="relative flex flex-col text-white h-[600px] max-md:h-[541px] max-[360px]:h-[562px] w-full"
    >
      <Splide :options="{ arrows: false }">
        <SplideSlide>
          <img
            class="h-[600px] max-md:h-[541px] max-[360px]:h-[562px] object-cover object-right"
            src="../assets/images/hero-slide-1.jpg"
            alt="Hero Slide 1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            class="h-[600px] max-md:h-[541px] max-[360px]:h-[562px] object-cover object-right"
            src="../assets/images/hero-slide-2.jpg"
            alt="Hero Slide 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            class="h-[600px] max-md:h-[541px] max-[360px]:h-[562px] object-cover object-right"
            src="../assets/images/hero-slide-3.jpg"
            alt="Hero Slide 3"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            class="h-[600px] max-md:h-[541px] max-[360px]:h-[562px] object-cover object-right"
            src="../assets/images/hero-slide-4.jpg"
            alt="Hero Slide 4"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            class="h-[600px] max-md:h-[541px] max-[360px]:h-[562px] object-cover object-right"
            src="../assets/images/hero-slide-5.jpg"
            alt="Hero Slide 5"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            class="h-[600px] max-md:h-[541px] max-[360px]:h-[562px] object-cover object-right"
            src="../assets/images/hero-slide-6.jpg"
            alt="Hero Slide 6"
          />
        </SplideSlide>
      </Splide>
      <div
        class="flex flex-col gap-6 absolute bottom-20 left-[15%] max-[880px]:left-6 max-sm:left-4"
      >
        <RouterLink class="text-[#C6BCB2]" to="/catalog"
          >Перейти в каталог ></RouterLink
        >
        <h1
          class="text-6xl max-md:text-5xl max-[590px]:text-4xl max-[450px]:text-3xl"
        >
          Изысканные смесители <br />
          для вашего интерьера
        </h1>
        <p class="text-sm w-[60%] max-md:w-full max-[450px]:text-xs">
          Гарантируем высочайшую безопасность и надёжность в соответствии
          с международными стандартами качества.
        </p>
      </div>
    </div>
  </section>
</template>
