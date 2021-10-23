import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Item = ({ icon, title, tab, setTab }) => {
    return (
        <div className={"group hover:bg-gray-300 border-b-2 border-gray-300 duration-300 py-4 " + (tab === title ? 'bg-gray-300' : 'bg-white')} onClick={() => setTab(title)}>
            <div className="mx-4">
                <div className="inline-block">
                    <FontAwesomeIcon icon={icon} />
                </div>
                <div className={"inline-block ml-2 text-lg text-black group-hover:font-bold duration-200 " + (tab === title ? 'font-bold' : 'font-normal')}>{title}</div>
            </div>
        </div>
    )
}

export default Item