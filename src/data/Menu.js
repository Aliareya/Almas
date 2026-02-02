const menu = [
   { title: "تماس باما", path: "/contact" },
   { title: "لباس مجلسی", path: "/shop" },
   { title: "فروشگاه", path: "/shop" },
   { title: "درباره ما", path: "/about" },
   { title: "خانه", path: "/" },
];

const iconMenu = [
   {icon : "iconamoon:profile-circle-light" , path : '/profile'},
   {icon : "bitcoin-icons:search-filled" , path : '/serach'},
   {icon : "iconamoon:heart-light" , path : '/wishlist'},
   {icon : "lineicons:cart-1" , path : '/cart'}, 
]

const companypages = [
  { id: 1, title: "درباره ما", path: "#" },
  { id: 2, title: "وبلاگ", path: "#" },
  { id: 3, title: "تماس با ما", path: "#" },
  { id: 4, title: "فرصت‌های شغلی", path: "#" },
];

const customerServicespages = [
   { id: 1, title: "حساب کاربری من", path: "#" },
   { id: 2, title: "پیگیری سفارش", path: "#" },
   { id: 3, title: "مرجوعی", path: "#" },
   { id: 4, title: "سوالات متداول", path: "#" },
]

const menus = {
   headermenu : menu,
   headerIconMenu : iconMenu,
   footer : {
      company : companypages,
      customer : customerServicespages
   }
}

export default menus;