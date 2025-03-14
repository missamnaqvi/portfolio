import React from "react";

export default function Footer() {
  return (
    <footer class="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            JAVAD NAQVI
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
