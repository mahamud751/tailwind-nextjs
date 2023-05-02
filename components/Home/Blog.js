import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="w-full p-12 bg-white">
        <div className="flex items-end justify-between mb-12 header">
          <div className="title">
            <p className="mb-4 text-4xl font-bold text-gray-800">
              Lastest articles
            </p>
            <p className="text-2xl font-light text-gray-400">
              All article are verified by 2 experts and valdiate by the CTO
            </p>
          </div>
          <div className="text-end">
            <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
              <div className=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Search'
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Enter a title"
                />
              </div>
              <button
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <a href="#" className="block w-full h-full">
              <img
                alt="blog photo"
                src="https://plus.unsplash.com/premium_photo-1670274606895-f2dc713f8a90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                className="object-cover w-full max-h-40"
              />
            </a>
            <div className="w-full p-4 bg-white dark:bg-gray-800">
              <a href="#" className="block w-full h-full">
                <p className="font-medium text-indigo-500 text-md" />
                <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                  tests
                </p>
                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                  The new supercar is here, 543 cv and 140 000$ !!
                </p>
              </a>
              <div className="flex items-center mt-4">
                <a href="#" className="block w-full h-full"></a>
                <a href="#" className="relative block">
                  <img
                    alt="profil"
                    src="https://plus.unsplash.com/premium_photo-1670274606895-f2dc713f8a90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
                <div className="flex flex-col justify-between ml-4 text-sm">
                  <p className="text-gray-800 dark:text-white">Jean Jacques</p>
                  <p className="text-gray-400 dark:text-gray-300 ">
                    20 mars 2029 - 6 min read
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <a href="#" className="block w-full h-full">
              <img
                alt="blog photo"
                src="https://plus.unsplash.com/premium_photo-1670274606895-f2dc713f8a90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                className="object-cover w-full max-h-40"
              />
            </a>
            <div className="w-full p-4 bg-white dark:bg-gray-800">
              <a href="#" className="block w-full h-full">
                <p className="font-medium text-indigo-500 text-md">Oui</p>
                <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                  test
                </p>
                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                  The new supercar is here, 543 cv and 140 000$ !!
                </p>
              </a>
              <div className="flex items-center mt-4">
                <a href="#" className="block w-full h-full"></a>
                <a href="#" className="relative block">
                  <img
                    alt="profil"
                    src="https://plus.unsplash.com/premium_photo-1670274606895-f2dc713f8a90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
                <div className="flex flex-col justify-between ml-4 text-sm">
                  <p className="text-gray-800 dark:text-white">Jean Jacques</p>
                  <p className="text-gray-400 dark:text-gray-300">
                    20 mars 2029 - 6 min read
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <a href="#" className="block w-full h-full">
              <img
                alt="blog photo"
                src="https://plus.unsplash.com/premium_photo-1670274606895-f2dc713f8a90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                className="object-cover w-full max-h-40"
              />
            </a>
            <div className="w-full p-4 bg-white dark:bg-gray-800">
              <a href="#" className="block w-full h-full">
                <p className="font-medium text-indigo-500 text-md" />
                <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                  test
                </p>
                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                  The new supercar is here, 543 cv and 140 000$ !!
                </p>
              </a>
              <div className="flex items-center mt-4">
                <a href="#" className="block w-full h-full"></a>
                <a href="#" className="relative block">
                  <img
                    alt="profil"
                    src="https://plus.unsplash.com/premium_photo-1670274606895-f2dc713f8a90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
                <div className="flex flex-col justify-between ml-4 text-sm">
                  <p className="text-gray-800 dark:text-white">Jean Jacques</p>
                  <p className="text-gray-400 dark:text-gray-300">
                    20 mars 2029 - 6 min read
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <a href="#" className="block w-full h-full">
              <img
                alt="blog photo"
                src="https://plus.unsplash.com/premium_photo-1670274606895-f2dc713f8a90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                className="object-cover w-full max-h-40"
              />
            </a>
            <div className="w-full p-4 bg-white dark:bg-gray-800">
              <a href="#" className="block w-full h-full">
                <p className="font-medium text-indigo-500 text-md">Oui</p>
                <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                  test
                </p>
                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                  The new supercar is here, 543 cv and 140 000$ !!
                </p>
              </a>
              <div className="flex items-center mt-4">
                <a href="#" className="block w-full h-full"></a>
                <a href="#" className="relative block">
                  <img
                    alt="profil"
                    src="https://plus.unsplash.com/premium_photo-1670274606895-f2dc713f8a90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
                <div className="flex flex-col justify-between ml-4 text-sm">
                  <p className="text-gray-800 dark:text-white">Jean Jacques</p>
                  <p className="text-gray-400 dark:text-gray-300">
                    20 mars 2029 - 6 min read
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <a href="#" className="block w-full h-full">
              <img
                alt="blog photo"
                src="https://plus.unsplash.com/premium_photo-1670274606895-f2dc713f8a90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                className="object-cover w-full max-h-40"
              />
            </a>
            <div className="w-full p-4 bg-white dark:bg-gray-800">
              <a href="#" className="block w-full h-full">
                <p className="font-medium text-indigo-500 text-md" />
                <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                  test
                </p>
                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                  The new supercar is here, 543 cv and 140 000$ !!
                </p>
              </a>
              <div className="flex items-center mt-4">
                <a href="#" className="block w-full h-full"></a>
                <a href="#" className="relative block">
                  <img
                    alt="profil"
                    src="https://plus.unsplash.com/premium_photo-1670274606895-f2dc713f8a90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
                <div className="flex flex-col justify-between ml-4 text-sm">
                  <p className="text-gray-800 dark:text-white">Jean Jacques</p>
                  <p className="text-gray-400 dark:text-gray-300">
                    20 mars 2029 - 6 min read
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <a href="#" className="block w-full h-full">
              <img
                alt="blog photo"
                src="https://plus.unsplash.com/premium_photo-1670274606895-f2dc713f8a90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                className="object-cover w-full max-h-40"
              />
            </a>
            <div className="w-full p-4 bg-white dark:bg-gray-800">
              <a href="#" className="block w-full h-full">
                <p className="font-medium text-indigo-500 text-md">Oui</p>
                <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                  test
                </p>
                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                  The new supercar is here, 543 cv and 140 000$ !!
                </p>
              </a>
              <div className="flex items-center mt-4">
                <a href="#" className="block w-full h-full"></a>
                <a href="#" className="relative block">
                  <div className="skew-y-12">
                    <img
                      alt="profil"
                      src="https://plus.unsplash.com/premium_photo-1670274606895-f2dc713f8a90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </div>
                </a>
                <div className="flex flex-col justify-between ml-4 text-sm">
                  <p className="text-gray-800 dark:text-white">Jean Jacques</p>
                  <p className="text-gray-400 dark:text-gray-300">
                    20 mars 2029 - 6 min read
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
