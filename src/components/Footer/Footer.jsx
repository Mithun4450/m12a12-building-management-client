import { BsTwitterX } from "react-icons/bs";
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <>
        <footer className="footer footer-center p-10 bg-sky-200 text-base-content rounded">
            <nav className="grid grid-flow-col gap-5 text-lg font-semibold">
                <a href="#about" className="link link-hover">About us</a>
                <a href="#contact" className="link link-hover">Contact</a>
                <a href="#facility" className="link link-hover">Housing Services & Facilities</a>
                <a href="#rules" className="link link-hover">Terms & Conditions</a>
            </nav> 
           
        </footer>
        
        <footer className="footer px-10 py-4 border-t bg-sky-200 text-base-content border-base-300">
            <aside className="items-center grid-flow-col">
                <img src={logo} alt="" className="w-14"/>
                <p>Copyright © 2023 - All right reserved by owner of Concord Palace</p>
            </aside> 
            <nav className="md:place-self-center md:justify-self-end">
                <div className="grid grid-flow-col gap-4">
                    <a className="link link-hover"><BsTwitterX className="text-2xl"/></a>
                    <a className="link link-hover"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <a className="link link-hover"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>
            </nav>
        </footer>
        </>
    );
};

export default Footer;