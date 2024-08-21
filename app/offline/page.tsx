/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { RiArrowLeftLine } from 'react-icons/ri';
const OfflinePage = () => {
  const today = new Date();
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="max-w-[50rem] flex flex-col mx-auto size-full">
        {/* <!-- ========== HEADER ========== --> */}
        <header className="mb-auto flex justify-center z-50 w-full py-4">
          <nav className="px-4 sm:px-6 lg:px-8">
            <Link href={'/'}>
              <img src="./images/Logo.png" className="w-48 h-auto" alt="Logo" />
            </Link>
          </nav>
        </header>
        {/* <!-- ========== END HEADER ========== --> */}

        {/* <!-- ========== MAIN CONTENT ========== --> */}
        <main id="content">
          <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="block text-4xl font-bold text-gray-800 sm:text-7xl dark:text-white">
              Anda Sedang Offline
            </h1>
            <p className="mt-3 text-gray-600 dark:text-neutral-400">
              Anda sedang tidak terhubung ke internet ,
            </p>
            <p className="text-gray-600 dark:text-neutral-400">
              Harap muat ulang halaman ini. atau pastikan koneksi internet anda
              lancar.
            </p>
            <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
              <a
                className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="../examples.html"
              >
                <RiArrowLeftLine className="shrink-0 size-4" />
                Back to examples
              </a>
            </div>
          </div>
        </main>
        {/* <!-- ========== END MAIN CONTENT ========== --> */}

        {/* <!-- ========== FOOTER ========== --> */}
        <footer className="mt-auto text-center py-5">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              © All Rights Reserved. {today.getFullYear()}.
            </p>
          </div>
        </footer>
        {/* <!-- ========== END FOOTER ========== --> */}
      </div>
    </div>
  );
};

export default OfflinePage;
