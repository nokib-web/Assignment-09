import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";


const ServiceCard = ({ service }) => {
    const { serviceId, serviceName, image, rating, price } = service;

    return (
        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition rounded-2xl">
            <figure>
                <img
                    src={image}
                    alt={serviceName}
                    className="h-56 w-full object-cover rounded-t-2xl"
                />
            </figure>

            <div className="card-body text-left">
                <h3 className="card-title min-h-[3rem] leading-snug">
                    {serviceName}
                </h3>

                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        <span className="text-sm font-medium">{rating}</span>
                    </div>
                    <div>
                        <p className="font-semibold text-primary">{price}</p>
                    </div>
                </div>

                <div className="card-actions justify-end mt-4">
                    <Link
                        to={`/details/${serviceId}`}
                        className="btn text-white rounded-xl  btn-outline w-full bg-[#774615] hover:bg-[#c57b2c] "
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
