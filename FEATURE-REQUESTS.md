# Feature requesty — Slovíčka pro tátu

Seznam nápadů a věcí k dořešení. Nahoře to nejdůležitější.

---

## 🟡 Správa pokroku (progress) — *deal with it later*

**Problém:** Pokrok teď žije jen v `localStorage` jednoho prohlížeče na jednom
zařízení. Když si táta smaže data prohlížeče nebo přejde na jiné zařízení,
pokrok je pryč. iOS Safari navíc `localStorage` maže po 7 dnech nečinnosti
(verze přidaná na plochu je z toho ale vyňatá — viz PWA níže).

**Co s tím:**
- Ruční tlačítka **Zálohovat / Obnovit** přijdou k ničemu → kandidát na smazání,
  ale až bude náhrada. (Teď je to jediná pojistka, takže je zatím nechávám.)
- Cílový směr: **automatická ochrana pokroku** — buď tichá auto-záloha, nebo
  synchronizace mezi zařízeními (přihlášení / odkaz).

**Status:** later. Nejdřív rozhodnout: stačí auto-záloha na jednom zařízení,
nebo chceme skutečný sync napříč zařízeními (větší práce, potřebuje backend).

---

## 🟢 Nápady z návrhu ve Stitchi („klidná slovíčka" / Lumina Lexicon) — *zatím neděláme*

Stitch export (2026-08-10) měl pár obrazovek s funkcemi navíc, které appka nemá.
Vizuál appka už má (je to stejný design system), tohle jsou jen nové **funkce**.
Rozhodnuto: **zatím nic z toho neděláme**, jen si to schováváme.

- **Rychlost čtení nahlas** — „Rychlost čtení nahlas" (pomalu / normálně). Teď je
  rychlost TTS natvrdo `u.rate = 0.9` v `index.html`. Pro staršího uživatele
  dává smysl to jít zpomalit. → nejsilnější kandidát, až se k tomu vrátíme.
- **Samostatná obrazovka Nastavení + ⚙️ ikona** — dedikovaná stránka s
  „Zálohovat pokrok", „Obnovit ze zálohy" a „O aplikaci". Uklidilo by to
  zálohu/obnovu z domovské obrazovky. → nice-to-have.
- **Volba „5 slov"** — Stitch má počty 5/10/20, my máme 10/20/30. Krátká
  2minutová session by se hodila pro začátek. → levné přidat.
- **Spodní navigace (Home / Session / Settings)** — pro 4 lineární obrazovky
  zbytečné, jen vata z Stitche. → **přeskočit**.
- **Tlačítko „Pokračovat" na výběru jazyka + X / ⋮ během lekce** — klik navíc
  bez užitku (teď stačí ťuknout na jazyk). → **přeskočit**.
- Pozn.: Stitch appku přejmenoval na „Lexis" — držíme se „Slovíčka pro tátu".

---

## ✅ Hotovo

- **PWA:** appka funguje v prohlížeči i po přidání na plochu (manifest +
  service worker + apple meta tagy). Na ploše je navíc vyňatá ze 7denního
  mazání úložiště na iOSu.
- **Práh „umí" posunut na 3× dobře po sobě** (krabička 4).
- **Opakování neznámého slova v session:** slovo, které táta nevěděl, se v té
  samé session vrátí ještě **2× navíc** (rozprostřeně), ať má šanci si ho
  zapamatovat. Strop 2× za návštěvu, aby se to nezacyklilo.
