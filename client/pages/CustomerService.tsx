import {
  ArrowLeft,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  HelpCircle,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function CustomerService() {
  const faqItems = [
    {
      question: "주문 취소는 어떻게 하나요?",
      answer:
        "주문 확인 단계에서는 마이페이지 > 주문내역에서 직접 취소 가능합니다. 상품 준비 단계 이후에는 고객센터로 연락주세요.",
    },
    {
      question: "배송비는 언제 무료인가요?",
      answer:
        "50,000원 이상 주문 시 전국 무료배송입니다. 50,000원 미만 주문 시에는 3,000원의 배송비가 부과됩니다.",
    },
    {
      question: "신선도에 문제가 있으면 어떻게 하나요?",
      answer:
        "상품 수령 후 24시간 이내에 고객센터로 연락주시면 즉시 교환 또는 환불 처리해드립니다.",
    },
    {
      question: "당일배송 지역은 어디인가요?",
      answer:
        "서울, 경기, 인천 지역에서 오전 10시 이전 주문 시 당일배송이 가능합니다.",
    },
    {
      question: "결제 방법은 무엇이 있나요?",
      answer:
        "신용카드, 계좌이체, 무통장입금, 카카오페이, 네이버페이 등 다양한 결제 방법을 지원합니다.",
    },
  ];

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
            <h1 className="text-2xl font-bold text-primary">고객센터</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">고객센터</h2>
          <p className="text-muted-foreground">
            신선마켓 이용 중 궁금한 점이 있으시면 언제든 문의해주세요.
          </p>
        </div>

        {/* 연락처 정보 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">��화 상담</h3>
              <p className="text-2xl font-bold text-primary mb-2">1588-1234</p>
              <p className="text-sm text-muted-foreground">
                평일 09:00 ~ 18:00
                <br />
                (점심시간 12:00 ~ 13:00 제외)
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">이메일 문의</h3>
              <p className="text-lg font-medium text-primary mb-2">
                support@sinsinmarket.co.kr
              </p>
              <p className="text-sm text-muted-foreground">
                24시간 접수 가능
                <br />
                1-2일 내 답변
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">1:1 문의</h3>
              <Button className="mb-2">문의하기</Button>
              <p className="text-sm text-muted-foreground">
                로그인 �� 이용 가능
                <br />
                빠른 답변 제공
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 운영시간 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              고객센터 운영시간
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">전화 상담</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>평일</span>
                    <span>09:00 ~ 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>토요일</span>
                    <span>09:00 ~ 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>일요일/공휴일</span>
                    <span className="text-red-500">휴무</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">온라인 문의</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>1:1 문의</span>
                    <span>24시간 접수</span>
                  </div>
                  <div className="flex justify-between">
                    <span>이메일</span>
                    <span>24시간 접수</span>
                  </div>
                  <div className="flex justify-between">
                    <span>답변시간</span>
                    <span>평일 기준 1-2일</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 자주 묻는 질문 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-primary" />
              자주 묻는 질문
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b last:border-b-0 pb-4 last:pb-0"
                >
                  <h4 className="font-semibold mb-2 flex items-start gap-2">
                    <Badge variant="outline" className="shrink-0">
                      Q
                    </Badge>
                    {item.question}
                  </h4>
                  <div className="flex items-start gap-2">
                    <Badge className="shrink-0">A</Badge>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline">더 많은 FAQ 보기</Button>
            </div>
          </CardContent>
        </Card>

        {/* 관련 서비스 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                주문 관련
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/orders">
                <Button variant="outline" className="w-full justify-start">
                  주문 내역 확인
                </Button>
              </Link>
              <Link to="/shipping-info">
                <Button variant="outline" className="w-full justify-start">
                  배송 정보
                </Button>
              </Link>
              <Link to="/returns-exchange">
                <Button variant="outline" className="w-full justify-start">
                  반품/교환 신청
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                빠른 문의
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start">1:1 문의하기</Button>
              <Button variant="outline" className="w-full justify-start">
                이메일 문의
              </Button>
              <Button variant="outline" className="w-full justify-start">
                전화 상담 예약
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
