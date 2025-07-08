import {
  ArrowLeft,
  RotateCcw,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function ReturnsExchange() {
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
            <h1 className="text-2xl font-bold text-primary">반품/교환</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">반품/교환 안내</h2>
          <p className="text-muted-foreground">
            신선마켓의 반품 및 교환 정책을 안내드립니다.
          </p>
        </div>

        <div className="space-y-6">
          {/* 반품/교환 조건 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                반품/교환 가능 조건
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Badge className="bg-green-100 text-green-800">
                    반품 가능
                  </Badge>
                  <ul className="space-y-2 text-sm">
                    <li>• 상품 수령 후 24시간 이내</li>
                    <li>• 상품에 하자나 손상이 있는 경우</li>
                    <li>• 주문한 상품과 다른 상품이 배송된 경우</li>
                    <li>• 신선도에 문제가 있는 경우</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <Badge className="bg-blue-100 text-blue-800">교환 가능</Badge>
                  <ul className="space-y-2 text-sm">
                    <li>• 상품 수령 후 24시간 이내</li>
                    <li>• 동일 금액대의 다른 상품으로 교환</li>
                    <li>• 상품 포장 상태가 양호한 경우</li>
                    <li>• 농산물 특성상 동일 카테고리 내에서�� 가능</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 반품/교환 불가 조건 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                반품/교환 불가 조건
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-red-50 p-4 rounded-lg">
                <ul className="space-y-2 text-sm text-red-700">
                  <li>• 상품 수령 후 24시간이 경과한 경우</li>
                  <li>• 고객의 단순 변심으로 인한 반품</li>
                  <li>• 상품을 사용하거나 훼손한 경우</li>
                  <li>• 포장을 개봉하여 원래 상태로 복원이 불가능한 경우</li>
                  <li>
                    • 신선식품의 특성상 시간이 경과하여 신선도가 떨어진 경우
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* 반품/교환 절차 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-primary" />
                반품/교환 절차
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">신청</h4>
                    <p className="text-sm text-muted-foreground">
                      고객센터(1588-1234) 또는 온라인으로 반품/교환을
                      신청하세요.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">상품 회수</h4>
                    <p className="text-sm text-muted-foreground">
                      택배 기사가 방문하여 상품을 회수해갑니다. (무료 회수)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">검수</h4>
                    <p className="text-sm text-muted-foreground">
                      반품/교환 조건에 부합하는지 상품을 검수합니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold">완료</h4>
                    <p className="text-sm text-muted-foreground">
                      환불 또는 교환 상품 재배송이 완료됩니다.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 환불 정보 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                환불 정보
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">환불 방법</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 신용카드: 승인 취소 (3-5일 소요)</li>
                    <li>• 계좌이체: 환불 계좌로 입금 (1-2일 소요)</li>
                    <li>• 무통장입금: 환불 계좌로 입금 (1-2일 소요)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">환불 시기</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 상품 회수 후 검수 완료 시점부터</li>
                    <li>• 결제 수단에 따라 1-5일 소요</li>
                    <li>• 환불 완료 시 SMS로 안내</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 문의하기 */}
          <Card>
            <CardHeader>
              <CardTitle>반품/교환 문의</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">고객센터</h4>
                    <p className="text-sm text-muted-foreground">
                      전화: 1588-1234 | 운영시간: 09:00 ~ 18:00 (평일)
                    </p>
                  </div>
                  <Button>문의하기</Button>
                </div>
              </div>
              <div className="flex gap-4">
                <Link to="/orders">
                  <Button variant="outline">주문 내역 확인</Button>
                </Link>
                <Button variant="outline">1:1 문의</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
