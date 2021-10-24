const Product = ({ image, name, count, price }) => {
    function calculatePrice() {
        const totalPrice = (price * count)
        console.log(price)
        return totalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }

    return (
        <div className="grid grid-cols-2 flex justify-center items-center py-3">
            <div className="cols-span-1">
                <img src={image} className="w-28" />
            </div>
            <div className="cols-span-1">
                <div className="text-md text-black font-bold">{ name }</div>
                <div className="text-xs text-black">
                    <div>Quantidade: { count }</div>
                    <div>{ calculatePrice() }</div>
                </div>
            </div>
        </div>
    )
}

export default Product