// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { useSearch } from "../contexts/SearchContext"; // ✅
import productsData from "../data/products";
import FilterBar from "../components/FilterBar";
import ProductModal from "../components/ProductModal";
import { getSuggestions } from "../fakeAI/suggestionApi";
import AdSlider from "../components/AdSlider";
import ProCourses from "../components/ProCourses";
import NormalCourses from "../components/NormalCourses";
import { FiZap, FiRefreshCw } from "react-icons/fi";
import { MdTipsAndUpdates, MdSettings } from "react-icons/md";

const Home = () => {
  const { search, setSearch } = useSearch(); // ✅ dùng context
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [priceFilter, setPriceFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const filtered = products.filter((p) => {
    const nameMatch = p.name.toLowerCase().includes(search.toLowerCase());

    let priceMatch = true;
    if (priceFilter === "<500") {
      priceMatch = p.price < 500000;
    } else if (priceFilter === "500-1000") {
      priceMatch = p.price >= 500000 && p.price <= 1000000;
    } else if (priceFilter === ">1000") {
      priceMatch = p.price > 1000000;
    }

    const categoryMatch = categoryFilter ? p.category === categoryFilter : true;

    return nameMatch && priceMatch && categoryMatch;
  });

  const filteredProCourses = filtered.filter((p) => p.isPro);
  const filteredNormalCourses = filtered.filter((p) => !p.isPro && p.price > 0);

  const handleSuggest = async () => {
    const data = await getSuggestions("123");
    setProducts(data);
  };

  const resetProducts = () => {
    setProducts(productsData);
    setPriceFilter("");
    setCategoryFilter("");
    setSearch("");
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    const history = JSON.parse(localStorage.getItem("history")) || [];
    const isExist = history.some((item) => item.id === product.id);
    if (!isExist) {
      localStorage.setItem("history", JSON.stringify([product, ...history]));
    }
  };

  return (
    <div className="px-4 md:px-6 md:pl-4">
      <AdSlider />

      {/* FILTER & ACTION BUTTONS */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <FilterBar
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />

        <div className="w-full md:max-w-3xl bg-white border border-gray-300 rounded-xl shadow p-4 mt-[10px] mr-[6px]">
          {/* Tiêu đề với icon */}
          <div className="flex items-center gap-2 mb-4">
            <MdSettings className="text-blue-500 text-xl" />
            <h3 className="text-lg font-semibold text-gray-800">
              Tùy chọn hiển thị
            </h3>
          </div>

          <p className="text-sm sm:text-base text-gray-600 mb-3 leading-relaxed flex items-start gap-2">
            <FiZap className="text-yellow-500 text-[20px] mt-1 flex-shrink-0" />
            <span>
              Sử dụng các tùy chọn dưới đây để khám phá nhanh các khóa học phù hợp với bạn. Bạn có thể{" "}
              <span className="font-semibold text-blue-600">xem toàn bộ</span> hoặc nhận{" "}
              <span className="font-semibold text-green-600">gợi ý thông minh</span> dựa trên sở thích và lịch sử truy cập.
            </span>
          </p>

          {/* Các button */}
          <div className="flex gap-5 flex-wrap">
            <button
              onClick={resetProducts}
              className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-full text-gray-700 bg-white hover:bg-gray-100 hover:shadow-md transition-all duration-200 ease-in-out cursor-pointer"
            >
              <FiRefreshCw className="text-lg" />
              Hiển thị tất cả
            </button>

            <button
              onClick={handleSuggest}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-white 
                bg-gradient-to-r from-green-500 to-green-600 
                hover:from-green-600 hover:to-green-700 
                hover:scale-105 hover:shadow-md 
                transition-all duration-200 ease-in-out cursor-pointer swing"
            >
              <MdTipsAndUpdates className="text-lg" />
              Gợi ý sản phẩm phù hợp
            </button>
          </div>
        </div>
      </div>

      {/* Pro and Normal courses */}
      <ProCourses products={filteredProCourses} onView={handleViewProduct} />
      <NormalCourses products={filteredNormalCourses} onView={handleViewProduct} />

      {/* MODAL */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Home;
