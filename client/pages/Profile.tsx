import { ArrowLeft, User, Mail, Phone, MapPin, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Profile() {
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
            <h1 className="text-2xl font-bold text-primary">내 정보</h1>
          </div>
        </div>
      </header>

      {/* Profile Content */}
      <div className="container px-4 py-8 max-w-2xl">
        <div className="space-y-6">
          {/* Profile Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl">홍길동</CardTitle>
                  <p className="text-muted-foreground">단골 고객</p>
                </div>
                <Button variant="outline" size="icon">
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>연락처 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">이메일</p>
                  <p className="text-sm text-muted-foreground">
                    hong@example.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">전화번호</p>
                  <p className="text-sm text-muted-foreground">010-1234-5678</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">배송 주소</p>
                  <p className="text-sm text-muted-foreground">
                    서울특별시 강남구 테헤란로 123, 101호
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Menu Options */}
          <div className="space-y-2">
            <Link to="/orders">
              <Card className="cursor-pointer hover:bg-accent transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">주문 내역</span>
                    <span className="text-muted-foreground">→</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/wishlist">
              <Card className="cursor-pointer hover:bg-accent transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">찜 목록</span>
                    <span className="text-muted-foreground">→</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Card className="cursor-pointer hover:bg-accent transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">고객 센터</span>
                  <span className="text-muted-foreground">→</span>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:bg-accent transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">설정</span>
                  <span className="text-muted-foreground">→</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Logout Button */}
          <Button variant="outline" className="w-full">
            로그아웃
          </Button>
        </div>
      </div>
    </div>
  );
}
