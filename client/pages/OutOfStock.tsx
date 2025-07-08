import { ArrowLeft, AlertTriangle, ShoppingCart, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useSearchParams } from "react-router-dom";

export default function OutOfStock() {
  const [searchParams] = useSearchParams();
  const productName = searchParams.get("product") || "상품";

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
            <h1 className="text-2xl font-bold text-primary">상품 품절</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <AlertTriangle className="w-24 h-24 text-orange-500 mx-auto mb-6" />

          <h2 className="text-3xl font-bold mb-4">죄송합니다!</h2>
          <h3 className="text-xl text-muted-foreground mb-6">
            "{productName}"이(가) 현재 품절되었습니다
          </h3>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <Truck className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">빠른 재입고 예정</h4>
                    <p className="text-sm text-muted-foreground">
                      농장에서 신선한 농산물을 준비 중입니다. 보통 2-3일 내에
                      재입고됩니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShoppingCart className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">유사 상품 추천</h4>
                    <p className="text-sm text-muted-foreground">
                      같은 카테고리의 다른 신선한 농산물을 확인해보세요.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <p className="text-muted-foreground mb-6">
              다른 신선한 농산물을 둘러보시거나, 재입고 알림을 받으세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">재입고 알림 받기</Button>
              <Link to="/categories">
                <Button variant="outline" size="lg">
                  다른 상품 둘러보기
                </Button>
              </Link>
            </div>

            <div className="pt-4">
              <Link to="/">
                <Button variant="ghost">홈으로 돌아가기</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
