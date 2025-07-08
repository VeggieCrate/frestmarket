import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

interface ProductCardProps {
  product: {
    name: string;
    price: string;
    originalPrice?: string;
    rating: number;
    reviews: number;
  };
  index: number;
  category: string;
  imageEmoji: string;
  categoryPrefix: string;
}

export default function ProductCard({
  product,
  index,
  category,
  imageEmoji,
  categoryPrefix,
}: ProductCardProps) {
  const { addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const productId = `${categoryPrefix}-${index}`;

  const handleAddToCart = () => {
    addItem({
      id: productId,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: "placeholder",
      category: category,
    });
  };

  const handleWishlistToggle = () => {
    const wishlistItem = {
      id: productId,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: "placeholder",
      category: category,
      rating: product.rating,
      reviews: product.reviews,
    };

    if (isInWishlist(productId)) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(wishlistItem);
    }
  };

  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative">
          <div className="w-full h-48 bg-gradient-to-br from-green-50 to-green-100 rounded-t-lg flex items-center justify-center">
            <span className="text-6xl">{imageEmoji}</span>
          </div>
          <Button
            size="icon"
            variant="secondary"
            className={`absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              isInWishlist(productId) ? "text-red-500" : ""
            }`}
            onClick={handleWishlistToggle}
          >
            <Heart
              className={`w-4 h-4 ${isInWishlist(productId) ? "fill-current" : ""}`}
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
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {product.originalPrice}
              </span>
            )}
          </div>
          <Button className="w-full" onClick={handleAddToCart}>
            장바구니 담기
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
