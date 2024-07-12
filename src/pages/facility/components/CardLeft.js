import { useState } from "react";
import Modal from "./Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export default function CardLeft() {

    const [showModal, setShowModal] = useState(false);

    function handleShowodal() {
        setShowModal(!showModal);
    }

    return (
        <section className="flex flex-col md:flex-row items-center hero ">
            {/* Left Content */}
            <div className="w-full md:w-1/2 relative hero-image mb-8 md:mb-0">
                <div className="relative hero-image">
                    <div className="overlay inset-0 bg-black opacity-35 z-10"></div>
                    <div className="overlay right-0 bottom-0 md:inset-0">
                        <button
                            className="video hero-cta focus:outline-none z-30 modal-trigger"
                            onClick={handleShowodal}
                        ></button>
                    </div>
                    <img
                        src="https://www.appliedglobal.com/wp-content/uploads/How-to-Create-a-Modern-Meeting-Room-Setup.png"
                        alt="hero 1"
                        className="absolute inset-0 md:relative w-full h-full object-cover object-center"
                    />
                </div>
            </div>
            {/* Right Content */}
            <div className="w-full md:w-1/2 lg:w-1/ px-4 md:px-0 md:pl-8 flex flex-col justify-center">
                <div className="ps-10">
                    <h1 className="text-3xl md:text-5xl leading-tight mb-4">
                        Braga Meeting Room
                    </h1>
                    <p className="flex items-center text-base md:text-lg mb-6 tracking-wide">
                        <FontAwesomeIcon icon={faUser} className="mr-2" /> Capacity: 10 Person
                    </p>

                    <h2 className="text-base md:text-lg mb-6 tracking-wide">
                        Located in the heart of Braga, this versatile room offers a cozy atmosphere for various occasions. Whether it's a team meeting, workshop, or a small event, Braga Room is designed to cater to your needs.
                    </h2>
                    <div>
                        <a
                            href="/browse-the-room"
                            className="border border-black text-black hover:bg-black hover:text-white rounded-sm px-8 py-3 mt-4 inline-block flex-none transition duration-200"
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            </div>

            {showModal && <Modal handleShowodal={handleShowodal} />}
        </section>
    )
}
