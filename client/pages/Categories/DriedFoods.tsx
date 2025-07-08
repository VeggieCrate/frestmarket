import { useState } from "react";
import { ArrowLeft, Search, Filter, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function DriedFoods() {
  const [cartCount, setCartCount] = useState(0);

  const driedFoods = [
    {
      name: "가지고추",
      price: "4,200원",
      originalPrice: "5,500원",
      rating: 4.6,
      reviews: 112,
    },
    {
      name: "감말랭이",
      price: "8,500원",
      originalPrice: "11,000원",
      rating: 4.7,
      reviews: 78,
    },
    {
      name: "건고추",
      price: "18,500원",
      originalPrice: "23,000원",
      rating: 4.8,
      reviews: 95,
    },
    {
      name: "곶감",
      price: "12,000원",
      originalPrice: "15,000원",
      rating: 4.9,
      reviews: 95,
    },
    {
      name: "꽈리고추",
      price: "3,800원",
      originalPrice: "5,000원",
      rating: 4.7,
      reviews: 145,
    },
    {
      name: "말린 가지",
      price: "8,500원",
      originalPrice: "11,000원",
      rating: 4.6,
      reviews: 67,
    },
    {
      name: "말린 고추",
      price: "8,500원",
      originalPrice: "11,000원",
      rating: 4.7,
      reviews: 67,
    },
    {
      name: "말린 다래순",
      price: "12,800원",
      originalPrice: "16,500원",
      rating: 4.8,
      reviews: 43,
    },
    {
      name: "말린 대추",
      price: "11,500원",
      originalPrice: "15,000원",
      rating: 4.8,
      reviews: 89,
    },
    {
      name: "말린 취나물",
      price: "9,800원",
      originalPrice: "12,800원",
      rating: 4.7,
      reviews: 54,
    },
    {
      name: "말린 칡",
      price: "15,500원",
      originalPrice: "19,500원",
      rating: 4.9,
      reviews: 34,
    },
    {
      name: "말린 호박",
      price: "7,200원",
      originalPrice: "9,500원",
      rating: 4.5,
      reviews: 78,
    },
    {
      name: "무말랭이",
      price: "6,800원",
      originalPrice: "8,800원",
      rating: 4.6,
      reviews: 134,
    },
    {
      name: "무청 시래기",
      price: "5,500원",
      originalPrice: "7,200원",
      rating: 4.5,
      reviews: 156,
    },
    {
      name: "박고지",
      price: "6,200원",
      originalPrice: "8,100원",
      rating: 4.4,
      reviews: 89,
    },
    {
      name: "아삭이고추",
      price: "4,100원",
      originalPrice: "5,400원",
      rating: 4.5,
      reviews: 98,
    },
    {
      name: "풋고추",
      price: "3,500원",
      originalPrice: "4,600원",
      rating: 4.5,
      reviews: 167,
    },
    {
      name: "홍고추",
      price: "16,800원",
      originalPrice: "21,000원",
      rating: 4.7,
      reviews: 76,
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
            <h1 className="text-2xl font-bold text-primary">건조식품</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 max-w-sm">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="건조식품 검색..." className="pl-10" />
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
          <h2 className="text-3xl font-bold mb-2">정성스럽게 말린 건조식품</h2>
          <p className="text-muted-foreground">
            오래 보관할 수 있는 영양만점 건조식품을 만나보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {driedFoods.map((food, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-red-50 to-orange-100 rounded-t-lg flex items-center justify-center">
                    <span className="text-6xl">🌶️</span>
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
                  <h4 className="font-semibold mb-2">{food.name}</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">⭐ {food.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({food.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold text-primary">
                      {food.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {food.originalPrice}
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
