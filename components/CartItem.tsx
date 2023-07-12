import { useCart } from "../app/Context/CartContext";
import { games } from "@/data/games";
import React from "react";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

interface CartItemProps {
    id: number;
    quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ id, quantity }) => {
    const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
        useCart();
    const item = games?.find((x) => x.id === id);
    if (item == null) return null;

    const total = Number(item.price) * quantity;

    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <img
                className="w-[150px] h-[150px] object-cover rounded-e-xl"
                src={item.img}
                alt="GameImg"
            />
            <div className="flex flex-col gap-2 items-center">
                <div className="text-center">
                    <span className="dark:text-gray-300 text-[#000] font-medium ">
                        {item.type}
                    </span>
                    <h3 className="text-[18px] font-bold dark:text-white text-[#000]">
                        {item.title}
                    </h3>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => decreaseCartQuantity(id)}
                        className="bg-[#ffbf00] text-black p-2 rounded-full"
                    >
                        <BiMinus color="#000" />
                    </button>
                    <span className="dark:text-white text-[#000]">
                        {quantity}
                    </span>
                    <button
                        onClick={() => increaseCartQuantity(id)}
                        className="bg-[#ffbf00] p-2 rounded-full"
                    >
                        <BsPlus />
                    </button>
                </div>
                <div>
                    <span className="dark:text-white text-[#000]">{`$${total.toFixed(
                        2
                    )}`}</span>
                </div>
                <div>
                    <button
                        onClick={() => removeFromCart(id)}
                        className="bg-[#ffbf00] py-2 px-8 rounded-tr-2xl text-black font-medium"
                    >
                        Remove from cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
