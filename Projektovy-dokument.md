# Slovíčka pro tátu — projektový dokument

**Verze:** 0.2 (přidán výběr jazyka + angličtina)
**Datum:** 9. 8. 2026
**Autor:** Evi

---

## 1. K čemu to je

Táta si chce zopakovat jazyky. Nemá chuť ani čas na Duolingo se streaky, srdíčky a soutěžemi. Chce jednoduchou věc, kterou otevře, projede si pár slov a zavře.

**Cíl v1:** Naučit se nejpoužívanější slova tak, aby je poznal oběma směry (CZ→cizí i cizí→CZ) a věděl, jak se slovo používá ve větě.

**Čeho chceme dosáhnout:** Táta si appku otevře alespoň 3× týdně sám od sebe. Když ji přestane používat, něco jsme udělali špatně.

---

## 2. Uživatel

Jeden uživatel. Táta.

Co to znamená pro produkt:

- Žádná registrace, žádné účty, žádné heslo.
- Velké písmo, velká tlačítka.
- Musí to fungovat na mobilu i na počítači.
- Nic se nesmí ztratit, když zavře okno.
- Když něco nefunguje intuitivně, nebude to řešit. Prostě to zavře.

---

## 3. Rozsah

### Jazyky

| Jazyk | Počet slov | Poznámka |
|---|---|---|
| 🇪🇸 Španělština | 100 | Výběr podle frekvence, upravený tak, aby se dal učit na kartičkách |
| 🇬🇧 Angličtina | 500 | Frekvenční seznam rozdělený do pěti úrovní po stovkách |

Rozšíření španělštiny na 500 slov teď neděláme. Až je táta zvládne, přidáme další.

### Co v aplikaci je

| Funkce | Popis |
|---|---|
| **Výběr jazyka** | **První obrazovka. Španělština, nebo angličtina. Bez toho se dál nedostane.** |
| Výběr směru | Chci vidět česky a hádat cizí jazyk, nebo naopak |
| Počet slov na dnešek | 10 / 20 / 30 |
| Kartičky | Přední strana = slovo, klik/tap = otočí se, zadní = překlad + příkladová věta |
| Příkladová věta | Jedna krátká věta v cizím jazyce + její český překlad |
| Výslovnost | Tlačítko „přehrát" — prohlížeč slovo i větu přečte nahlas (zdarma, vestavěné) |
| Hodnocení | Po otočení kartičky: „věděl jsem" / „nevěděl jsem" |
| Spaced repetition | Slova, která nezná, se vrací častěji. Slova, která umí, se vrací zřídka |
| Uložení pokroku | Pokrok zůstane i po zavření prohlížeče, **v každém jazyce zvlášť** |
| Záloha | Jeden soubor, který obsahuje pokrok v obou jazycích |

### Co v v1 nebude

- Gramatika, časování, konverzace
- Více uživatelů, přihlašování, sdílení
- Vlastní přidávání slov (přidáme my, když bude chtít)
- Statistiky, grafy, streaky, odznáčky
- Psaní odpovědi na klávesnici (jen „věděl / nevěděl")
- Míchání obou jazyků v jedné dávce

---

## 4. Data — jak vypadá jedno slovo

Každý jazyk má vlastní soubor (`slova-es.js`, `slova-en.js`). Struktura je stejná, liší se jen názvy dvou polí (`es`/`en`, `veta_es`/`veta_en`), aby se soubory dobře editovaly.

**Španělština:**

```js
{ id: 33, es: "agua", cz: "voda", vyslovnost: "",
  veta_es: "Quiero un vaso de agua.", veta_cz: "Chci sklenici vody.",
  slovni_druh: "podstatné jméno", clen: "el" }
```

**Angličtina:**

```js
{ id: 111, en: "water", cz: "voda", vyslovnost: "wótr",
  veta_en: "A glass of water, please.", veta_cz: "Sklenici vody, prosím.",
  slovni_druh: "podstatné jméno" }
```

Poznámky:

- U španělských podstatných jmen uvádíme člen (`el` / `la`) — je to součást slova, nemá smysl se to učit zvlášť. Angličtina pole `clen` nepoužívá.
- U sloves uvádíme infinitiv, ne časované tvary.
- Věta musí být krátká a použitelná v reálu. Ne školní příklady typu „Kniha je na stole."
- **Výslovnost u španělštiny** vyplňujeme jen tam, kde by to táta přečetl špatně (`j`, `ll`, `ñ`, `z`, `h`). Španělština se čte skoro tak, jak se píše.
- **Výslovnost u angličtiny vyplňujeme vždycky.** Anglický pravopis a výslovnost spolu nemají skoro nic společného. Přepis je český, zjednodušený — legenda je v hlavičce souboru `slova-en.js`.

### Výběr slov

**Španělština (100):** ~30 sloves, ~40 podstatných jmen, ~15 přídavných jmen, ~15 funkčních slov.

**Angličtina (500):** pět úrovní po stovkách, seřazených podle frekvence a použitelnosti. Pořadí `id` = pořadí učení, aplikace přidává nová slova od nejnižšího `id`.

| Úroveň | id | Obsah |
|---|---|---|
| 1 | 1–100 | Úplný základ: zájmena, be/have/do, předložky, spojky |
| 2 | 101–200 | Základní slovník: čas, rodina, vlastnosti, běžná slovesa |
| 3 | 201–300 | Běžná slovesa a věci kolem nás, doprava, práce, zdraví |
| 4 | 301–400 | Tělo, jídlo a pití, příroda, počasí, cestování |
| 5 | 401–500 | Vlastnosti, předložky místa, spojky, jemné odstíny |

U angličtiny jsme na rozdíl od španělštiny funkční slova (`the`, `of`, `that`) nevyhazovali. Jsou opravdu nejčastější a s příkladovou větou se učí dobře.

---

## 5. Jak funguje opakování (SRS)

Používáme **Leitnerův systém** — nejjednodušší verze spaced repetition, dá se vysvětlit na krabičkách.

**Analogie:** Představ si 5 krabiček na stole. Každé slovo leží v jedné z nich.

- **Krabička 1** = „tohle vůbec neumím" → opakuje se **každý den**
- **Krabička 2** = opakuje se **za 3 dny**
- **Krabička 3** = opakuje se **za týden**
- **Krabička 4** = opakuje se **za 2 týdny**
- **Krabička 5** = „tohle umím" → opakuje se **za měsíc**

**Pravidla:**

- Nové slovo začíná v krabičce 1.
- Když táta odpoví správně → slovo se posune o jednu krabičku výš.
- Když odpoví špatně → slovo padá zpátky do krabičky 1. Bez milosti.

**Směry se počítají zvlášť.** `agua → voda` a `voda → agua` jsou dvě samostatné kartičky s vlastním umístěním v krabičkách. Poznat slovo je mnohem snazší než si ho vybavit, a data by to jinak zkreslila.

**Jazyky se počítají zvlášť.** Španělština a angličtina mají vlastní sady krabiček a vlastní denní dávku. Když si táta otevře angličtinu, španělský pokrok se nikam neztratí a nemíchá se do dávky.

---

## 6. Technické řešení

| Oblast | Rozhodnutí | Proč |
|---|---|---|
| Typ | Webová aplikace (jedna stránka) | Otevře si ji na mobilu i na počítači, nic neinstaluje |
| Technologie | HTML + CSS + JavaScript, bez frameworku | Malý projekt, žádný build, snadná údržba |
| Hosting | GitHub Pages (zdarma) | Stabilní URL, zdarma, aktualizace jedním commitem |
| Data slov | Jeden statický soubor na jazyk | Slova přidáváme editací souboru |
| Uložení pokroku | `localStorage`, klíč `slovicka_v2` | Žádný server, žádná databáze, žádné náklady |
| Výslovnost | Web Speech API (vestavěné v prohlížeči) | Zdarma, žádné audio soubory ke stažení |
| Přidání jazyka | Nový soubor `slova-XX.js` + jeden záznam v objektu `LANGS` | Třetí jazyk je práce na půl hodiny |

### Struktura uloženého pokroku

```json
{
  "es": { "cards": { "33:f2cz": { "box": 2, "due": "2026-08-12", "seen": true } } },
  "en": { "cards": { "111:cz2f": { "box": 1, "due": "2026-08-10", "seen": true } } }
}
```

Klíč kartičky je `<id slova>:<směr>`, kde směr je `f2cz` (vidím cizí jazyk) nebo `cz2f` (vidím češtinu).

Pokrok ze starší, jen španělské verze (klíč `spanelstina_v1`, směry `es2cz` / `cz2es`) se při prvním otevření automaticky převede. Táta o nic nepřijde.

### Známé omezení

Pokrok je uložený v prohlížeči, ne na serveru. To znamená:

- Když táta začne na počítači a pak si to otevře na mobilu, začíná od nuly.
- Když si vyčistí historii prohlížeče, pokrok zmizí.

**Řešení:** Vybereme jedno zařízení (nejspíš mobil) a používá jen to. Plus tlačítko „Zálohovat pokrok", které stáhne malý soubor s oběma jazyky.

**Pokud to bude vadit:** V2 přidáme jednoduchou synchronizaci. Ale nedělejme to dopředu, dokud nevíme, jestli appku vůbec bude používat.

---

## 7. Obrazovky

1. **Výběr jazyka** — „Co si dnes zopakujeme?" + dvě velká tlačítka: 🇪🇸 Španělština (100 slov) / 🇬🇧 Angličtina (500 slov)
2. **Úvod k jazyku** — „Dnes projdeš 10 slovíček." + volba směru + volba počtu (10/20/30) + velké tlačítko Začít + odkaz „← Změnit jazyk"
3. **Kartička — přední strana** — slovo velkým písmem, výslovnost, tlačítko přehrání, tlačítko „Otočit"
4. **Kartička — zadní strana** — překlad, příkladová věta v obou jazycích, dvě tlačítka: „Věděl jsem" / „Nevěděl jsem"
5. **Konec dávky** — „Hotovo! Dnes jsi zvládl 12 slovíček, správně 9×."

Aplikace mění barvu podle jazyka — španělština je terakotová, angličtina modrá. Táta tak na první pohled pozná, v čem se učí.

---

## 8. Postup prací

| Fáze | Co uděláme | Výsledek |
|---|---|---|
| 1 | Projektový dokument | ✅ hotovo |
| 2 | Seznam 100 španělských slov | ✅ `slova-es.js` |
| 3 | Funkční prototyp — kartičky, otáčení, oba směry | ✅ `index.html` |
| 4 | SRS logika a ukládání pokroku | ✅ hotovo |
| 5 | Výslovnost a vzhled (velké písmo, mobil) | ✅ hotovo |
| 6 | Výběr jazyka + 500 anglických slov | ✅ hotovo |
| 7 | Nasadit na GitHub Pages, poslat tátovi odkaz | čeká |
| 8 | Po dvou týdnech se zeptat, co ho štve | Seznam úprav pro v2 |

---

## 9. Jak poznáme, že to vyšlo

- Táta appku otevře alespoň 3× týdně první měsíc, aniž bychom mu to připomínali
- Po měsíci pozná alespoň 70 ze 100 španělských slov ve směru ES→CZ
- Sám od sebe se zeptá, kdy přidáme další slova

Poslední bod je nejdůležitější. Když se zeptá, aplikace funguje.

---

## 10. Otevřené otázky

1. Bude přeskakovat mezi jazyky, nebo si vybere jeden a u něj zůstane? Když bude přeskakovat, možná bude chtít, aby si appka pamatovala poslední volbu.
2. Je 500 anglických slov moc? Při 10 slovech denně je to 50 dní jen na nová slova.
3. Chce vidět, kolik slov už umí, nebo ho to bude stresovat?
4. Má mít tlačítko „tohle slovo mě nezajímá, zahoď ho"?
5. Zajímá ho psaná forma, nebo hlavně poslech a mluvení?

---

## 11. Nápady na později (ne teď)

- Zapamatovat si poslední zvolený jazyk a nabídnout ho rovnou
- Rozšíření španělštiny na 300 a 500 slov
- Třetí jazyk (němčina?)
- Režim „napiš odpověď" místo „věděl/nevěděl"
- Časování nejčastějších sloves
- Tematické okruhy (restaurace, letiště, nákup)
- Synchronizace mezi zařízeními
