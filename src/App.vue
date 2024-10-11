<template>
  <body class="container-xl">
    <section>
      <header class="flex flex-col items-center justify-center max-md:flex-row">
        <div class="bg-[#F3F5F7] min-h-6 w-full">
          <div
            class="flex items-center justify-between max-w-7xl mx-auto text-sm min-h-6"
          >
            <nav>
              <ul class="max-xl:ml-2 flex gap-7 cursor-pointer max-lg:text-xs">
                <li class="hover:text-[#002D79]">О компании</li>
                <li class="hover:text-[#002D79]">Оплата и доставка</li>
                <li class="hover:text-[#002D79]">Магазины</li>
                <li class="hover:text-[#002D79]">Контакты</li>
              </ul>
            </nav>
            <div
              class="bg-[#E8ECF0] min-h-6 flex hover:bg-[#E0E7EE] max-xl:mr-2"
            >
              <RouterLink class="flex items-center gap-1 mx-2" to="/Profile"
                ><img
                  class="w-4 h-4"
                  src="./assets/images/user.svg"
                  alt=""
                /><span class="text-xs text-[#213F74]"
                  >Личный кабинет</span
                ></RouterLink
              >
            </div>
          </div>
        </div>
        <div class="w-full min-h-24">
          <div class="flex items-center justify-between max-w-7xl min-h-24">
            <img
              class="w-32 h-20 max-xl:ml-2 max-xl:w-28 max-xl:h-16 max-lg:w-24 max-xl:h-14"
              src="./assets/images/logo.png"
              alt="Logo"
            />
            <div
              class="relative w-[55%] flex items-center justify-center max-lg:w-[40%]"
            >
              <input
                type="text"
                placeholder="Поиск по сайту..."
                class="w-[100%] h-12 border-2 border-[#E5E9EC] rounded-3xl bg-[#F3F5F7] px-5 max-lg:h-10"
              />
              <img
                class="w-6 h-6 absolute right-4 max-lg:right-16"
                src="./assets/images/search.svg"
                alt=""
              />
            </div>
            <div class="flex flex-col items-end">
              <a
                class="text-[#213F74] text-xl max-xl:text-base max-lg:text-sm"
                href="tel:+79999999999"
                ><b>+7 999 999-99-99</b></a
              >
              <p
                class="max-xl:text-xs max-lg:text-[10px] max-xl:before:w-1 max-xl:before:h-1 relative text-sm before:content-[''] before:w-2 before:h-2 before:bg-[#00DE59] before:absolute before:top-[6px] before:left-[-12px] before:rounded-full max-xl:before:left-[-5px]"
              >
                Звоните с <time datetime="8:10">8:10</time> до
                <time datetime="18:10">18:10</time>
              </p>
            </div>
            <button
              class="w-[13%] h-12 bg-[#213F74] text-white rounded-3xl text-sm hover:bg-[#002D79] max-xl:text-xs max-xl:mr-2 max-lg:h-10 max-lg:text-[10px]"
            >
              Заказать звонок
            </button>
          </div>
        </div>
        <div class="bg-[#213F74] min-h-12 w-full text-white max-lg:text-xs">
          <div class="flex items-center justify-between max-w-7xl mx-auto">
            <nav>
              <ul class="flex items-center gap-10 cursor-pointer max-lg:gap-6">
                <li
                  class="mr-18 bg-[#C6BCB2] min-h-12 w-36 flex items-center justify-center hover:bg-[#B0A69B] max-lg:w-28"
                >
                  <img
                    src="./assets/images/sale.svg"
                    class="mr-2"
                    alt="Sale"
                  />Акции
                </li>
                <li class="hover:text-[#DDD3CA]">Смесители</li>
                <li class="hover:text-[#DDD3CA]">Душевые системы</li>
                <li class="hover:text-[#DDD3CA]">Дешевые стойки</li>
                <li class="hover:text-[#DDD3CA]">Изливы</li>
                <li class="hover:text-[#DDD3CA]">Аксессуары</li>
              </ul>
            </nav>
            <div class="flex gap-3 mr-8">
              <div
                class="relative before:flex before:items-center before:justify-center before:content-['2'] before:text-[10px] before:w-3 before:h-3 before:bg-[#C6BCB2] before:absolute before:left-4 before:bottom-3 before:rounded-full max-lg:before:left-3"
              >
                <img
                  src="./assets/images/cart.svg"
                  alt="Cart"
                  class="max-lg:w-5 max-lg:h-5"
                />
              </div>
              <RouterLink class="hover:text-[#DDD3CA]" to="/Profile"
                >Корзина</RouterLink
              >
            </div>
          </div>
        </div>
      </header>
    </section>
  </body>
</template>
