import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
                <Toaster
                    position="top-right"
                    toastOptions={{
                        className: "portfolio-toast",
                        duration: 4500,
                    }}
                />

                <Navbar />
                <Hero />
                <About />
                <Experience />
                <Education />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
