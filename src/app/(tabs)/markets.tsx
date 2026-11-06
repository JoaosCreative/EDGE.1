import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { EDGE_COLORS } from '../../theme/colors';

const categories = [
  'Ações brasileiras',
  'Ações americanas',
  'FIIs',
  'ETFs',
  'BDRs',
  'Índices',
  'Moedas',
  'Criptomoedas',
];

export default function MarketsScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Mercados</Text>
      <Text style={styles.subtitle}>Busca e acompanhamento organizados por categoria.</Text>

      <View style={styles.list}>
        {categories.map((category) => (
          <View key={category} style={styles.card}>
            <Text style={styles.category}>{category}</Text>
            <Text style={styles.value}>Sem dados ativos para exibir.</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: EDGE_COLORS.background,
  },
  content: {
    padding: 20,
    paddingTop: 56,
    gap: 18,
    paddingBottom: 120,
  },
  title: {
    color: EDGE_COLORS.text,
    fontSize: 30,
    fontWeight: '700',
  },
  subtitle: {
    color: EDGE_COLORS.textMuted,
    fontSize: 14,
  },
  list: {
    gap: 12,
  },
  card: {
    backgroundColor: EDGE_COLORS.surface,
    borderWidth: 1,
    borderColor: EDGE_COLORS.border,
    borderRadius: 16,
    padding: 16,
    gap: 4,
  },
  category: {
    color: EDGE_COLORS.text,
    fontSize: 16,
    fontWeight: '700',
  },
  value: {
    color: EDGE_COLORS.textMuted,
    fontSize: 13,
  },
});
