import { useCart } from "../hooks/useCart";

function ProductCard({ product, isProductList = false }) {
    const { addToCart } = useCart();
    return (
        <div className='border p-4 rounded w-[300px] flex flex-col gap-2'>
            <img src={product.image} alt={product.name} className='w-full h-48 object-cover mb-2' />
            <h2 className='text-lg font-bold'>{product.name}</h2>
            <p className='text-gray-600'>{product.description}</p>
            <span>
                <p className='text-gray-600'>{product.currency} ${product.price}</p>
            </span>
            <span>
                <p className="text-gray-600">{product.available}</p>
                {isProductList && (
                    <button onClick={() => { addToCart(product) }}>Add to Cart</button>
                )}
            </span>
        </div>
    )
}

export default ProductCard;