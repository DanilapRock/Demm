<template>
  <body class="container-xl">
    <header
      class="flex flex-col items-center justify-center max-md:flex-row max-md:justify-center max-md:gap-4 max-[360px]:h-14"
    >
      <div class="bg-[#F3F5F7] min-h-6 w-full max-md:hidden">
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
          <div class="bg-[#E8ECF0] min-h-6 flex hover:bg-[#E0E7EE] max-xl:mr-2">
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
        <div
          class="flex items-center justify-between max-w-7xl min-h-24 mx-auto max-md:gap-4"
        >
          <img
            class="w-32 h-20 max-xl:ml-2 max-xl:w-28 max-lg:w-24 max-xl:h-14 max-[360px]:w-26 max-[360px]:h-12"
            src="./assets/images/logo.png"
            alt="Logo"
          />
          <div
            class="relative w-[55%] flex items-center justify-center max-lg:w-[40%] max-md:w-[100%]"
          >
            <input
              type="text"
              placeholder="Поиск по сайту..."
              class="w-[100%] h-12 border-2 border-[#E5E9EC] rounded-3xl bg-[#F3F5F7] px-5 placeholder:pr-5 max-[520px]:hidden max-[360px]:hidden"
            />
            <div
              class="flex items-center justify-center absolute right-4 max-[520px]:bg-[#F3F5F7] max-[520px]:w-12 max-[520px]:h-12 max-[360px]:w-10 max-[360px]:h-10 max-[520px]:rounded-full max-[520px]:right-0"
            >
              <img
                class="w-6 h-6 max-[360px]:w-5 max-[360px]:h-5"
                src="./assets/images/search.svg"
                alt=""
              />
            </div>
          </div>
          <div class="flex flex-col items-end max-md:hidden">
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
            class="w-[13%] h-12 bg-[#213F74] text-white rounded-3xl text-sm hover:bg-[#002D79] max-xl:text-xs max-xl:mr-2 max-lg:h-10 max-lg:text-[10px] max-md:hidden"
          >
            Заказать звонок
          </button>
        </div>
      </div>
      <div
        class="bg-[#213F74] min-h-12 w-full text-white max-lg:text-xs max-md:hidden"
      >
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
      <div
        class="hidden max-md:flex justify-center items-center gap-4 min-h-24 max-md:mr-2"
      >
        <div
          class="flex justify-center items-center bg-[#F3F5F7] rounded-full h-12 w-12 max-[360px]:w-10 max-[360px]:h-10"
        >
          <img
            src="./assets/images/user.svg"
            alt="Menu"
            class="w-6 h-6 max-[360px]:w-5 max-[360px]:h-5"
          />
        </div>
        <div
          class="flex justify-center items-center bg-[#F3F5F7] rounded-full h-12 w-12 relative before:flex before:items-center before:justify-center before:content-['2'] before:text-[10px] before:w-3 before:h-3 before:bg-[#C6BCB2] before:absolute before:left-4 before:bottom-3 before:rounded-full max-lg:before:left-3 max-md:before:left-7 max-md:before:bottom-6 max-md:before:text-white max-md:before:text-[7px] max-[360px]:w-10 max-[360px]:h-10 before:max-[360px]:bottom-[22px] before:max-[360px]:left-[23px]"
        >
          <svg
            class="w-6 h-6 mr-1 max-[360px]:w-5 max-[360px]:h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
              stroke="#213F74"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
              stroke="#213F74"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
              stroke="#213F74"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div
          class="flex justify-center items-center bg-[#213F74] rounded-full h-12 w-12 max-[360px]:w-10 max-[360px]:h-10"
        >
          <img
            src="./assets/images/burger-menu.svg"
            alt="Menu"
            class="w-5 h-3"
          />
        </div>
      </div>
    </header>
  </body>
</template>
