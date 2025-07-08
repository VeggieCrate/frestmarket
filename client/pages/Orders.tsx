import { ArrowLeft, Package, Clock, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function Orders() {
  const orders = [
    {
      id: "20241201001",
      date: "2024년 12월 1일",
      status: "배송 완료",
      statusType: "delivered",
      total: "18,500원",
      items: [
        { name: "방울토마토", quantity: 2, price: "6,500원" },
        { name: "신선 배추", quantity: 1, price: "4,500원" },
        { name: "국산 당근", quantity: 1, price: "2,800원" },
      ],
    },
    {
      id: "20241128002",
      date: "2024년 11월 28일",
      status: "배송 중",
      statusType: "shipping",
      total: "12,300원",
      items: [{ name: "곶감", quantity: 1, price: "12,000원" }],
    },
    {
      id: "20241125003",
      date: "2024년 11월 25일",
      status: "주문 확인",
      statusType: "confirmed",
      total: "25,800원",
      items: [
        { name: "들깨", quantity: 1, price: "18,500원" },
        { name: "말린 고추", quantity: 1, price: "8,500원" },
      ],
    },
    {
      id: "20241120004",
      date: "2024년 11월 20일",
      status: "주문 취소",
      statusType: "cancelled",
      total: "15,600원",
      items: [{ name: "서리태", quantity: 1, price: "15,800원" }],
    },
  ];

  const getStatusIcon = (statusType: string) => {
    switch (statusType) {
      case "delivered":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "shipping":
        return <Package className="w-5 h-5 text-blue-500" />;
      case "confirmed":
        return <Clock className="w-5 h-5 text-orange-500" />;
      case "cancelled":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (statusType: string) => {
    switch (statusType) {
      case "delivered":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "shipping":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "confirmed":
        return "bg-orange-100 text-orange-800 hover:bg-orange-200";
      case "cancelled":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-primary">주문 내역</h1>
          </div>
        </div>
      </header>

      {/* Orders Content */}
      <div className="container px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">나의 주문 내역</h2>
          <p className="text-muted-foreground">
            총 {orders.length}개의 주문 내역이 있습니다
          </p>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-16">
            <Package className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">주문 내역이 없습니다</h3>
            <p className="text-muted-foreground mb-8">
              신선한 농산물을 주문해보세요!
            </p>
            <Link to="/">
              <Button size="lg">쇼핑하러 가기</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id} className="overflow-hidden">
                <CardHeader className="bg-secondary/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">
                        주문번호: {order.id}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {order.date}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={getStatusColor(order.statusType)}>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(order.statusType)}
                          {order.status}
                        </div>
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">주문 상품</h4>
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between py-2 border-b last:border-b-0"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center">
                                <span className="text-lg">🥬</span>
                              </div>
                              <div>
                                <p className="font-medium">{item.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  수량: {item.quantity}개
                                </p>
                              </div>
                            </div>
                            <p className="font-semibold">{item.price}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex gap-2">
                        {order.statusType === "delivered" && (
                          <Button variant="outline" size="sm">
                            리뷰 작성
                          </Button>
                        )}
                        {order.statusType === "shipping" && (
                          <Button variant="outline" size="sm">
                            배송 조회
                          </Button>
                        )}
                        {order.statusType === "confirmed" && (
                          <Button variant="outline" size="sm">
                            주문 취소
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          재주문
                        </Button>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">
                          총 결제 금액
                        </p>
                        <p className="text-xl font-bold text-primary">
                          {order.total}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
