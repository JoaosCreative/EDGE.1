import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { EDGE_COLORS } from '../../theme/colors';
import { MarketStatCard } from '../../components/MarketStatCard';

const overview = [
  { label: 'Ibovespa', value: '—', trend: 'neutral' as const, subtitle: 'Dados pendentes' },
  { label: 'S&P 500', value: '—', trend: 'neutral' as const, subtitle: 'Aguardando feed' },
  { label: 'Dólar', value: '—', trend: 'neutral' as const, subtitle: 'Sem atualização' },
  { label: 'Bitcoin', value: '—', trend: 'neutral' as const, subtitle: 'API em espera' },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>EDGE</Text>
          <Text style={styles.title}>Sua vantagem desde cedo.</Text>
        </View>
      </View>

      <View style={styles.noticeCard}>
        <Text style={styles.noticeTitle}>Status do mercado</Text>
        <Text style={styles.noticeText}>
          Os dados reais ainda não foram integrados. A tela está pronta para receber feeds do backend e das APIs autorizadas.
        </Text>
      </View>

      <View style={styles.grid}>
        {overview.map((item) => (
          <MarketStatCard
            key={item.label}
            label={item.label}
            value={item.value}
            subtitle={item.subtitle}
            trend={item.trend}
          />
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Indicadores</Text>
        <View style={styles.placeholderCard}>
          <Text style={styles.placeholderText}>Integração de indicadores econômicos pendente.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notícias relevantes</Text>
        <View style={styles.placeholderCard}>
          <Text style={styles.placeholderText}>A área de notícias entrará em produção após a integração dos feeds.</Text>
        </View>
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
    paddingBottom: 120,
    gap: 20,
  },
  header: {
    paddingTop: 48,
  },
  eyebrow: {
    color: EDGE_COLORS.brandAccent,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  title: {
    color: EDGE_COLORS.text,
    fontSize: 30,
    fontWeight: '700',
    marginTop: 8,
  },
  noticeCard: {
    backgroundColor: EDGE_COLORS.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: EDGE_COLORS.border,
    padding: 18,
  },
  noticeTitle: {
    color: EDGE_COLORS.text,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  noticeText: {
    color: EDGE_COLORS.textMuted,
    fontSize: 13,
    lineHeight: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  section: {
    gap: 10,
  },
  sectionTitle: {
    color: EDGE_COLORS.text,
    fontSize: 18,
    fontWeight: '700',
  },
  placeholderCard: {
    backgroundColor: EDGE_COLORS.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: EDGE_COLORS.border,
    padding: 18,
  },
  placeholderText: {
    color: EDGE_COLORS.textMuted,
    fontSize: 14,
  },
});
