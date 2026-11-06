import { Redirect, router } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { AuthScreen } from '../components/AuthScreen';
import { getSession, saveSession } from '../lib/session';

export default function IndexScreen() {
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [user, setUser] = useState<{ email: string } | null>(null);

  useEffect(() => {
    let active = true;

    const loadSession = async () => {
      const session = await getSession();

      if (!active) return;

      setUser(session);
      setIsCheckingSession(false);
    };

    loadSession();

    return () => {
      active = false;
    };
  }, []);

  const handleLoginSuccess = async (nextUser: { email: string }) => {
    setUser(nextUser);
    await saveSession(nextUser);
    router.replace('/(tabs)');
  };

  if (isCheckingSession) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#927239" />
      </View>
    );
  }

  if (user) {
    return <Redirect href="/(tabs)" />;
  }

  return <AuthScreen onLoginSuccess={handleLoginSuccess} />;
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A0C10',
  },
});
