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



const Navbar = () => {
    return (
        <div style={{ backgroundColor: '#15181C' }} 
             className = "h-16">
            <div className = "justify-center text-xl flex flex-row space-x-10">
                <motion.div
                    initial={{ y: "0%", opacity: 0 }}
                    animate={{ y: "20%", opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="p-2"
                    >
                    <button style={{ color: '#ADBACA' }} > about me </button>
                </motion.div>
                <motion.div
                    initial={{ y: "0%", opacity: 0 }}
                    animate={{ y: "20%", opacity: 1 }}
                    transition={{ delay: 0.7 ,duration: 0.5 }}
                    className="p-2"
                    >
                    <button style={{ color: '#ADBACA' }} > projects </button>
                </motion.div>
                <motion.div
                    initial={{ y: "0%", opacity: 0 }}
                    animate={{ y: "20%", opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="p-2"
                    >
                    <button style={{ color: '#ADBACA' }} > experience </button>
                </motion.div>
                <motion.div
                    initial={{ y: "0%", opacity: 0 }}
                    animate={{ y: "20%", opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    className="p-2"
                    >
                    <button style={{ color: '#ADBACA' }} > contact me </button>
                </motion.div>
                <motion.div
                    initial={{ y: "0%", opacity: 0 }}
                    animate={{ y: "20%", opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="p-2"
                    >
                    <button style={{ color: '#ADBACA' }} > resume </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Navbar;
