import { useState } from "react";
import { ArrowLeft, Search, Filter, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function Grains() {
  const [cartCount, setCartCount] = useState(0);

  const grains = [
    {
      name: "들깨",
      price: "18,500원",
      originalPrice: "23,000원",
      rating: 4.9,
      reviews: 76,
    },
    {
      name: "땅콩",
      price: "13,500원",
      originalPrice: "17,000원",
      rating: 4.7,
      reviews: 145,
    },
    {
      name: "백태",
      price: "12,500원",
      originalPrice: "16,000원",
      rating: 4.8,
      reviews: 134,
    },
    {
      name: "서리태",
      price: "15,800원",
      originalPrice: "20,000원",
      rating: 4.9,
      reviews: 89,
    },
    {
      name: "옥수수",
      price: "4,500원",
      originalPrice: "6,000원",
      rating: 4.6,
      reviews: 189,
    },
    {
      name: "옥수수수염",
      price: "3,200원",
      originalPrice: "4,200원",
      rating: 4.4,
      reviews: 43,
    },
    {
      name: "옥수수쌀",
      price: "8,800원",
      originalPrice: "11,500원",
      rating: 4.7,
      reviews: 95,
    },
    {
      name: "줄강낭콩",
      price: "8,900원",
      originalPrice: "11,500원",
      rating: 4.6,
      reviews: 67,
    },
    {
      name: "참깨",
      price: "22,800원",
      originalPrice: "28,000원",
      rating: 4.8,
      reviews: 112,
    },
    {
      name: "팥",
      price: "11,200원",
      originalPrice: "14,500원",
      rating: 4.7,
      reviews: 156,
    },
    {
      name: "풋콩",
      price: "6,500원",
      originalPrice: "8,500원",
      rating: 4.5,
      reviews: 78,
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
            <h1 className="text-2xl font-bold text-primary">곡물/콩류</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 max-w-sm">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="곡물 검색..." className="pl-10" />
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
          <h2 className="text-3xl font-bold mb-2">건강한 곡물과 콩류</h2>
          <p className="text-muted-foreground">
            영양 가득한 곡물과 콩류로 건강한 한 끼를 만들어보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {grains.map((grain, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-amber-50 to-yellow-100 rounded-t-lg flex items-center justify-center">
                    <span className="text-6xl">🌾</span>
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
                  <h4 className="font-semibold mb-2">{grain.name}</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">⭐ {grain.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({grain.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold text-primary">
                      {grain.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {grain.originalPrice}
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
