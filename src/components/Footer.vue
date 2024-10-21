<template>
  <section class="max-w-7xl mx-auto">
    <div
      class="flex justify-between py-14 max-xl:mx-6 max-md:flex-col max-md:items-center max-md:gap-10"
    >
      <div
        class="flex flex-col gap-8 max-lg:w-[30%] max-md:items-start max-md:w-full"
      >
        <img
          class="w-[70%] max-md:w-[30%]"
          src="../assets/images/logo.png"
          alt="Logo"
        />
        <div
          class="flex items-center justify-center gap-2 bg-[#E5E9EC] hover:bg-[#E7EDF5] w-80% rounded-[50px] h-14 px-6 max-lg:hidden"
        >
          <img src="../assets/images/whatsapp.svg" alt="WhatsApp" />
          <a href="https://wa.me/+79999999999" class="text-[#213F74] text-md"
            >Написать в WhatsApp</a
          >
        </div>
      </div>
      <div
        class="flex justify-between gap-10 w-[70%] max-lg:flex-col max-lg:items-end max-md:items-start max-md:w-full"
      >
        <div
          class="flex w-[50%] justify-between max-lg:w-[90%] max-sm:w-full max-sm:gap-10"
        >
          <div class="flex flex-col gap-6 justify-start w-full">
            <h4 class="text-[#4D526C]/50 text-xl max-sm:text-lg">КАТАЛОГ</h4>
            <nav class="text-md max-sm:text-sm text-[#00072D]/80">
              <ul class="flex flex-col gap-2">
                <li class="hover:text-[#002D79]">Смесители</li>
                <li class="hover:text-[#002D79]">Душевые системы</li>
                <li class="hover:text-[#002D79]">Душевые стойки</li>
                <li class="hover:text-[#002D79]">Изливы</li>
                <li class="hover:text-[#002D79]">Аксессуары</li>
              </ul>
            </nav>
          </div>
          <div class="flex flex-col gap-6 w-full">
            <h4 class="text-[#4D526C]/50 text-xl max-sm:text-lg">
              ДЛЯ КЛИЕНТА
            </h4>
            <nav class="text-md max-sm:text-sm text-[#00072D]/80">
              <ul class="flex flex-col gap-2">
                <li class="hover:text-[#002D79]">Акции</li>
                <li class="hover:text-[#002D79]">О компании</li>
                <li class="hover:text-[#002D79]">Оплата и доставка</li>
                <li class="hover:text-[#002D79]">Магазины</li>
                <li class="hover:text-[#002D79]">Контакты</li>
              </ul>
            </nav>
          </div>
        </div>
        <div
          class="flex flex-col gap-4 w-[50%] max-lg:w-[90%] max-lg:flex-col-reverse max-lg:gap-1 max-md:flex-col max-sm:w-full"
        >
          <form class="relative max-md:mb-8" action="">
            <h3
              class="text-[#122952] text-lg mb-4 max-lg:w-[70%] max-sm:w-full max-sm:text-md"
            >
              Узнавайте об акциях и новостях первыми, подпишитесь на рассылку
            </h3>
            <input
              class="relative w-full h-14 border-2 border-[#E5E9EC] rounded-[50px] bg-[#F3F5F7] placeholder:text-md"
              type="email"
              placeholder="Электронная почта"
            />
            <button
              class="absolute bg-[#213F74] w-[40%] max-lg:w-[30%] max-sm:w-14 h-14 text-white text-md rounded-[50px] right-[0] hover:bg-[#002D79]"
            >
              <span class="max-sm:hidden">Подписаться</span> >
            </button>
          </form>
          <div
            class="flex flex-col mb-8 max-lg:flex-row max-lg:w-full max-sm:flex-col max-sm:gap-6"
          >
            <div class="flex flex-col max-lg:w-[60%] max-sm:w-full">
              <a
                class="text-[#213F74] text-2xl max-w-max"
                href="tel:+79999999999"
                ><b>+7 999 999-99-99</b></a
              >
              <div
                class="flex gap-2 items-center max-w-max max-lg:w-[70%] max-sm:w-full"
              >
                <img src="../assets/images/location.svg" alt="Location" />
                <address class="text-[#213F74]/80">
                  г. Новосибирск, улица, дом, офис
                </address>
              </div>
            </div>
            <div
              class="hidden items-center justify-center gap-2 bg-[#E5E9EC] hover:bg-[#E7EDF5] w-[42%] max-sm:w-[67%] rounded-[50px] h-14 px-10 max-lg:flex"
            >
              <img src="../assets/images/whatsapp.svg" alt="WhatsApp" />
              <a
                href="https://wa.me/+79999999999"
                class="text-[#213F74] text-lg max-lg:text-sm text-nowrap max-md:text-lg max-sm:text-[100%]"
                >Написать в WhatsApp</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="max-w-[1600px] mx-auto bg-[#F3F5F7]">
    <div
      class="flex justify-center items-center w-full gap-28 text-md py-2 max-lg:text-sm max-md:flex-col-reverse max-md:items-start max-md:gap-4 max-md:pl-6 max-sm:text-xs max-sm:gap-2"
    >
      <p class="text-[#7F8295]">© DEMM RUBINETTERIA 2023</p>
      <nav class="text-[#00072D]/80">
        <ul class="flex gap-28 max-md:flex-col max-md:gap-4 max-sm:gap-2">
          <li class="hover:text-[#002D79]">Договор оферты</li>
          <li class="hover:text-[#002D79]">Пользовательское соглашение</li>
        </ul>
      </nav>
    </div>
  </section>
</template>
