import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import Categories from "./pages/Categories";
import SpecialOffers from "./pages/SpecialOffers";
import NewProducts from "./pages/NewProducts";
import SearchResults from "./pages/SearchResults";
import OutOfStock from "./pages/OutOfStock";
import Orders from "./pages/Orders";
import ShippingInfo from "./pages/ShippingInfo";
import ReturnsExchange from "./pages/ReturnsExchange";
import CustomerService from "./pages/CustomerService";
import Vegetables from "./pages/Categories/Vegetables";
import Fruits from "./pages/Categories/Fruits";
import WildVegetables from "./pages/Categories/WildVegetables";
import Grains from "./pages/Categories/Grains";
import DriedFoods from "./pages/Categories/DriedFoods";
import Herbs from "./pages/Categories/Herbs";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { SearchProvider } from "./contexts/SearchContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <WishlistProvider>
        <SearchProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/special-offers" element={<SpecialOffers />} />
                <Route path="/new-products" element={<NewProducts />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/out-of-stock" element={<OutOfStock />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/shipping-info" element={<ShippingInfo />} />
                <Route path="/returns-exchange" element={<ReturnsExchange />} />
                <Route path="/customer-service" element={<CustomerService />} />
                <Route path="/categories/vegetables" element={<Vegetables />} />
                <Route path="/categories/fruits" element={<Fruits />} />
                <Route
                  path="/categories/wild-vegetables"
                  element={<WildVegetables />}
                />
                <Route path="/categories/grains" element={<Grains />} />
                <Route
                  path="/categories/dried-foods"
                  element={<DriedFoods />}
                />
                <Route path="/categories/herbs" element={<Herbs />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </SearchProvider>
      </WishlistProvider>
    </CartProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
