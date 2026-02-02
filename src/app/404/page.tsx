import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold text-white">Page not found</h1>
        <p className="mt-3 text-slate-300">
          Sorry, the page you’re looking for doesn’t exist.
        </p>

        <Link
          href="/"
          className="inline-flex mt-6 items-center justify-center rounded-full px-5 py-2 text-sm font-medium
                     bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}
