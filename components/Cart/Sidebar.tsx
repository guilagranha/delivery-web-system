import { motion } from "framer-motion"
import fadeInRight from "../../animations/fadeInRight"
import fadeInUpPrice from "../../animations/fadeInUpPrice"
import Product from "./Product"

const Sidebar = ({ sidebarOpen, setSidebarOpen, products }) => {
    return (
        <>
            {
                sidebarOpen === true && (
                    <>
                        <motion.div
                            variants={fadeInRight}
                            className="fixed top-0 left-0 h-screen w-80 bg-white shadow-lg duration-100 overflow-auto z-50"
                        >
                            <div className="flex flex-col mt-4 mb-20 mx-4">
                                <div className="text-center text-2xl text-black font-bold py-4">Seu carrinho:</div>
                                {products.map(product => (
                                    <Product
                                        image={product.image}
                                        name={product.name}
                                        count={3}
                                        price={product.price}
                                    />
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeInUpPrice}
                            className="fixed bottom-0 z-50"
                        >
                            <div className="relative w-80 py-3 bg-black px-4">
                                <div className="grid grid-cols-2">
                                    <div className="cols-span-1 flex justify-center items-center">
                                        <div className="text-white text-md font-bold">Total: R$ 00,00</div>
                                    </div>
                                    <div className="cols-span-1">
                                        <div className="w-full py-2 group bg-black hover:bg-white border-2 border-white rounded-md duration-300 cursor-pointer">
                                            <div className="text-center text-white group-hover:text-black text-md font-bold">Finalizar</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <div className="w-full h-screen z-40 fixed inset-0 bg-black opacity-30" />
                    </>
                )
            }
        </>
    )
}

export default Sidebar