import { useState } from "react";
import Modal from "./Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export default function CardRight() {

    const [showModal, setShowModal] = useState(false);

    function handleShowodal() {
        setShowModal(!showModal);
    }

    return (
        <section className="flex flex-col md:flex-row items-center hero container">
            {/* Left Content */}
            <div className="w-full md:w-1/2 relative hero-image mb-8 md:mb-0 order-first md:order-last py-24">
                <div className="relative hero-image">
                    <div className="overlay inset-0 bg-black opacity-35 z-10"></div>
                    <img
                        src="https://www.miops.com/cdn/shop/articles/Food_Photography___How_to_Take_Unique_and_Creative_Food_Photos_5.jpg?v=1661150733"
                        alt="hero 1"
                        className="absolute inset-0 md:relative w-full h-full object-cover object-center"
                    />
                </div>
            </div>
            {/* Right Content */}
            <div className="w-full md:w-1/2 lg:w-1/ px-4 md:px-0 flex flex-col justify-center ">
                <div className="pe-16">
                    <h1 className="text-3xl md:text-5xl leading-tight mb-4">
                    À la carte
                    </h1>
                    <h2 className="text-base md:text-lg mb-6 tracking-wide">
                    Experience a marriage of French and International cuisines as our menus seamlessly blend the best of both worlds. Indulge in a culinary journey that takes you from savory Beef short ribs to Yellowfin tuna ceviche, from tantalizing Veal Milanese to Lobster spaghetti.
                    </h2>
                    <div>
                        <a
                            href="/menu/category/detail"
                            className="border border-black text-black hover:bg-black hover:text-white rounded-sm px-8 py-3 mt-4 inline-block flex-none transition duration-200"
                        >
                            View Menu
                        </a>
                    </div>
                </div>
            </div>

            {showModal && <Modal handleShowodal={handleShowodal} />}
        </section>
    )
}
