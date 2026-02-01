<<<<<<< HEAD
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
=======
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 py-10 border-t border-slate-800 mt-auto">
            <div className="max-w-7xl mx-auto px-4 text-center">
                
                

                <div className="flex justify-center gap-6 mb-4">
                    
                    <a href="https://www.linkedin.com/in/yvan-ruben-sidien-a99992153/?locale=en_US" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:rubens.wdg@gmail.com" className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
                <p className="text-gray-400 mb-4 text-sm">
                    &copy; {new Date().getFullYear()} Ruben Sidien. Built with <span className="text-blue-600">React & Next.js</span>.
                </p>

            </div>
        </footer>
    );
}
>>>>>>> ec561a8 (first commit)
