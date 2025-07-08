import { useState } from "react";
import { ArrowLeft, Search, Filter, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

export default function Vegetables() {
  const { state: cartState, addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [searchQuery, setSearchQuery] = useState("");

  const vegetables = [
    {
      name: "가지",
      price: "3,200원",
      originalPrice: "4,200원",
      rating: 4.5,
      reviews: 89,
    },
    {
      name: "감자",
      price: "2,800원",
      originalPrice: "3,600원",
      rating: 4.7,
      reviews: 145,
    },
    {
      name: "깻잎",
      price: "3,400원",
      originalPrice: "4,500원",
      rating: 4.8,
      reviews: 145,
    },
    {
      name: "고구마",
      price: "3,500원",
      originalPrice: "4,800원",
      rating: 4.8,
      reviews: 203,
    },
    {
      name: "늙은호박",
      price: "4,200원",
      originalPrice: "5,500원",
      rating: 4.7,
      reviews: 76,
    },
    {
      name: "당근",
      price: "2,800원",
      originalPrice: "3,600원",
      rating: 4.7,
      reviews: 203,
    },
    {
      name: "대파",
      price: "2,400원",
      originalPrice: "3,200원",
      rating: 4.7,
      reviews: 234,
    },
    {
      name: "무",
      price: "2,500원",
      originalPrice: "3,300원",
      rating: 4.6,
      reviews: 167,
    },
    {
      name: "방울토마토",
      price: "6,500원",
      originalPrice: "8,500원",
      rating: 4.9,
      reviews: 156,
    },
    {
      name: "배추",
      price: "4,500원",
      originalPrice: "6,000원",
      rating: 4.8,
      reviews: 178,
    },
    {
      name: "비트",
      price: "4,500원",
      originalPrice: "6,000원",
      rating: 4.8,
      reviews: 65,
    },
    {
      name: "부추",
      price: "2,700원",
      originalPrice: "3,600원",
      rating: 4.5,
      reviews: 156,
    },
    {
      name: "상추",
      price: "2,900원",
      originalPrice: "3,800원",
      rating: 4.5,
      reviews: 124,
    },
    {
      name: "시금치",
      price: "3,200원",
      originalPrice: "4,200원",
      rating: 4.6,
      reviews: 89,
    },
    {
      name: "실파",
      price: "2,300원",
      originalPrice: "3,100원",
      rating: 4.5,
      reviews: 178,
    },
    {
      name: "애호박",
      price: "3,300원",
      originalPrice: "4,400원",
      rating: 4.4,
      reviews: 98,
    },
    {
      name: "양배추",
      price: "3,600원",
      originalPrice: "4,800원",
      rating: 4.6,
      reviews: 134,
    },
    {
      name: "오이",
      price: "3,100원",
      originalPrice: "4,100원",
      rating: 4.6,
      reviews: 156,
    },
    {
      name: "적양배추",
      price: "4,100원",
      originalPrice: "5,400원",
      rating: 4.7,
      reviews: 87,
    },
    {
      name: "쪽파",
      price: "2,600원",
      originalPrice: "3,400원",
      rating: 4.6,
      reviews: 189,
    },
    {
      name: "청경채",
      price: "2,800원",
      originalPrice: "3,700원",
      rating: 4.5,
      reviews: 112,
    },
    {
      name: "토란대",
      price: "3,800원",
      originalPrice: "5,000원",
      rating: 4.4,
      reviews: 43,
    },
    {
      name: "파",
      price: "2,200원",
      originalPrice: "2,900원",
      rating: 4.6,
      reviews: 267,
    },
    {
      name: "호박",
      price: "3,800원",
      originalPrice: "5,000원",
      rating: 4.5,
      reviews: 124,
    },
  ];

  const handleAddToCart = (vegetable: any, index: number) => {
    addItem({
      id: `vegetable-${index}`,
      name: vegetable.name,
      price: vegetable.price,
      originalPrice: vegetable.originalPrice,
      image:
        "https://images.pexels.com/photos/8557317/pexels-photo-8557317.jpeg",
      category: "채소",
    });
  };

  const handleWishlistToggle = (vegetable: any, index: number) => {
    const wishlistItem = {
      id: `vegetable-${index}`,
      name: vegetable.name,
      price: vegetable.price,
      originalPrice: vegetable.originalPrice,
      image:
        "https://images.pexels.com/photos/8557317/pexels-photo-8557317.jpeg",
      category: "채소",
      rating: vegetable.rating,
      reviews: vegetable.reviews,
    };

    if (isInWishlist(`vegetable-${index}`)) {
      removeFromWishlist(`vegetable-${index}`);
    } else {
      addToWishlist(wishlistItem);
    }
  };

  const filteredVegetables = vegetables.filter((vegetable) =>
    vegetable.name.toLowerCase().includes(searchQuery.toLowerCase()),
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
            <h1 className="text-2xl font-bold text-primary">채소</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 max-w-sm">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="채소 검색..."
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
          <h2 className="text-3xl font-bold mb-2">신선한 채소</h2>
          <p className="text-muted-foreground">
            농장에서 직접 배송되는 신선한 채소를 만나보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVegetables.map((vegetable, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-green-50 to-green-100 rounded-t-lg flex items-center justify-center">
                    <span className="text-6xl">🥬</span>
                  </div>
                  <Button
                    size="icon"
                    variant="secondary"
                    className={`absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isInWishlist(`vegetable-${index}`) ? "text-red-500" : ""
                    }`}
                    onClick={() => handleWishlistToggle(vegetable, index)}
                  >
                    <Heart
                      className={`w-4 h-4 ${isInWishlist(`vegetable-${index}`) ? "fill-current" : ""}`}
                    />
                  </Button>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2">{vegetable.name}</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">⭐ {vegetable.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({vegetable.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold text-primary">
                      {vegetable.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {vegetable.originalPrice}
                    </span>
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => handleAddToCart(vegetable, index)}
                  >
                    장바구니 담기
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
