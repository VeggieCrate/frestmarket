import { useState } from "react";
import { ArrowLeft, Search, Filter, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function WildVegetables() {
  const [cartCount, setCartCount] = useState(0);

  const wildVegetables = [
    {
      name: "고들빼기",
      price: "4,500원",
      originalPrice: "6,000원",
      rating: 4.6,
      reviews: 78,
    },
    {
      name: "고사리",
      price: "8,800원",
      originalPrice: "11,500원",
      rating: 4.8,
      reviews: 134,
    },
    {
      name: "고추잎",
      price: "3,200원",
      originalPrice: "4,200원",
      rating: 4.5,
      reviews: 89,
    },
    {
      name: "근대",
      price: "2,800원",
      originalPrice: "3,700원",
      rating: 4.4,
      reviews: 67,
    },
    {
      name: "길경",
      price: "6,500원",
      originalPrice: "8,500원",
      rating: 4.7,
      reviews: 95,
    },
    {
      name: "냉이",
      price: "4,800원",
      originalPrice: "6,300원",
      rating: 4.8,
      reviews: 156,
    },
    {
      name: "노각",
      price: "3,500원",
      originalPrice: "4,600원",
      rating: 4.5,
      reviews: 76,
    },
    {
      name: "달래",
      price: "5,200원",
      originalPrice: "6,800원",
      rating: 4.9,
      reviews: 143,
    },
    {
      name: "도라지",
      price: "7,800원",
      originalPrice: "10,200원",
      rating: 4.7,
      reviews: 112,
    },
    {
      name: "돌미나리",
      price: "4,200원",
      originalPrice: "5,500원",
      rating: 4.6,
      reviews: 87,
    },
    {
      name: "두릅",
      price: "9,500원",
      originalPrice: "12,400원",
      rating: 4.9,
      reviews: 98,
    },
    {
      name: "머위대",
      price: "3,800원",
      originalPrice: "5,000원",
      rating: 4.4,
      reviews: 54,
    },
    {
      name: "모둠쌈채",
      price: "5,200원",
      originalPrice: "6,800원",
      rating: 4.7,
      reviews: 145,
    },
    {
      name: "미나리",
      price: "3,600원",
      originalPrice: "4,700원",
      rating: 4.7,
      reviews: 167,
    },
    {
      name: "민들레",
      price: "5,800원",
      originalPrice: "7,600원",
      rating: 4.8,
      reviews: 76,
    },
    {
      name: "방풍나물",
      price: "6,200원",
      originalPrice: "8,100원",
      rating: 4.6,
      reviews: 65,
    },
    {
      name: "비름",
      price: "3,400원",
      originalPrice: "4,500원",
      rating: 4.5,
      reviews: 43,
    },
    {
      name: "쌈채류",
      price: "4,100원",
      originalPrice: "5,400원",
      rating: 4.6,
      reviews: 134,
    },
    {
      name: "쑥갓",
      price: "3,200원",
      originalPrice: "4,200원",
      rating: 4.5,
      reviews: 189,
    },
    {
      name: "씀바귀",
      price: "4,800원",
      originalPrice: "6,300원",
      rating: 4.7,
      reviews: 78,
    },
    {
      name: "아욱",
      price: "2,900원",
      originalPrice: "3,800원",
      rating: 4.4,
      reviews: 156,
    },
    {
      name: "알토란",
      price: "7,500원",
      originalPrice: "9,800원",
      rating: 4.8,
      reviews: 67,
    },
    {
      name: "엄나무순",
      price: "12,500원",
      originalPrice: "16,000원",
      rating: 4.9,
      reviews: 45,
    },
    {
      name: "원추리",
      price: "5,500원",
      originalPrice: "7,200원",
      rating: 4.6,
      reviews: 67,
    },
    {
      name: "월동추",
      price: "4,800원",
      originalPrice: "6,300원",
      rating: 4.6,
      reviews: 89,
    },
    {
      name: "참나물",
      price: "4,500원",
      originalPrice: "5,900원",
      rating: 4.7,
      reviews: 123,
    },
    {
      name: "톳나물",
      price: "6,800원",
      originalPrice: "8,900원",
      rating: 4.8,
      reviews: 56,
    },
    {
      name: "호박잎",
      price: "3,100원",
      originalPrice: "4,100원",
      rating: 4.5,
      reviews: 167,
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
            <h1 className="text-2xl font-bold text-primary">나물/산채</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 max-w-sm">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="나물 검색..." className="pl-10" />
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
            자연이 주는 선물, 나물과 산채
          </h2>
          <p className="text-muted-foreground">
            산과 들에서 자란 건강한 나물을 만나보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wildVegetables.map((vegetable, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-emerald-50 to-green-100 rounded-t-lg flex items-center justify-center">
                    <span className="text-6xl">🌿</span>
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
