"use client";
import React from "react";
import { useCart } from "../Context/CartContext";
import CartItem from "@/components/CartItem";
import { games } from "@/data/games";
import CustomBtn from "@/components/CustomBtn";

const Cart: React.FC = () => {
    const { cartItems, cartQuantity, clearCart } = useCart();
    return (
        <div>
            <div>
                <div className="flex flex-col gap-2 items-center mt-8 sm:flex-row sm:justify-between">
                    <h1 className="font-semibold text-2xl dark:text-white text-[#000] md:text-3xl">
                        Shopping Cart
                    </h1>
                    <span className="dark:text-white text-[#000]">
                        {cartQuantity} items
                    </span>
                </div>
                <hr className="dark:text-white text-[#000]" />
                {cartItems.length > 0 ? (
                    <>
                        <div className="flex flex-col justify-center items-center gap-12 py-8 sm:flex-row sm:flex-wrap">
                            {cartItems.map((item) => {
                                return <CartItem key={item.id} {...item} />;
                            })}
                        </div>
                    </>
                ) : (
                    <h1 className="text-center font-bold my-32 text-3xl dark:text-white text-[#000]">
                        Your Cart Is Empty
                    </h1>
                )}
                <>
                    <hr className="dark:text-white text-[#000]" />
                    <div className="flex flex-col gap-4 items-center sm:flex-row sm:justify-between py-2">
                        <span className="font-bold text-2xl dark:text-white text-[#000]">
                            Total: $
                            {cartItems.reduce((total, cartItem) => {
                                const item = games.find(
                                    (x) => x.id === cartItem.id
                                );
                                const totalPrice =
                                    total +
                                    cartItem.quantity * Number(item?.price);

                                return totalPrice;
                            }, 0)}
                        </span>
                        <CustomBtn href="#" onClick={clearCart}>
                            clear all
                        </CustomBtn>
                    </div>
                </>
            </div>
        </div>
    );
};

export default Cart;
