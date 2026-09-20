import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ProductCatalogScreen } from './src/screens/ProductCatalogScreen';
import { renderTracker } from './src/utils/renderTracker';

const RenderCounter = () => {
  const [count, setCount] = useState(renderTracker.getCount());

  useEffect(() => renderTracker.subscribe(setCount), []);

  return (
    <View style={styles.counterRow}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Card renders: ${count}. Reset counter`}
        onPress={renderTracker.reset}
        style={({ pressed }) => [styles.counter, pressed && styles.counterPressed]}
      >
        <Text style={styles.counterText}>Card renders: {count}</Text>
        <Text style={styles.resetText}>Tap to reset</Text>
      </Pressable>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <RenderCounter />
      <ProductCatalogScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  counterRow: {
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  counter: {
    alignItems: 'center',
    backgroundColor: '#ecfdf5',
    borderColor: '#a7f3d0',
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  counterPressed: {
    opacity: 0.7,
  },
  counterText: {
    color: '#0f172a',
    fontSize: 12,
    fontWeight: '700',
  },
  resetText: {
    color: '#64748b',
    fontSize: 10,
  },
});
