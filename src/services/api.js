const BASE_URL = 'https://tinyurl.com';

export const fetchProducts = async () => {
    const res = await fetch(`${BASE_URL}/products-json`);
    if(!res.ok) {
        throw new Error('Failed to fetch products');
    }
    return res.json();
}

export const fetchCoupons = async () => {
    const res = await fetch(`${BASE_URL}/coupons-json`);
    if(!res.ok) {
        throw new Error('Failed to fetch coupons');
    }
    return res.json();
}