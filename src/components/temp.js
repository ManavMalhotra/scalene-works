          {/* secondary */}
          <div className="flex gap-6">
            <div className="hidden xs:flex items-center gap-10">
              <div className="hidden lg:flex items-center gap-2">
                <MoonIcon className="h-6 w-6" />
                <SunIcon className="h-6 w-6" />
              </div>
              <div>
                <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                  Free Trial
                </button>
              </div>
            </div>
            
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-6" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* mobile navigation */}
      <div
        className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="px-8">
          <div className="flex flex-col gap-8 font-bold tracking-wider">
            <a href="#" className="border-l-4 border-gray-600">
              Features
            </a>
            <a href="#">Pricing</a>
            <a href="#">Download</a>
            <a href="#">Classic</a>
          </div>
        </div>
      </div>




          {/* Mobile menu */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setToggleMenu(!toggleMenu)}
              className="text-gray-500 focus:outline-none"
            >
              {toggleMenu ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu content */}
        {toggleMenu && (
          <div className="lg:hidden">
            <a href="#" className="block py-2">
              Solutions
            </a>
            <a href="#" className="block py-2">
              Products
            </a>
            <a href="#" className="block py-2">
              Resources
            </a>
            <a href="#" className="block py-2">
              Pricing
            </a>
          </div>
        )}