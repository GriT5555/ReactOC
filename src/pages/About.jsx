import Header from "../compound/Header";
import Footer from "../compound/Footer";
import Homebanner from "../compound/Banner";
import { useState } from "react";

export default function About() {
    return(
        <>
            <Header />
            <div>
                <Homebanner />

            </div>
            <Footer />
        </>
    )
}