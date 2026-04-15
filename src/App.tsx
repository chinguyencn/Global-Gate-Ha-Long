/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TodLogic from "./components/TodLogic";
import HaLongStation from "./components/HaLongStation";
import EconomicPotential from "./components/EconomicPotential";
import ProductShowcase from "./components/ProductShowcase";
import FinancialPolicy from "./components/FinancialPolicy";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ZaloButton from "./components/ZaloButton";

export default function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TodLogic />
      <HaLongStation />
      <EconomicPotential />
      <ProductShowcase />
      <FinancialPolicy />
      <ContactForm />
      <Footer />
      <ZaloButton />
    </main>
  );
}
