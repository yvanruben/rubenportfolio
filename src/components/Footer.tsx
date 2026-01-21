export default function Footer() {
    return (
        <footer className="bg-slate-950 py-8 border-t border-slate-800 mt-auto">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Web Developer Portfolio. Built with Next.js.
                </p>
            </div>
        </footer>
    );
}