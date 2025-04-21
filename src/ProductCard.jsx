import React from "react";
import { StarIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { TagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { name, description, image, price, tags, rating, inStock, slug } = product;
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-200">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover object-center"
        />
        {!inStock && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            Out of Stock
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
          <div className="flex items-center">
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <span className="ml-1 text-gray-600">{rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800"
            >
              <TagIcon className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-gray-900">{price}</span>
          <button
            disabled={!inStock}
            className={`inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm ${
              inStock
                ? "bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            <ShoppingCartIcon className="h-4 w-4 mr-1" />
            {inStock ? "Add to Cart" : "Sold Out"}
          </button>
        </div>
      </div>
      <Link
        to={`/products/${slug}`}
        className="block py-2 text-center text-sm text-indigo-600 hover:bg-indigo-50 border-t border-gray-200 transition-colors"
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;