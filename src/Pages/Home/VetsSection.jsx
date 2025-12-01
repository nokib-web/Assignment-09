

const VetsSection = () => {

    const vetsData = [
        {
            id: 1,
            name: "Dr. Sarah Thompson",
            specialization: "Veterinary Surgeon",
            experience: "10+ Years",
            image: "https://i.ibb.co.com/tPBf3DBh/pngtree-smilvet2.webp",
            description:
                "Dr. Sarah specializes in animal surgery and preventive care, ensuring pets stay healthy and active throughout the year."
        },
        {
            id: 2,
            name: "Dr. Michael Lee",
            specialization: "Pet Nutrition Expert",
            experience: "8+ Years",
            image: "https://i.ibb.co.com/hx0pXVhC/images.jpg",

                
            description:
                "Dr. Michael provides expert advice on balanced diets and supplements tailored to your pet’s unique nutritional needs."
        },
        {
            id: 3,
            name: "Dr. Emily Carter",
            specialization: "Animal Behaviorist",
            experience: "6+ Years",
            image: "https://i.ibb.co.com/tPBf3DBh/pngtree-smilvet2.webp",
            description:
                "Dr. Emily helps pets overcome anxiety and behavioral issues through positive training and compassionate care."
        },
        {
            id: 4,
            name: "Dr. Ahmed Rahman",
            specialization: "Exotic Pet Specialist",
            experience: "9+ Years",
            image: "https://i.ibb.co.com/hx0pXVhC/images.jpg",
            description:
                "Dr. Ahmed is an expert in treating exotic pets like birds, reptiles, and small mammals with specialized medical care."
        },
        {
            id: 5,
            name: "Dr. Olivia Martinez",
            specialization: "Emergency Care Veterinarian",
            experience: "7+ Years",
            image: "https://i.ibb.co.com/hx0pXVhC/images.jpg",
            description:
                "Dr. Olivia is dedicated to providing immediate, life-saving care for pets in critical conditions with calm and precision."
        },
        {
            id: 6,
            name: "Dr. Jason Kim",
            specialization: "Dental Care Specialist",
            experience: "11+ Years",
            image: "https://i.ibb.co.com/d04TzpLy/vet6.jpg",
            description:
                "Dr. Jason focuses on maintaining your pet’s oral health, preventing gum disease, and ensuring those happy smiles stay bright."
        }
    ];

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                    Meet Our Expert Vets
                </h2>
                <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                    Our experienced veterinarians are passionate about providing the best care for your beloved pets.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {vetsData.map((vet) => (
                        <div
                            key={vet.id}
                            className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center"
                        >
                            <img
                                src={vet.image}
                                alt={vet.name}
                                className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-white shadow"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">{vet.name}</h3>
                            <p className="text-sm text-blue-600 font-medium">{vet.specialization}</p>
                            <p className="text-xs text-gray-500 mt-1 mb-3">{vet.experience}</p>
                            <p className="text-gray-600 text-sm">{vet.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VetsSection;
