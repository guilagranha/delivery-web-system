import Link from "next/link";
import { motion } from 'framer-motion'
import fetch from "isomorphic-unfetch";

import fadeInUp from '../../../animations/fadeInUp'
import stagger from '../../../animations/stagger'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Product({ product }) {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <div className="flex h-screen justify-center items-center mx-20">
        <div className="shadow-lg border-2 border-gray-300 rounded-2xl m-auto max-w-full py-6">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <motion.div
              className="cols-span-1 flex flex-col jusitfy-center items-center"
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.img
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                key={product.image}
                src={product.image}
              />
            </motion.div>
            <motion.div
              variants={stagger(0.08)}
              className="cols-span-1 flex flex-col justify-center items-center my-10 md:my-0"
            >
              <div className="mx-8 md:mx-0">
                <Link href="/">
                  <motion.div variants={fadeInUp} className="text-xs text-xs text-black font-bold cursor-pointer">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <a className="ml-2">Voltar ao cardápio</a>
                  </motion.div>
                </Link>
                <motion.div variants={fadeInUp} className="text-2xl text-black font-bold my-3">{product.name}</motion.div>
                <motion.div variants={fadeInUp} className="text-sm text-black mb-3">{product.details}</motion.div>
                <motion.div variants={fadeInUp} className="flex justify-center items-center lg:justify-start lg:items-start">
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 1.2 }} className="px-6 py-2 group bg-white hover:bg-gray-300 shadow-lg rounded-md border-2 border-gray-300 duration-300">
                    <div className="text-center text-black group-hover:text-white font-bold">Adicionar ao Carrinho</div>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="cols-span-1 flex flex-col justify-center items-center">
              <div className="relative mb-4">
                <div className="text-lg text-black font-bold">{product.price}</div>
              </div>
              <div className="relative">
                <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 2 }} className="w-10 h-10 group bg-white hover:bg-gray-300 shadow-lg rounded-full border-2 border-gray-300 duration-300 cursor-pointer">
                  <div className="relative text-center text-gray-300 group-hover:text-white">
                    <FontAwesomeIcon icon={faMinus} />
                  </div>
                </motion.button>
                <div className="inline-block mx-4">
                  <div className="relative text-lg text-black font-bold">0</div>
                </div>
                <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 2 }} className="w-10 h-10 group bg-white hover:bg-gray-300 shadow-lg rounded-full border-2 border-gray-300 duration-300 cursor-pointer">
                  <div className="relative text-center text-gray-300 group-hover:text-white">
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
};

Product.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3001/products/${id}`);
  const product = await res.json();
  return { product };
};
