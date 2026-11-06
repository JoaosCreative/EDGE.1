import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { EDGE_COLORS } from '../../theme/colors';

export default function TradeScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Trade</Text>
      <Text style={styles.notice}>
        Simulador de trading com dinheiro virtual. Não envolve operações financeiras reais.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Saldo virtual</Text>
        <Text style={styles.cardValue}>R$ 100.000,00</Text>
        <Text style={styles.cardText}>A conta simulação será habilitada após a integração da camada de usuários e do backend de ordens.</Text>
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
  notice: {
    color: EDGE_COLORS.brandAccent,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
  },
  card: {
    backgroundColor: EDGE_COLORS.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: EDGE_COLORS.border,
    padding: 20,
  },
  cardTitle: {
    color: EDGE_COLORS.textMuted,
    fontSize: 12,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  cardValue: {
    color: EDGE_COLORS.text,
    fontSize: 32,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 8,
  },
  cardText: {
    color: EDGE_COLORS.textMuted,
    fontSize: 14,
    lineHeight: 22,
  },
});
