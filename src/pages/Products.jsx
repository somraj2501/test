import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts()
            .then((data) => {
                setProducts(data.products)
            }
            )
            .catch((error) => {
                console.error('Error fetching products:', error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='p-6 flex flex-col gap-4 h-full'>
            <span className='flex justify-between'>
                <h1 className='font-bold text-2xl'>Products</h1>
                <button className="p-2 bg-green-800 text-white hover:bg-green-600 rounded" onClick={() => navigate('/cart')}>View Cart</button>
            </span>
            <div className='flex flex-col gap-1 h-[80vh] w-min overflow-y-auto'>
                {!loading && products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} isProductList={true} />
                    ))
                ) : (
                    <div>No products available.</div>
                )}
            </div>
        </div>
    )
}

export default Products;