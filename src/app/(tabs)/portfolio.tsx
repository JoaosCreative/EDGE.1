import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { EDGE_COLORS } from '../../theme/colors';

export default function PortfolioScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Carteira</Text>
      <Text style={styles.subtitle}>Registre ativos, transações e evolução patrimonial.</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Nenhuma carteira criada</Text>
        <Text style={styles.cardText}>A funcionalidade de carteira será liberada quando o backend e o cadastro de usuários forem integrados.</Text>
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
  card: {
    backgroundColor: EDGE_COLORS.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: EDGE_COLORS.border,
    padding: 20,
  },
  cardTitle: {
    color: EDGE_COLORS.text,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  cardText: {
    color: EDGE_COLORS.textMuted,
    fontSize: 14,
    lineHeight: 22,
  },
});
