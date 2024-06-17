import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

export default function Example() {
    return (
        <div className="flex flex-col md:flex-row " style={{ marginTop: "50px" }} >
            <div className="w-full p-6 space-y-4 bg-gray-100">
                <div className="text-left">
                    <Typography variant="h4" color="blue-gray" className="mb-2 font-bold">
                        Avantages d'une cheminée sur mesure
                    </Typography>
                    <ul className="list-disc ml-4 text-blue-gray-700">
                        <li>Économies sur les coûts de chauffage</li>
                        <li>Augmentation de la valeur immobilière</li>
                        <li>Contribution à la protection de l'environnement</li>
                        <li>Ambiance confortable et esthétique améliorée</li>
                    </ul>
                </div>

                <div className="text-left">
                    <Typography variant="h5" color="blue-gray" className="mb-2 font-semibold">
                        Témoignages
                    </Typography>
                    <div className="mb-4">
                        <div className="flex items-center">
                            <Typography variant="h6" color="blue-gray" className="font-bold">
                                Marie P.
                            </Typography>
                            <div className="flex ml-2">
                                {[...Array(5)].map((_, index) => (
                                    <svg
                                        key={index}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#fbbf24" // culoarea auriu
                                        viewBox="0 0 24 24"
                                        className="h-4 w-4 text-yellow-500"
                                    >
                                        <path
                                            fill="#fbbf24"
                                            d="M12 2l3.09 6.35L22 9.24l-5.5 5.34 1.3 7.56L12 18.76l-6.8 3.38 1.3-7.56L2 9.24l6.91-.89L12 2z"
                                        />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <blockquote className="border-l-4 border-blue-gray-500 pl-4 italic text-blue-gray-700">
                            "Cheminées du Nord a transformé notre maison. Je recommande vivement !"
                        </blockquote>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <Typography variant="h6" color="blue-gray" className="font-bold">
                                David D.
                            </Typography>
                            <div className="flex ml-2">
                                {[...Array(4)].map((_, index) => (
                                    <svg
                                        key={index}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#fbbf24" // culoarea auriu
                                        viewBox="0 0 24 24"
                                        className="h-4 w-4 text-yellow-500"
                                    >
                                        <path
                                            fill="#fbbf24"
                                            d="M12 2l3.09 6.35L22 9.24l-5.5 5.34 1.3 7.56L12 18.76l-6.8 3.38 1.3-7.56L2 9.24l6.91-.89L12 2z"
                                        />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <blockquote className="border-l-4 border-blue-gray-500 pl-4 italic text-blue-gray-700">
                            "Services excellents et produits de qualité !"
                        </blockquote>
                    </div>
                </div>

                {/* Alte componente */}

                <form className="text-left space-y-2">
                    <Typography variant="h5" color="blue-gray" className="font-semibold">
                        Contactez-nous
                    </Typography>
                    <input type="text" name="name" placeholder="Votre nom" className="w-full p-2 border border-gray-300 rounded" />
                    <input type="email" name="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
                    <textarea name="message" placeholder="Votre message" className="w-full p-2 border border-gray-300 rounded"></textarea>
                    <button type="submit" className="w-full p-2 bg-orange-500 text-black rounded">Demandez un devis gratuit</button>
                </form>

                <div className="flex space-x-4 text-blue-gray-700">
                    <div className="flex items-center space-x-2">
                        <Square3Stack3DIcon className="h-6 w-6" />
                        <span>Installation rapide</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Square3Stack3DIcon className="h-6 w-6" />
                        <span>Consultation gratuite</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Square3Stack3DIcon className="h-6 w-6" />
                        <span>Produits personnalisés</span>
                    </div>
                </div>

                <div className="flex flex-wrap space-x-4">
                    <img src="/image/rge.jpg" alt="Certification 1" className="h-12 w-auto mb-2 sm:mb-0" />
                    <img src="/image/primerenov.png" alt="Certification 2" className="h-12 w-auto mb-2 sm:mb-0" />
                    <img src="/image/qualibois.jpg" alt="Certification 3" className="h-12 w-auto mb-2 sm:mb-0" />
                    <img src="/image/qualibat.jpg" alt="Certification 4" className="h-12 w-auto mb-2 sm:mb-0" />
                </div>
            </div>
        </div>
    );
}
