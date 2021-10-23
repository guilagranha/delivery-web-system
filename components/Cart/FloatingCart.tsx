import { motion } from "framer-motion"
import fadeInUp from "../../animations/fadeInUp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

const FloatingCart = () => {
    return (
        <div className="fixed bottom-6 right-6">
            <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.10 }}
                whileTap={{ scale: 1 }}
                className="w-20 h-20 bg-gray-300 rounded-full cursor-pointer"
            >
                <div className="absolute top-0 right-0">
                    <div className="w-7 h-7 bg-white rounded-full border-2 border-gray-300 shadow-lg">
                        <div className="text-center text-xs font-bold mt-0.5">6</div>
                    </div>
                </div>
                <div className="relative flex justify-center items-center top-16">
                    <div className="bg-white rounded-md border-2 border-gray px-2">
                        <div className="text-center text-xs font-bold">R$99,90</div>
                    </div>
                </div>
                <FontAwesomeIcon icon={faShoppingCart} className="absolute top-6 left-5 text-3xl" />
            </motion.div>
        </div>
    )
}

export default FloatingCart