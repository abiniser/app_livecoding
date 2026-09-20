import { Product } from '../types';

const CATEGORIES = ['Audio', 'Wearables', 'Laptops', 'Cameras', 'Accessories', 'Gaming'];
const TITLES = [
  'Wireless Noise-Canceling Headphones',
  'Ultra-Slim Smartwatch Pro',
  'Mechanical RGB Gaming Keyboard',
  '4K Mirrorless Digital Camera',
  'Ergonomic Wireless Mouse',
  'Portable Bluetooth Speaker',
  'Fast Charging Power Bank 20000mAh',
  'True Wireless Earbuds with ANC',
  'Curved UltraWide Gaming Monitor',
  'Compact USB-C Hub 7-in-1',
  'Smart Fitness Tracker Band',
  'Studio Condenser Microphone',
  'High-Speed NVMe SSD 1TB',
  'Smart LED Desk Lamp',
  'MagSafe Wireless Charger Stand',
  'Foldable Drone with 4K HDR Camera',
  'Premium Leather Laptop Sleeve',
  'Dual-Band Wi-Fi 6 Mesh Router',
  'Bass-Boosted Soundbar for TV',
  'Waterproof Action Camera 60FPS',
];

export const generateMockProducts = (count: number = 120): Product[] => {
  return Array.from({ length: count }, (_, index) => {
    const id = `prod_${index + 1}`;
    const titleTemplate = TITLES[index % TITLES.length];
    const category = CATEGORIES[index % CATEGORIES.length];
    const suffix = Math.floor(index / TITLES.length) + 1;
    const title = suffix > 1 ? `${titleTemplate} Gen ${suffix}` : titleTemplate;
    const price = Math.floor(29 + ((index * 37) % 450));
    const rating = Number((3.5 + ((index * 7) % 15) / 10).toFixed(1));

    return {
      id,
      title,
      category,
      price,
      rating,
      imageUrl: `https://picsum.photos/seed/${id}/120/120`,
      isLiked: index % 5 === 0, // Some items initially liked
    };
  });
};

export const INITIAL_PRODUCTS = generateMockProducts(120);
