# 📝 OP-Games Team-Liste

Willkommen im offiziellen Repository für unsere Team-Seite! Hier verwalten wir die Daten, die auf [op-games.eu/team](https://www.google.com/search?q=https://op-games.eu/team) angezeigt werden.

## 🚀 So trägst du dich ein

Um dich der Liste hinzuzufügen oder deine Daten zu ändern, folge diesen Schritten:

1. **Repository forken** (oder direkt die Datei editieren, wenn du Schreibrechte hast).
2. Öffne die Datei `team.json`.
3. Füge ein neues Objekt am Ende der Liste hinzu (achte auf das Komma beim vorherigen Eintrag!).
4. Erstelle einen **Pull Request** mit deinem Namen als Titel.

---

## 🛠 JSON-Struktur

Hier ist ein Beispiel für einen vollständigen Eintrag. Kopiere diesen Block und passe ihn an:

```json
{
  "name": "DeinIngameName",
  "realName": "Dein Vorname",
  "role": "Moderator",
  "roleColor": "bg-blue-500 text-white",
  "description": "Was machst du auf dem Netzwerk? (1-2 Sätze)",
  "isBedrock": false
}

```

### Die Felder erklärt:

| Feld | Typ | Beschreibung |
| --- | --- | --- |
| `name` | String | Dein exakter Minecraft-Name (bei Bedrock mit Präfix, falls vorhanden). |
| `realName` | String | **(Optional)** Dein echter Vorname. Lass das Feld weg, wenn du es anonym halten willst. |
| `role` | String | Dein Rang auf dem Netzwerk (z.B. Owner, Admin, Moderator, Supporter). |
| `roleColor` | String | Tailwind CSS Klassen für die Badge-Farbe (siehe unten). |
| `description` | String | Eine kurze Beschreibung deiner Aufgaben oder deiner Person. |
| `isBedrock` | Boolean | `true` wenn du auf der Bedrock-Edition spielst, sonst `false`. |

---

## 🎨 Farben für Rollen (`roleColor`)

Bitte verwende folgende Standardfarben, damit das Design einheitlich bleibt:

* 🔴 **Owner:** `bg-red-500 text-white`
* 🔵 **Admin:** `bg-blue-600 text-white`
* 🟢 **Moderator:** `bg-green-500 text-white`
* 🟡 **Supporter:** `bg-yellow-500 text-black`
* 🟣 **Developer:** `bg-purple-500 text-white`
* ⚪ **Builder:** `bg-slate-500 text-white`

---

## ⚠️ Wichtige Hinweise

* **Syntax:** Ein vergessenes Komma oder eine fehlende Klammer führt dazu, dass die Team-Seite nicht lädt. Die GitHub Action wird deinen PR automatisch auf Fehler prüfen.
* **Skins:** Die Skins werden automatisch über die API geladen. Du musst kein Bild hochladen.
* **Bedrock:** Wenn du `isBedrock: true` setzt, versucht unser System automatisch deine XUID aufzulösen, um deinen Skin korrekt darzustellen.

---

## ⚖️ Verhaltensregeln

Änderungen an den Einträgen anderer Teammitglieder ohne deren Erlaubnis führen zum Ausschluss aus der Verwaltung.
