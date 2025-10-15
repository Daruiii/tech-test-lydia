# Application de Recherche de Transactions

Application web développée avec **React**, **TypeScript** et **Vite**, permettant de rechercher et d’afficher dynamiquement une liste de transactions à partir d’un fichier JSON.

L’objectif de ce projet est de proposer une interface fluide, claire et réactive, tout en appliquant les bonnes pratiques de développement front-end et une attention particulière au design et à l’expérience utilisateur.

## Fonctionnalités principales

- **Recherche en temps réel** (insensible à la casse) avec délai de frappe (_debounce_)
- **Mode clair / sombre** avec sauvegarde de la préférence utilisateur
- **Animation d’attente** avec squelettes de chargemen
- **Défilement infini** pour le chargement progressif des transactions
- **Animations légères et transitions** via Framer Motion
- **Gestion des erreurs** via un composant personnalisé
- **Accessibilité renforcée** (labels ARIA, gestion des états de chargement)
- **Interface responsive** inspirée de la charte graphique de Lydia
- **Modal d’information** pour les détails de chaque transaction

## Stack technique

- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion
- Lucide React (icônes)
- ESLint / Prettier pour le formatage et la cohérence du code

## Lancer le projet

```bash
npm install
npm run dev
```

L’application sera accessible sur [http://localhost:5173](http://localhost:5173)

## Déploiement

Version en ligne (Vercel) : [https://lydia-transaction-search.vercel.app/](https://lydia-transaction-search.vercel.app/)  
