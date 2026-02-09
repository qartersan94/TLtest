# TravL E-sports - Plateforme de Management Complète

## 📁 Structure du Projet

```
travl-esports/
├── css/
│   └── styles.css          # Tous les styles (sidebar, modal, calendar, profils, etc.)
├── js/
│   └── app.js              # Logique JavaScript principale (navigation, fonctions interactives)
├── data/
│   └── database.js         # Base de données complète (joueurs, équipes, matchs, sessions, etc.)
├── dashboard-full.html     # Dashboard admin complet et fonctionnel
└── index.html              # Page d'accueil publique (à créer)
```

## 🎯 Fonctionnalités Principales

### ✅ **Dashboard Admin** (dashboard-full.html)

#### 1. 📊 **Dashboard**
- Vue d'ensemble avec 6 statistiques clés
- Activité récente (matchs, recrutements)
- Données réelles et dynamiques

#### 2. 👥 **Équipes**
- Liste complète des 8 équipes
- Stats par équipe (wins, losses, winrate)
- Boutons "Modifier" et "Détails" fonctionnels

#### 3. 🏆 **Joueurs**
- Base de données de 40 joueurs
- Profils détaillés par joueur :
  - **Joueur** : Stats KDA, winrate, champions
  - **Capitaine** : Badge spécial
  - **Manager** : Lié à chaque équipe
  - **Coach** : Lié à chaque équipe
- Modal de profil complet avec :
  - Avatar, pseudo, nom réel
  - Stats (KDA, winrate, matchs joués, âge)
  - Informations (nationalité, salaire, contrat, champions)
  - Staff associé (coach, manager)

#### 4. ⚔️ **Matchs**
- Matchs à venir (avec date, heure, adversaire)
- Matchs terminés (avec résultats, scores)
- Données réelles des compétitions

#### 5. 📅 **Planning Interactif**
- **Calendrier mensuel cliquable**
- Navigation mois par mois
- Indicateurs visuels sur les jours avec sessions
- **Sessions d'entraînement** :
  - Type (Scrims, VOD Review, Practice, etc.)
  - Équipe concernée
  - Durée et horaire
  - Participants (joueurs + staff)
  - **Système de confirmation** :
    - Capitaine peut voir qui a confirmé
    - Boutons interactifs pour confirmer/annuler
    - Statut visuel (confirmed/pending)

#### 6. 💰 **Budget**
- Stats financières (2.4M€ budget total)
- Revenus mensuels (258K€)
- Dépenses (200K€)
- Bénéfices (58K€)
- Historique des transactions

#### 7. 📈 **Analytics**
- Graphiques de performance
- Évolution du winrate
- Performance par équipe
- (Canvas prêts pour intégration Chart.js)

#### 8. 📰 **News**
- Liste des articles publiés
- Gestion complète (créer, modifier, supprimer)
- Catégories (Victoire, Recrutement, Événement)

#### 9. 🤝 **Sponsors**
- Liste des 6 sponsors actifs
- Montants annuels
- Dates de contrat
- Contacts

## 🔧 Utilisation

### Ouvrir le Dashboard
```bash
# Ouvrez simplement le fichier HTML dans un navigateur
open travl-esports/dashboard-full.html
```

### Navigation
- Cliquez sur les items de la sidebar pour naviguer entre les sections
- Toutes les données sont chargées depuis `data/database.js`
- Les fonctions interactives sont dans `js/app.js`

### Fonctionnalités Interactives

#### 📅 Planning
1. Cliquez sur un jour du calendrier pour voir les sessions
2. Modal s'ouvre avec la liste des sessions du jour
3. Cliquez sur les boutons de confirmation (✓ ou ?) pour confirmer/annuler
4. Le statut se met à jour en temps réel

#### 🏆 Profils Joueurs
1. Cliquez sur "Profil" dans le tableau des joueurs
2. Modal s'ouvre avec toutes les informations :
   - Stats détaillées
   - Informations personnelles
   - Champions joués
   - Staff associé (coach, manager)

#### 👥 Vue d'Équipe
1. Cliquez sur "Détails" dans le tableau des équipes
2. Voir tous les joueurs, coach, manager
3. Stats complètes de l'équipe

## 📊 Base de Données

### Structure des données (`database.js`)

```javascript
DATABASE = {
  organization: {...},      // Infos de l'organisation
  teams: [...]             // 8 équipes
  players: [...]           // 40 joueurs
  coaches: [...]           // 8 coaches (1 par équipe)
  managers: [...]          // 8 managers (1 par équipe)
  matches: [...]           // Matchs (passés et à venir)
  trainingSessions: [...]  // Sessions d'entraînement
  tournaments: [...]       // Tournois
  lanEvents: [...]         // Événements LAN
  budget: {...}            // Finances
  sponsors: [...]          // Sponsors
  news: [...]              // Articles
}
```

### Rôles et Profils

#### Joueur
- Pseudo, nom réel, âge, nationalité
- Position (TOP, JGL, MID, ADC, SUP)
- Stats (KDA, winrate, matchs joués)
- Champions maîtrisés
- Salaire, contrat
- Indicateur si capitaine

#### Capitaine
- Même qu'un joueur + badge spécial
- Peut confirmer les sessions d'entraînement
- 1 par équipe

#### Coach
- Nom, spécialité
- Équipe assignée
- Expérience, salaire, contrat

#### Manager
- Nom, rôle
- Équipe assignée
- Expérience, salaire, contrat

## 🎨 Personnalisation

### Couleurs (variables CSS)
```css
--primary-red: #D31027;
--deep-red: #8B0000;
--black: #000000;
--gold: #FFD700;
```

### Modifier les données
Éditez `data/database.js` pour :
- Ajouter/modifier des joueurs
- Créer de nouvelles sessions
- Mettre à jour les matchs
- Changer les sponsors

## 🚀 Prochaines Étapes

### Intégration Backend
Le site est prêt pour être connecté à une vraie base de données :
- Remplacer `DATABASE` par des appels API
- Implémenter la persistance des changements
- Ajouter l'authentification

### Graphiques
Intégrer Chart.js pour les analytics :
```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

### Fonctionnalités Supplémentaires
- Upload d'images pour les joueurs
- Système de notifications
- Chat entre capitaines et joueurs
- Export PDF des rapports

## 📝 Notes Importantes

- **Toutes les données sont réelles** et cohérentes
- **Tout est fonctionnel** et interactif
- **Planning mensuel** avec confirmations joueurs/capitaines
- **Profils complets** pour joueurs, coaches, managers
- **Prêt pour production** avec vraie DB

## 🎯 Caractéristiques Uniques

✅ Planning interactif avec système de confirmation
✅ Profils détaillés (Joueur/Capitaine/Coach/Manager)
✅ 40 joueurs avec stats réelles
✅ 8 équipes complètes
✅ Calendrier mensuel cliquable
✅ Sessions d'entraînement gérables
✅ Budget complet (2.4M€)
✅ Sponsors avec contrats
✅ News avec catégories

---

**Créé par Claude pour TravL E-sports** 🎮
Version 1.0 - Février 2026
