# skrzelo.github.io

Osobista strona portfolio (dwujęzyczna: polski / angielski), hostowana na GitHub Pages pod adresem:

**https://skrzelo.github.io**

## Struktura projektu

```
skrzelo.github.io/
├── index.html      ← strona główna: treść i struktura (HTML)
├── css/
│   └── style.css   ← kolory, czcionki, układ i responsywność
├── js/
│   └── main.js     ← przełącznik języka PL/EN i rok w stopce
└── README.md       ← ten plik
```

## Wymagania i konfiguracja (VS Code)

### 1. Narzędzia

| Narzędzie | Po co | Wymagane? |
|---|---|---|
| [Visual Studio Code](https://code.visualstudio.com/) | edycja kodu | tak |
| [Git](https://git-scm.com/download/win) | wersjonowanie i publikacja | tak |
| [Node.js LTS](https://nodejs.org/) | sprawdzanie składni JS (`node --check`) | nie, opcjonalne |

Instalacja Node.js z wiersza poleceń (Windows):

```powershell
winget install --id OpenJS.NodeJS.LTS -e
```

### 2. Rozszerzenia VS Code

Otwórz panel rozszerzeń (`Ctrl+Shift+X`) i zainstaluj:

- **Live Server** (autor: Ritwick Dey, id `ritwickdey.liveserver`): podgląd strony na żywo. Odświeża przeglądarkę po każdym zapisie. Uruchamiasz go przyciskiem **Go Live** w prawym dolnym rogu, otwierając `index.html`.
- **Polish Language Pack** (`MS-CEINTL.vscode-language-pack-pl`), opcjonalnie: interfejs VS Code po polsku.

Rozszerzenia do HTML, CSS i JS (podpowiedzi, kolorowanie składni) są wbudowane w VS Code.

Zainstalować można też z terminala:

```powershell
code --install-extension ritwickdey.liveserver
```

### 3. Otwarcie projektu

1. **File → Open Folder…** i wybierz katalog `skrzelo.github.io`.
2. Otwórz `index.html` i kliknij **Go Live**.
3. Strona otworzy się pod adresem `http://127.0.0.1:5500`.

Node.js nie jest potrzebny do uruchomienia strony. Potrzebny jest tylko do sprawdzenia składni JS:

```powershell
node --check js/main.js
```

## Jak edytować stronę

- **Treść** (imię, opis, projekty, umiejętności, kontakt): edytuj `index.html`.
- **Wygląd** (kolory, czcionki, odstępy): edytuj `css/style.css`. Kolory są zebrane w zmiennych `:root` na początku pliku, więc zmiana np. `--accent` zmienia akcent na całej stronie.
- **Zachowanie** (przełącznik języka, dynamiczne elementy): edytuj `js/main.js`.

### Dwujęzyczność

Każdy tekst występuje w dwóch wersjach, oznaczonych atrybutem `lang`:

```html
<span lang="pl">Witaj</span>
<span lang="en">Hello</span>
```

CSS pokazuje tylko wersję aktywnego języka. Wybór zapisuje się w `localStorage` przeglądarki, więc odwiedzający wraca do swojego języka. Domyślnie strona otwiera się po polsku, a po angielsku, jeśli przeglądarka odwiedzającego nie jest polska.

Dodając nowy tekst, zawsze podawaj obie wersje.

### Przykład: nowy projekt

Skopiuj blok `<li class="project">` w sekcji `#projects`, zmień nazwy, opisy, tagi i linki.

## Podgląd lokalnie

Nie trzeba niczego instalować. Otwórz `index.html` w przeglądarce.

Alternatywnie, z dowolnego serwera statycznego, np. w katalogu projektu:

```bash
python -m http.server 8000
```

i wejdź na `http://localhost:8000`.

## Publikacja

Strona jest hostowana przez GitHub Pages z gałęzi `main`:

1. Zapisz zmiany w repozytorium.
2. `git add .`, `git commit -m "opis zmian"`, `git push`.
3. Po chwili zmiany są widoczne pod adresem strony.

Ustawienia: repozytorium → **Settings** → **Pages** → źródło: gałąź `main`, folder `/ (root)`.

## Uwagi

- Ścieżki do plików są względne (`css/style.css`, nie `/css/style.css`).
- Nazwy plików i folderów rozróżniają wielkość liter na serwerze, nawet jeśli lokalnie na Windows działają inaczej.
- Strona jest statyczna: działa bez serwera, bez bazy danych i bez kodu po stronie serwera.
- Czcionki ładowane są z Google Fonts.

## Do uzupełnienia

Zamień w `index.html` placeholdery:

- `Imię Nazwisko`, tytuł strony i stopka,
- zawód i krótki opis,
- sekcja „O mnie”,
- projekty (nazwy, opisy, tagi, linki),
- umiejętności,
- adres e-mail i linki do profili (GitHub, LinkedIn, Instagram).
