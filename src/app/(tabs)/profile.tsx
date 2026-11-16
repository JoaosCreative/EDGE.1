import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { clearSession, getSession } from '../../lib/session';
import { EDGE_COLORS } from '../../theme/colors';

export default function ProfileScreen() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    getSession().then((session) => {
      if (active) setEmail(session?.email ?? null);
    });

    return () => {
      active = false;
    };
  }, []);

  const handleLogout = async () => {
    await clearSession();
    router.replace('/login');
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Perfil</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Usuário</Text>
        <Text style={styles.cardText}>{email ?? 'Sem cadastro ativo no momento.'}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Preferências</Text>
        <Text style={styles.cardText}>Tema, alertas e watchlists entrarão em produção com autenticação e personalização.</Text>
      </View>

      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Sair da conta</Text>
      </Pressable>
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
  card: {
    backgroundColor: EDGE_COLORS.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: EDGE_COLORS.border,
    padding: 20,
  },
  cardTitle: {
    color: EDGE_COLORS.text,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  cardText: {
    color: EDGE_COLORS.textMuted,
    fontSize: 14,
    lineHeight: 22,
  },
  logoutButton: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: EDGE_COLORS.danger,
    paddingVertical: 14,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: EDGE_COLORS.danger,
    fontSize: 15,
    fontWeight: '700',
  },
});
