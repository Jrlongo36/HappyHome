# HappyHome 🏠

**Première plateforme de prestataires à domicile verifiés et securisée.**

Mise en relation entre particuliers et prestataires de services ménagers vérifiées — KYC 5 étapes, paiement Mobile Money, tracking en temps réel.

---

## Stack technique

- **Frontend** : HTML / CSS / JS — fichier unique `index.html`
- **Backend** : Supabase (PostgreSQL + Auth REST API)
- **Déploiement** : Cloudflare Pages
- **Paiement** : Orange Money · MTN Mobile Money (intégration CinetPay prévue)

---

## Architecture

```
index.html          → App complète (landing + plateforme)
README.md           → Ce fichier
```

L'app fonctionne sans framework, sans bundler, sans dépendances locales.  
Toutes les requêtes Supabase passent par l'API REST native (`fetch`).

---

## Rôles utilisateurs

| Rôle | Accès |
|---|---|
| **Usager** | Recherche, réservation, suivi missions |
| **Prestataire** | Dashboard, disponibilités, mission active |
| **Admin** | KYC, live tracking, litiges, revenus |

---

## Base de données (Supabase)

7 tables :

| Table | Description |
|---|---|
| `prestataires` | Catalogue des ménagères certifiées |
| `usagers` | Comptes clients |
| `prestataire_users` | Candidatures & comptes prestataires |
| `missions` | Réservations et missions |
| `litiges` | Centre de litiges |
| `alertes` | Alertes sécurité |
| `admin_logs` | Journal d'activité admin |

Schéma complet : `happyhome_schema.sql`

---

## Processus KYC — 6 étapes

1. Formulaire en ligne (CNI, garants, Mobile Money)
2. Vérification MoMo = Nom CNI
3. Rencontre physique à Akwa
4. Appels 2 garants
5. Test pratique 2h — rémunéré 2 000 FCFA
6. Activation badge

---

## Variables de configuration

Dans `index.html`, section `SUPABASE REST` :

```javascript
const SUPABASE_URL = 'https://xxxx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJ...';
```

---

## Déploiement

Cloudflare Pages — déploiement automatique à chaque push sur `main`.

---

## Roadmap

- [x] Landing page + plateforme MVP
- [x] Supabase backend (7 tables)
- [x] Auth admin Supabase
- [x] KYC workflow 6 étapes
- [x] Réservation + paiement Manuel MoMo
- [ ] Intégration CinetPay (paiement automatique)
- [ ] Notifications SMS (alerte sécurité)
- [ ] GPS tracking temps réel
- [ ] Application mobile (PWA)

---

## Zones couvertes

Douala — Akwa · Bonanjo · Bonapriso · Bali · Deido · Makepe · Bépanda · New Bell · Logpom · Bonaberi · Bassa · Yassa · Japoma

---

© 2026 HappyHome · Douala, Cameroun · Paiement Mobile Money uniquement
