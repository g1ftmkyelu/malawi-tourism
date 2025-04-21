import React, { useState, useEffect } from "react";
import { MagnifyingGlassIcon, FunnelIcon } from "@heroicons/react/24/outline";
import ProductCard from "./ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState("all");
  const [allTags, setAllTags] = useState(["all"]);

  useEffect(() => {
    // Simulate API fetch with timeout
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        // In a real app, replace this with your actual API call
        // const response = await fetch('/api/products');
        // const data = await response.json();
        
        // Demo data
        const data = [
          {
            id: "prod-001",
            name: "Samsung S22 Ultra",
            slug: "samsung-s22-ultra",
            description: "Lightweight and durable mobile phone with 6.5-inch touchscreen display, 16GB RAM and 256GB storage.",
            image: "https://compasia.com.ph/cdn/shop/files/galaxy-s22-ultra-5g-compasia-philippines-3.jpg?v=1737540067",
            price: "MWK 1,200,000",
            tags: ["electronics", "mobile", "samsung"],
            rating: 4.8,
            inStock: true
          },
          {
            id: "prod-002",
            name: "iPhone 15 Pro",
            slug: "iphone-15-pro",
            description: "Apple's latest flagship with A16 chip, ProMotion display and revolutionary camera system.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvcONzGb81kglpeUH3HaeIfcVnPkFtjidZgw&s",
            price: "MWK 1,450,000",
            tags: ["electronics", "mobile", "apple"],
            rating: 4.9,
            inStock: true
          },
          {
            id: "prod-003",
            name: "Sony WH-1000XM5",
            slug: "sony-wh-1000xm5",
            description: "Industry-leading noise cancellation headphones with exceptional sound quality.",
            image: "https://media.sweetwater.com/m/products/image/9d8f6fa885VbNVDyfoHby9g453Is8GkUYXlTfFiR.jpg?quality=82&height=750&ha=9d8f6fa8850f3831",
            price: "MWK 350,000",
            tags: ["electronics", "audio"],
            rating: 4.7,
            inStock: false
          },
          {
            id: "prod-004",
            name: "MacBook Pro M3",
            slug: "macbook-pro-m3",
            description: "Powerful laptop with Apple's M3 chip, stunning Retina display and all-day battery life.",
            image: "https://static.independent.co.uk/2023/11/06/13/Macbook-1.png",
            price: "MWK 2,100,000",
            tags: ["electronics", "laptop", "apple"],
            rating: 4.8,
            inStock: true
          },
          {
            id: "prod-005",
            name: "Pixel 7 Pro",
            slug: "pixel-7-pro",
            description: "Google's flagship phone with exceptional camera quality and pure Android experience.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQoRHEXzPiGHErltbhBPvvQ6XzsntK3S2FA&s",
            price: "MWK 980,000",
            tags: ["electronics", "mobile", "google"],
            rating: 4.6,
            inStock: true
          },
          {
            id: "prod-006",
            name: "iPad Air",
            slug: "ipad-air",
            description: "Ultra-thin tablet with vibrant display, perfect for work and entertainment.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdGQOEkY_sg9n3Fp_WxrCXRGmNkWcIo94eYQ&s",
            price: "MWK 850,000",
            tags: ["electronics", "tablet", "apple"],
            rating: 4.7,
            inStock: true
          }
        ];
        
        setProducts(data);
        setFilteredProducts(data);
        
        // Extract unique tags for filter
        const tags = new Set(data.flatMap(product => product.tags));
        setAllTags(["all", ...Array.from(tags)]);
        
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  useEffect(() => {
    // Filter products based on search term and active tag
    const filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTag = activeTag === "all" || product.tags.includes(activeTag);
      
      return matchesSearch && matchesTag;
    });
    
    setFilteredProducts(filtered);
  }, [searchTerm, activeTag, products]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            TechHub Store
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Discover the latest technology products at competitive prices.
            Free delivery on orders above MWK 50,000.
          </p>
          <div className="mt-8">
            <a href="#products" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 transition duration-150">
              Browse Products
            </a>
          </div>
        </div>
      </div>
      
      {/* Products Section */}
      <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 space-y-4 md:space-y-0">
          <div className="relative rounded-md shadow-sm max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTag === tag
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 text-xl">No products found</div>
            <button 
              onClick={() => {setSearchTerm(""); setActiveTag("all");}}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
      
      {/* Newsletter Section */}
      <div className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Subscribe to our newsletter
            </h2>
            <p className="mt-2 text-gray-600">
              Get the latest product updates and special offers delivered to your inbox.
            </p>
            <div className="mt-6 flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 appearance-none border border-transparent rounded-l-md shadow-sm py-2 px-4 bg-white text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="flex-shrink-0 bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-r-md font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;