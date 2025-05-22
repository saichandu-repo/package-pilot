import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './store';

function Home() {
    const dispatch = useDispatch();
    const [shop, setShop] = useState(false);
    const [showFilters, setShowFilters] = useState(false); // NEW STATE

    const veg = useSelector(globalState => globalState.products.veg);
    const nonveg = useSelector(globalState => globalState.products.nonveg);
    const milkItems = useSelector(globalState => globalState.products.milk);
    const allItems = [...veg, ...nonveg, ...milkItems];

    const [selectedRanges, setSelectedRanges] = useState([]);

    const priceRanges = [
        { range: " Rs. 0 to  Rs  100", min: 0, max: 100 },
        { range: " Rs. 101 to  Rs  200", min: 101, max: 200 },
        { range: " Rs. 201 to  Rs  300", min: 201, max: 300 },
        { range: " Rs. 301 to  Rs  400", min: 301, max: 400 },
    ];

    const handleRange = (selectedRange) => {
        if (selectedRanges.includes(selectedRange)) {
            setSelectedRanges(selectedRanges.filter(r => r !== selectedRange));
        } else {
            setSelectedRanges([...selectedRanges, selectedRange]);
        }
    };

    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allItems.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(allItems.length / itemsPerPage);

    const activeRanges = priceRanges.filter(r => selectedRanges.includes(r.range));
    const filteredProducts = selectedRanges.length !== 0
        ? currentItems.filter(product =>
            activeRanges.some(range =>
                product.price >= range.min && product.price <= range.max))
        : currentItems;

    const arr = filteredProducts.map((val, index) => (
        <ol key={index}>
            <img src={val.img} alt={val.name} width="100px" height="100px" />
            <li><b>{val.name}</b></li>
            <b>Price: {val.price} &#8377;</b><br /><br />
            <button style={{backgroundColor:"#2e7d32", color:"white", borderRadius:"10px"}}onClick={() => dispatch(addToCart(val))}>Add to Cart</button>
        </ol>
    ));

    return (
        <>
       
        <div className="category-scrolls">
     <h2>Categories</h2>

    <div className="scroll-container">
        <div className="scroll-section">
            <img src="https://www.lalpathlabs.com/blog/wp-content/uploads/2019/01/Fruits-and-Vegetables.jpg" alt="Vegetables" />
         
        </div>
        <div className="scroll-section">
            <img src="https://st2.depositphotos.com/1177973/6542/i/450/depositphotos_65420891-stock-photo-fresh-fish-and-other-seafood.jpg" alt="Non-Veg" />
  
        </div>
        <div className="scroll-section">
            <img src="https://th.bing.com/th/id/OIP.yRF9SvFyivjybmgClfWw9wHaE8?rs=1&pid=ImgDetMain" alt="Milk Products" />

        </div>
        <div className="scroll-section">
            <img src="https://th.bing.com/th/id/OIP.Bb8AZ52DF_ObAWbYCR_NNQHaFj?w=600&h=450&rs=1&pid=ImgDetMain" alt="Chocolates" />

        </div>
     
    </div>
</div>

            {shop && (
                <div>
                    {/* Filters Button */}
                    <div style={{ textAlign: "right", padding: "10px" }}>
                        <button onClick={() => setShowFilters(!showFilters)}>
                            {showFilters ? "Hide Filters" : "Show Filters"}
                        </button>
                    </div>

                    {/* Filter Sidebar */}
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
                                    {value.range}<br />
                                </label>
                            ))}
                            <button onClick={() => setSelectedRanges([])}>Clear All</button>
                        </div>
                    )}
                </div>
            )}

            <div className='first' style={{ marginLeft: showFilters ? '220px' : '0' }}>
                {shop ? arr : (
                    <div style={{ textAlign: "center" }}>
                        <h1>Welcome to PackagePilot</h1>
                        <p>Fresh groceries delivered to your doorstep!</p>
                        <button onClick={() => setShop(true)}>Shop Now</button>
                    </div>
                )}
            </div>

            {shop && (
                <div style={{ textAlign: "center" }}>
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
                            style={{
                                fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
                                margin: '0 5px'
                            }}
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
        </>
    );
}

export default Home;
