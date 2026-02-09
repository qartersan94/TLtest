## 🎮 TravL E-sports - Site Ultra-Dark

## ✅ Version Finale - Tous les fichiers cohérents

---

## 📁 Structure

```
travl-esports/
├── index.html           ⭐ Page principale (ULTRA-DARK)
├── dashboard.html       ⭐ Admin dashboard (ULTRA-DARK)
├── recruitment.html     ⭐ Page recrutement (ULTRA-DARK)
├── data/
│   └── database.js      📊 Base de données (8 équipes, 40 joueurs)
├── css/
│   └── (fichiers legacy - CSS maintenant intégré dans HTML)
└── js/
    └── (fichiers legacy - fonctions dans HTML)
```

---

## 🎨 Design

### Ultra-Dark Theme
- ✅ Fond noir pur `#000000`
- ✅ Accent rouge vif `#ff0844`
- ✅ **PAS D'OR** (supprimé complètement)
- ✅ Cartes compactes
- ✅ Style e-sports futuriste
- ✅ CSS intégré (pas de dépendances externes)

### Palette
```
Noir pur:     #000000
Card:         #0f0f0f
Rouge:        #ff0844
Texte:        #ffffff
Secondaire:   #a0a0a0
```

---

## 🚀 Pages

### 1. **index.html** (Page Principale)

**Bannière Top** :
- Logo TRAVL (rouge néon)
- Tabs : Rosters | Actualités | Profils | Stats | Planning
- Boutons : Recrutement | Admin

**Sections** :
- ✅ **Rosters** : Cartes des 8 équipes
- 🔲 **Actualités** : Vide (prêt à remplir)
- ✅ **Profils** : 40 joueurs + recherche
- ✅ **Stats** : Dashboard stats
- 🔲 **Planning** : Vide (structure prête)

**Fonctionnalités** :
- Navigation par tabs
- Recherche joueurs en temps réel
- Hover effects (glow rouge)
- Animations smooth

---

### 2. **dashboard.html** (Admin)

**Sidebar** :
- Vue d'ensemble
- Équipes (tableau CRUD)
- Joueurs (tableau CRUD)
- Matchs
- Planning
- Recrutement
- Budget
- News

**Fonctionnalités** :
- Navigation sidebar
- Tables interactives
- Stats en temps réel
- Boutons d'action (alerts pour l'instant)

---

### 3. **recruitment.html** (Recrutement)

**2 Tabs** :
- **Offres** : Cartes des postes ouverts
- **Postuler** : Formulaire complet

**Formulaire** :
- Pseudo, âge, email, discord
- Position (TOP/JGL/MID/ADC/SUP)
- 31 rangs (Fer → Challenger)
- Disponibilités (7 jours)
- Motivation (500 char max)

---

## 🎯 Équipes (TravL)

1. **RoZ** 🔥 - Principale
2. **Mount X** ⛰️ - Académie
3. **Flux** ⚡ - Espoirs
4. **Froznlégion** ❄️ - Développement
5. **Visionary** 👁️ - Talents
6. **Mymétic** 🎭 - Challenger
7. **Heav'n** ☁️ - Formation
8. **Légendary** 👑 - Réserve

**Total** : 40 joueurs dans database.js

---

## 📊 Base de Données

### `data/database.js`

Contient :
- ✅ 8 équipes (avec stats W/L/WR)
- ✅ 40 joueurs (pseudo, KDA, winrate, position, etc.)
- ✅ 8 coaches
- ✅ 8 managers
- ✅ Matchs
- ✅ Sessions d'entraînement
- ✅ 31 rangs LoL
- ✅ Candidatures (système recrutement)

**Exemple** :
```javascript
DATABASE = {
  teams: [
    {
      id: 1,
      name: "TravL RoZ",
      icon: "🔥",
      wins: 24,
      losses: 8,
      winrate: 75,
      division: "Principale"
    }
  ],
  players: [...]
}
```

---

## ⚡ Utilisation

### 1. Ouvrir le site
```bash
# Double-cliquer sur index.html
# ou
open index.html
```

### 2. Navigation
- **Site public** : `index.html`
- **Admin** : Cliquer "ADMIN" → `dashboard.html`
- **Recrutement** : Cliquer "RECRUTEMENT" → `recruitment.html`

### 3. Modifier les données
Éditez `data/database.js` :
- Ajouter/modifier équipes
- Ajouter/modifier joueurs
- Changer les stats

### 4. Personnaliser les couleurs
Toutes les couleurs sont dans les variables CSS en haut de chaque HTML :
```css
:root {
  --accent-red: #ff0844;  /* Changer ici */
  --bg-primary: #000000;  /* Fond */
  ...
}
```

---

## 🔧 À Implémenter

### Prêt mais vide (click = alert) :
- [ ] Formulaire ajout équipe
- [ ] Formulaire ajout joueur
- [ ] Formulaire ajout news
- [ ] Modales détails (profils, équipes)
- [ ] Calendrier interactif
- [ ] Graphiques stats avancés
- [ ] Upload images

### Backend (futur) :
- [ ] API REST
- [ ] Base de données réelle
- [ ] Authentification
- [ ] Système de fichiers

---

## 📱 Responsive

✅ Desktop (1920px+)
✅ Laptop (1366px)
✅ Tablet (768px)
✅ Mobile (375px)

---

## 🎨 Effets Visuels

- **Glow rouge** sur hover
- **Animations** fadeIn, translateY
- **Borders** animées (top gradient)
- **Shadows** dynamiques
- **Transitions** smooth (0.3s)

---

## ⚠️ Important

### CSS Intégré
Le CSS est **directement dans les fichiers HTML** (balise `<style>`).
Pas de dépendances externes = **Fonctionne toujours**.

### JavaScript Minimal
Tout le JS essentiel est dans les `<script>` des HTML.
`database.js` est le seul fichier externe requis.

### Compatibilité
- ✅ Chrome, Firefox, Edge, Safari
- ✅ Pas de frameworks (Vanilla JS)
- ✅ Pas de build required

---

## 📝 Notes

### Ce qui fonctionne :
✅ Navigation complète
✅ Affichage données depuis DATABASE
✅ Recherche joueurs
✅ Stats calculées
✅ Design ultra-dark
✅ Responsive

### Ce qui est vide (intentionnel) :
🔲 Actualités (ajoutez dans dashboard)
🔲 Planning (calendrier à coder)
🔲 Formulaires CRUD (alerts pour l'instant)

---

**🎮 TravL E-sports**
Version Ultra-Dark Finale
Février 2026
