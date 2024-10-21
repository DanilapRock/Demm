<template>
  <section
    class="max-w-[1600px] h-[469px] relative my-10 mx-auto text-white bg-[url('./src/assets/images/feedback-bg.jpg')] bg-cover bg-center"
  >
    <div
      class="absolute bottom-0 w-full h-full bg-gradient-to-b from-[#2C3546]/20 to-[#1F2C49]/90 rounded-xl"
    >
      <div class="max-w-7xl mx-auto">
        <div
          class="w-[50%] flex flex-col gap-8 ml-6 max-[1000px]:w-[70%] max-[590px]:w-[90%] max-[1000px]:gap-6"
        >
          <div
            class="w-[10%] h-16 bg-[#C6BCB2] rounded-b-xl flex items-center justify-center"
          >
            <img src="../assets/images/logo-mini.svg" alt="Logo" />
          </div>
          <h3 class="text-5xl max-[1000px]:text-4xl max-[590px]:text-2xl">
            Остались вопросы?
          </h3>
          <p class="text-base max-[1000px]:text-sm max-[590px]:text-xs">
            Заполните форму, мы свяжемся с вами в ближайшее время, ответим на
            все вопросы и предоставим консультацию по ассортименту.
          </p>
          <form action="" class="flex flex-col gap-8 max-[1000px]:gap-6">
            <div class="flex gap-4 max-[590px]:flex-col">
              <div
                class="w-[35%] border-b-2 border-white/70 max-[590px]:w-[90%]"
              >
                <input
                  class="bg-transparent placeholder:text-white/70 mb-2 focus:placeholder:text-white/100 outline-none"
                  type="text"
                  placeholder="Ваше имя"
                />
              </div>
              <div
                class="w-[35%] border-b-2 border-white/70 max-[590px]:w-[90%]"
              >
                <input
                  class="bg-transparent placeholder:text-white/70 mb-2 focus:placeholder:text-white/100 outline-none"
                  type="tel"
                  placeholder="Номер телефона"
                />
              </div>
            </div>
            <div>
              <input
                class="mr-2 relative hidden in"
                type="checkbox"
                id="privacy-policy"
              />

              <label
                class="text-white opacity-70 text-xs relative in:checked:before:content-['✓'] before:absolute before:left-[-20px] before:top-0 before:w-4 before:h-4 before:text-white before:bg-transparent before:border-2 before:rounded"
                for="privacy-policy"
                >Я согласен(а) с Политикой конфиденциальности.</label
              >
            </div>
            <button
              class="w-[30%] h-12 bg-[#C6BCB2] text-white rounded-3xl text-sm hover:bg-[#002D79] max-[590px]:w-[50%]"
            >
              Оставить заявку
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
