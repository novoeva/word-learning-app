# Slovíčka pro tátu — v1

Jednoduchá webová aplikace na opakování slovíček. **Nejdřív si vybere jazyk**, pak směr a počet slov na dnešek.

- 🇪🇸 **Španělština** — 100 nejpoužívanějších slov
- 🇬🇧 **Angličtina** — 500 nejpoužívanějších slov

Kartičky, oba směry, Leitnerův systém opakování, výslovnost, pokrok uložený v prohlížeči.

## Soubory

| Soubor | Co to je |
|---|---|
| `index.html` | Celá aplikace (vzhled + logika). Nic se neinstaluje. |
| `slova-es.js` | 100 španělských slov. **Slova se přidávají editací tohoto souboru.** |
| `slova-en.js` | 500 anglických slov. Nahoře je legenda k fonetickému přepisu. |
| `manifest.json`, `sw.js`, `icon-*.png`, `apple-touch-icon.png` | PWA — aby to šlo přidat na plochu jako appku a fungovalo offline. |
| `FEATURE-REQUESTS.md` | Nápady a věci k dořešení. |
| `Projektovy-dokument.md` | Zadání / specifikace. |

## Jak to spustit

Stačí otevřít `index.html` v prohlížeči (dvojklik). Funguje offline, bez serveru.

## Jak to nasadit tátovi (GitHub Pages)

1. Nahraj **všechny** soubory do repozitáře na GitHubu (kromě `.md` je potřeba
   i `manifest.json`, `sw.js` a `icon-*.png` / `apple-touch-icon.png` — jinak
   nepojede přidání na plochu ani offline režim).
2. Settings → Pages → zdroj `main` / kořen.
3. Pošli tátovi výslednou URL. **Ať si ji hned přidá na plochu telefonu a učí se
   rovnou z té ikony** — verze na ploše má vlastní úložiště a je vyňatá ze
   7denního mazání dat, které jinak iOS Safari dělá.

## Jak přidat slova

Otevři `slova-es.js` nebo `slova-en.js`, zkopíruj jeden záznam, uprav a dej mu nové `id`. Ulož. Hotovo.

U angličtiny **vždycky vyplň výslovnost** — anglický pravopis se čte úplně jinak, než se píše. Legenda k přepisu je v hlavičce souboru.

## Jak přidat další jazyk

1. Vytvoř `slova-XX.js` se `window.SLOVA_XX = [...]` (stejná struktura, pole se slovem pojmenuj `xx` a větu `veta_xx`).
2. Přidej `<script src="slova-XX.js"></script>` do `index.html`.
3. Přidej záznam do objektu `LANGS` v `index.html` (název, vlajka, kód hlasu, názvy polí).
4. Přidej tlačítko do `#lang-choice`.

## Co appka umí

- **Výběr jazyka jako první krok.** Aplikace k němu i mění barvu (španělština terakotová, angličtina modrá).
- **U každého jazyka je vidět pokrok** — „34 z 100 slov už umíš". Slovo se počítá jako umíš, když se dostane aspoň v jednom směru do krabičky 4 a výš (tj. třikrát po sobě správně, vrací se nejdřív za 14 dní).
- Výběr směru: cizí→🇨🇿 (poznávání) nebo 🇨🇿→cizí (vybavování). Směry se v opakování počítají zvlášť.
- Výběr denní dávky: 10 / 20 / 30 slovíček, s odhadem času.
- Kartička: přední strana = slovo, otočení = překlad + příkladová věta v obou jazycích. Vzadu je nahoře malým písmem to, co bylo vepředu, a velkým odpověď.
- Výslovnost přes prohlížeč (Web Speech API) — tlačítko 🔊.
- Hodnocení „Věděl / Nevěděl". Leitner: správně → o krabičku výš, špatně → zpět do první.
- **Slovo, které nevěděl, se ve stejné lekci vrátí ještě 2× navíc** (rozprostřeně), ať má šanci si ho zapamatovat.
- Denní dávka se sestaví sama: nejdřív slova na řadě k opakování, pak nová.
- **Na konci lekce shrnutí:** kolik slov bylo nových, úspěšnost v procentech a kolik slov ho čeká zítra. Tlačítkem **Ještě 5 slov** může pokračovat — statistika se dopočítá za celou návštěvu a slova se neopakují.
- **Pokrok se počítá v každém jazyce zvlášť.** Angličtina nikdy nezasáhne do španělštiny.
- Pokrok se ukládá v prohlížeči (`localStorage`, klíč `slovicka_v2`). Tlačítka **Zálohovat / Obnovit** stáhnou/načtou jeden soubor s oběma jazyky.
- Pokrok ze starší, jen španělské verze se automaticky převede při prvním otevření.

## Vzhled

Podle designu z Google Stitch („Lumina Lexicon"): pergamenové pozadí, bílé kartičky, pálená oranžová,
písmo Inter, základní velikost 18 px a všechny dotykové plochy aspoň 64 px vysoké. Žádné maskoty ani
animace navíc.

**Aplikace je záměrně jen světlá.** Design tmavou variantu nemá, takže se appka nepřebarvuje ani na
telefonu nastaveném na tmavý režim (`color-scheme: light`).

Po každé změně souborů zvedni číslo verze v `sw.js` (`var CACHE = 'slovicka-vX'`), jinak telefon
bude ze service workeru dál servírovat starou verzi.

Písmo Inter se stahuje z internetu. Bez připojení se použije systémové písmo — appka funguje dál,
jen vypadá o kousek jinak.

## Ovládání na počítači (klávesnice)

- `mezerník` / `Enter` — otočit kartičku
- `→` nebo `V` — Věděl jsem
- `←` nebo `N` — Nevěděl jsem

## Známé omezení

Pokrok je jen v tom prohlížeči a zařízení, kde se učí. Na jiném zařízení začíná od nuly.
Proto tlačítko „Zálohovat pokrok". Synchronizaci mezi zařízeními řeší až případná v2.
