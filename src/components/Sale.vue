<template>
  <section class="max-w-[1456px] mx-auto bg-white rounded-xl pt-10">
    <div class="w-[90%] flex flex-col justify-center items-center mx-auto">
      <div class="flex w-full justify-between items-center">
        <h3
          class="text-[#122952] text-5xl max-md:text-4xl max-[590px]:text-3xl"
        >
          Актуальные акции
        </h3>
        <button
          class="w-[13%] h-12 bg-[#213F74] text-white rounded-3xl text-sm hover:bg-[#002D79] max-[1090px]:w-[20%] max-[590px]:w-[40%]"
        >
          Все акции >
        </button>
      </div>
      <div
        class="w-full flex flex-wrap py-10 justify-between max-[1000px]:flex-wrap max-[1000px]:gap-y-14 max-[590px]:flex-nowrap max-[590px]:gap-x-4 max-[590px]:overflow-x-scroll max-[590px]:snap-mandatory"
      >
        <div
          class="flex flex-col w-[32%] gap-2 max-[1000px]:w-[49%] max-[590px]:w-[65%] max-[590px]:snap-start max-[590px]:shrink-0"
        >
          <img
            class="w-full mb-2"
            src="../assets/images/sale-img-1.jpg"
            alt=""
          />
          <div class="flex flex-col w-full gap-5">
            <span class="text-[#7F8295] text-sm"
              >Акция действует до 11.11.2023
            </span>
            <h4 class="text-[#122952] text-lg">Скидка 15% на все смесители</h4>
            <p class="text-[#4D526C] text-sm">
              Предлагаем смесители для кухни, ванны, душа по низким ценам! Акция
              действует только на товары в наличии.
            </p>
            <RouterLink class="text-[#213F74] text-base" to="/Profile"
              ><span class="border-b-2 border-[#213F74] py-1">Подробнее</span> >
            </RouterLink>
          </div>
        </div>
        <div
          class="flex flex-col w-[32%] gap-2 max-[1000px]:w-[49%] max-[590px]:w-[65%] max-[590px]:snap-start max-[590px]:shrink-0"
        >
          <img class="w-full" src="../assets/images/sale-img-2.jpg" alt="" />
          <div class="flex flex-col w-full gap-5">
            <span class="text-[#7F8295] text-sm"
              >Акция действует до 30.11.2023
            </span>
            <h4 class="text-[#122952] text-lg">
              Осенняя распродажа сантехнических аксессуаров для ванной комнаты
            </h4>
            <p class="text-[#4D526C] text-sm">
              Большой выбор аксессуаров для ванной со скидками до 40%. Товары
              со скидкой отмечены в каталоге красной табличкой SALE
            </p>
            <RouterLink class="text-[#213F74] text-base" to="/Profile"
              ><span class="border-b-2 border-[#213F74] py-1">Подробнее</span> >
            </RouterLink>
          </div>
        </div>
        <div
          class="flex flex-col w-[32%] gap-2 max-[1000px]:w-[49%] max-[590px]:w-[65%] max-[590px]:snap-start max-[590px]:shrink-0"
        >
          <img class="w-full" src="../assets/images/sale-img-3.jpg" alt="" />
          <div class="flex flex-col w-full gap-5">
            <span class="text-[#7F8295] text-sm"
              >Акция действует до 31.12.2023
            </span>
            <h4 class="text-[#122952] text-lg">
              Душевые системы по выгодным ценам!
            </h4>
            <p class="text-[#4D526C] text-sm">
              Душевые системы, стойки и гарнитуры по выгодным ценам. Доставка
              в любой регион России. Гарантия от производителя.
            </p>
            <RouterLink class="text-[#213F74] text-base" to="/Profile"
              ><span class="border-b-2 border-[#213F74] py-1">Подробнее</span> >
            </RouterLink>
          </div>
        </div>
        <div
          class="hidden max-[1000px]:flex flex-col w-[32%] gap-2 max-[1000px]:w-[49%] max-[590px]:w-[65%] max-[590px]:snap-start max-[590px]:shrink-0"
        >
          <img class="w-full" src="../assets/images/sale-img-1.jpg" alt="" />
          <div class="flex flex-col w-full gap-5">
            <span class="text-[#7F8295] text-sm"
              >Акция действует до 31.12.2023
            </span>
            <h4 class="text-[#122952] text-lg">
              Душевые системы по выгодным ценам!
            </h4>
            <p class="text-[#4D526C] text-sm">
              Душевые системы, стойки и гарнитуры по выгодным ценам. Доставка
              в любой регион России. Гарантия от производителя.
            </p>
            <RouterLink class="text-[#213F74] text-base" to="/Profile"
              ><span class="border-b-2 border-[#213F74] py-1">Подробнее</span>
              >
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
