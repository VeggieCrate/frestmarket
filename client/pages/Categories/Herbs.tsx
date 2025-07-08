import { useState } from "react";
import { ArrowLeft, Search, Filter, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function Herbs() {
  const [cartCount, setCartCount] = useState(0);

  const herbs = [
    {
      name: "겨우살이",
      price: "25,500원",
      originalPrice: "32,000원",
      rating: 4.9,
      reviews: 34,
    },
    {
      name: "들깨",
      price: "18,500원",
      originalPrice: "23,000원",
      rating: 4.9,
      reviews: 76,
    },
    {
      name: "말린 다래순",
      price: "12,800원",
      originalPrice: "16,500원",
      rating: 4.8,
      reviews: 43,
    },
    {
      name: "말린 칡",
      price: "15,500원",
      originalPrice: "19,500원",
      rating: 4.9,
      reviews: 34,
    },
    {
      name: "뽕나무 뿌리",
      price: "28,500원",
      originalPrice: "35,000원",
      rating: 4.9,
      reviews: 43,
    },
    {
      name: "복분자",
      price: "13,500원",
      originalPrice: "17,000원",
      rating: 4.9,
      reviews: 76,
    },
    {
      name: "오가피",
      price: "22,800원",
      originalPrice: "28,500원",
      rating: 4.8,
      reviews: 67,
    },
    {
      name: "옥수수수염",
      price: "3,200원",
      originalPrice: "4,200원",
      rating: 4.4,
      reviews: 43,
    },
    {
      name: "엄나무",
      price: "18,800원",
      originalPrice: "24,000원",
      rating: 4.8,
      reviews: 56,
    },
    {
      name: "엄나무순",
      price: "12,500원",
      originalPrice: "16,000원",
      rating: 4.9,
      reviews: 45,
    },
    {
      name: "참깨",
      price: "22,800원",
      originalPrice: "28,000원",
      rating: 4.8,
      reviews: 112,
    },
    {
      name: "헛개열매",
      price: "12,800원",
      originalPrice: "16,500원",
      rating: 4.8,
      reviews: 62,
    },
  ];

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

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
            <h1 className="text-2xl font-bold text-primary">약초/허브</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 max-w-sm">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="약초 검색..." className="pl-10" />
              </div>
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container px-4 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">
            자연의 건강 지킴이, 약초와 허브
          </h2>
          <p className="text-muted-foreground">
            전통적으로 건강에 좋다고 알려진 약초와 허브를 만나보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {herbs.map((herb, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-t-lg flex items-center justify-center">
                    <span className="text-6xl">🍃</span>
                  </div>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2">{herb.name}</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">⭐ {herb.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({herb.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold text-primary">
                      {herb.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {herb.originalPrice}
                    </span>
                  </div>
                  <Button className="w-full" onClick={addToCart}>
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
