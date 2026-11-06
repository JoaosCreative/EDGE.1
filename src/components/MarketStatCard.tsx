import { StyleSheet, Text, View } from 'react-native';
import { EDGE_COLORS } from '../theme/colors';

type MarketStatCardProps = {
  label: string;
  value: string;
  trend?: 'up' | 'down' | 'neutral';
  subtitle?: string;
};

export function MarketStatCard({
  label,
  value,
  trend = 'neutral',
  subtitle = 'Aguardando integração',
}: MarketStatCardProps) {
  const trendColor =
    trend === 'up'
      ? EDGE_COLORS.success
      : trend === 'down'
        ? EDGE_COLORS.danger
        : EDGE_COLORS.textMuted;

  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={[styles.subtitle, { color: trendColor }]}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 150,
    backgroundColor: EDGE_COLORS.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: EDGE_COLORS.border,
    padding: 16,
    gap: 8,
  },
  label: {
    color: EDGE_COLORS.textMuted,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  value: {
    color: EDGE_COLORS.text,
    fontSize: 22,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '600',
  },
});
