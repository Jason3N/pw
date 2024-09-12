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
            transition={{ duration: 3 }}
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
                <NavbarItem text="about me" targetId="technologies"/>
                <NavbarItem text="projects" targetId="projects"/>
                <NavbarItem text="experience" targetId="experience"/>
                <NavbarItem text="contact" targetId="contact"/>
            </div>
        </div>
    );
};

export default Navbar;
