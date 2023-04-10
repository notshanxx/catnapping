<script>
  export let current = "default";
</script>

<nav
  class=" container mx-auto flex justify-between px-10 py-8 md:px-20 {current ===
  'catground'
    ? ' bg-orange-300 '
    : 'bg-orange-50'}"
>
  <a href="/">Home</a>
  <div class="justify-end">
    <a
      href="/catground"
      class="rounded border-orange-700 bg-orange-300 p-3 {current ===
      'catground'
        ? 'bg-orange-50 '
        : 'bg-orange-300 '}"
      on:click={() => (current = "catground")}>Catground</a
    >
    <a href="/bag">Bag</a>
    <!-- <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="ml-3 inline h-6 w-6"
    >
      <path
        fill-rule="evenodd"
        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
        clip-rule="evenodd"
      />
    </svg> -->
  </div>
</nav>

<!-- 
  <nav class="container flex justify-between px-4 py-8 mx-auto bg-white">
    <div>
      <h3 class="text-2xl font-medium text-blue-500">LOGO</h3>
    </div>
    <div class=" space-x-8 lg:flex">
      <a href="#">Menu 1</a>
      <a href="#">Menu 2</a>
      <a href="#">Menu 3</a>
      <a href="#">Menu 4</a>
    </div>
    <div class="flex lg:hidden">
        <div>
            <button class="relative group">
              <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
                  <div class="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                  <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>
        
                  <div class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                    <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                    <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                  </div>
                </div>
              </div>
            </button>
          </div>
    </div>
  </nav>
   -->
