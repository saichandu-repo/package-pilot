import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './store';
import './Home.css'; // Make sure to create and style with this CSS

function Home() {
    const dispatch = useDispatch();
    const [shop, setShop] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [selectedRanges, setSelectedRanges] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [slideIndex, setSlideIndex] = useState(0);

    const veg = useSelector(state => state.products.veg);
    const nonveg = useSelector(state => state.products.nonveg);
    const milkItems = useSelector(state => state.products.milk);
    const allItems = [...veg, ...nonveg, ...milkItems];

    const priceRanges = [
        { range: " Rs. 0 to  Rs  100", min: 0, max: 100 },
        { range: " Rs. 101 to  Rs  200", min: 101, max: 200 },
        { range: " Rs. 201 to  Rs  300", min: 201, max: 300 },
        { range: " Rs. 301 to  Rs  400", min: 301, max: 400 },
    ];

    const handleRange = (selectedRange) => {
        setSelectedRanges(prev =>
            prev.includes(selectedRange)
                ? prev.filter(r => r !== selectedRange)
                : [...prev, selectedRange]
        );
    };

    const itemsPerPage = 12;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allItems.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(allItems.length / itemsPerPage);

    const activeRanges = priceRanges.filter(r => selectedRanges.includes(r.range));
    const filteredProducts = selectedRanges.length
        ? currentItems.filter(product =>
            activeRanges.some(range =>
                product.price >= range.min && product.price <= range.max))
        : currentItems;

    const categories = [
        {
            name: "Vegetables",
            img: "https://www.lalpathlabs.com/blog/wp-content/uploads/2019/01/Fruits-and-Vegetables.jpg"
        },
        {
            name: "Non-Veg",
            img: "https://st2.depositphotos.com/1177973/6542/i/450/depositphotos_65420891-stock-photo-fresh-fish-and-other-seafood.jpg"
        },
        {
            name: "Milk Products",
            img: "https://th.bing.com/th/id/OIP.yRF9SvFyivjybmgClfWw9wHaE8?rs=1&pid=ImgDetMain"
        },
        {
            name: "Chocolates",
            img: "https://th.bing.com/th/id/OIP.Bb8AZ52DF_ObAWbYCR_NNQHaFj?w=600&h=450&rs=1&pid=ImgDetMain"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndex(prev => (prev + 1) % categories.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="home-container">
            {/* HERO SECTION */}
            {!shop && (
                <div className="hero">
                    <div className="hero-overlay">
                        <h1>Welcome to PackagePilot</h1>
                        <p>Fresh groceries delivered to your doorstep!</p>
                        <button className="shop-btn" onClick={() => setShop(true)}>Shop Now</button>
                    </div>
                </div>
            )}

            {/* CATEGORY AUTO-SLIDER */}
            <div className="category-carousel">
                <img src={categories[slideIndex].img} alt={categories[slideIndex].name} />
                <div className="carousel-caption">{categories[slideIndex].name}</div>
            </div>

            {/* FILTERS */}
            {shop && (
                <div>
                    <div className="filter-header">
                        <button onClick={() => setShowFilters(!showFilters)}>
                            {showFilters ? "Hide Filters" : "Show Filters"}
                        </button>
                    </div>

                    {showFilters && (
                        <div className="sidebar">
                            <h3>Filter by Price</h3>
                            {priceRanges.map(value => (
                                <label key={value.range}>
                                    <input
                                        type="checkbox"
                                        checked={selectedRanges.includes(value.range)}
                                        onChange={() => handleRange(value.range)}
                                    />
                                    {value.range}
                                </label>
                            ))}
                            <button onClick={() => setSelectedRanges([])}>Clear All</button>
                        </div>
                    )}
                </div>
            )}

            {/* PRODUCT LISTING */}
            <div className="product-grid" style={{ marginLeft: showFilters ? '220px' : '0' }}>
                {shop && filteredProducts.map((val, index) => (
                    <div className="product-card" key={index}>
                        <img src={val.img} alt={val.name} />
                        <h4>{val.name}</h4>
                        <p>Price: {val.price} &#8377;</p>
                        <button onClick={() => dispatch(addToCart(val))}>Add to Cart</button>
                    </div>
                ))}
            </div>

            {/* PAGINATION */}
            {shop && (
                <div className="pagination">
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={currentPage === index + 1 ? "active" : ""}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default Home;
