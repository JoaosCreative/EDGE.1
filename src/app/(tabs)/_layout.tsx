import { Redirect, Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { getSession } from '../../lib/session';
import { EDGE_COLORS } from '../../theme/colors';

type SessionStatus = 'checking' | 'signedIn' | 'signedOut';

export default function TabsLayout() {
  const [status, setStatus] = useState<SessionStatus>('checking');

  useEffect(() => {
    let active = true;

    getSession().then((session) => {
      if (!active) return;
      setStatus(session ? 'signedIn' : 'signedOut');
    });

    return () => {
      active = false;
    };
  }, []);

  if (status === 'checking') {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={EDGE_COLORS.brandAccent} />
      </View>
    );
  }

  // Sem sessão salva, manda o usuário de volta para a tela de login.
  if (status === 'signedOut') {
    return <Redirect href="/login" />;
  }

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

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: EDGE_COLORS.background,
  },
});
