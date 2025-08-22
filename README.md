# HMI-Busdriversroles

Eine moderne HMI (Human-Machine Interface) Anwendung für autonome Busse, die die Rolle des Busfahrers in verschiedenen Szenarien unterstützt. Entwickelt mit React, TypeScript und Vite.

## 🚌 Projektübersicht

Dieses Projekt demonstriert ein fortschrittliches HMI-System für Busfahrer in teilautonomen Bussen. Es unterstützt den Fahrer (in den Szenarien "Majid") durch intuitive Benutzeroberflächen und klare Handlungsanweisungen in verschiedenen Situationen.

### Hauptkomponenten

- **HMI Display**: Hauptanzeige für Fahrerinformationen
- **Primary Driver Display (PDD)**: Zeigt wichtige Fahrzeuginformationen und Statusmeldungen
- **Control and Status Console (CSC)**: Interaktive Konsole für detaillierte Kontrollen und Statusinformationen
- **Sidebar**: Navigation und Szenarienauswahl
- **Step Navigation**: Führt durch die verschiedenen Schritte eines Szenarios

## 📱 Szenarien

Das System unterstützt verschiedene reale Szenarien:

### 1. Fahrgast-Assistenz
- Erkennung und Unterstützung von Fahrgästen mit besonderen Bedürfnissen
- Automatisierte Rampensteuerung mit Kameraüberwachung
- Nahtlose Integration in den normalen Fahrbetrieb

### 2. Kritische Türstörung
- Automatische Erkennung von Türstörungen
- Geführte Diagnose und Problemlösung
- Schrittweise Anleitung zur manuellen Behebung
- Sicherheitsprotokoll mit automatischer Fahrzeugabsicherung

### 3. Plötzliche Umleitung
- Echtzeitanpassung der Route bei Straßensperrungen
- Automatische Berechnung bustauglicher Alternativrouten
- Turn-by-Turn Navigation
- Automatisierte Fahrgastinformation

### 4. Deeskalation bei Konflikt
- Diskretes Sicherheitsmanagement
- Stiller Alarm mit direkter Leitstellenanbindung
- Automatische Kameraaufzeichnung
- Koordinierte Intervention mit Sicherheitskräften

### 5. Effizienz ohne Ticketverkauf
- Automatisierte Fahrgastzählung
- Digitale Ticketvalidierung
- Intelligente Problemerkennung
- Nahtlose Integration mit Kontrollteams

## 🛠 Technische Details

- **Framework**: React mit TypeScript
- **Build-Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context/Hooks

## 🚀 Installation

1. Repository klonen:
```bash
git clone https://github.com/raminsaeedi/HMI-Busdriversroles.git
```

2. Abhängigkeiten installieren:
```bash
npm install
```

3. Entwicklungsserver starten:
```bash
npm run dev
```

## 🔍 Projektstruktur

```
src/
├── components/         # React Komponenten
│   ├── HmiDisplay.tsx    # Hauptanzeige
│   ├── MainContent.tsx   # Hauptinhalt
│   ├── Sidebar.tsx       # Seitenleiste
│   └── StepNavigation.tsx # Schrittnavigation
├── data/
│   └── scenarios.ts    # Szenariendefinitionen
└── types/
    └── index.ts       # TypeScript Typdefinitionen
```

## 👥 Beitragen

Beiträge sind willkommen! Bitte erstellen Sie einen Pull Request für Verbesserungen.
