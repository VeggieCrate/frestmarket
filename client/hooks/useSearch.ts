import { useNavigate } from "react-router-dom";

export function useSearch() {
  const navigate = useNavigate();

  const performSearch = (query: string) => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return { performSearch };
}
