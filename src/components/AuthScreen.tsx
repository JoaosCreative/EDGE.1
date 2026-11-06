import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

interface AuthScreenProps {
  onLoginSuccess: (user: { email: string }) => void | Promise<void>;
}

export function AuthScreen({ onLoginSuccess }: AuthScreenProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    const isValidEmail = /\S+@\S+\.\S+/.test(trimmedEmail);
    const isValidPassword = trimmedPassword.length >= 6;

    if (!trimmedEmail || !trimmedPassword) {
      setError('Preencha e-mail e senha para continuar.');
      return;
    }

    if (!isValidEmail) {
      setError('Digite um e-mail válido.');
      return;
    }

    if (!isValidPassword) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    setError('');
    await onLoginSuccess({ email: trimmedEmail });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <View style={styles.brandWrap}>
            <Text style={styles.brandText}>EDGE</Text>
            <View style={styles.brandDot} />
          </View>
          <Text style={styles.tagline}>Sua vantagem desde cedo.</Text>

          <View style={styles.form}>
            <View style={styles.fieldWrap}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="seu@email.com"
                placeholderTextColor="#8B94A7"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
              />
            </View>

            <View style={styles.fieldWrap}>
              <Text style={styles.label}>Senha</Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
                placeholderTextColor="#8B94A7"
                secureTextEntry
                style={styles.input}
              />
            </View>

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <Pressable style={styles.primaryButton} onPress={handleSubmit}>
              <Text style={styles.primaryButtonText}>
                {isSignUp ? 'Criar Conta no EDGE' : 'Entrar na Plataforma'}
              </Text>
            </Pressable>
          </View>

          <View style={styles.switchWrap}>
            <Text style={styles.switchText}>
              {isSignUp ? 'Já possui uma conta?' : 'Ainda não tem conta?'}{' '}
            </Text>
            <Pressable onPress={() => setIsSignUp((current) => !current)}>
              <Text style={styles.switchAction}>
                {isSignUp ? 'Fazer login' : 'Cadastre-se'}
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0C10',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
    backgroundColor: '#11151C',
    borderWidth: 1,
    borderColor: '#232A36',
    borderRadius: 20,
    padding: 28,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 12 },
    elevation: 8,
  },
  brandWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 6,
  },
  brandText: {
    color: '#F5F4EE',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 2,
  },
  brandDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: '#927239',
  },
  tagline: {
    color: '#8B94A7',
    textAlign: 'center',
    fontSize: 12,
    letterSpacing: 0.3,
    marginBottom: 24,
  },
  form: {
    gap: 18,
  },
  fieldWrap: {
    gap: 8,
  },
  label: {
    color: '#8B94A7',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.4,
  },
  input: {
    backgroundColor: '#181D26',
    borderWidth: 1,
    borderColor: '#232A36',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: '#F2F4F8',
    fontSize: 14,
  },
  errorText: {
    color: '#EF4444',
    fontSize: 12,
    marginTop: -4,
    marginBottom: 2,
  },
  primaryButton: {
    backgroundColor: '#17324D',
    borderWidth: 1,
    borderColor: '#927239',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },
  primaryButtonText: {
    color: '#F5F4EE',
    fontSize: 14,
    fontWeight: '700',
  },
  switchWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    flexWrap: 'wrap',
  },
  switchText: {
    color: '#8B94A7',
    fontSize: 12,
  },
  switchAction: {
    color: '#927239',
    fontSize: 12,
    fontWeight: '700',
  },
});
