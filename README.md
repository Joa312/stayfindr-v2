# Stayfindr Marketplace

**Där hotell möter influencers för äkta innehåll**

Sveriges första B2B-plattform för UGC-samarbeten inom hospitality.

---

## Vad är Stayfindr Marketplace?

Stayfindr Marketplace kopplar ihop hotell med influencers för att skapa autentiskt användargenererat innehåll (UGC). Plattformen gör det enkelt för båda parter att hitta varandra, förhandla samarbeten och hantera leveranser.

### För Hotell
- Skapa profil med brand assets och källmaterial
- Lägg upp innehållsförfrågningar (kampanjer, reels, stories)
- Hitta och kontakta verifierade influencers
- Godkänn leveranser och hantera betalningar

### För Influencers
- Skapa portfolio och visa upp tidigare arbete
- Bläddra bland hotell och aktiva förfrågningar
- Skicka samarbetsförslag
- Få betalt säkert via Stripe

---

## Tech Stack

| Lager | Teknologi |
|-------|-----------|
| Frontend | HTML, CSS, JavaScript |
| Backend | PocketBase |
| Betalning | Stripe Connect |
| Lagring | Cloudflare R2 |

---

## Prototyp

Klickbar prototyp med 4 vyer:
- `index.html` — Landing page
- `hotel-dashboard.html` — Dashboard för inloggade hotell
- `influencer-dashboard.html` — Dashboard för inloggade influencers
- `profile.html` — Profilsida (hotell/influencer)

### Designsystem
- **Font:** DM Sans
- **Tema:** Ljust (mörkt tema planerat)
- **Border-radius:** 2px
- **Stil:** Business/dashboard, ingen gradient

---

## Datamodell

### Collections (PocketBase)

```
users              — Autentisering (hotel/influencer/admin)
hotels             — Hotellprofiler
influencers        — Influencer-profiler
hotel_content_requests — Hotellens förfrågningar
deals              — Samarbeten mellan hotell och influencers
content_deliveries — Levererat innehåll
payments           — Betalningar via Stripe
notifications      — In-app notifikationer
reviews            — Omdömen efter samarbete
```

### Deal-status flöde

```
proposed → accepted → in_progress → delivered → approved → paid
                                        ↓
                               revision_requested
```

---

## Affärsmodell

| Avgift | Belopp | När |
|--------|--------|-----|
| Registrering (influencer) | $10 | Vid kontoskapande |
| Plattformsavgift | $20 | När leverans godkänns |

Betalning hanteras via Stripe. Pengarna hålls i escrow tills hotellet godkänner leveransen.

---

## Influencer Ranking

Influencers rankas 0-100 baserat på:
- Följarbas (max 25p)
- Genomförda deals (max 25p)
- Genomsnittligt betyg (max 25p)
- Profilkomplett (max 10p)
- Aktivitet (max 15p)

| Rank | Poäng |
|------|-------|
| 🥇 Guld | 80+ |
| 🥈 Silver | 60-79 |
| 🥉 Brons | 40-59 |

---

## Roadmap

- [x] Mockup v1 (mörkt tema)
- [x] Mockup v2 (ljust tema, dashboard-stil)
- [x] Klickbar prototyp (4 vyer)
- [ ] Tema-toggle (ljus/mörk)
- [ ] Språkstöd (SV/EN)
- [ ] PocketBase-integration
- [ ] Stripe Connect-integration
- [ ] Beta-lansering

---

## Utveckling

```bash
# Klona repot
git clone https://github.com/Joa312/stayfindr-v2.git

# Öppna i webbläsare
open index.html
```

---

## Licens

Privat projekt. Alla rättigheter förbehållna.

---

*Where creators meet hospitality*
