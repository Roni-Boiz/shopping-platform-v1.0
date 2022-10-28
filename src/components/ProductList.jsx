import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
 
const products = [];
 

function ProductList() {

  const [items, setItems] = useState([]);

  useEffect(() => getItem, []);

  const getItem = () => {
    axios.get('http://localhost:8090/items').then(
      (res) =>{
         setItems(res.data.items);
         for(let i = 0; i < res.data.items.length;i++){
           products.push(
            {
              id: res.data.items[i]['Id'],
              name: res.data.items[i]['Name'],
              price:  "Rs"+res.data.items[i]['Price'],
              href: "../ProductView/"+res.data.items[i]['Id'],
              imageSrc:
              res.data.items[i]['Image'],
              imageAlt:
              res.data.items[i]['Description'],
              availableColors: [
                { name: "Black", colorBg: "#111827" },
                { name: "Brass", colorBg: "#FDE68A" },
                { name: "Chrome", colorBg: "#E5E7EB" },
              ],
            } 
           )
         }
      }
    );
  };

  return (
    <div className="bg-white">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Trending products
          </h2>
          <a
            href="#"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            See everything
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="relative mt-8">
          <div className="relative -mb-6 w-full overflow-x-auto pb-6">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
            >
              {products.map((product) => (
                <li
                  key={product.id}
                  className="inline-flex w-64 flex-col text-center lg:w-auto"
                >
                  <div className="group relative">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-6">
                      <p className="text-sm text-gray-500">{product.color}</p>
                      <h3 className="mt-1 font-semibold text-gray-900">
                         
                      </h3>
                   

                      <p className="mt-1 text-gray-900">{product.price}</p>
                      <div className="sm:flex-col1 mt-10 flex">
                                    <button
                                        type="submit"
                                        className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                    >
                                        Add to Cart
                                    </button>
                                    </div>
                    </div>
                  </div>

                    </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex px-4 sm:hidden">
          <a
            href="#"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            See everything
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
