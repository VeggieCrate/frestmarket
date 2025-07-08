import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

export default function Cart() {
  const { state, removeItem, updateQuantity } = useCart();

  const formatPrice = (price: number) => {
    return price.toLocaleString("ko-KR") + "원";
  };

  if (state.items.length === 0) {
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
              <h1 className="text-2xl font-bold text-primary">장바구니</h1>
            </div>
          </div>
        </header>

        {/* Empty Cart */}
        <div className="container px-4 py-16">
          <div className="text-center">
            <ShoppingBag className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">장바구니가 비어있습니다</h2>
            <p className="text-muted-foreground mb-8">
              신선한 농산물을 장바구니에 담아보세요!
            </p>
            <Link to="/">
              <Button size="lg">쇼핑 계속하기</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
            <h1 className="text-2xl font-bold text-primary">장바구니</h1>
          </div>
        </div>
      </header>

      {/* Cart Content */}
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold mb-4">
              상품 목록 ({state.totalItems}개)
            </h2>
            {state.items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🥬</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.category}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-primary">
                          {item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {item.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">주문 요약</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>상품 개수</span>
                    <span>{state.totalItems}개</span>
                  </div>
                  <div className="flex justify-between">
                    <span>상품 금액</span>
                    <span>{formatPrice(state.totalPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>배송비</span>
                    <span className="text-primary">무료</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>총 결제 금액</span>
                      <span className="text-primary">
                        {formatPrice(state.totalPrice)}
                      </span>
                    </div>
                  </div>
                </div>
                <Button className="w-full mb-3" size="lg">
                  주문하기
                </Button>
                <Link to="/">
                  <Button variant="outline" className="w-full">
                    쇼핑 계속하기
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
