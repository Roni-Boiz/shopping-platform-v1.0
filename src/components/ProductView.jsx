import React from "react";
import { useState,useEffect } from 'react'
import axios from "axios";

import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { Link , useParams} from "react-router-dom";

const product = {
    name: 'Zip Tote Basket',
    price: '$140',
    rating: 4,
    images: [
        {
            id: 1,
            name: 'Angled view',
            src: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
            alt: 'Angled front view with bag zipped and handles upright.',
        } 
         
        // More images...
    ],
    colors: [
        { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
        { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
        { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
    ],
    description: `
      <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
    `,
    details: [
        {
            name: 'Features',
            items: [
                'Multiple strap configurations',
                'Spacious interior with top zip',
                'Leather handle and tabs',
                'Interior dividers',
                'Stainless strap loops',
                'Double stitched construction',
                'Water-resistant',
            ],
        },
        // More sections...
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function ProductView() {
    const {id} =  useParams();
    const [selectedColor, setSelectedColor] = useState(product.colors[0])

    const [items, setItems] = useState([]);

    useEffect(() => getItem, []);
  
    const getItem = () => {
      axios.get('http://localhost:8090/items').then(
        (res) =>{
          
           for(let i = 0; i < res.data.items.length;i++){
              if(id==res.data.items[i]['Id']){
                setItems(res.data.items);
              }
           }
        }
      );
    };
  


    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        {/* Image gallery */}
                        <Tab.Group as="div" className="flex flex-col-reverse">
                            {/* Image selector */}
                             <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
                                
                                    <Tab.Panel key={1}>
                                        <img
                                            src={items[0]['Image']}
                                             
                                            className="h-full w-full object-cover object-center sm:rounded-lg"
                                        />
                                    </Tab.Panel>
                               
                            </Tab.Panels>
                        </Tab.Group>

                        {/* Product info */}
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

                            <div className="mt-3">
                                <h2 className="sr-only">Product information</h2>
                                <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
                            </div>

                            {/* Reviews */}
                            <div className="mt-3">
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                     
                                    <p className="sr-only">{product.rating} out of 5 stars</p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="sr-only">Description</h3>

                                <div
                                    className="space-y-6 text-base text-gray-700"
                                    dangerouslySetInnerHTML={{ __html: product.description }}
                                />
                            </div>
 
                            <div className="sm:flex-col1 mt-10 flex">
                                    <button
                                        type="submit"
                                        className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                    >
                                        Add to bag
                                    </button>

                             
                                </div>
                             
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductView;