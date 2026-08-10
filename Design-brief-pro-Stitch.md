# Design brief — Slovíčka pro tátu

**Verze:** 1.0
**Datum:** 9. 8. 2026
**Účel:** Podklad pro generování UI v Google Stitch (nebo pro externího designéra).

---

## 1. Kontext v jednom odstavci

Aplikace na opakování slovíček pro jednoho konkrétního uživatele — mého tátu, kolem 65 let, běžný uživatel telefonu, ne technický nadšenec. Otevře si to na pár minut, projede si dávku kartiček a zavře. Žádné účty, žádné přihlašování, žádné streaky, srdíčka ani soutěžení. Nejdřív si vybere jazyk (španělština, angličtina), pak kolik toho dnes chce, a jede.

**Design musí být:** čitelný, klidný, s velkými dotykovými plochami. Nemusí být moderní ani trendy. Musí být jednoznačný.

**Design nesmí být:** hravý ve stylu Duolinga, plný ikon, s malým textem, s víc než třemi možnostmi na obrazovce.

---

## 2. Designové zásady (nepřekračovat)

| Zásada | Konkrétně |
|---|---|
| Velký text | Základ 18 px, hlavní slovo na kartičce 48–56 px |
| Velké cíle | Každé tlačítko minimálně 56 px vysoké, ideálně 64 px |
| Jedna akce na obrazovku | Vždy je jasné, co je hlavní tlačítko |
| Vysoký kontrast | Text vs. pozadí minimálně 7:1 |
| Bez ikonek místo textu | Ikona smí být jen doplněk k popisku, ne náhrada |
| Maximum 3 volby | Když je voleb víc, je to špatně navržené |
| Žádné modály a vyskakovací okna | Vše je celá obrazovka |

---

## 3. Vizuální styl

**Nálada:** teplý papír, klidné čtení. Ne bílá nemocniční aplikace, ne barevný dětský kvíz.

### Barvy — světlý režim

| Role | Hex | Kde |
|---|---|---|
| Pozadí | `#F4F1EA` | celá obrazovka |
| Karta / plocha | `#FFFFFF` | kartičky, tlačítka volby |
| Text hlavní | `#1F2933` | slova, nadpisy |
| Text vedlejší | `#6B7280` | popisky, nápovědy |
| Akcent | `#D9480F` | hlavní tlačítko, progress bar, vybraná volba |
| Akcent světlý | `#FFE8D9` | pozadí vybrané volby |
| Zelená | `#2B8A3E` | „Věděl jsem" |
| Zelená světlá | `#E6F4EA` | |
| Červená | `#C92A2A` | „Nevěděl jsem" |
| Červená světlá | `#FBE8E8` | |
| Linka / okraj | `#E5E1D8` | okraje karet, neaktivní progress |

### Barvy — tmavý režim

Pozadí `#16130F`, karta `#211D18`, text `#F4F1EA`, vedlejší text `#A8A29A`, akcent `#FF7A45`, akcent světlý `#3A241A`, zelená `#69DB7C`, červená `#FF8787`, linka `#35302A`.

### Typografie

Systémový bezpatkový font (San Francisco / Roboto / Segoe UI). Žádný vlastní font — jde o rychlost a čitelnost.

| Prvek | Velikost | Váha |
|---|---|---|
| Slovo na kartičce | 48–56 px | 700 |
| Nadpis obrazovky | 26 px | 700 |
| Text tlačítka | 22 px | 600 |
| Příkladová věta | 22 px | 400 |
| Základní text | 18 px | 400 |
| Popisek / nápověda | 16 px | 400 |

### Tvary a stíny

- Karta: rádius 24 px, jemný stín `0 10px 30px rgba(0,0,0,.08)`
- Tlačítko: rádius 18 px
- Volba (jazyk, počet): rádius 16 px, okraj 2 px
- Progress bar: výška 8 px, plně zaoblený
- Odsazení mezi bloky: 24 px, uvnitř karty 32 px
- Maximální šířka obsahu na desktopu: 560 px, vycentrováno

---

## 4. Obrazovky

### Obrazovka 1 — Výběr jazyka

Co je vidět:

- Nadpis: „Dobrý den" a pod ním „Co si dnes zopakujeme?"
- Dvě až tři velké karty pod sebou, každá: vlajka (emoji), název jazyka velkým písmem, pod tím malým šedým textem stav („34 ze 100 slov umíš")
- Vybraná karta má oranžový okraj a světle oranžové pozadí
- Dole hlavní oranžové tlačítko „Pokračovat"

Poznámky: žádná jiná navigace. V rohu nahoře jen malé ozubené kolečko pro zálohu pokroku.

### Obrazovka 2 — Kolik a jakým směrem

Co je vidět:

- Nadpis: „Dnes tě čeká 12 slov"
- Sekce „Jak chceš procvičovat?" — dvě volby pod sebou:
  - 🇪🇸 → 🇨🇿 „Vidím španělsky, hádám česky" (pod tím šedě: „snadnější")
  - 🇨🇿 → 🇪🇸 „Vidím česky, hádám španělsky" (pod tím šedě: „těžší, ale užitečnější")
- Sekce „Kolik toho dnes?" — tři čtvercová tlačítka vedle sebe: **5**, **10**, **20**, pod čísly malý popisek („2 min", „5 min", „10 min")
- Dole velké oranžové tlačítko „Začít"

Poznámky: obě sekce mají vždy něco předvybraného, aby šlo rovnou zmáčknout Začít.

### Obrazovka 3 — Kartička, přední strana

Co je vidět, odshora:

1. Text „3 z 12" — malý, šedý, vycentrovaný
2. Progress bar přes celou šířku — oranžová výplň na neaktivní šedé lince
3. Bílá karta, vysoká minimálně 300 px, vycentrovaný obsah:
   - Malý šedý štítek nahoře: „ŠPANĚLSKY" (velká písmena, prostrkání)
   - Slovo obrovským písmem, u podstatných jmen člen (`el`, `la`) oranžově před slovem
   - Pod slovem oválné tlačítko s reproduktorem: 🔊 „Přehrát" — světle oranžové pozadí, oranžový text
4. Pod kartou velké oranžové tlačítko „Otočit"

### Obrazovka 4 — Kartička, zadní strana

Stejná hlavička (počítadlo + progress). Karta obsahuje:

- Původní slovo malým šedým písmem nahoře
- Překlad velkým písmem
- Tenká vodorovná linka (60 % šířky, vycentrovaná)
- Příkladová věta v cizím jazyce (22 px, tmavá)
- Pod ní český překlad věty (18 px, šedý)
- Tlačítko 🔊 „Přehrát větu"

Pod kartou **dvě tlačítka vedle sebe**, stejně široká:

- Vlevo: „Nevěděl jsem" — červený text, světle červené pozadí, červený okraj
- Vpravo: „Věděl jsem" — zelený text, světle zelené pozadí, zelený okraj

Poznámka: obě tlačítka jsou rovnocenná. Žádné z nich nesmí působit jako „ta správná odpověď".

### Obrazovka 5 — Hotovo

- Velká vycentrovaná ikona nebo emoji ✓ (v zeleném kruhu)
- Nadpis: „Hotovo!"
- Text: „Dnes jsi zvládl 12 slov, 9 správně."
- Malá karta se shrnutím: kolik slov přibylo do „umím", kdy je další dávka na řadě („Vrať se zítra, čeká tě 8 slov")
- Tlačítko „Zavřít" (sekundární, bílé s okrajem)
- Volitelně druhé tlačítko „Ještě 5 slov" (hlavní, oranžové)

### Obrazovka 6 — Nastavení (jednoduchá, málo používaná)

Seznam řádků: „Zálohovat pokrok", „Obnovit ze zálohy", „Rychlost čtení nahlas", „O aplikaci". Nic víc.

---

## 5. Stavy a detaily

| Stav | Jak vypadá |
|---|---|
| Stisknuté tlačítko | Zmenší se na 98 %, nic víc |
| Otočení kartičky | Krátká animace překlopení, max 250 ms |
| Vybraná volba | Oranžový okraj 2 px + světle oranžové pozadí |
| Přehrávání zvuku | Ikona reproduktoru jemně pulzuje |
| Prázdný stav (na dnešek nic není) | „Dnes už máš hotovo. Vrať se zítra." + zavřít |
| Načítání | Neexistuje, aplikace je okamžitá |

Klávesnice na desktopu: `mezerník` = otočit, `→` = věděl, `←` = nevěděl. V patičce obrazovky s kartičkou to může být napsané malým šedým textem.

---

## 6. Rozdíly mobil vs. desktop

| | Mobil | Desktop |
|---|---|---|
| Šířka obsahu | celá šířka, 16 px okraje | max 560 px, vycentrováno |
| Kartička | min. výška 300 px | min. výška 360 px |
| Volba počtu | 3 sloupce | 3 sloupce (stejné) |
| Hodnocení | 2 tlačítka vedle sebe | 2 tlačítka vedle sebe + nápověda ke klávesám |
| Nastavení | ozubené kolečko vpravo nahoře | totéž |

Layout je v podstatě stejný, desktop je jen vycentrovaný mobilní sloupec. Není potřeba samostatný desktopový návrh — stačí ověřit, že to na šířku nevypadá roztažené.

---

## 7. Prompty pro Google Stitch

Stitch funguje spolehlivěji v angličtině. Vlož vždy jeden prompt, vygeneruj, uprav, pak další obrazovku.

### Společný „design system" prompt (vlož jako první)

```
Design system for a vocabulary flashcard app for a 65-year-old user.
Style: warm, calm, paper-like. Not playful, not gamified, no mascots.
Background #F4F1EA, cards #FFFFFF, primary text #1F2933, secondary text #6B7280,
accent orange #D9480F with soft background #FFE8D9, success green #2B8A3E,
error red #C92A2A, borders #E5E1D8.
System sans-serif font. Base text 18px, buttons 22px semibold, headings 26px bold.
Cards: 24px radius, soft shadow. Buttons: 18px radius, minimum 64px tall, full width.
Generous white space. High contrast. Large touch targets. No small text anywhere.
```

### Obrazovka 1 — výběr jazyka

```
Mobile screen. Language selection for a vocabulary app.
Heading "Dobrý den", subheading "Co si dnes zopakujeme?" in grey.
Two large stacked selection cards, each 96px tall with a flag emoji on the left,
language name in 22px semibold, and small grey progress text below it
("34 ze 100 slov umíš"). The first card is selected: 2px orange border and
soft orange background. Below the cards, a full-width orange primary button
"Pokračovat". Small settings gear icon in the top right corner.
```

### Obrazovka 2 — směr a počet

```
Mobile screen. Session setup for a vocabulary app.
Heading "Dnes tě čeká 12 slov".
Section label "Jak chceš procvičovat?" followed by two stacked option cards
with flag emojis, a bold label and a small grey hint underneath. First one selected
with orange border and soft orange background.
Section label "Kolik toho dnes?" followed by three equal square buttons in a row
showing 5, 10, 20 in large bold numbers with a tiny grey duration label below
("2 min", "5 min", "10 min"). The middle one is selected.
Full-width orange primary button "Začít" at the bottom.
```

### Obrazovka 3 — kartička, přední strana

```
Mobile screen. Flashcard front side.
Top: small centered grey counter "3 z 12", below it a thin 8px full-width
progress bar, orange fill at 25% on a light grey track.
Center: a large white card, 24px radius, soft shadow, minimum 320px tall,
containing a small uppercase grey label "ŠPANĚLSKY", then a very large word
"el agua" at 52px bold with the article "el" in orange, and below it a pill-shaped
button with a speaker icon and the text "Přehrát" in orange on soft orange background.
Bottom: full-width orange primary button "Otočit".
```

### Obrazovka 4 — kartička, zadní strana

```
Mobile screen. Flashcard back side, answer revealed.
Same header: grey counter "3 z 12" and an orange progress bar.
White card containing, centered: small grey word "el agua", then the translation
"voda" at 52px bold, a thin centered divider line at 60% width, then an example
sentence "Quiero un vaso de agua, por favor." at 22px, and below it its translation
"Chci sklenici vody, prosím." at 18px in grey. A pill speaker button "Přehrát větu".
Below the card, two equal-width buttons side by side:
left "Nevěděl jsem" with red text on soft red background and red border,
right "Věděl jsem" with green text on soft green background and green border.
Both buttons are equally prominent.
```

### Obrazovka 5 — hotovo

```
Mobile screen. Session complete screen for a vocabulary app.
Centered green circle with a white checkmark, 80px diameter.
Heading "Hotovo!" at 32px bold. Below it "Dnes jsi zvládl 12 slov, 9 správně."
in 18px grey. A white summary card with two rows of statistics and a line
"Vrať se zítra, čeká tě 8 slov."
Full-width orange button "Ještě 5 slov" and below it a secondary white button
with a border, "Zavřít". Warm paper background #F4F1EA.
```

---

## 8. Na co si dát pozor při hodnocení výstupu

- Není text menší než 16 px? Pak to zahoď.
- Nemá tlačítko méně než 56 px na výšku?
- Nejsou „Věděl / Nevěděl" navrženy tak, aby jedno vypadalo správnější?
- Neobjevila se dolní navigační lišta, badge, streak nebo počet dní v řadě? Nechceme.
- Není na jedné obrazovce víc než jedno oranžové tlačítko?
