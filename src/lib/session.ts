import AsyncStorage from '@react-native-async-storage/async-storage';

export type EdgeSession = {
  email: string;
  lastLogin: number;
};

const SESSION_KEY = 'edge_user_session';

export async function saveSession(user: { email: string }): Promise<void> {
  const session: EdgeSession = {
    email: user.email.trim().toLowerCase(),
    lastLogin: Date.now(),
  };

  const payload = JSON.stringify(session);

  if (typeof window !== 'undefined' && 'localStorage' in window) {
    window.localStorage.setItem(SESSION_KEY, payload);
    return;
  }

  await AsyncStorage.setItem(SESSION_KEY, payload);
}

export async function getSession(): Promise<{ email: string } | null> {
  try {
    let raw: string | null = null;

    if (typeof window !== 'undefined' && 'localStorage' in window) {
      raw = window.localStorage.getItem(SESSION_KEY);
    } else {
      raw = await AsyncStorage.getItem(SESSION_KEY);
    }

    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<EdgeSession>;

    if (!parsed.email) return null;

    return { email: parsed.email };
  } catch (error) {
    console.warn('Erro ao recuperar sessão EDGE:', error);
    return null;
  }
}

export async function clearSession(): Promise<void> {
  if (typeof window !== 'undefined' && 'localStorage' in window) {
    window.localStorage.removeItem(SESSION_KEY);
    return;
  }

  await AsyncStorage.removeItem(SESSION_KEY);
}
