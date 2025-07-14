import products from "../data/products";

export function getSuggestions(userId) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Danh sách sản phẩm mà người dùng đã thích
  const likedProducts = products.filter(product => favorites.includes(product.id));

  // Lấy các danh mục mà người dùng quan tâm
  const likedCategories = [...new Set(likedProducts.map(product => product.category))];

  // Gợi ý sản phẩm thuộc cùng danh mục, nhưng chưa có trong favorites
  const suggested = products.filter(
    product => likedCategories.includes(product.category) && !favorites.includes(product.id)
  );

  // Trả về tối đa 4 gợi ý, nếu không có thì trả vài sản phẩm mặc định
  const fallback = products.slice(0, 4);
  const result = suggested.length ? suggested.slice(0, 4) : fallback;

  return new Promise(resolve => {
    setTimeout(() => resolve(result), 300);
  });
}
