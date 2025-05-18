'use client'

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import ScrollToTop from "@/components/shared/ScrollToTop";
import { ensureToken } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "../styles/styles.css";

const AppLayout = ({ children }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        ensureToken();
    }, []);

    if (!isMounted) return null; // Prevents hydration mismatch

    return (
        <div id="page" className="full-page">
            <ToastContainer />
            <Header />
            <main id="content" className="site-main container-fluid px-0 mx-0">
                {children}
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default AppLayout;
