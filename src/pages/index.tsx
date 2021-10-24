import Link from "next/link";
import { motion } from 'framer-motion'
import fetch from "isomorphic-unfetch";

import fadeInUp from '../../animations/fadeInUp'
import stagger from '../../animations/stagger'
import Menu from "../../components/Menu";
import FloatingCart from "../../components/Cart/FloatingCart";
import { useState } from "react";
import Sidebar from "../../components/Cart/Sidebar";

/* 
  === 3 Important Props ===
  animate => Defines animation. example => x: 0
  initial => Defines the initial state of a animation or starting point. example => x: 60
  exit => Defines animation when component exists/unmount
*/

/* 
  Variants => Allow us to write our animations in variables
  and also define unique names to them
*/

export default function Index({ products }) {
  const [tab, setTab] = useState('Promoções')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    /* Fadein effect */
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <div className="w-full flex grid grid-cols-1 lg:grid-cols-7">
        <div className="lg:col-span-2 flex flex-col items-center px-8">
          <div className="py-8">
            <motion.img initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} key="delivery" src="./assets/images/delivery.png" alt="Delivery" aria-label="Delivery" title="Delivery" />
          </div>
          <Menu
            tab={tab}
            setTab={setTab}
          />
        </div>
        <div className="col-span-5 flex flex-col justify-center items-center">
          <div className="w-full text-center py-16">
            <div className="text-2xl font-bold">{tab}</div>
          </div>
          {
            tab === 'Promoções' && (
              <motion.div variants={stagger(0.3)} className="grid grid-cols-2 lg:grid-cols-3 gap-4 py-6 mx-6">
                {products.map(product => (
                  <Link
                    key={product.id}
                    href='/products/[id]'
                    as={`/products/${product.id}`}
                  >
                    <motion.div
                      variants={fadeInUp}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 1 }}
                      className="row-span-1 w-full bg-white hover:bg-gray-100 shadow-lg rounded-2xl cursor-pointer"
                    >
                      <motion.img initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} key={product.image} src={product.image} width={250} />
                      <div className="text-center py-4">
                        <div className="text-lg font-bold">{product.name}</div>
                        <div className="mt-2 text-md">{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            )
          }
        </div>
      </div>
      <FloatingCart
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        products={products}
      />
    </motion.div>
  )
};

Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3001/products");
  const data = await res.json();
  return {
    products: data
  };
};
