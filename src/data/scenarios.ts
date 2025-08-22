import { Scenario } from '../types';

export const scenarios: Scenario[] = [
  {
    id: 'passenger-assistance',
    title: 'Fahrgast-Assistenz',
    steps: [
      {
        narration: 'Ausgangslage: Der Bus fährt autonom. Majid erkennt einen Fahrgast im Rollstuhl an der nächsten Haltestelle.',
        pdd: {
          content: '[AUTONOM AKTIV]\n50 km/h\nNächster Halt: Hauptbahnhof (350m)',
          color: 'green'
        },
        csc: {
          content: 'Normalbetrieb\nRoute: Linie 5\nStatus: Pünktlich'
        }
      },
      {
        narration: 'Aktion: Majid aktiviert den "Fahrgast-Assistenzmodus" auf der CSC.',
        pdd: {
          content: '[AUTONOM AKTIV]\n50 km/h\nNächster Halt: Hauptbahnhof (350m)',
          color: 'green'
        },
        csc: {
          content: 'Fahrgast-Assistenz\nModus aktiv',
          color: 'cyan'
        }
      },
      {
        narration: 'An der Haltestelle: Majid fährt die Rampe per Knopfdruck aus und überwacht den Vorgang per Live-Kamera.',
        pdd: {
          content: 'HALT'
        },
        csc: {
          content: 'Assistenz: Rampe\n[LIVE-KAMERABILD]\nRampe wird ausgefahren...',
          color: 'green'
        }
      },
      {
        narration: 'Abschluss: Nachdem der Fahrgast sicher an Bord ist, wird die Rampe eingefahren und die CSC kehrt in den Normalmodus zurück.',
        pdd: {
          content: 'HALT'
        },
        csc: {
          content: 'Normalbetrieb\nWeiterfahrt signalisiert'
        }
      }
    ]
  },
  {
    id: 'door-malfunction',
    title: 'Kritische Türstörung',
    steps: [
      {
        narration: 'Alarm: Nach der Abfahrt schließt eine Tür nicht. Das System bremst sicher und löst eine Stufe-3-Warnung aus.',
        pdd: {
          content: 'WARNUNG:\nTÜR 3 FEHLERHAFT',
          color: 'red',
          animated: true
        },
        csc: {
          content: 'INTERVENTION\nERFORDERLICH',
          color: 'red'
        }
      },
      {
        narration: 'Diagnose: Die CSC wechselt automatisch in den Interventionsmodus und zeigt den Diagnose-Hub für die Türstörung an.',
        pdd: {
          content: 'FAHRZEUG\nGESICHERT',
          color: 'red'
        },
        csc: {
          content: 'Diagnose-Hub\nFehler: Tür 3\nAktion: Checkliste starten',
          color: 'yellow'
        }
      },
      {
        narration: 'Geführte Lösung: Majid folgt der bebilderten Schritt-für-Schritt-Anleitung auf der CSC, um das Problem manuell zu beheben.',
        pdd: {
          content: 'FAHRZEUG\nGESICHERT',
          color: 'red'
        },
        csc: {
          content: 'Checkliste 1/3\n1. Not-Hebel über Tür 3 lokalisieren\n[BILD ANZEIGEN]',
          color: 'cyan'
        }
      },
      {
        narration: 'Abschluss: Nach erfolgreicher Behebung meldet das System die Betriebsbereitschaft. Die HMI kehrt in den "Calm"-Zustand zurück.',
        pdd: {
          content: 'SYSTEM BEREIT',
          color: 'green'
        },
        csc: {
          content: 'Normalbetrieb\nStörung behoben',
          color: 'green'
        }
      }
    ]
  },
  {
    id: 'route-diversion',
    title: 'Plötzliche Umleitung',
    steps: [
      {
        narration: 'Ausgangslage: Majid fährt seine bekannte Route. Die Leitstelle meldet per Funk eine plötzliche Sperrung.',
        pdd: {
          content: '[AUTONOM AKTIV]\n50 km/h',
          color: 'green'
        },
        csc: {
          content: 'Normalbetrieb\nRoute: Linie 5'
        }
      },
      {
        narration: 'Proaktive Unterstützung: Die HMI empfängt die Daten, markiert die Sperrung auf der Karte und berechnet automatisch eine bus-taugliche Umleitung.',
        pdd: {
          content: '[AUTONOM AKTIV]\n50 km/h',
          color: 'green'
        },
        csc: {
          content: 'NEUE ROUTE EMPFANGEN\n[KARTE MIT UMLEITUNG]',
          color: 'yellow'
        }
      },
      {
        narration: 'Geführte Navigation: Majid bestätigt die neue Route. Die HMI bietet klare Turn-by-Turn-Anweisungen und automatisiert die Fahrgast-Info.',
        pdd: {
          content: 'UMLEITUNG AKTIV',
          color: 'yellow'
        },
        csc: {
          content: 'Navigation\nNächste Aktion:\nIn 50m RECHTS abbiegen'
        }
      },
      {
        narration: 'Abschluss: Nach der Umleitung kehrt das System nahtlos zur ursprünglichen Route zurück. Die HMI berechnet die neue Ankunftszeit.',
        pdd: {
          content: '[AUTONOM AKTIV]',
          color: 'green'
        },
        csc: {
          content: 'Normalbetrieb\nZurück auf Stammroute'
        }
      }
    ]
  },
  {
    id: 'conflict-deescalation',
    title: 'Deeskalation bei Konflikt',
    steps: [
      {
        narration: 'Problem: Eine Gruppe lauter Fahrgäste beginnt, andere zu belästigen. Die Situation droht zu eskalieren.',
        pdd: {
          content: '[AUTONOM AKTIV]\n50 km/h',
          color: 'green'
        },
        csc: {
          content: 'Normalbetrieb\nInnenraum: Alles OK'
        }
      },
      {
        narration: 'Intervention: Majid aktiviert diskret den "Sicherheits-Tab" im Assistenz-Modus auf der CSC, um sicher zu agieren.',
        pdd: {
          content: '[AUTONOM AKTIV]\n50 km/h',
          color: 'green'
        },
        csc: {
          content: 'Fahrgast-Assistenz\nSicherheits-Protokoll',
          color: 'yellow'
        }
      },
      {
        narration: 'Aktion: Er betätigt die "Stiller Alarm an Leitstelle"-Taste. Die Innenraum-Kameraaufzeichnung wird prominent markiert und gesichert.',
        pdd: {
          content: '[AUTONOM AKTIV]\n50 km/h',
          color: 'green'
        },
        csc: {
          content: 'Sicherheits-Protokoll\n[STILLER ALARM GESENDET]\n[AUFZEICHNUNG AKTIV]',
          color: 'red'
        }
      },
      {
        narration: 'Abschluss: Die Leitstelle bestätigt den Empfang und informiert die Polizei. Majid kann sich auf das sichere Anhalten konzentrieren.',
        pdd: {
          content: 'HALT ANFORDERN',
          color: 'yellow'
        },
        csc: {
          content: 'Einsatz koordiniert\nPolizei an Haltestelle "Marktplatz"'
        }
      }
    ]
  },
  {
    id: 'ticketless-efficiency',
    title: 'Effizienz ohne Ticketverkauf',
    steps: [
      {
        narration: 'Ausgangslage: Ein normaler Halt an einer belebten Station. Früher hätte Majid jetzt minutenlang Tickets verkaufen müssen.',
        pdd: {
          content: '[AUTONOM AKTIV]\n50 km/h',
          color: 'green'
        },
        csc: {
          content: 'Normalbetrieb\nNächster Halt: Hauptbahnhof'
        }
      },
      {
        narration: 'Automatisierter Prozess: Die HMI übernimmt. Fahrgastzähler registrieren die einsteigenden Personen, während das System ihre digitalen Tickets validiert.',
        pdd: {
          content: 'HALT'
        },
        csc: {
          content: 'Assistenz: Boarding\nFahrgäste: 12/75\nTickets: Alle gültig',
          color: 'cyan'
        }
      },
      {
        narration: 'Problem-Erkennung: Das System erkennt ein ungültiges Ticket und leitet die Info direkt an das Kontrollteam weiter, ohne Majid abzulenken.',
        pdd: {
          content: 'HALT'
        },
        csc: {
          content: 'Assistenz: Boarding\n1 ungültiges Ticket erkannt\nMeldung an Prüfdienst',
          color: 'yellow'
        }
      },
      {
        narration: 'Fokus: Der Boarding-Prozess ist in Sekunden abgeschlossen. Majid kann sich voll auf die sichere Abfahrt und den Verkehr konzentrieren.',
        pdd: {
          content: '[AUTONOM AKTIV]',
          color: 'green'
        },
        csc: {
          content: 'Normalbetrieb\nAbfahrt...'
        }
      }
    ]
  }
];