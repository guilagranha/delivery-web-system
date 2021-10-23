import Item from "./Item"
import { faHandHoldingUsd, faList, faHamburger, faBeer, faIceCream } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import fadeInRight from "../../animations/fadeInRight"

const Menu = ({ tab, setTab }) => {
    return (
        <motion.div
            variants={fadeInRight}
            className="w-full shadow-lg border-t-2 border-l-2 border-r-2 border-gray-300 cursor-pointer"
        >
            <Item
                title="Promoções"
                icon={faHandHoldingUsd}
                tab={tab}
                setTab={setTab}
            />
            <Item
                title="Todos"
                icon={faList}
                tab={tab}
                setTab={setTab}
            />
            <Item
                title="Hamburguers"
                icon={faHamburger}
                tab={tab}
                setTab={setTab}
            />
            <Item
                title="Bebidas"
                icon={faBeer}
                tab={tab}
                setTab={setTab}
            />
            <Item
                title="Sorvetes"
                icon={faIceCream}
                tab={tab}
                setTab={setTab}
            />
        </motion.div>

    )
}

export default Menu