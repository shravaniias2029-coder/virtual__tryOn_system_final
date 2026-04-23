import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppNavbar from "../components/AppNavbar";
import { useNavigate } from "react-router-dom";
import { Plus, Shirt, Search, Trash2, Heart, Zap, LayoutGrid, List } from "lucide-react";

import garment_5 from "../assets/outfits/garment_5.png";
import garment_7 from "../assets/outfits/garment_7.png";
import garment_8 from "../assets/outfits/garment_8.png";
import garment_13 from "../assets/outfits/garment_13.png";
import garment_14 from "../assets/outfits/garment_14.png";
import garment_15 from "../assets/outfits/garment_15.png";
import garment_17 from "../assets/outfits/garment_17.png";
import garment_21 from "../assets/outfits/garment_21.png";
import garment_23 from "../assets/outfits/garment_23.png";
import garment_24 from "../assets/outfits/garment_24.png";
import garment_25 from "../assets/outfits/garment_25.png";
import garment_26 from "../assets/outfits/garment_26.png";
import garment_27 from "../assets/outfits/garment_27.png";
import garment_28 from "../assets/outfits/garment_28.png";
import garment_29 from "../assets/outfits/garment_29.png";
import garment_30 from "../assets/outfits/garment_30.png";

const CATEGORIES = ["All", "Tops", "Dresses", "Outerwear"];

const COLORS = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#a855f7", "#ec4899", "#ffffff", "#000000"];
const ALL_IMAGES = [

  garment_5, garment_7, garment_8, garment_13,
  garment_14, garment_15, garment_17, garment_21,
  garment_23, garment_24, garment_25, garment_26,
  garment_27, garment_28, garment_29, garment_30
];

const INITIAL_ITEMS = [
  
  { id: 5, img: garment_5, name: "Slim Fit Denim Jacket", category: "Outerwear", color: "#000000", brand: "Levi's", worn: 5, liked: true },
  { id: 6, img: garment_7, name: "High-Waist Straight Jeans", category: "Bottoms", color: "#3b82f6", brand: "Wrangler", worn: 6, liked: false },
  { id: 7, img: garment_8, name: "Printed Summer Maxi Dress", category: "Dresses", color: "#f97316", brand: "Forever 21", worn: 2, liked: true },
  { id: 8, img: garment_13, name: "Oversized Wool Blend Coat", category: "Outerwear", color: "#000000", brand: "Zara", worn: 4, liked: false },

  { id: 9, img: garment_14, name: "Casual Graphic T-Shirt", category: "Tops", color: "#22c55e", brand: "H&M", worn: 9, liked: true },
  { id: 10, img: garment_15, name: "Pleated A-Line Skirt", category: "Bottoms", color: "#ec4899", brand: "Mango", worn: 3, liked: false },
  { id: 11, img: garment_17, name: "Crop Fit Hoodie", category: "Tops", color: "#a855f7", brand: "Puma", worn: 4, liked: true },
  { id: 12, img: garment_21, name: "Formal Slim Fit Blazer", category: "Outerwear", color: "#000000", brand: "Zara", worn: 2, liked: false },

  { id: 13, img: garment_23, name: "Boho Printed Kurti", category: "Dresses", color: "#f97316", brand: "Biba", worn: 6, liked: true },
  { id: 14, img: garment_24, name: "Ethnic Anarkali Dress", category: "Dresses", color: "#ec4899", brand: "Libas", worn: 3, liked: true },
  { id: 15, img: garment_25, name: "Classic Black Heels", category: "Shoes", color: "#000000", brand: "Aldo", worn: 8, liked: false },
  { id: 16, img: garment_26, name: "Sport Running Sneakers", category: "Shoes", color: "#3b82f6", brand: "Nike", worn: 10, liked: true },

  { id: 17, img: garment_27, name: "Leather Crossbody Bag", category: "Accessories", color: "#000000", brand: "Guess", worn: 5, liked: true },
  { id: 18, img: garment_28, name: "Minimal Gold Necklace", category: "Accessories", color: "#eab308", brand: "Tanishq", worn: 7, liked: false },
  { id: 19, img: garment_29, name: "Casual Cotton Shorts", category: "Bottoms", color: "#22c55e", brand: "H&M", worn: 6, liked: true },
  { id: 20, img: garment_30, name: "Oversized Graphic Sweatshirt", category: "Tops", color: "#a855f7", brand: "Zara", worn: 4, liked: false },
];

interface WardrobeItem {
  id: number;
  img: string;
  name: string;
  category: string;
  color: string;
  brand: string;
  worn: number;
  liked: boolean;
}

function ItemCard({ item, onDelete, onLike, onTryOn }: {
  item: WardrobeItem;
  onDelete: (id: number) => void;
  onLike: (id: number) => void;
  onTryOn: (item: WardrobeItem) => void;
}) {
  return (
    <motion.div layout whileHover={{ y: -5 }} transition={{ duration: 0.2 }}
      className="rounded-2xl border border-white/[0.07] overflow-hidden group"
      style={{ background: "rgba(255,255,255,0.03)" }}>
      <div className="relative aspect-[3/4]">
        <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
        {/* Color dot */}
        <div className="absolute top-2 left-2 w-3 h-3 rounded-full ring-1 ring-white/30" style={{ background: item.color }} />
        {/* Actions */}
        <div className="absolute top-2 right-2 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={() => onLike(item.id)}
            className="w-7 h-7 rounded-full bg-black/60 backdrop-blur flex items-center justify-center hover:scale-110 transition-transform">
            <Heart size={12} fill={item.liked ? "#ec4899" : "none"} stroke={item.liked ? "#ec4899" : "white"} />
          </button>
          <button onClick={() => onDelete(item.id)}
            className="w-7 h-7 rounded-full bg-black/60 backdrop-blur flex items-center justify-center hover:bg-red-500/70 transition-colors">
            <Trash2 size={12} className="text-white" />
          </button>
        </div>
        {/* Try on */}
        <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">
          <button onClick={() => onTryOn(item)}
            className="w-full py-1.5 rounded-lg text-[11px] font-semibold flex items-center justify-center gap-1"
            style={{ background: "linear-gradient(135deg,#7c3aed,#ec4899)" }}>
            <Zap size={11} /> Try On
          </button>
        </div>
      </div>
      <div className="p-3">
        <p className="text-sm font-semibold truncate">{item.name}</p>
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs text-gray-500">{item.brand}</span>
          <span className="text-[10px] text-gray-600">{item.worn}x worn</span>
        </div>
      </div>
    </motion.div>
  );
}

function AddItemModal({ onClose, onAdd }: { onClose: () => void; onAdd: (item: Partial<WardrobeItem>) => void }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Tops");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("#a855f7");

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={e => e.target === e.currentTarget && onClose()}>
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-sm rounded-2xl p-6 border border-white/[0.08]"
        style={{ background: "#0d0d18" }}>
        <h3 className="text-lg font-bold mb-5" style={{ fontFamily: "'Syne',sans-serif" }}>Add to Wardrobe</h3>
        <div className="space-y-4">
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Item Name</label>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Blue Denim Jacket"
              className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-3 py-2.5 text-sm text-white outline-none focus:border-purple-500 transition-colors" />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Brand</label>
            <input value={brand} onChange={e => setBrand(e.target.value)} placeholder="e.g. Zara"
              className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-3 py-2.5 text-sm text-white outline-none focus:border-purple-500 transition-colors" />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Category</label>
            <select value={category} onChange={e => setCategory(e.target.value)}
              className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-3 py-2.5 text-sm text-white outline-none focus:border-purple-500 transition-colors">
              {CATEGORIES.filter(c => c !== "All").map(c => <option key={c} value={c} style={{ background: "#0d0d18" }}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-2 block">Color</label>
            <div className="flex gap-2 flex-wrap">
              {COLORS.map(c => (
                <button key={c} onClick={() => setColor(c)}
                  className={`w-7 h-7 rounded-full transition-transform hover:scale-110 ${color === c ? "ring-2 ring-offset-2 ring-purple-500 ring-offset-[#0d0d18] scale-110" : ""}`}
                  style={{ background: c, border: c === "#ffffff" ? "1px solid rgba(255,255,255,0.2)" : undefined }} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-xl text-sm border border-white/[0.1] text-gray-400 hover:text-white transition-colors">Cancel</button>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
            onClick={() => { if (name) { onAdd({ name, category, brand, color, worn: 0, liked: false }); onClose(); } }}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg,#7c3aed,#ec4899)" }}>
            Add Item
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Wardrobe() {
  const navigate = useNavigate();
  const [items, setItems] = useState<WardrobeItem[]>(INITIAL_ITEMS);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showLikedOnly, setShowLikedOnly] = useState(false);

  const filtered = items.filter(item => {
    const matchCat = activeCategory === "All" || item.category === activeCategory;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.brand.toLowerCase().includes(search.toLowerCase());
    const matchLiked = !showLikedOnly || item.liked;
    return matchCat && matchSearch && matchLiked;
  });

 const addItem = (partial: Partial<WardrobeItem>) => {
  const randomImg = ALL_IMAGES[Math.floor(Math.random() * ALL_IMAGES.length)];

  const newItem: WardrobeItem = {
    id: Date.now(),
    img: randomImg,   // ✅ FIXED
    name: partial.name!,
    category: partial.category!,
    color: partial.color!,
    brand: partial.brand ?? "",
    worn: 0,
    liked: false
  };

  setItems(prev => [newItem, ...prev]);
};
  const stats = [
    { label: "Total Items", value: items.length },
    { label: "Categories", value: [...new Set(items.map(i => i.category))].length },
    { label: "Favourites", value: items.filter(i => i.liked).length },
    { label: "Most Worn", value: Math.max(...items.map(i => i.worn), 0) },
  ];

  return (
    <div className="min-h-screen text-white" style={{ background: "#04040a" }}>
      <AppNavbar />

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-16">
        {/* Page header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-black" style={{ fontFamily: "'Syne',sans-serif" }}>My Wardrobe</h1>
            <p className="text-gray-500 text-sm mt-0.5">Manage your digital closet</p>
          </div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold"
            style={{ background: "linear-gradient(135deg,#7c3aed,#ec4899)" }}>
            <Plus size={15} /> Add Item
          </motion.button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
              className="rounded-2xl border border-white/[0.07] p-4 text-center" style={{ background: "rgba(255,255,255,0.03)" }}>
              <p className="text-2xl font-black" style={{ fontFamily: "'Syne',sans-serif" }}>{s.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap gap-3 mb-5">
          <div className="flex-1 min-w-[160px] flex items-center gap-2 px-3 py-2 rounded-xl border border-white/[0.08] bg-white/[0.03]">
            <Search size={14} className="text-gray-500 flex-shrink-0" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search wardrobe…"
              className="bg-transparent text-sm text-white placeholder-gray-600 outline-none flex-1 min-w-0" />
          </div>
          <button onClick={() => setShowLikedOnly(v => !v)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm border transition-all ${showLikedOnly ? "bg-pink-500/15 border-pink-500/40 text-pink-400" : "border-white/[0.08] text-gray-400 bg-white/[0.03]"}`}>
            <Heart size={14} fill={showLikedOnly ? "#ec4899" : "none"} /> Liked
          </button>
          <div className="flex gap-1">
            {[{ v: "grid", icon: <LayoutGrid size={14} /> }, { v: "list", icon: <List size={14} /> }].map(({ v, icon }) => (
              <button key={v} onClick={() => setViewMode(v as "grid" | "list")}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${viewMode === v ? "bg-purple-600 text-white" : "bg-white/[0.04] text-gray-500 border border-white/[0.07]"}`}>
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${activeCategory === cat ? "bg-purple-600 text-white" : "bg-white/[0.04] text-gray-400 hover:text-white border border-white/[0.07]"}`}>
              {cat}
              {cat !== "All" && <span className="ml-1.5 opacity-60">{items.filter(i => i.category === cat).length}</span>}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <Shirt size={40} className="text-gray-700 mx-auto mb-3" />
            <p className="text-gray-600">{search || showLikedOnly ? "No matching items" : "Your wardrobe is empty"}</p>
            {!search && !showLikedOnly && (
              <button onClick={() => setShowAddModal(true)} className="mt-3 text-sm text-purple-400 hover:text-purple-300">
                Add your first item →
              </button>
            )}
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <AnimatePresence>
              {filtered.map(item => (
                <motion.div key={item.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
                  <ItemCard item={item}
                    onDelete={id => setItems(prev => prev.filter(i => i.id !== id))}
                    onLike={id => setItems(prev => prev.map(i => i.id === id ? { ...i, liked: !i.liked } : i))}
                    onTryOn={(item) => navigate("/tryon", { state: item })} />
                </motion.div>
              ))}
              {/* Add card */}
              <motion.div layout
                onClick={() => setShowAddModal(true)}
                className="aspect-[3/4] rounded-2xl border-2 border-dashed border-white/[0.08] flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-purple-500/40 transition-colors"
                whileHover={{ scale: 1.03 }}>
                <Plus size={22} className="text-gray-600" />
                <span className="text-xs text-gray-600">Add item</span>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {showAddModal && <AddItemModal onClose={() => setShowAddModal(false)} onAdd={addItem} />}
      </AnimatePresence>
    </div>
  );
}
