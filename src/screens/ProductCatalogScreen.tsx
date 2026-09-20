import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { Product } from '../types';
import { INITIAL_PRODUCTS } from '../mock/products';
import { mockLikeApi } from '../mock/likeApi';
import { renderTracker } from '../utils/renderTracker';

// ============================================================================
// CANDIDATE SCREEN: ProductCatalogScreen
// See README.md for the user-reported issues to diagnose and resolve.
// ============================================================================

interface CardProps {
  item: Product;
  onLike: () => void;
}

// Sub-component: Product Card
const ProductCard = React.memo(({ item, onLike }: CardProps) => {
  React.useEffect(() => {
    renderTracker.recordRender();
  });

  return (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>

      <TouchableOpacity onPress={onLike} style={styles.likeBtn}>
        <Text style={styles.likeText}>{item.isLiked ? '❤️' : '🤍'}</Text>
      </TouchableOpacity>
    </View>
  );
});

export const ProductCatalogScreen = () => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [isLiking, setIsLiking] = useState(false);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleLike = async (id: string) => {
    setIsLiking(true);
    try {
      await mockLikeApi(id);
      setProducts((prev) =>
        prev.map((item) => (item.id === id ? { ...item, isLiked: !item.isLiked } : item))
      );
    } finally {
      setIsLiking(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search products by title..."
        value={search}
        onChangeText={setSearch}
        autoCorrect={false}
      />

      {isLiking && (
        <View style={styles.savingBadge}>
          <ActivityIndicator size="small" color="#2563eb" />
          <Text style={styles.savingText}>Syncing like to server...</Text>
        </View>
      )}

      <FlatList
        data={filteredProducts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ProductCard item={item} onLike={() => handleLike(item.id)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  searchInput: {
    height: 46,
    marginHorizontal: 16,
    marginVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    fontSize: 15,
  },
  savingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    backgroundColor: '#e0e7ff',
    marginHorizontal: 16,
    borderRadius: 6,
    marginBottom: 6,
  },
  savingText: {
    marginLeft: 6,
    fontSize: 12,
    color: '#1e40af',
    fontWeight: '500',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#e2e8f0',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0f172a',
  },
  category: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: '#059669',
    marginTop: 4,
  },
  likeBtn: {
    padding: 4, // ⚠️ Very small hitbox
  },
  likeText: {
    fontSize: 22,
  },
});
