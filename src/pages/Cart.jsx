import { useCart } from "../hooks/useCart";
// import ProductCard from "../components/ProductCard";

function Cart() {
    const { addToCart, decreaseQuantity, cartItems } = useCart();
    return (
        <div className="flex flex-col gap-2">
            <span className="flex gap-5">
                <h1>Cart Page</h1>
                <button className="text-xs" onClick={() => window.history.back()}>Back</button>
            </span>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="flex gap-2 flex-col h-[80vh] overflow-y-auto">
                    {cartItems.map((item) => (
                        <>
                            {item.quantity > 0 && (
                                <li key={item.id} className="flex gap-4">
                                    <p className="flex text-nowrap gap-2 text-gray-600">{item.quantity} x {item.name} - {item.currency} {item.price}</p>
                                    <div className="flex gap-1">
                                        <button className="w-12 bg-gray-200 hover:bg-gray-300" onClick={() => decreaseQuantity(item.id)}>-</button>
                                        <button className="w-12 bg-gray-200 hover:bg-gray-300" onClick={() => addToCart(item)}>+</button>
                                    </div>
                                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                                </li>
                            )}
                                
                            
                        </>
                    ))}
                </ul>
            )}

            <div>
                <h2>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h2>
            </div>
        </div>
    )
}

export default Cart;