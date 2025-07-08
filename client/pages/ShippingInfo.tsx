import { ArrowLeft, Truck, Clock, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function ShippingInfo() {
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
            <h1 className="text-2xl font-bold text-primary">배송 정보</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">배송 서비스 안내</h2>
          <p className="text-muted-foreground">
            신선마켓의 안전하고 빠른 배송 서비스를 소개합니다.
          </p>
        </div>

        <div className="space-y-6">
          {/* 배송 지역 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                배송 지역
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">전국 배송 가능</h4>
                <p className="text-muted-foreground">
                  제주도 및 도서산간 지역 포함 전국 어디든 배송이 가능합니다.
                </p>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>배송비:</strong> 50,000원 이상 주문 시 무료배송 (미만
                  시 3,000원)
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 배송 시간 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                배송 시간
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">일반 배송</h4>
                  <p className="text-sm text-muted-foreground">
                    주문 확인 후 1-2일 내 배송
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">당일 배송</h4>
                  <p className="text-sm text-muted-foreground">
                    오전 10시 이전 주문 시 당일 배송 (수도권 한정)
                  </p>
                </div>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>배송 시간:</strong> 오전 8시 ~ 오후 6시 (점심시간:
                  12시 ~ 1시 제외)
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 포장 방법 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                신선도 보장 포장
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">냉장 포장</h4>
                  <p className="text-sm text-muted-foreground">
                    채소, 과일류는 최적의 온도를 유지하는 냉장 포장으로
                    배송합니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">친환경 포장재</h4>
                  <p className="text-sm text-muted-foreground">
                    재활용 가능한 친환경 포장재를 사용하여 환경을 생각합니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">완충재</h4>
                  <p className="text-sm text-muted-foreground">
                    파손 방지를 위한 안전한 완충재로 포장됩니��.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 배송 추적 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-primary" />
                배송 추적
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">주문 확인</h4>
                    <p className="text-sm text-muted-foreground">
                      주문이 확인되면 SMS로 알림을 드립니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">상품 준비</h4>
                    <p className="text-sm text-muted-foreground">
                      농장에서 신선한 상품을 직접 준비합니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">배송 출발</h4>
                    <p className="text-sm text-muted-foreground">
                      배송이 시작되면 운송장 번호를 안내드립니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold">배송 완료</h4>
                    <p className="text-sm text-muted-foreground">
                      상품 수령 후 만족도 평가를 부탁드립니다.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 주의사항 */}
          <Card>
            <CardHeader>
              <CardTitle>배송 관련 주의사항</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 기상 악화로 인해 배송이 지연될 수 있습니다.</li>
                <li>• 부재 시 경비실이나 택배함에 보관됩니다.</li>
                <li>• 신선 농산물 특성상 수령 후 즉시 냉장보관해주세요.</li>
                <li>• 배송 주소 변경은 배송 출발 전까지 가능합니다.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
