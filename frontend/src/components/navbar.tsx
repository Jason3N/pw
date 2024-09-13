import { motion } from "framer-motion";


const NavbarItem = (props: {text: string, targetId: string}) => {

    const scrollToSection = () => {
        const element = document.getElementById(props.targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.div
            initial={{ y: "0%", opacity: 0 }}
            animate={{ y: "20%", opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-2"
            >
            <button style={{ color: '#ADBACA' }} onClick={scrollToSection}> {props.text} </button>
        </motion.div>
    );
};

const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};

const Navbar = () => {
    return (
        <div style={{ backgroundColor: '#15181C' }} 
        className="h-16 fixed top-0 w-full z-50">            
        <div className = "justify-center text-xl flex flex-row space-x-10">
                <motion.div
                    initial={{ y: "0%", opacity: 0 }}
                    animate={{ y: "20%", opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="p-2 shadow-lg"
                    >
                    <button style={{ color: '#ADBACA' }} onClick={() => scrollToSection('about-me')}> about me </button>
                </motion.div>
                <motion.div
                    initial={{ y: "0%", opacity: 0 }}
                    animate={{ y: "20%", opacity: 1 }}
                    transition={{ delay: 0.7 ,duration: 0.5 }}
                    className="p-2"
                    >
                    <button className = "custom-button" style={{ color: '#ADBACA' }} 
                    onClick={() => scrollToSection('projects')}> projects </button>
                </motion.div>
                <motion.div
                    initial={{ y: "0%", opacity: 0 }}
                    animate={{ y: "20%", opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="p-2"
                    >
                    <button style={{ color: '#ADBACA' }} 
                    onClick={() => scrollToSection('experience')}> experience </button>
                </motion.div>
                <motion.div
                    initial={{ y: "0%", opacity: 0 }}
                    animate={{ y: "20%", opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    className="p-2"
                    >
                    <button style={{ color: '#ADBACA' }} 
                    onClick={() => scrollToSection('contact')}> contact me </button>
                </motion.div>
                <motion.div
                    initial={{ y: "0%", opacity: 0 }}
                    animate={{ y: "20%", opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="p-2"
                    >
                    <a href = "" style={{ color: '#ADBACA' }} > resume </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Navbar;
