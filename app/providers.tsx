"use client";
import { ReactNode, useEffect, useState } from "react";

import { ThemeProvider } from "next-themes";
import CartContextProvider from "./Context/CartContext";
import { Container } from "react-bootstrap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <CartContextProvider>
                <ThemeProvider enableSystem={true} attribute="class">
                    <Container>
                        <Navbar />
                        {children}
                    </Container>
                    <Footer />
                </ThemeProvider>
            </CartContextProvider>
        </>
    );
};

export default Providers;
