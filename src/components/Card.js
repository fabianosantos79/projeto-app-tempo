import { FaLocationDot } from "react-icons/fa6";
import { RiCelsiusFill } from "react-icons/ri";

const Card = ({ data }) => {
    const { location, current } = data;


    return (
        <section className="w-80 h-96 p-10 backdrop-filter backdrop-blur-xl text-white rounded-lg drop-shadow-2xl flex flex-col justify-center items-center">
            <div className="flex gap-5">
                <FaLocationDot size={30} />
                <h2 className="text-3xl font-extrabold">{location.name}</h2>
            </div>
            <div className="flex">
                <h3 className="text-lg">{location.region}, {location.country}</h3>
            </div>
            <div className="flex mt-10">
                <span className="text-7xl font-medium">{current.temp_c}</span>
                <RiCelsiusFill size={50} />
            </div>
            <div className="flex flex-col justify-center items-center">
                <img className="w-32" src={current.condition.icon} alt="Icone" />
                <span>{current.condition.text}</span>
            </div>
        </section>
    )
}

export default Card