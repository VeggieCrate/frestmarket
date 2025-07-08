import {
  ArrowLeft,
  Search,
  Filter,
  Heart,
  ShoppingCart,
  Star,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

export default function NewProducts() {
  const { state: cartState, addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [searchQuery, setSearchQuery] = useState("");

  const newProducts = [
    {
      name: "유기농 비트",
      price: "4,500원",
      originalPrice: "6,000원",
      rating: 4.8,
      reviews: 65,
      isNew: true,
    },
    {
      name: "청경채",
      price: "2,800원",
      originalPrice: "3,700원",
      rating: 4.5,
      reviews: 112,
      isNew: true,
    },
    {
      name: "엄나무순",
      price: "12,500원",
      originalPrice: "16,000원",
      rating: 4.9,
      reviews: 45,
      isNew: true,
    },
    {
      name: "복분자",
      price: "13,500원",
      originalPrice: "17,000원",
      rating: 4.9,
      reviews: 76,
      isNew: true,
    },
    {
      name: "말린 칡",
      price: "15,500원",
      originalPrice: "19,500원",
      rating: 4.9,
      reviews: 34,
      isNew: true,
    },
    {
      name: "모둠쌈채",
      price: "5,200원",
      originalPrice: "6,800원",
      rating: 4.7,
      reviews: 145,
      isNew: true,
    },
    {
      name: "알토란",
      price: "7,500원",
      originalPrice: "9,800원",
      rating: 4.8,
      reviews: 67,
      isNew: true,
    },
    {
      name: "톳나물",
      price: "6,800원",
      originalPrice: "8,900원",
      rating: 4.8,
      reviews: 56,
      isNew: true,
    },
  ];

  const handleAddToCart = (product: any, index: number) => {
    addItem({
      id: `new-${index}`,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: "placeholder",
      category: "신상품",
    });
  };

  const handleWishlistToggle = (product: any, index: number) => {
    const wishlistItem = {
      id: `new-${index}`,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: "placeholder",
      category: "신상품",
      rating: product.rating,
      reviews: product.reviews,
    };

    if (isInWishlist(`new-${index}`)) {
      removeFromWishlist(`new-${index}`);
    } else {
      addToWishlist(wishlistItem);
    }
  };

  const filteredProducts = newProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-primary">신상품</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 max-w-sm">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="신상품 검색..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-5 h-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartState.totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cartState.totalItems}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container px-4 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-primary" />
            새롭게 입고된 상품
          </h2>
          <p className="text-muted-foreground">
            갓 입고된 신선한 농산물을 만나보세요
          </p>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="신상품 검색..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-green-50 to-green-100 rounded-t-lg flex items-center justify-center">
                    <span className="text-6xl">🌱</span>
                  </div>
                  {product.isNew && (
                    <Badge className="absolute top-3 left-3 bg-blue-500 text-white">
                      <Sparkles className="w-3 h-3 mr-1" />
                      NEW
                    </Badge>
                  )}
                  <Button
                    size="icon"
                    variant="secondary"
                    className={`absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isInWishlist(`new-${index}`) ? "text-red-500" : ""
                    }`}
                    onClick={() => handleWishlistToggle(product, index)}
                  >
                    <Heart
                      className={`w-4 h-4 ${isInWishlist(`new-${index}`) ? "fill-current" : ""}`}
                    />
                  </Button>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2">{product.name}</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">
                      {product.rating}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold text-primary">
                      {product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => handleAddToCart(product, index)}
                  >
                    장바구니 담기
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
