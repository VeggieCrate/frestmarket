import { useState } from "react";
import { ArrowLeft, Search, Filter, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function Fruits() {
  const [cartCount, setCartCount] = useState(0);

  const fruits = [
    {
      name: "감말랭이",
      price: "8,500원",
      originalPrice: "11,000원",
      rating: 4.7,
      reviews: 78,
    },
    {
      name: "곶감",
      price: "12,000원",
      originalPrice: "15,000원",
      rating: 4.9,
      reviews: 95,
    },
    {
      name: "대추",
      price: "9,800원",
      originalPrice: "12,800원",
      rating: 4.8,
      reviews: 134,
    },
    {
      name: "말린 대추",
      price: "11,500원",
      originalPrice: "15,000원",
      rating: 4.8,
      reviews: 89,
    },
    {
      name: "매실",
      price: "7,200원",
      originalPrice: "9,500원",
      rating: 4.6,
      reviews: 167,
    },
    {
      name: "밤",
      price: "8,900원",
      originalPrice: "11,500원",
      rating: 4.7,
      reviews: 145,
    },
    {
      name: "방울토마토",
      price: "6,500원",
      originalPrice: "8,500원",
      rating: 4.9,
      reviews: 156,
    },
    {
      name: "보리수",
      price: "6,800원",
      originalPrice: "8,800원",
      rating: 4.5,
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
      name: "앵두",
      price: "8,800원",
      originalPrice: "11,500원",
      rating: 4.7,
      reviews: 54,
    },
    {
      name: "옥수수",
      price: "4,500원",
      originalPrice: "6,000원",
      rating: 4.6,
      reviews: 189,
    },
    {
      name: "은행",
      price: "15,500원",
      originalPrice: "19,000원",
      rating: 4.6,
      reviews: 67,
    },
    {
      name: "참외",
      price: "7,200원",
      originalPrice: "9,500원",
      rating: 4.8,
      reviews: 142,
    },
    {
      name: "헛개열매",
      price: "12,800원",
      originalPrice: "16,500원",
      rating: 4.8,
      reviews: 62,
    },
    {
      name: "홍시",
      price: "9,200원",
      originalPrice: "12,000원",
      rating: 4.8,
      reviews: 98,
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
            <h1 className="text-2xl font-bold text-primary">과일</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 max-w-sm">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="과일 검색..." className="pl-10" />
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
          <h2 className="text-3xl font-bold mb-2">신선한 과일</h2>
          <p className="text-muted-foreground">
            달콤하고 신선한 과일을 만나보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fruits.map((fruit, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-orange-50 to-red-100 rounded-t-lg flex items-center justify-center">
                    <span className="text-6xl">🍎</span>
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
                  <h4 className="font-semibold mb-2">{fruit.name}</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">⭐ {fruit.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({fruit.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold text-primary">
                      {fruit.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {fruit.originalPrice}
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
