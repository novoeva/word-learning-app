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

## ✅ Hotovo

- **PWA:** appka funguje v prohlížeči i po přidání na plochu (manifest +
  service worker + apple meta tagy). Na ploše je navíc vyňatá ze 7denního
  mazání úložiště na iOSu.
- **Práh „umí" posunut na 3× dobře po sobě** (krabička 4).
- **Opakování neznámého slova v session:** slovo, které táta nevěděl, se v té
  samé session vrátí ještě **2× navíc** (rozprostřeně), ať má šanci si ho
  zapamatovat. Strop 2× za návštěvu, aby se to nezacyklilo.
