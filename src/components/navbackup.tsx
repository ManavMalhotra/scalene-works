    <nav className="flex items-center justify-between w-full h-full px-4 py-6 m-auto bg-white border-b-2 sm:px-6 md:px-8">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          className="w-1/3 max-w-xs min-w-min"
          width="1000"
          height="1000"
          priority={true}
        />
      </Link>

        <Sheet>
          <SheetTrigger>
            <Menu
              className="w-8 h-8 text-purple-600 md:hidden"
              onClick={hangleToggleNavbar}
            />
          </SheetTrigger>
          <SheetContent
            side={"left"}
            style={{
              background: "linear-gradient(90deg, #FF008E 0%, #A76CF5 100%)",
            }}
          >
            <SheetHeader>
              <SheetDescription className="">
                <div className="flex flex-col gap-3 py-4">
                  <div className="flex items-center w-full max-w-sm space-x-2">
                    <Search className="w-4 h-4" />
                    <Input placeholder="Search..." className="w-full" />
                    <LanguageSelector open={open} setOpen={setOpen} />
                  </div>

                  <Link href="/products" className="font-semibold">
                    Products
                  </Link>
                  <Link href="/solutions" className="font-semibold">
                    Solutions
                  </Link>
                  <Link href="/resources" className="font-semibold">
                    Resources
                  </Link>
                  <Link href="/pricing" className="font-semibold">
                    Pricing
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      <div
        className={`hidden gap-5 px-12 sm:hidden md:flex text-sm lg:text-base ${
          animation ? "animation-hidden" : "animation"
        }`}
      >
        <Link href="/products" className="font-semibold">
          Products
        </Link>
        <Link href="/solutions" className="font-semibold">
          Solutions
        </Link>
        <Link href="/resources" className="font-semibold">
          Resources
        </Link>
        <Link href="/pricing" className="font-semibold">
          Pricing
        </Link>
      </div>

      <div className={`hidden flex-row items-center max-w-full sm:hidden md:flex`}>
        <div
          className={`flex-row items-center max-w-full sm:hidden md:flex ${
            animation ? "animation-hidden" : "animation"
          }`}
        >
          <Button
            className="  sm:block py-2 px-4 rounded-[26px] bg-gradient-to-r from-green-500 to-green-600 backdrop-blur-20"
            style={{
              background:
                "linear-gradient(265deg, #0FFB00 -6.69%, #0D8C05 101.92%)",
            }}
          >
            Signup
          </Button>

          <Button
            variant="outline"
            className={`py-2 px-5 border-s-muted rounded-[26px] bg-transparent text-black `}
            onClick={handleAnimation}
            style={{
              border: "2px solid transparent",
              background:
                "linear-gradient(white, white) padding-box, linear-gradient(to right, white,rgba(200, 200, 200, 0.7) ) border-box",
            }}
          >
            <Search className="w-6 h-auto text-purple-600" />
          </Button>
        </div>
        <div className="w-full ">
          <Input
            placeholder="Search..."
            className={`${
              animation ? " animation " : " hidden animation-hidden"
            }`}
          />
        </div>
        <Button
          variant="outline"
          className={`py-2 px-5 border-s-muted rounded-[26px] bg-transparent text-black ${
            animation ? "animation" : "hidden animation-hidden"
          }`}
          onClick={handleAnimation}
          style={{
            border: "2px solid transparent",
            background:
              "linear-gradient(white, white) padding-box, linear-gradient(to right, white,rgba(200, 200, 200, 0.7) ) border-box",
          }}
        >
          <X className="w-6 h-auto text-purple-600" />
        </Button>
        <div className="sm:hidden lg:flex">
          <LanguageSelector open={open} setOpen={setOpen} />
        </div>
      </div>
