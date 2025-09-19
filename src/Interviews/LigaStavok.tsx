import { useEffect, useState } from 'react';
import './style.css';

type Product = {
    description: string;
    id: string;
    info: string;
    name: string;
}

type Shop = {
    coordinate: number[];
    id: string;
    name: string;
    priceList: Record<string, string>;
};

interface ProductListType {
    currency: string
    error?: boolean
}

let counter = 10;
let started = false;

export const AppTimer = () => {
    let currency = ' $';
    const [timer, setTimer] = useState(10);

    const onDecrease = () => {
        if (counter > 0) {
            --counter;
            setTimer(counter);
        }
    };

    useEffect(() => {
        let interval: number

        if (!started) {
            interval = setInterval(onDecrease, 1000);
        }

        started = true;

        return () => {
            clearInterval(interval)
        }
    });

    return (
        <div>
            <div className="Controls">{timer}</div>
            
            <ProductList currency={currency} />
        </div>
    );
};

const ProductList = ({ currency, error = false }: ProductListType) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [shops, setShops] = useState<Shop[]>([]);

    if (error) {
        return "Sorry((((";
    }

    useEffect(() => {
        const fetchPoducts = async () => {
            const productsResponse = await fetch(
                'https://my-json-server.typicode.com/cyberwalrus/demo/products'
            );

            const productsJson = await productsResponse.json();

            setProducts(productsJson);
        }

        fetchPoducts()  
    }, [products, setProducts]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/cyberwalrus/demo/shops')
            .then((res) => res.json())
            .then((res) => setShops(res));
    }, [shops, setShops]);

    const getShops = (id: string): Shop[] => {
        let array: Shop[] = [];

        for (let i = 0; i < shops.length; i++) {
            const shop = shops[i];

            if (shop.priceList[id]) {
                array = [...array, shop];
            }
        }

        return array;
    };

    return (
        <div className="productsWrapper">
            {/* render products */}
            {products.map(({ name, description, id }) => (
                <section key="id" className="products">
                    <h2 className="products-Item_green">{name}</h2>

                    <p>{description}</p>

                    <hr />

                    {/* render shops list */}
                    <ul className="postList">
                        {(getShops(id)).map(({ name, priceList, id }) => (
                            <li className="post__header" key={id}>
                                {name} - {' '}
                                
                                {


                                    priceList[id]
                                }

                                {currency}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    );
};
