import { ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Categories() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      name: "채소",
      icon: "🥬",
      count: 24,
      link: "/categories/vegetables",
      description: "신선한 채소류",
    },
    {
      name: "과일",
      icon: "🍎",
      count: 15,
      link: "/categories/fruits",
      description: "달콤한 과일류",
    },
    {
      name: "나물/산채",
      icon: "🌿",
      count: 28,
      link: "/categories/wild-vegetables",
      description: "자연의 나물과 산채",
    },
    {
      name: "곡물/콩류",
      icon: "🌾",
      count: 11,
      link: "/categories/grains",
      description: "영양 가득한 곡물",
    },
    {
      name: "건조식품",
      icon: "🌶️",
      count: 18,
      link: "/categories/dried-foods",
      description: "말린 농산물",
    },
    {
      name: "약초/허브",
      icon: "🍃",
      count: 12,
      link: "/categories/herbs",
      description: "건강한 약초",
    },
  ];

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()),
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
            <h1 className="text-2xl font-bold text-primary">카테고리</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 max-w-sm">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="카테고리 검색..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Categories Content */}
      <div className="container px-4 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">모든 카테고리</h2>
          <p className="text-muted-foreground">
            원하는 농산물 카테고리를 선택하세요
          </p>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="카테고리 검색..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <Link key={index} to={category.link}>
              <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-medium text-primary">
                      {category.count}개 상품
                    </span>
                    <span className="text-muted-foreground">→</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
