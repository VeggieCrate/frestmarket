import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Search,
  Filter,
  Heart,
  ShoppingCart,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useSearchParams } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const { state: cartState, addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // All products from all categories
  const allProducts = [
    // 채소
    {
      name: "가지",
      price: "3,200원",
      originalPrice: "4,200원",
      rating: 4.5,
      reviews: 89,
      category: "채소",
      categoryLink: "/categories/vegetables",
      inStock: true,
    },
    {
      name: "감자",
      price: "2,800원",
      originalPrice: "3,600원",
      rating: 4.7,
      reviews: 145,
      category: "채소",
      categoryLink: "/categories/vegetables",
      inStock: true,
    },
    {
      name: "깻잎",
      price: "3,400원",
      originalPrice: "4,500원",
      rating: 4.8,
      reviews: 145,
      category: "채소",
      categoryLink: "/categories/vegetables",
      inStock: true,
    },
    {
      name: "고구마",
      price: "3,500원",
      originalPrice: "4,800원",
      rating: 4.8,
      reviews: 203,
      category: "채소",
      categoryLink: "/categories/vegetables",
      inStock: true,
    },
    {
      name: "당근",
      price: "2,800원",
      originalPrice: "3,600원",
      rating: 4.7,
      reviews: 203,
      category: "채소",
      categoryLink: "/categories/vegetables",
      inStock: true,
    },
    {
      name: "무",
      price: "2,500원",
      originalPrice: "3,300원",
      rating: 4.6,
      reviews: 167,
      category: "채소",
      categoryLink: "/categories/vegetables",
      inStock: true,
    },
    {
      name: "배추",
      price: "4,500원",
      originalPrice: "6,000원",
      rating: 4.8,
      reviews: 178,
      category: "채소",
      categoryLink: "/categories/vegetables",
      inStock: true,
    },
    {
      name: "시금치",
      price: "3,200원",
      originalPrice: "4,200원",
      rating: 4.6,
      reviews: 89,
      category: "채소",
      categoryLink: "/categories/vegetables",
      inStock: true,
    },
    {
      name: "상추",
      price: "2,900원",
      originalPrice: "3,800원",
      rating: 4.5,
      reviews: 124,
      category: "채소",
      categoryLink: "/categories/vegetables",
      inStock: true,
    },
    {
      name: "오이",
      price: "3,100원",
      originalPrice: "4,100원",
      rating: 4.6,
      reviews: 156,
      category: "채소",
      categoryLink: "/categories/vegetables",
      inStock: false,
    },
    {
      name: "호박",
      price: "3,800원",
      originalPrice: "5,000원",
      rating: 4.5,
      reviews: 124,
      category: "채소",
      categoryLink: "/categories/vegetables",
      inStock: true,
    },
    {
      name: "방울토마토",
      price: "6,500원",
      originalPrice: "8,500원",
      rating: 4.9,
      reviews: 156,
      category: "채소",
      categoryLink: "/categories/vegetables",
      inStock: true,
    },

    // 과일
    {
      name: "감말랭이",
      price: "8,500원",
      originalPrice: "11,000원",
      rating: 4.7,
      reviews: 78,
      category: "과일",
      categoryLink: "/categories/fruits",
      inStock: true,
    },
    {
      name: "곶감",
      price: "12,000원",
      originalPrice: "15,000원",
      rating: 4.9,
      reviews: 95,
      category: "과일",
      categoryLink: "/categories/fruits",
      inStock: true,
    },
    {
      name: "대추",
      price: "9,800원",
      originalPrice: "12,800원",
      rating: 4.8,
      reviews: 134,
      category: "과일",
      categoryLink: "/categories/fruits",
      inStock: true,
    },
    {
      name: "말린 대추",
      price: "11,500원",
      originalPrice: "15,000원",
      rating: 4.8,
      reviews: 89,
      category: "과일",
      categoryLink: "/categories/fruits",
      inStock: false,
    },
    {
      name: "매실",
      price: "7,200원",
      originalPrice: "9,500원",
      rating: 4.6,
      reviews: 167,
      category: "과일",
      categoryLink: "/categories/fruits",
      inStock: true,
    },
    {
      name: "밤",
      price: "8,900원",
      originalPrice: "11,500원",
      rating: 4.7,
      reviews: 145,
      category: "과일",
      categoryLink: "/categories/fruits",
      inStock: true,
    },
    {
      name: "복분자",
      price: "13,500원",
      originalPrice: "17,000원",
      rating: 4.9,
      reviews: 76,
      category: "과일",
      categoryLink: "/categories/fruits",
      inStock: true,
    },
    {
      name: "앵두",
      price: "8,800원",
      originalPrice: "11,500원",
      rating: 4.7,
      reviews: 54,
      category: "과일",
      categoryLink: "/categories/fruits",
      inStock: true,
    },
    {
      name: "참외",
      price: "7,200원",
      originalPrice: "9,500원",
      rating: 4.8,
      reviews: 142,
      category: "과일",
      categoryLink: "/categories/fruits",
      inStock: true,
    },
    {
      name: "홍시",
      price: "9,200원",
      originalPrice: "12,000원",
      rating: 4.8,
      reviews: 98,
      category: "과일",
      categoryLink: "/categories/fruits",
      inStock: false,
    },

    // 나물/산채
    {
      name: "고들빼기",
      price: "4,500원",
      originalPrice: "6,000원",
      rating: 4.6,
      reviews: 78,
      category: "나물/산채",
      categoryLink: "/categories/wild-vegetables",
      inStock: true,
    },
    {
      name: "고사리",
      price: "8,800원",
      originalPrice: "11,500원",
      rating: 4.8,
      reviews: 134,
      category: "나물/산채",
      categoryLink: "/categories/wild-vegetables",
      inStock: true,
    },
    {
      name: "냉이",
      price: "4,800원",
      originalPrice: "6,300원",
      rating: 4.8,
      reviews: 156,
      category: "나물/산채",
      categoryLink: "/categories/wild-vegetables",
      inStock: true,
    },
    {
      name: "달래",
      price: "5,200원",
      originalPrice: "6,800원",
      rating: 4.9,
      reviews: 143,
      category: "나물/산채",
      categoryLink: "/categories/wild-vegetables",
      inStock: true,
    },
    {
      name: "도라지",
      price: "7,800원",
      originalPrice: "10,200원",
      rating: 4.7,
      reviews: 112,
      category: "나물/산채",
      categoryLink: "/categories/wild-vegetables",
      inStock: true,
    },
    {
      name: "두릅",
      price: "9,500원",
      originalPrice: "12,400원",
      rating: 4.9,
      reviews: 98,
      category: "나물/산채",
      categoryLink: "/categories/wild-vegetables",
      inStock: false,
    },
    {
      name: "미나리",
      price: "3,600원",
      originalPrice: "4,700원",
      rating: 4.7,
      reviews: 167,
      category: "나물/산채",
      categoryLink: "/categories/wild-vegetables",
      inStock: true,
    },

    // 곡물/콩류
    {
      name: "들깨",
      price: "18,500원",
      originalPrice: "23,000원",
      rating: 4.9,
      reviews: 76,
      category: "곡물/콩류",
      categoryLink: "/categories/grains",
      inStock: true,
    },
    {
      name: "땅콩",
      price: "13,500원",
      originalPrice: "17,000원",
      rating: 4.7,
      reviews: 145,
      category: "곡물/콩류",
      categoryLink: "/categories/grains",
      inStock: true,
    },
    {
      name: "백태",
      price: "12,500원",
      originalPrice: "16,000원",
      rating: 4.8,
      reviews: 134,
      category: "곡물/콩류",
      categoryLink: "/categories/grains",
      inStock: true,
    },
    {
      name: "서리태",
      price: "15,800원",
      originalPrice: "20,000원",
      rating: 4.9,
      reviews: 89,
      category: "곡물/콩류",
      categoryLink: "/categories/grains",
      inStock: true,
    },
    {
      name: "옥수수",
      price: "4,500원",
      originalPrice: "6,000원",
      rating: 4.6,
      reviews: 189,
      category: "곡물/콩류",
      categoryLink: "/categories/grains",
      inStock: true,
    },
    {
      name: "팥",
      price: "11,200원",
      originalPrice: "14,500원",
      rating: 4.7,
      reviews: 156,
      category: "곡물/콩류",
      categoryLink: "/categories/grains",
      inStock: false,
    },

    // 건조식품
    {
      name: "말린 가지",
      price: "8,500원",
      originalPrice: "11,000원",
      rating: 4.6,
      reviews: 67,
      category: "건조식품",
      categoryLink: "/categories/dried-foods",
      inStock: true,
    },
    {
      name: "말린 고추",
      price: "8,500원",
      originalPrice: "11,000원",
      rating: 4.7,
      reviews: 67,
      category: "건조식품",
      categoryLink: "/categories/dried-foods",
      inStock: true,
    },
    {
      name: "무말랭이",
      price: "6,800원",
      originalPrice: "8,800원",
      rating: 4.6,
      reviews: 134,
      category: "건조식품",
      categoryLink: "/categories/dried-foods",
      inStock: true,
    },
    {
      name: "건고추",
      price: "18,500원",
      originalPrice: "23,000원",
      rating: 4.8,
      reviews: 95,
      category: "건조식품",
      categoryLink: "/categories/dried-foods",
      inStock: true,
    },

    // 약초/허브
    {
      name: "겨우살이",
      price: "25,500원",
      originalPrice: "32,000원",
      rating: 4.9,
      reviews: 34,
      category: "약초/허브",
      categoryLink: "/categories/herbs",
      inStock: true,
    },
    {
      name: "엄나무",
      price: "18,800원",
      originalPrice: "24,000원",
      rating: 4.8,
      reviews: 56,
      category: "약초/허브",
      categoryLink: "/categories/herbs",
      inStock: false,
    },
    {
      name: "오가피",
      price: "22,800원",
      originalPrice: "28,500원",
      rating: 4.8,
      reviews: 67,
      category: "약초/허브",
      categoryLink: "/categories/herbs",
      inStock: true,
    },
  ];

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const inStockProducts = filteredProducts.filter((product) => product.inStock);
  const outOfStockProducts = filteredProducts.filter(
    (product) => !product.inStock,
  );

  const handleAddToCart = (product: any, index: number) => {
    if (!product.inStock) return;

    addItem({
      id: `search-${index}`,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: "placeholder",
      category: product.category,
    });
  };

  const handleWishlistToggle = (product: any, index: number) => {
    const wishlistItem = {
      id: `search-${index}`,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: "placeholder",
      category: product.category,
      rating: product.rating,
      reviews: product.reviews,
    };

    if (isInWishlist(`search-${index}`)) {
      removeFromWishlist(`search-${index}`);
    } else {
      addToWishlist(wishlistItem);
    }
  };

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

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
            <h1 className="text-2xl font-bold text-primary">검색 결과</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 max-w-sm">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="상품을 검색���세요..."
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
        {/* Search Info */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">"{query}" 검색 결과</h2>
          <p className="text-muted-foreground">
            총 {filteredProducts.length}개의 상품을 찾았습니다
            {outOfStockProducts.length > 0 &&
              ` (품절: ${outOfStockProducts.length}개)`}
          </p>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="상품을 검색하세요..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <AlertCircle className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">검색 결과가 없습니다</h3>
            <p className="text-muted-foreground mb-8">
              "{query}"에 대한 상품을 찾을 수 없습니다.
              <br />
              다른 키워드로 검색해보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/categories">
                <Button>카테고리 둘러보기</Button>
              </Link>
              <Link to="/">
                <Button variant="outline">홈으로 돌아가기</Button>
              </Link>
            </div>
          </div>
        )}

        {/* In Stock Products */}
        {inStockProducts.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">
              구매 가능한 상품 ({inStockProducts.length}개)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {inStockProducts.map((product, index) => (
                <Card
                  key={index}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="w-full h-48 bg-gradient-to-br from-green-50 to-green-100 rounded-t-lg flex items-center justify-center">
                        <span className="text-6xl">🥬</span>
                      </div>
                      <Badge className="absolute top-3 left-3 bg-primary/10 text-primary">
                        {product.category}
                      </Badge>
                      <Button
                        size="icon"
                        variant="secondary"
                        className={`absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                          isInWishlist(`search-${index}`) ? "text-red-500" : ""
                        }`}
                        onClick={() => handleWishlistToggle(product, index)}
                      >
                        <Heart
                          className={`w-4 h-4 ${isInWishlist(`search-${index}`) ? "fill-current" : ""}`}
                        />
                      </Button>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">{product.name}</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm">⭐ {product.rating}</span>
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
                      <div className="space-y-2">
                        <Button
                          className="w-full"
                          onClick={() => handleAddToCart(product, index)}
                        >
                          장바구니 담기
                        </Button>
                        <Link to={product.categoryLink}>
                          <Button variant="outline" className="w-full">
                            {product.category} 카테고리 보기
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Out of Stock Products */}
        {outOfStockProducts.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-6 text-muted-foreground">
              현재 품절된 상품 ({outOfStockProducts.length}개)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {outOfStockProducts.map((product, index) => (
                <Card
                  key={index}
                  className="opacity-60 hover:opacity-80 transition-opacity duration-300"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="w-full h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-lg flex items-center justify-center">
                        <span className="text-6xl grayscale">🥬</span>
                      </div>
                      <Badge className="absolute top-3 left-3 bg-gray-500 text-white">
                        품절
                      </Badge>
                      <Badge className="absolute top-3 right-3 bg-muted">
                        {product.category}
                      </Badge>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2 text-muted-foreground">
                        {product.name}
                      </h4>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-muted-foreground">
                          ⭐ {product.rating}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          ({product.reviews})
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg font-bold text-muted-foreground">
                          {product.price}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <Button disabled className="w-full">
                          품절
                        </Button>
                        <Link to={product.categoryLink}>
                          <Button variant="outline" className="w-full">
                            {product.category} 카테고리 보기
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
