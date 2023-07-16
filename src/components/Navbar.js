import { useState } from "react";
import { HiOutlineSupport } from "@heroicons/react/24/outline";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="bg-transparent navbar">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
          >
            <path
              opacity="0.5"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.0585 36.4221C20.0979 26.4615 20.0979 10.3122 30.0585 0.351562L36.0702 6.36331C29.4298 13.0037 29.4298 23.7699 36.0702 30.4103L30.0585 36.4221Z"
              fill="#5557DF"
            />
            <path
              opacity="0.5"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.0706 30.4119C26.11 20.4513 9.96061 20.4513 0 30.4119L6.01176 36.4236C12.6522 29.7832 23.4184 29.7832 30.0588 36.4236L36.0706 30.4119Z"
              fill="#5557DF"
            />
            <path
              opacity="0.5"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 6.36331C9.96061 16.3239 26.11 16.3239 36.0706 6.36331L30.0588 0.351562C23.4184 6.99196 12.6522 6.99196 6.01176 0.351562L0 6.36331Z"
              fill="#5557DF"
            />
            <path
              opacity="0.5"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.01176 0.351562C15.9724 10.3122 15.9724 26.4615 6.01176 36.4221L0 30.4103C6.64041 23.7699 6.64041 13.0037 0 6.36331L6.01176 0.351562Z"
              fill="#5557DF"
            />
          </svg>
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            ScaleneWorks
          </span>
        </a>
        <div class="flex items-center md:order-2 gap-2">
          <button type="button" className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="12"
              viewBox="0 0 15 12"
              fill="none"
            >
              <path
                d="M6.95386 12V10.6667H12.2872V5.93333C12.2872 5.28889 12.165 4.68333 11.9205 4.11667C11.6761 3.55 11.3427 3.05556 10.9205 2.63333C10.4983 2.21111 10.0039 1.87778 9.43719 1.63333C8.87052 1.38889 8.26497 1.26667 7.62052 1.26667C6.97608 1.26667 6.37052 1.38889 5.80386 1.63333C5.23719 1.87778 4.74275 2.21111 4.32052 2.63333C3.8983 3.05556 3.56497 3.55 3.32052 4.11667C3.07608 4.68333 2.95386 5.28889 2.95386 5.93333V10H2.28719C1.92052 10 1.60664 9.86945 1.34552 9.60833C1.08441 9.34722 0.953857 9.03333 0.953857 8.66667V7.33333C0.953857 7.07778 1.01497 6.85278 1.13719 6.65833C1.25941 6.46389 1.42052 6.30556 1.62052 6.18333L1.67052 5.3C1.77052 4.48889 2.00108 3.75556 2.36219 3.1C2.7233 2.44444 3.1733 1.88889 3.71219 1.43333C4.25108 0.977778 4.85664 0.625 5.52886 0.375C6.20108 0.125 6.8983 0 7.62052 0C8.35386 0 9.05663 0.125 9.72886 0.375C10.4011 0.625 11.0039 0.980556 11.5372 1.44167C12.0705 1.90278 12.5177 2.45833 12.8789 3.10833C13.24 3.75833 13.4705 4.48333 13.5705 5.28333L13.6205 6.15C13.8205 6.25 13.9816 6.39722 14.1039 6.59167C14.2261 6.78611 14.2872 7 14.2872 7.23333V8.76667C14.2872 9.01111 14.2261 9.22778 14.1039 9.41667C13.9816 9.60556 13.8205 9.75 13.6205 9.85V10.6667C13.6205 11.0333 13.49 11.3472 13.2289 11.6083C12.9677 11.8694 12.6539 12 12.2872 12H6.95386ZM5.62052 7.33333C5.43163 7.33333 5.2733 7.26945 5.14552 7.14167C5.01775 7.01389 4.95386 6.85556 4.95386 6.66667C4.95386 6.47778 5.01775 6.31944 5.14552 6.19167C5.2733 6.06389 5.43163 6 5.62052 6C5.80941 6 5.96775 6.06389 6.09552 6.19167C6.2233 6.31944 6.28719 6.47778 6.28719 6.66667C6.28719 6.85556 6.2233 7.01389 6.09552 7.14167C5.96775 7.26945 5.80941 7.33333 5.62052 7.33333ZM9.62052 7.33333C9.43163 7.33333 9.2733 7.26945 9.14552 7.14167C9.01775 7.01389 8.95386 6.85556 8.95386 6.66667C8.95386 6.47778 9.01775 6.31944 9.14552 6.19167C9.2733 6.06389 9.43163 6 9.62052 6C9.80941 6 9.96775 6.06389 10.0955 6.19167C10.2233 6.31944 10.2872 6.47778 10.2872 6.66667C10.2872 6.85556 10.2233 7.01389 10.0955 7.14167C9.96775 7.26945 9.80941 7.33333 9.62052 7.33333Z"
                fill="white"
              />
            </svg> <span> Contact Sales </span>
          </button>

          <button
            type="button"
            class="btn btn-signup"
          >
            Signup
          </button>

          <button
            type="button"
            class="btn btn-search"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>

          <button
            type="button"
            data-dropdown-toggle="language-dropdown-menu"
            class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-white rounded-lg cursor-pointer hover:bg-gray-100 "
          >
            English (US)
          </button>
          <div
            class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
            id="language-dropdown-menu"
          >
            <ul class="py-2 font-medium" role="none">
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div class="inline-flex items-center">English (US)</div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div class="inline-flex items-center">Deutsch</div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div class="inline-flex items-center">Italiano</div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div class="inline-flex items-center">中文 (繁體)</div>
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-language"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm md:hidden"
            aria-controls="navbar-language"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-language"
        >
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 "
                aria-current="page"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 "
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 "
              >
                Resources
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-white md:p-0 ">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>

      
    </nav>
  );
};

export default Navbar;
