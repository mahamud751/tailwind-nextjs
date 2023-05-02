import React from "react";

const form = () => {
  return (
    <div>
      <form>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Email
          </span>
          <input type="email" className="peer ..." />
          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </label>
      </form>

      <div>
        <a
          href="#"
          className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
        >
          <div className="flex items-center space-x-3">
            <svg
              className="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              {/* ... */}
            </svg>
            <h3 className="text-slate-900 group-hover:text-white text-sm ">
              New project
            </h3>
          </div>
          <p className="text-slate-500 group-hover:text-white text-sm">
            Create a new project from a variety of starting templates.
          </p>
        </a>
      </div>

      <div>
        <div>
          <div className="flex items-center space-x-2 text-base">
            <h4 className="font-semibold text-slate-900">Contributors</h4>
            <span className="rounded-full bg-white-100 px-2 py-1 text-xs font-semibold text-slate-700">
              204
            </span>
          </div>
          <div className="mt-3 flex -space-x-2 overflow-hidden">
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt
            />
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt
            />
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt
            />
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt
            />
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt
            />
          </div>
          <div className="mt-3 text-sm font-medium">
            <a href="#" className="text-blue-500">
              + 198 others
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default form;
