# EDGE

EDGE é uma plataforma financeira, educacional e analítica para jovens interessados em mercado, investimentos, finanças e empreendedorismo.

## Stack inicial

- Expo + React Native + TypeScript
- Expo Router
- Design system próprio em modo escuro
- Estrutura pronta para integração com Supabase, APIs reais e cache compartilhado

## Status atual

A base do app foi inicializada e a estrutura da primeira fase foi montada com navegação mobile-first e telas placeholders que indicam claramente quando os dados ainda não estão disponíveis.

## Como executar

```bash
npm install
npm run start
```

## Princípios implementados

- Interface em modo escuro
- Navegação principal em 5 abas: Início, Mercados, Carteira, Trade e Perfil
- Avisos explícitos de que os dados ainda não foram integrados
- Estrutura modular em `src/app` e `src/components`

## Próximo passo

Integrar backend, autenticação, cache e APIs de dados reais conforme a Fase 2.
