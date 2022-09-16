import React from "react";

function Product(props) {
    console.log(props);
    return (
        <>
            {/* <div className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200">
                    <img
                        src={props.product.imageSrc}
                        alt={props.product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                </div>
                <div className="mt-6">
                    <p className="text-sm text-gray-500">{props.product.color}</p>
                    <h3 className="mt-1 font-semibold text-gray-900">
                        <a href={props.product.href}>
                            <span className="absolute inset-0" />
                            {props.product.name}
                        </a>
                    </h3>
                    <p className="mt-1 text-gray-900">{props.product.price}</p>
                </div>
            </div>

            <h4 className="sr-only">Available colors</h4>
            <ul role="list" className="mt-auto flex items-center justify-center space-x-3 pt-6">
                {props.product.availableColors.map((color) => (
                    <li
                        key={color.name}
                        className="h-4 w-4 rounded-full border border-black border-opacity-10"
                        style={{ backgroundColor: color.colorBg }}
                    >
                        <span className="sr-only"> {color.name} </span>
                    </li>
                ))}
            </ul> */}
        </>
    );
}

export default Product();