import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { EDGE_COLORS } from '../../theme/colors';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: EDGE_COLORS.surface,
          borderTopColor: EDGE_COLORS.border,
          borderTopWidth: 1,
          height: 72,
          paddingBottom: 10,
          paddingTop: 8,
        },
        tabBarActiveTintColor: EDGE_COLORS.brandAccent,
        tabBarInactiveTintColor: EDGE_COLORS.textMuted,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
        tabBarIcon: ({ color, size }) => {
          const iconName =
            route.name === 'index'
              ? 'home-outline'
              : route.name === 'markets'
                ? 'trending-up-outline'
                : route.name === 'portfolio'
                  ? 'wallet-outline'
                  : route.name === 'trade'
                    ? 'swap-horizontal-outline'
                    : 'person-outline';

          const iconColor = typeof color === 'string' ? color : EDGE_COLORS.textMuted;

          return <Ionicons name={iconName as any} size={size ?? 22} color={iconColor} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Início' }} />
      <Tabs.Screen name="markets" options={{ title: 'Mercados' }} />
      <Tabs.Screen name="portfolio" options={{ title: 'Carteira' }} />
      <Tabs.Screen name="trade" options={{ title: 'Trade' }} />
      <Tabs.Screen name="profile" options={{ title: 'Perfil' }} />
    </Tabs>
  );
}
