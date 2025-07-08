import {
  ArrowLeft,
  Search,
  Filter,
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

export default function SpecialOffers() {
  const { state: cartState, addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [searchQuery, setSearchQuery] = useState("");

  const specialOffers = [
    {
      name: "방울토마토",
      price: "6,500원",
      originalPrice: "8,500원",
      rating: 4.9,
      reviews: 156,
      discount: "24%",
      image:
        "https://images.pexels.com/photos/14657386/pexels-photo-14657386.jpeg",
    },
    {
      name: "신선 배추",
      price: "4,500원",
      originalPrice: "6,000원",
      rating: 4.8,
      reviews: 178,
      discount: "25%",
      image:
        "https://images.pexels.com/photos/9070122/pexels-photo-9070122.jpeg",
    },
    {
      name: "국산 당근",
      price: "2,800원",
      originalPrice: "3,600원",
      rating: 4.7,
      reviews: 203,
      discount: "22%",
      image:
        "https://images.pexels.com/photos/5713740/pexels-photo-5713740.jpeg",
    },
    {
      name: "호박",
      price: "3,800원",
      originalPrice: "5,000원",
      rating: 4.5,
      reviews: 124,
      discount: "24%",
      image:
        "https://images.pexels.com/photos/14015359/pexels-photo-14015359.jpeg",
    },
    {
      name: "곶감",
      price: "12,000원",
      originalPrice: "15,000원",
      rating: 4.9,
      reviews: 95,
      discount: "20%",
      image:
        "https://images.pexels.com/photos/9540184/pexels-photo-9540184.jpeg",
    },
    {
      name: "말린 고추",
      price: "8,500원",
      originalPrice: "11,000원",
      rating: 4.7,
      reviews: 67,
      discount: "23%",
      image:
        "https://images.pexels.com/photos/15661866/pexels-photo-15661866.jpeg",
    },
    {
      name: "신선한 시금치",
      price: "3,200원",
      originalPrice: "4,200원",
      rating: 4.6,
      reviews: 89,
      discount: "24%",
      image:
        "https://images.pexels.com/photos/8557317/pexels-photo-8557317.jpeg",
    },
    {
      name: "참외",
      price: "7,200원",
      originalPrice: "9,500원",
      rating: 4.8,
      reviews: 142,
      discount: "24%",
      image:
        "https://images.pexels.com/photos/9540184/pexels-photo-9540184.jpeg",
    },
  ];

  const handleAddToCart = (product: any, index: number) => {
    addItem({
      id: `special-${index}`,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      category: "특가상품",
    });
  };

  const handleWishlistToggle = (product: any, index: number) => {
    const wishlistItem = {
      id: `special-${index}`,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      category: "특가상품",
      rating: product.rating,
      reviews: product.reviews,
    };

    if (isInWishlist(`special-${index}`)) {
      removeFromWishlist(`special-${index}`);
    } else {
      addToWishlist(wishlistItem);
    }
  };

  const filteredOffers = specialOffers.filter((product) =>
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
            <h1 className="text-2xl font-bold text-primary">특가상품</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 max-w-sm">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="특가상품 검색..."
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
          <h2 className="text-3xl font-bold mb-2">오늘의 특가상품</h2>
          <p className="text-muted-foreground">한정 수량! 놓치지 마세요</p>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="특가상품 검색..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredOffers.map((product, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-green-50 to-green-100 rounded-t-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
                    {product.discount} 할인
                  </Badge>
                  <Button
                    size="icon"
                    variant="secondary"
                    className={`absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isInWishlist(`special-${index}`) ? "text-red-500" : ""
                    }`}
                    onClick={() => handleWishlistToggle(product, index)}
                  >
                    <Heart
                      className={`w-4 h-4 ${isInWishlist(`special-${index}`) ? "fill-current" : ""}`}
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

        {filteredOffers.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
