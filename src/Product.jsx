import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { StarIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon, TagIcon } from "@heroicons/react/24/outline";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Data is hardcoded for demonstration purposes
  // In a real application, you would likely fetch this from an API
  useEffect(() => {
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

    setTimeout(() => {
      try {
        // Find product by slug
        const foundProduct = data.find(p => p.slug === id);
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        setError("Error loading product");
      } finally {
        setLoading(false);
      }
    }, 500); // Simulating network delay
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-red-600 mb-4">{error || "Product not found"}</h2>
        <Link 
          to="/products" 
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link 
            to="/products" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-1" />
            Back to Products
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/2">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Product Details */}
            <div className="md:w-1/2 p-8">
              <div className="flex justify-between items-start mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <div className="flex items-center">
                  <StarIcon className="h-6 w-6 text-yellow-400" />
                  <span className="ml-1 text-lg text-gray-600">{product.rating}</span>
                </div>
              </div>
              
              <p className="text-2xl font-bold text-gray-900 mb-6">{product.price}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                  >
                    <TagIcon className="h-4 w-4 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Description</h2>
                <p className="text-gray-700">{product.details || product.description}</p>
              </div>
              
              <div className="mt-8">
                <button
                  disabled={!product.inStock}
                  className={`w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm ${
                    product.inStock
                      ? "bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <ShoppingCartIcon className="h-5 w-5 mr-2" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
              </div>
              
              <div className="mt-4">
                {product.inStock ? (
                  <p className="text-sm text-green-600 flex items-center justify-center">
                    <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                    In Stock
                  </p>
                ) : (
                  <p className="text-sm text-red-600 flex items-center justify-center">
                    <span className="h-2 w-2 bg-red-600 rounded-full mr-2"></span>
                    Currently Unavailable
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;