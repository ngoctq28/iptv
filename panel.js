/* ===== Production: silence console.log / console.warn ===== */
if (window.__PROD__) {
  console.log  = () => {};
  console.warn = () => {};
}

/* ===== i18n ===== */
const LANGS = {
  vi: {
    flag: "\uD83C\uDDFB\uD83C\uDDF3", label: "Ti\u1EBFng Vi\u1EC7t",
    noChannel: "Ch\u01B0a ch\u1ECDn k\u00EAnh",
    sound: "\u00C2m thanh",
    pip: "Thu nh\u1ECF",
    newTab: "Tab m\u1EDBi",
    reload: "T\u1EA3i l\u1EA1i",
    favHeader: "\u2B50 K\u00EAnh y\u00EAu th\u00EDch",
    favEmpty: "Ch\u01B0a c\u00F3 k\u00EAnh y\u00EAu th\u00EDch",
    sourceToggle: "\uD83D\uDD17 Ngu\u1ED3n k\u00EAnh",
    addPlaceholder: "D\u00E1n link M3U v\u00E0o \u0111\u00E2y...",
    addBtn: "+ Th\u00EAm",
    fileBtn: "\uD83D\uDCC1 File",
    searchPlaceholder: "T\u00ECm k\u00EAnh truy\u1EC1n h\u00ECnh...",
    checkBtn: "Ki\u1EC3m tra k\u00EAnh",
    showAll: "Hi\u1EC7n t\u1EA5t c\u1EA3",
    scrollTop: "L\u00EAn \u0111\u1EA7u",
    defaultBadge: "m\u1EB7c \u0111\u1ECBnh",
    renameTip: "\u0110\u1ED5i t\u00EAn",
    deleteTip: "X\u00F3a ngu\u1ED3n n\u00E0y",
    renamed: "\u0110\u00E3 \u0111\u1ED5i t\u00EAn",
    pipNotSupported: "PiP kh\u00F4ng h\u1ED7 tr\u1EE3",
    reloading: "\u0110ang t\u1EA3i l\u1EA1i...",
    channelN: "K\u00EAnh ",
    networkError: "L\u1ED7i m\u1EA1ng \u2014 \u0111ang th\u1EED l\u1EA1i...",
    mediaError: "L\u1ED7i media \u2014 \u0111ang kh\u1EAFc ph\u1EE5c...",
    playErrorRetry: "L\u1ED7i ph\u00E1t \u2014 t\u1EF1 t\u1EA3i l\u1EA1i",
    playErrorFinal: "L\u1ED7i ph\u00E1t \u2014 nh\u1EA5n T\u1EA3i l\u1EA1i",
    reconnecting: "\u0110ang t\u1EF1 k\u1EBFt n\u1ED1i l\u1EA1i...",
    loading: "\u0110ang t\u1EA3i...",
    checking: "Ki\u1EC3m tra",
    selectSource: "Ch\u1ECDn ngu\u1ED3n k\u00EAnh b\u00EAn d\u01B0\u1EDBi \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u",
    invalidUrl: "Link ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng http:// ho\u1EB7c https://",
    addedSource: "\u0110\u00E3 th\u00EAm ngu\u1ED3n: ",
    noChannelInFile: "Kh\u00F4ng t\u00ECm th\u1EA5y k\u00EAnh trong file",
    addedFile: "\u0110\u00E3 th\u00EAm: ",
    channelUnit: " k\u00EAnh",
    loadingSources: "\u0110ang t\u1EA3i {n} ngu\u1ED3n...",
    cantLoadSource: "Kh\u00F4ng t\u1EA3i \u0111\u01B0\u1EE3c ngu\u1ED3n k\u00EAnh",
    noChannelFound: "Kh\u00F4ng t\u00ECm th\u1EA5y k\u00EAnh n\u00E0o",
    sourceError: "{e} ngu\u1ED3n l\u1ED7i, {n} k\u00EAnh t\u1EA3i \u0111\u01B0\u1EE3c",
    sourceOk: "{n} k\u00EAnh t\u1EEB {s} ngu\u1ED3n",
    checkTitle: "Ki\u1EC3m tra k\u00EAnh n\u00E0o \u0111ang ho\u1EA1t \u0111\u1ED9ng",
    showAllTitle: "Hi\u1EC7n l\u1EA1i t\u1EA5t c\u1EA3 k\u00EAnh \u0111\u00E3 \u1EA9n",
    fileTitle: "Ch\u1ECDn file M3U t\u1EEB m\u00E1y",
    cinemaMode: "Cinema",
    pinChannel: "Ghim",
    pinChannelTip: "Ghim k\u00EAnh (t\u1EF1 ph\u00E1t khi m\u1EDF l\u1EA1i)",
    favChannel: "Y\u00EAu th\u00EDch",
    hideChannel: "\u1EA8n",
    pinnedToast: "\u0110\u00E3 ghim k\u00EAnh",
    unpinnedToast: "\u0110\u00E3 b\u1ECF ghim k\u00EAnh",
    shortcutsTitle: "Ph\u00EDm t\u1EAFt",
    playPause: "Ph\u00E1t / T\u1EA1m d\u1EEBng",
    prevChannel: "K\u00EAnh tr\u01B0\u1EDBc",
    nextChannel: "K\u00EAnh ti\u1EBFp",
    fullscreen: "To\u00E0n m\u00E0n h\u00ECnh"
  },
  en: {
    flag: "\uD83C\uDDFA\uD83C\uDDF8", label: "English (US)",
    noChannel: "No channel selected",
    sound: "Sound",
    pip: "Mini",
    newTab: "New tab",
    reload: "Reload",
    favHeader: "\u2B50 Favorites",
    favEmpty: "No favorite channels yet",
    sourceToggle: "\uD83D\uDD17 Sources",
    addPlaceholder: "Paste M3U link here...",
    addBtn: "+ Add",
    fileBtn: "\uD83D\uDCC1 File",
    searchPlaceholder: "Search channels...",
    checkBtn: "Check channels",
    showAll: "Show all",
    scrollTop: "Top",
    defaultBadge: "default",
    renameTip: "Rename",
    deleteTip: "Delete this source",
    renamed: "Renamed",
    pipNotSupported: "PiP not supported",
    reloading: "Reloading...",
    channelN: "Channel ",
    networkError: "Network error \u2014 retrying...",
    mediaError: "Media error \u2014 recovering...",
    playErrorRetry: "Playback error \u2014 auto retry",
    playErrorFinal: "Playback error \u2014 press Reload",
    reconnecting: "Reconnecting...",
    loading: "Loading...",
    checking: "Checking",
    selectSource: "Select a source below to start",
    invalidUrl: "Link must start with http:// or https://",
    addedSource: "Added source: ",
    noChannelInFile: "No channels found in file",
    addedFile: "Added: ",
    channelUnit: " channels",
    loadingSources: "Loading {n} sources...",
    cantLoadSource: "Cannot load sources",
    noChannelFound: "No channels found",
    sourceError: "{e} source errors, {n} channels loaded",
    sourceOk: "{n} channels from {s} sources",
    checkTitle: "Check which channels are working",
    showAllTitle: "Show all hidden channels",
    fileTitle: "Choose M3U file from device",
    cinemaMode: "Cinema",
    pinChannel: "Pin",
    pinChannelTip: "Pin channel (auto-play on startup)",
    favChannel: "Favorite",
    hideChannel: "Hide",
    pinnedToast: "Channel pinned",
    unpinnedToast: "Channel unpinned",
    shortcutsTitle: "Shortcuts",
    playPause: "Play / Pause",
    prevChannel: "Previous channel",
    nextChannel: "Next channel",
    fullscreen: "Fullscreen"
  },
  "en-GB": {
    flag: "\uD83C\uDDEC\uD83C\uDDE7", label: "English (UK)",
    noChannel: "No channel selected",
    sound: "Sound",
    pip: "Mini",
    newTab: "New tab",
    reload: "Reload",
    favHeader: "\u2B50 Favourites",
    favEmpty: "No favourite channels yet",
    sourceToggle: "\uD83D\uDD17 Sources",
    addPlaceholder: "Paste M3U link here...",
    addBtn: "+ Add",
    fileBtn: "\uD83D\uDCC1 File",
    searchPlaceholder: "Search channels...",
    checkBtn: "Check channels",
    showAll: "Show all",
    scrollTop: "Top",
    defaultBadge: "default",
    renameTip: "Rename",
    deleteTip: "Delete this source",
    renamed: "Renamed",
    pipNotSupported: "PiP not supported",
    reloading: "Reloading...",
    channelN: "Channel ",
    networkError: "Network error \u2014 retrying...",
    mediaError: "Media error \u2014 recovering...",
    playErrorRetry: "Playback error \u2014 auto retry",
    playErrorFinal: "Playback error \u2014 press Reload",
    reconnecting: "Reconnecting...",
    loading: "Loading...",
    checking: "Checking",
    selectSource: "Select a source below to start",
    invalidUrl: "Link must start with http:// or https://",
    addedSource: "Added source: ",
    noChannelInFile: "No channels found in file",
    addedFile: "Added: ",
    channelUnit: " channels",
    loadingSources: "Loading {n} sources...",
    cantLoadSource: "Cannot load sources",
    noChannelFound: "No channels found",
    sourceError: "{e} source errors, {n} channels loaded",
    sourceOk: "{n} channels from {s} sources",
    checkTitle: "Check which channels are working",
    showAllTitle: "Show all hidden channels",
    fileTitle: "Choose M3U file from device",
    cinemaMode: "Cinema",
    pinChannel: "Pin",
    pinChannelTip: "Pin channel (auto-play on startup)",
    favChannel: "Favourite",
    hideChannel: "Hide",
    pinnedToast: "Channel pinned",
    unpinnedToast: "Channel unpinned",
    shortcutsTitle: "Shortcuts",
    playPause: "Play / Pause",
    prevChannel: "Previous channel",
    nextChannel: "Next channel",
    fullscreen: "Fullscreen"
  },
  fr: {
    flag: "\uD83C\uDDEB\uD83C\uDDF7", label: "Fran\u00E7ais",
    noChannel: "Aucune cha\u00EEne s\u00E9lectionn\u00E9e",
    sound: "Son",
    pip: "Mini",
    newTab: "Nouvel onglet",
    reload: "Recharger",
    favHeader: "\u2B50 Favoris",
    favEmpty: "Aucune cha\u00EEne favorite",
    sourceToggle: "\uD83D\uDD17 Sources",
    addPlaceholder: "Collez un lien M3U ici...",
    addBtn: "+ Ajouter",
    fileBtn: "\uD83D\uDCC1 Fichier",
    searchPlaceholder: "Rechercher des cha\u00EEnes...",
    checkBtn: "V\u00E9rifier",
    showAll: "Tout afficher",
    scrollTop: "Haut",
    defaultBadge: "par d\u00E9faut",
    renameTip: "Renommer",
    deleteTip: "Supprimer cette source",
    renamed: "Renomm\u00E9",
    pipNotSupported: "PiP non pris en charge",
    reloading: "Rechargement...",
    channelN: "Cha\u00EEne ",
    networkError: "Erreur r\u00E9seau \u2014 nouvelle tentative...",
    mediaError: "Erreur m\u00E9dia \u2014 r\u00E9cup\u00E9ration...",
    playErrorRetry: "Erreur de lecture \u2014 nouvelle tentative",
    playErrorFinal: "Erreur de lecture \u2014 appuyez sur Recharger",
    reconnecting: "Reconnexion...",
    loading: "Chargement...",
    checking: "V\u00E9rification",
    selectSource: "S\u00E9lectionnez une source ci-dessous",
    invalidUrl: "Le lien doit commencer par http:// ou https://",
    addedSource: "Source ajout\u00E9e : ",
    noChannelInFile: "Aucune cha\u00EEne trouv\u00E9e dans le fichier",
    addedFile: "Ajout\u00E9 : ",
    channelUnit: " cha\u00EEnes",
    loadingSources: "Chargement de {n} sources...",
    cantLoadSource: "Impossible de charger les sources",
    noChannelFound: "Aucune cha\u00EEne trouv\u00E9e",
    sourceError: "{e} sources en erreur, {n} cha\u00EEnes charg\u00E9es",
    sourceOk: "{n} cha\u00EEnes de {s} sources",
    checkTitle: "V\u00E9rifier quelles cha\u00EEnes fonctionnent",
    showAllTitle: "R\u00E9afficher toutes les cha\u00EEnes masqu\u00E9es",
    fileTitle: "Choisir un fichier M3U",
    cinemaMode: "Cin\u00E9ma",
    pinChannel: "\u00C9pingler",
    pinChannelTip: "\u00C9pingler la cha\u00EEne (lecture auto au d\u00E9marrage)",
    favChannel: "Favori",
    hideChannel: "Masquer",
    pinnedToast: "Cha\u00EEne \u00E9pingl\u00E9e",
    unpinnedToast: "Cha\u00EEne d\u00E9s\u00E9pingl\u00E9e",
    shortcutsTitle: "Raccourcis",
    playPause: "Lecture / Pause",
    prevChannel: "Cha\u00EEne pr\u00E9c\u00E9dente",
    nextChannel: "Cha\u00EEne suivante",
    fullscreen: "Plein \u00E9cran"
  },
  de: {
    flag: "\uD83C\uDDE9\uD83C\uDDEA", label: "Deutsch",
    noChannel: "Kein Kanal ausgew\u00E4hlt",
    sound: "Ton",
    pip: "Mini",
    newTab: "Neuer Tab",
    reload: "Neu laden",
    favHeader: "\u2B50 Favoriten",
    favEmpty: "Noch keine Lieblingskan\u00E4le",
    sourceToggle: "\uD83D\uDD17 Quellen",
    addPlaceholder: "M3U-Link hier einf\u00FCgen...",
    addBtn: "+ Hinzuf\u00FCgen",
    fileBtn: "\uD83D\uDCC1 Datei",
    searchPlaceholder: "Kan\u00E4le suchen...",
    checkBtn: "Kan\u00E4le pr\u00FCfen",
    showAll: "Alle anzeigen",
    scrollTop: "Nach oben",
    defaultBadge: "Standard",
    renameTip: "Umbenennen",
    deleteTip: "Diese Quelle l\u00F6schen",
    renamed: "Umbenannt",
    pipNotSupported: "PiP nicht unterst\u00FCtzt",
    reloading: "Wird neu geladen...",
    channelN: "Kanal ",
    networkError: "Netzwerkfehler \u2014 erneuter Versuch...",
    mediaError: "Medienfehler \u2014 Wiederherstellung...",
    playErrorRetry: "Wiedergabefehler \u2014 automatischer Neuversuch",
    playErrorFinal: "Wiedergabefehler \u2014 Neu laden dr\u00FCcken",
    reconnecting: "Verbindung wird wiederhergestellt...",
    loading: "Wird geladen...",
    checking: "Pr\u00FCfung",
    selectSource: "W\u00E4hlen Sie unten eine Quelle aus",
    invalidUrl: "Link muss mit http:// oder https:// beginnen",
    addedSource: "Quelle hinzugef\u00FCgt: ",
    noChannelInFile: "Keine Kan\u00E4le in Datei gefunden",
    addedFile: "Hinzugef\u00FCgt: ",
    channelUnit: " Kan\u00E4le",
    loadingSources: "{n} Quellen werden geladen...",
    cantLoadSource: "Quellen konnten nicht geladen werden",
    noChannelFound: "Keine Kan\u00E4le gefunden",
    sourceError: "{e} Quellenfehler, {n} Kan\u00E4le geladen",
    sourceOk: "{n} Kan\u00E4le aus {s} Quellen",
    checkTitle: "Pr\u00FCfen welche Kan\u00E4le funktionieren",
    showAllTitle: "Alle ausgeblendeten Kan\u00E4le anzeigen",
    fileTitle: "M3U-Datei vom Ger\u00E4t w\u00E4hlen",
    cinemaMode: "Kino",
    pinChannel: "Anheften",
    pinChannelTip: "Kanal anheften (Auto-Start)",
    favChannel: "Favorit",
    hideChannel: "Ausblenden",
    pinnedToast: "Kanal angeheftet",
    unpinnedToast: "Kanal losgel\u00F6st",
    shortcutsTitle: "Tastaturk\u00FCrzel",
    playPause: "Wiedergabe / Pause",
    prevChannel: "Vorheriger Kanal",
    nextChannel: "N\u00E4chster Kanal",
    fullscreen: "Vollbild"
  },
  ru: {
    flag: "\uD83C\uDDF7\uD83C\uDDFA", label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
    noChannel: "\u041A\u0430\u043D\u0430\u043B \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D",
    sound: "\u0417\u0432\u0443\u043A",
    pip: "\u041C\u0438\u043D\u0438",
    newTab: "\u041D\u043E\u0432\u0430\u044F \u0432\u043A\u043B.",
    reload: "\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440.",
    favHeader: "\u2B50 \u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435",
    favEmpty: "\u041D\u0435\u0442 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u043A\u0430\u043D\u0430\u043B\u043E\u0432",
    sourceToggle: "\uD83D\uDD17 \u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438",
    addPlaceholder: "\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 M3U \u0441\u0441\u044B\u043B\u043A\u0443...",
    addBtn: "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
    fileBtn: "\uD83D\uDCC1 \u0424\u0430\u0439\u043B",
    searchPlaceholder: "\u041F\u043E\u0438\u0441\u043A \u043A\u0430\u043D\u0430\u043B\u043E\u0432...",
    checkBtn: "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C",
    showAll: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435",
    scrollTop: "\u0412\u0432\u0435\u0440\u0445",
    defaultBadge: "\u043F\u043E \u0443\u043C\u043E\u043B\u0447.",
    renameTip: "\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C",
    deleteTip: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A",
    renamed: "\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u043E",
    pipNotSupported: "PiP \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F",
    reloading: "\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...",
    channelN: "\u041A\u0430\u043D\u0430\u043B ",
    networkError: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0442\u0438 \u2014 \u043F\u043E\u0432\u0442\u043E\u0440...",
    mediaError: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043C\u0435\u0434\u0438\u0430 \u2014 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...",
    playErrorRetry: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u043E\u0441\u043F\u0440. \u2014 \u0430\u0432\u0442\u043E\u043F\u043E\u0432\u0442\u043E\u0440",
    playErrorFinal: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u043E\u0441\u043F\u0440. \u2014 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440.",
    reconnecting: "\u041F\u0435\u0440\u0435\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435...",
    loading: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...",
    checking: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430",
    selectSource: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u043D\u0438\u0436\u0435",
    invalidUrl: "\u0421\u0441\u044B\u043B\u043A\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 http:// \u0438\u043B\u0438 https://",
    addedSource: "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D: ",
    noChannelInFile: "\u041A\u0430\u043D\u0430\u043B\u044B \u0432 \u0444\u0430\u0439\u043B\u0435 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B",
    addedFile: "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E: ",
    channelUnit: " \u043A\u0430\u043D\u0430\u043B\u043E\u0432",
    loadingSources: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 {n} \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432...",
    cantLoadSource: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438",
    noChannelFound: "\u041A\u0430\u043D\u0430\u043B\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B",
    sourceError: "{e} \u043E\u0448\u0438\u0431\u043E\u043A, {n} \u043A\u0430\u043D\u0430\u043B\u043E\u0432 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E",
    sourceOk: "{n} \u043A\u0430\u043D\u0430\u043B\u043E\u0432 \u0438\u0437 {s} \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432",
    checkTitle: "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0440\u0430\u0431\u043E\u0447\u0438\u0435 \u043A\u0430\u043D\u0430\u043B\u044B",
    showAllTitle: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435 \u0441\u043A\u0440\u044B\u0442\u044B\u0435 \u043A\u0430\u043D\u0430\u043B\u044B",
    fileTitle: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C M3U \u0444\u0430\u0439\u043B",
    cinemaMode: "\u041A\u0438\u043D\u043E",
    pinChannel: "\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C",
    pinChannelTip: "\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u043A\u0430\u043D\u0430\u043B (\u0430\u0432\u0442\u043E\u0437\u0430\u043F\u0443\u0441\u043A)",
    favChannel: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435",
    hideChannel: "\u0421\u043A\u0440\u044B\u0442\u044C",
    pinnedToast: "\u041A\u0430\u043D\u0430\u043B \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0451\u043D",
    unpinnedToast: "\u041A\u0430\u043D\u0430\u043B \u043E\u0442\u043A\u0440\u0435\u043F\u043B\u0451\u043D",
    shortcutsTitle: "\u0413\u043E\u0440\u044F\u0447\u0438\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438",
    playPause: "\u0412\u043E\u0441\u043F\u0440. / \u041F\u0430\u0443\u0437\u0430",
    prevChannel: "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u043A\u0430\u043D\u0430\u043B",
    nextChannel: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043A\u0430\u043D\u0430\u043B",
    fullscreen: "\u041F\u043E\u043B\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D"
  },
  "en-AU": {
    flag: "\uD83C\uDDE6\uD83C\uDDFA", label: "English (AU)",
    noChannel: "No channel selected",
    sound: "Sound",
    pip: "Mini",
    newTab: "New tab",
    reload: "Reload",
    favHeader: "\u2B50 Favourites",
    favEmpty: "No favourite channels yet",
    sourceToggle: "\uD83D\uDD17 Sources",
    addPlaceholder: "Paste M3U link here...",
    addBtn: "+ Add",
    fileBtn: "\uD83D\uDCC1 File",
    searchPlaceholder: "Search channels...",
    checkBtn: "Check channels",
    showAll: "Show all",
    scrollTop: "Top",
    defaultBadge: "default",
    renameTip: "Rename",
    deleteTip: "Delete this source",
    renamed: "Renamed",
    pipNotSupported: "PiP not supported",
    reloading: "Reloading...",
    channelN: "Channel ",
    networkError: "Network error \u2014 retrying...",
    mediaError: "Media error \u2014 recovering...",
    playErrorRetry: "Playback error \u2014 auto retry",
    playErrorFinal: "Playback error \u2014 press Reload",
    reconnecting: "Reconnecting...",
    loading: "Loading...",
    checking: "Checking",
    selectSource: "Select a source below to start",
    invalidUrl: "Link must start with http:// or https://",
    addedSource: "Added source: ",
    noChannelInFile: "No channels found in file",
    addedFile: "Added: ",
    channelUnit: " channels",
    loadingSources: "Loading {n} sources...",
    cantLoadSource: "Cannot load sources",
    noChannelFound: "No channels found",
    sourceError: "{e} source errors, {n} channels loaded",
    sourceOk: "{n} channels from {s} sources",
    checkTitle: "Check which channels are working",
    showAllTitle: "Show all hidden channels",
    fileTitle: "Choose M3U file from device",
    cinemaMode: "Cinema",
    pinChannel: "Pin",
    pinChannelTip: "Pin channel (auto-play on startup)",
    favChannel: "Favourite",
    hideChannel: "Hide",
    pinnedToast: "Channel pinned",
    unpinnedToast: "Channel unpinned",
    shortcutsTitle: "Shortcuts",
    playPause: "Play / Pause",
    prevChannel: "Previous channel",
    nextChannel: "Next channel",
    fullscreen: "Fullscreen"
  },
  "zh-CN": {
    flag: "\uD83C\uDDE8\uD83C\uDDF3", label: "\u4E2D\u6587(\u7B80\u4F53)",
    noChannel: "\u672A\u9009\u62E9\u9891\u9053",
    sound: "\u58F0\u97F3",
    pip: "\u5C0F\u7A97",
    newTab: "\u65B0\u6807\u7B7E",
    reload: "\u91CD\u65B0\u52A0\u8F7D",
    favHeader: "\u2B50 \u6536\u85CF\u9891\u9053",
    favEmpty: "\u8FD8\u6CA1\u6709\u6536\u85CF\u9891\u9053",
    sourceToggle: "\uD83D\uDD17 \u9891\u9053\u6E90",
    addPlaceholder: "\u7C98\u8D34M3U\u94FE\u63A5...",
    addBtn: "+ \u6DFB\u52A0",
    fileBtn: "\uD83D\uDCC1 \u6587\u4EF6",
    searchPlaceholder: "\u641C\u7D22\u9891\u9053...",
    checkBtn: "\u68C0\u6D4B\u9891\u9053",
    showAll: "\u663E\u793A\u5168\u90E8",
    scrollTop: "\u56DE\u5230\u9876\u90E8",
    defaultBadge: "\u9ED8\u8BA4",
    renameTip: "\u91CD\u547D\u540D",
    deleteTip: "\u5220\u9664\u6B64\u6E90",
    renamed: "\u5DF2\u91CD\u547D\u540D",
    pipNotSupported: "\u4E0D\u652F\u6301\u753B\u4E2D\u753B",
    reloading: "\u91CD\u65B0\u52A0\u8F7D\u4E2D...",
    channelN: "\u9891\u9053 ",
    networkError: "\u7F51\u7EDC\u9519\u8BEF \u2014 \u6B63\u5728\u91CD\u8BD5...",
    mediaError: "\u5A92\u4F53\u9519\u8BEF \u2014 \u6B63\u5728\u4FEE\u590D...",
    playErrorRetry: "\u64AD\u653E\u9519\u8BEF \u2014 \u81EA\u52A8\u91CD\u8BD5",
    playErrorFinal: "\u64AD\u653E\u9519\u8BEF \u2014 \u8BF7\u6309\u91CD\u65B0\u52A0\u8F7D",
    reconnecting: "\u6B63\u5728\u91CD\u65B0\u8FDE\u63A5...",
    loading: "\u52A0\u8F7D\u4E2D...",
    checking: "\u68C0\u6D4B\u4E2D",
    selectSource: "\u8BF7\u5728\u4E0B\u65B9\u9009\u62E9\u9891\u9053\u6E90",
    invalidUrl: "\u94FE\u63A5\u5FC5\u987B\u4EE5 http:// \u6216 https:// \u5F00\u5934",
    addedSource: "\u5DF2\u6DFB\u52A0\u6E90\uFF1A",
    noChannelInFile: "\u6587\u4EF6\u4E2D\u672A\u627E\u5230\u9891\u9053",
    addedFile: "\u5DF2\u6DFB\u52A0\uFF1A",
    channelUnit: " \u4E2A\u9891\u9053",
    loadingSources: "\u6B63\u5728\u52A0\u8F7D {n} \u4E2A\u6E90...",
    cantLoadSource: "\u65E0\u6CD5\u52A0\u8F7D\u9891\u9053\u6E90",
    noChannelFound: "\u672A\u627E\u5230\u9891\u9053",
    sourceError: "{e} \u4E2A\u6E90\u9519\u8BEF\uFF0C{n} \u4E2A\u9891\u9053\u5DF2\u52A0\u8F7D",
    sourceOk: "\u6765\u81EA {s} \u4E2A\u6E90\u7684 {n} \u4E2A\u9891\u9053",
    checkTitle: "\u68C0\u6D4B\u54EA\u4E9B\u9891\u9053\u53EF\u7528",
    showAllTitle: "\u663E\u793A\u6240\u6709\u9690\u85CF\u9891\u9053",
    fileTitle: "\u4ECE\u8BBE\u5907\u9009\u62E9M3U\u6587\u4EF6",
    cinemaMode: "\u5F71\u9662",
    pinChannel: "\u7F6E\u9876",
    pinChannelTip: "\u7F6E\u9876\u9891\u9053\uFF08\u542F\u52A8\u65F6\u81EA\u52A8\u64AD\u653E\uFF09",
    favChannel: "\u6536\u85CF",
    hideChannel: "\u9690\u85CF",
    pinnedToast: "\u5DF2\u7F6E\u9876\u9891\u9053",
    unpinnedToast: "\u5DF2\u53D6\u6D88\u7F6E\u9876",
    shortcutsTitle: "\u5FEB\u6377\u952E",
    playPause: "\u64AD\u653E / \u6682\u505C",
    prevChannel: "\u4E0A\u4E00\u4E2A\u9891\u9053",
    nextChannel: "\u4E0B\u4E00\u4E2A\u9891\u9053",
    fullscreen: "\u5168\u5C4F"
  },
  "zh-TW": {
    flag: "\uD83C\uDDF9\uD83C\uDDFC", label: "\u4E2D\u6587(\u7E41\u9AD4)",
    noChannel: "\u672A\u9078\u64C7\u983B\u9053",
    sound: "\u8072\u97F3",
    pip: "\u5C0F\u8996\u7A97",
    newTab: "\u65B0\u5206\u9801",
    reload: "\u91CD\u65B0\u8F09\u5165",
    favHeader: "\u2B50 \u6536\u85CF\u983B\u9053",
    favEmpty: "\u9084\u6C92\u6709\u6536\u85CF\u983B\u9053",
    sourceToggle: "\uD83D\uDD17 \u983B\u9053\u6E90",
    addPlaceholder: "\u8CBB\u8CBC M3U \u9023\u7D50...",
    addBtn: "+ \u65B0\u589E",
    fileBtn: "\uD83D\uDCC1 \u6A94\u6848",
    searchPlaceholder: "\u641C\u5C0B\u983B\u9053...",
    checkBtn: "\u6AA2\u6E2C\u983B\u9053",
    showAll: "\u986F\u793A\u5168\u90E8",
    scrollTop: "\u56DE\u5230\u9802\u90E8",
    defaultBadge: "\u9810\u8A2D",
    renameTip: "\u91CD\u65B0\u547D\u540D",
    deleteTip: "\u522A\u9664\u6B64\u6E90",
    renamed: "\u5DF2\u91CD\u65B0\u547D\u540D",
    pipNotSupported: "\u4E0D\u652F\u63F4\u5B50\u6BCD\u756B\u9762",
    reloading: "\u91CD\u65B0\u8F09\u5165\u4E2D...",
    channelN: "\u983B\u9053 ",
    networkError: "\u7DB2\u8DEF\u932F\u8AA4 \u2014 \u6B63\u5728\u91CD\u8A66...",
    mediaError: "\u5A92\u9AD4\u932F\u8AA4 \u2014 \u6B63\u5728\u4FEE\u5FA9...",
    playErrorRetry: "\u64AD\u653E\u932F\u8AA4 \u2014 \u81EA\u52D5\u91CD\u8A66",
    playErrorFinal: "\u64AD\u653E\u932F\u8AA4 \u2014 \u8ACB\u6309\u91CD\u65B0\u8F09\u5165",
    reconnecting: "\u6B63\u5728\u91CD\u65B0\u9023\u7DDA...",
    loading: "\u8F09\u5165\u4E2D...",
    checking: "\u6AA2\u6E2C\u4E2D",
    selectSource: "\u8ACB\u5728\u4E0B\u65B9\u9078\u64C7\u983B\u9053\u6E90",
    invalidUrl: "\u9023\u7D50\u5FC5\u9808\u4EE5 http:// \u6216 https:// \u958B\u982D",
    addedSource: "\u5DF2\u65B0\u589E\u6E90\uFF1A",
    noChannelInFile: "\u6A94\u6848\u4E2D\u672A\u627E\u5230\u983B\u9053",
    addedFile: "\u5DF2\u65B0\u589E\uFF1A",
    channelUnit: " \u500B\u983B\u9053",
    loadingSources: "\u6B63\u5728\u8F09\u5165 {n} \u500B\u6E90...",
    cantLoadSource: "\u7121\u6CD5\u8F09\u5165\u983B\u9053\u6E90",
    noChannelFound: "\u672A\u627E\u5230\u983B\u9053",
    sourceError: "{e} \u500B\u6E90\u932F\u8AA4\uFF0C{n} \u500B\u983B\u9053\u5DF2\u8F09\u5165",
    sourceOk: "\u4F86\u81EA {s} \u500B\u6E90\u7684 {n} \u500B\u983B\u9053",
    checkTitle: "\u6AA2\u6E2C\u54EA\u4E9B\u983B\u9053\u53EF\u7528",
    showAllTitle: "\u986F\u793A\u6240\u6709\u96B1\u85CF\u983B\u9053",
    fileTitle: "\u5F9E\u88DD\u7F6E\u9078\u64C7M3U\u6A94\u6848",
    cinemaMode: "\u5F71\u9662",
    pinChannel: "\u7F6E\u9802",
    pinChannelTip: "\u7F6E\u9802\u983B\u9053\uFF08\u555F\u52D5\u6642\u81EA\u52D5\u64AD\u653E\uFF09",
    favChannel: "\u6536\u85CF",
    hideChannel: "\u96B1\u85CF",
    pinnedToast: "\u5DF2\u7F6E\u9802\u983B\u9053",
    unpinnedToast: "\u5DF2\u53D6\u6D88\u7F6E\u9802",
    shortcutsTitle: "\u5FEB\u6377\u9375",
    playPause: "\u64AD\u653E / \u66AB\u505C",
    prevChannel: "\u4E0A\u4E00\u500B\u983B\u9053",
    nextChannel: "\u4E0B\u4E00\u500B\u983B\u9053",
    fullscreen: "\u5168\u753B\u9762"
  },
  ja: {
    flag: "\uD83C\uDDEF\uD83C\uDDF5", label: "\u65E5\u672C\u8A9E",
    noChannel: "\u30C1\u30E3\u30F3\u30CD\u30EB\u672A\u9078\u629E",
    sound: "\u97F3\u58F0",
    pip: "\u30DF\u30CB",
    newTab: "\u65B0\u30BF\u30D6",
    reload: "\u518D\u8AAD\u8FBC",
    favHeader: "\u2B50 \u304A\u6C17\u306B\u5165\u308A",
    favEmpty: "\u304A\u6C17\u306B\u5165\u308A\u306A\u3057",
    sourceToggle: "\uD83D\uDD17 \u30BD\u30FC\u30B9",
    addPlaceholder: "M3U\u30EA\u30F3\u30AF\u3092\u8CBC\u308A\u4ED8\u3051...",
    addBtn: "+ \u8FFD\u52A0",
    fileBtn: "\uD83D\uDCC1 \u30D5\u30A1\u30A4\u30EB",
    searchPlaceholder: "\u30C1\u30E3\u30F3\u30CD\u30EB\u691C\u7D22...",
    checkBtn: "\u30C1\u30E3\u30F3\u30CD\u30EB\u78BA\u8A8D",
    showAll: "\u3059\u3079\u3066\u8868\u793A",
    scrollTop: "\u30C8\u30C3\u30D7",
    defaultBadge: "\u30C7\u30D5\u30A9\u30EB\u30C8",
    renameTip: "\u540D\u524D\u5909\u66F4",
    deleteTip: "\u3053\u306E\u30BD\u30FC\u30B9\u3092\u524A\u9664",
    renamed: "\u540D\u524D\u5909\u66F4\u6E08\u307F",
    pipNotSupported: "PiP\u975E\u5BFE\u5FDC",
    reloading: "\u518D\u8AAD\u8FBC\u4E2D...",
    channelN: "\u30C1\u30E3\u30F3\u30CD\u30EB ",
    networkError: "\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30A8\u30E9\u30FC \u2014 \u30EA\u30C8\u30E9\u30A4\u4E2D...",
    mediaError: "\u30E1\u30C7\u30A3\u30A2\u30A8\u30E9\u30FC \u2014 \u5FA9\u65E7\u4E2D...",
    playErrorRetry: "\u518D\u751F\u30A8\u30E9\u30FC \u2014 \u81EA\u52D5\u30EA\u30C8\u30E9\u30A4",
    playErrorFinal: "\u518D\u751F\u30A8\u30E9\u30FC \u2014 \u518D\u8AAD\u8FBC\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044",
    reconnecting: "\u518D\u63A5\u7D9A\u4E2D...",
    loading: "\u8AAD\u8FBC\u4E2D...",
    checking: "\u78BA\u8A8D\u4E2D",
    selectSource: "\u4E0B\u306E\u30BD\u30FC\u30B9\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044",
    invalidUrl: "\u30EA\u30F3\u30AF\u306F http:// \u307E\u305F\u306F https:// \u3067\u59CB\u3081\u3066\u304F\u3060\u3055\u3044",
    addedSource: "\u30BD\u30FC\u30B9\u8FFD\u52A0\uFF1A",
    noChannelInFile: "\u30D5\u30A1\u30A4\u30EB\u306B\u30C1\u30E3\u30F3\u30CD\u30EB\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093",
    addedFile: "\u8FFD\u52A0\uFF1A",
    channelUnit: " \u30C1\u30E3\u30F3\u30CD\u30EB",
    loadingSources: "{n} \u30BD\u30FC\u30B9\u3092\u8AAD\u8FBC\u4E2D...",
    cantLoadSource: "\u30BD\u30FC\u30B9\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093",
    noChannelFound: "\u30C1\u30E3\u30F3\u30CD\u30EB\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093",
    sourceError: "{e} \u30BD\u30FC\u30B9\u30A8\u30E9\u30FC\u3001{n} \u30C1\u30E3\u30F3\u30CD\u30EB\u8AAD\u8FBC\u6E08",
    sourceOk: "{s} \u30BD\u30FC\u30B9\u304B\u3089 {n} \u30C1\u30E3\u30F3\u30CD\u30EB",
    checkTitle: "\u52D5\u4F5C\u4E2D\u306E\u30C1\u30E3\u30F3\u30CD\u30EB\u3092\u78BA\u8A8D",
    showAllTitle: "\u975E\u8868\u793A\u30C1\u30E3\u30F3\u30CD\u30EB\u3092\u3059\u3079\u3066\u8868\u793A",
    fileTitle: "\u30C7\u30D0\u30A4\u30B9\u304B\u3089M3U\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E",
    cinemaMode: "\u30B7\u30CD\u30DE",
    pinChannel: "\u30D4\u30F3\u7559\u3081",
    pinChannelTip: "\u30C1\u30E3\u30F3\u30CD\u30EB\u3092\u30D4\u30F3\u7559\u3081\uFF08\u8D77\u52D5\u6642\u306B\u81EA\u52D5\u518D\u751F\uFF09",
    favChannel: "\u304A\u6C17\u306B\u5165\u308A",
    hideChannel: "\u975E\u8868\u793A",
    pinnedToast: "\u30C1\u30E3\u30F3\u30CD\u30EB\u3092\u30D4\u30F3\u7559\u3081\u3057\u307E\u3057\u305F",
    unpinnedToast: "\u30D4\u30F3\u7559\u3081\u3092\u89E3\u9664\u3057\u307E\u3057\u305F",
    shortcutsTitle: "\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8",
    playPause: "\u518D\u751F / \u4E00\u6642\u505C\u6B62",
    prevChannel: "\u524D\u306E\u30C1\u30E3\u30F3\u30CD\u30EB",
    nextChannel: "\u6B21\u306E\u30C1\u30E3\u30F3\u30CD\u30EB",
    fullscreen: "\u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3"
  },
  ko: {
    flag: "\uD83C\uDDF0\uD83C\uDDF7", label: "\uD55C\uAD6D\uC5B4",
    noChannel: "\uCC44\uB110 \uBBF8\uC120\uD0DD",
    sound: "\uC18C\uB9AC",
    pip: "\uBBF8\uB2C8",
    newTab: "\uC0C8 \uD0ED",
    reload: "\uC0C8\uB85C\uACE0\uCE68",
    favHeader: "\u2B50 \uC990\uACA8\uCC3E\uAE30",
    favEmpty: "\uC990\uACA8\uCC3E\uAE30\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4",
    sourceToggle: "\uD83D\uDD17 \uC18C\uC2A4",
    addPlaceholder: "M3U \uB9C1\uD06C\uB97C \uBD99\uC5EC\uB123\uC73C\uC138\uC694...",
    addBtn: "+ \uCD94\uAC00",
    fileBtn: "\uD83D\uDCC1 \uD30C\uC77C",
    searchPlaceholder: "\uCC44\uB110 \uAC80\uC0C9...",
    checkBtn: "\uCC44\uB110 \uD655\uC778",
    showAll: "\uBAA8\uB450 \uD45C\uC2DC",
    scrollTop: "\uB9E8 \uC704\uB85C",
    defaultBadge: "\uAE30\uBCF8",
    renameTip: "\uC774\uB984 \uBCC0\uACBD",
    deleteTip: "\uC774 \uC18C\uC2A4 \uC0AD\uC81C",
    renamed: "\uC774\uB984 \uBCC0\uACBD\uB428",
    pipNotSupported: "PiP \uBBF8\uC9C0\uC6D0",
    reloading: "\uC0C8\uB85C\uACE0\uCE68 \uC911...",
    channelN: "\uCC44\uB110 ",
    networkError: "\uB124\uD2B8\uC6CC\uD06C \uC624\uB958 \u2014 \uC7AC\uC2DC\uB3C4 \uC911...",
    mediaError: "\uBBF8\uB514\uC5B4 \uC624\uB958 \u2014 \uBCF5\uAD6C \uC911...",
    playErrorRetry: "\uC7AC\uC0DD \uC624\uB958 \u2014 \uC790\uB3D9 \uC7AC\uC2DC\uB3C4",
    playErrorFinal: "\uC7AC\uC0DD \uC624\uB958 \u2014 \uC0C8\uB85C\uACE0\uCE68\uC744 \uB204\uB974\uC138\uC694",
    reconnecting: "\uC7AC\uC5F0\uACB0 \uC911...",
    loading: "\uB85C\uB529 \uC911...",
    checking: "\uD655\uC778 \uC911",
    selectSource: "\uC544\uB798\uC5D0\uC11C \uC18C\uC2A4\uB97C \uC120\uD0DD\uD558\uC138\uC694",
    invalidUrl: "\uB9C1\uD06C\uB294 http:// \uB610\uB294 https://\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4",
    addedSource: "\uC18C\uC2A4 \uCD94\uAC00\uB428: ",
    noChannelInFile: "\uD30C\uC77C\uC5D0\uC11C \uCC44\uB110\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4",
    addedFile: "\uCD94\uAC00\uB428: ",
    channelUnit: " \uCC44\uB110",
    loadingSources: "{n}\uAC1C \uC18C\uC2A4 \uB85C\uB529 \uC911...",
    cantLoadSource: "\uC18C\uC2A4\uB97C \uB85C\uB4DC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4",
    noChannelFound: "\uCC44\uB110\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4",
    sourceError: "{e}\uAC1C \uC18C\uC2A4 \uC624\uB958, {n}\uAC1C \uCC44\uB110 \uB85C\uB4DC\uB428",
    sourceOk: "{s}\uAC1C \uC18C\uC2A4\uC5D0\uC11C {n}\uAC1C \uCC44\uB110",
    checkTitle: "\uC791\uB3D9 \uC911\uC778 \uCC44\uB110 \uD655\uC778",
    showAllTitle: "\uC228\uACA8\uC9C4 \uCC44\uB110 \uBAA8\uB450 \uD45C\uC2DC",
    fileTitle: "\uAE30\uAE30\uC5D0\uC11C M3U \uD30C\uC77C \uC120\uD0DD",
    cinemaMode: "\uC2DC\uB124\uB9C8",
    pinChannel: "\uACE0\uC815",
    pinChannelTip: "\uCC44\uB110 \uACE0\uC815 (\uC2DC\uC791 \uC2DC \uC790\uB3D9 \uC7AC\uC0DD)",
    favChannel: "\uC990\uACA8\uCC3E\uAE30",
    hideChannel: "\uC228\uAE30\uAE30",
    pinnedToast: "\uCC44\uB110 \uACE0\uC815\uB428",
    unpinnedToast: "\uCC44\uB110 \uACE0\uC815 \uD574\uC81C",
    shortcutsTitle: "\uB2E8\uCD95\uD0A4",
    playPause: "\uC7AC\uC0DD / \uC77C\uC2DC\uC815\uC9C0",
    prevChannel: "\uC774\uC804 \uCC44\uB110",
    nextChannel: "\uB2E4\uC74C \uCC44\uB110",
    fullscreen: "\uC804\uCCB4 \uD654\uBA74"
  },
  es: {
    flag: "\uD83C\uDDEA\uD83C\uDDF8", label: "Espa\u00F1ol",
    noChannel: "Ning\u00FAn canal seleccionado",
    sound: "Sonido",
    pip: "Mini",
    newTab: "Nueva pesta\u00F1a",
    reload: "Recargar",
    favHeader: "\u2B50 Favoritos",
    favEmpty: "Sin canales favoritos",
    sourceToggle: "\uD83D\uDD17 Fuentes",
    addPlaceholder: "Pegar enlace M3U aqu\u00ED...",
    addBtn: "+ A\u00F1adir",
    fileBtn: "\uD83D\uDCC1 Archivo",
    searchPlaceholder: "Buscar canales...",
    checkBtn: "Verificar canales",
    showAll: "Mostrar todo",
    scrollTop: "Arriba",
    defaultBadge: "por defecto",
    renameTip: "Renombrar",
    deleteTip: "Eliminar esta fuente",
    renamed: "Renombrado",
    pipNotSupported: "PiP no soportado",
    reloading: "Recargando...",
    channelN: "Canal ",
    networkError: "Error de red \u2014 reintentando...",
    mediaError: "Error de medios \u2014 recuperando...",
    playErrorRetry: "Error de reproducci\u00F3n \u2014 reintento autom\u00E1tico",
    playErrorFinal: "Error de reproducci\u00F3n \u2014 pulse Recargar",
    reconnecting: "Reconectando...",
    loading: "Cargando...",
    checking: "Verificando",
    selectSource: "Seleccione una fuente abajo",
    invalidUrl: "El enlace debe comenzar con http:// o https://",
    addedSource: "Fuente a\u00F1adida: ",
    noChannelInFile: "No se encontraron canales en el archivo",
    addedFile: "A\u00F1adido: ",
    channelUnit: " canales",
    loadingSources: "Cargando {n} fuentes...",
    cantLoadSource: "No se pueden cargar las fuentes",
    noChannelFound: "No se encontraron canales",
    sourceError: "{e} fuentes con error, {n} canales cargados",
    sourceOk: "{n} canales de {s} fuentes",
    checkTitle: "Verificar qu\u00E9 canales funcionan",
    showAllTitle: "Mostrar todos los canales ocultos",
    fileTitle: "Elegir archivo M3U del dispositivo",
    cinemaMode: "Cine",
    pinChannel: "Fijar",
    pinChannelTip: "Fijar canal (autoreproducir al iniciar)",
    favChannel: "Favorito",
    hideChannel: "Ocultar",
    pinnedToast: "Canal fijado",
    unpinnedToast: "Canal desfijado",
    shortcutsTitle: "Atajos",
    playPause: "Reproducir / Pausa",
    prevChannel: "Canal anterior",
    nextChannel: "Canal siguiente",
    fullscreen: "Pantalla completa"
  },
  pt: {
    flag: "\uD83C\uDDE7\uD83C\uDDF7", label: "Portugu\u00EAs",
    noChannel: "Nenhum canal selecionado",
    sound: "Som",
    pip: "Mini",
    newTab: "Nova aba",
    reload: "Recarregar",
    favHeader: "\u2B50 Favoritos",
    favEmpty: "Sem canais favoritos",
    sourceToggle: "\uD83D\uDD17 Fontes",
    addPlaceholder: "Colar link M3U aqui...",
    addBtn: "+ Adicionar",
    fileBtn: "\uD83D\uDCC1 Arquivo",
    searchPlaceholder: "Pesquisar canais...",
    checkBtn: "Verificar canais",
    showAll: "Mostrar tudo",
    scrollTop: "Topo",
    defaultBadge: "padr\u00E3o",
    renameTip: "Renomear",
    deleteTip: "Excluir esta fonte",
    renamed: "Renomeado",
    pipNotSupported: "PiP n\u00E3o suportado",
    reloading: "Recarregando...",
    channelN: "Canal ",
    networkError: "Erro de rede \u2014 tentando novamente...",
    mediaError: "Erro de m\u00EDdia \u2014 recuperando...",
    playErrorRetry: "Erro de reprodu\u00E7\u00E3o \u2014 tentativa autom\u00E1tica",
    playErrorFinal: "Erro de reprodu\u00E7\u00E3o \u2014 pressione Recarregar",
    reconnecting: "Reconectando...",
    loading: "Carregando...",
    checking: "Verificando",
    selectSource: "Selecione uma fonte abaixo",
    invalidUrl: "O link deve come\u00E7ar com http:// ou https://",
    addedSource: "Fonte adicionada: ",
    noChannelInFile: "Nenhum canal encontrado no arquivo",
    addedFile: "Adicionado: ",
    channelUnit: " canais",
    loadingSources: "Carregando {n} fontes...",
    cantLoadSource: "N\u00E3o foi poss\u00EDvel carregar as fontes",
    noChannelFound: "Nenhum canal encontrado",
    sourceError: "{e} fontes com erro, {n} canais carregados",
    sourceOk: "{n} canais de {s} fontes",
    checkTitle: "Verificar quais canais est\u00E3o funcionando",
    showAllTitle: "Mostrar todos os canais ocultos",
    fileTitle: "Escolher arquivo M3U do dispositivo",
    cinemaMode: "Cinema",
    pinChannel: "Fixar",
    pinChannelTip: "Fixar canal (reprodu\u00E7\u00E3o autom\u00E1tica ao iniciar)",
    favChannel: "Favorito",
    hideChannel: "Ocultar",
    pinnedToast: "Canal fixado",
    unpinnedToast: "Canal desfixado",
    shortcutsTitle: "Atalhos",
    playPause: "Reproduzir / Pausa",
    prevChannel: "Canal anterior",
    nextChannel: "Pr\u00F3ximo canal",
    fullscreen: "Tela cheia"
  },
  ar: {
    flag: "\uD83C\uDDF8\uD83C\uDDE6", label: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
    noChannel: "\u0644\u0645 \u064A\u062A\u0645 \u0627\u062E\u062A\u064A\u0627\u0631 \u0642\u0646\u0627\u0629",
    sound: "\u0627\u0644\u0635\u0648\u062A",
    pip: "\u0645\u0635\u063A\u0631",
    newTab: "\u062A\u0628\u0648\u064A\u0628 \u062C\u062F\u064A\u062F",
    reload: "\u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644",
    favHeader: "\u2B50 \u0627\u0644\u0645\u0641\u0636\u0644\u0629",
    favEmpty: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0642\u0646\u0648\u0627\u062A \u0645\u0641\u0636\u0644\u0629",
    sourceToggle: "\uD83D\uDD17 \u0627\u0644\u0645\u0635\u0627\u062F\u0631",
    addPlaceholder: "\u0623\u0644\u0635\u0642 \u0631\u0627\u0628\u0637 M3U \u0647\u0646\u0627...",
    addBtn: "+ \u0625\u0636\u0627\u0641\u0629",
    fileBtn: "\uD83D\uDCC1 \u0645\u0644\u0641",
    searchPlaceholder: "\u0628\u062D\u062B \u0639\u0646 \u0627\u0644\u0642\u0646\u0648\u0627\u062A...",
    checkBtn: "\u0641\u062D\u0635 \u0627\u0644\u0642\u0646\u0648\u0627\u062A",
    showAll: "\u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0643\u0644",
    scrollTop: "\u0623\u0639\u0644\u0649",
    defaultBadge: "\u0627\u0641\u062A\u0631\u0627\u0636\u064A",
    renameTip: "\u0625\u0639\u0627\u062F\u0629 \u062A\u0633\u0645\u064A\u0629",
    deleteTip: "\u062D\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u0645\u0635\u062F\u0631",
    renamed: "\u062A\u0645\u062A \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0633\u0645\u064A\u0629",
    pipNotSupported: "PiP \u063A\u064A\u0631 \u0645\u062F\u0639\u0648\u0645",
    reloading: "\u062C\u0627\u0631\u064D \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u062D\u0645\u064A\u0644...",
    channelN: "\u0642\u0646\u0627\u0629 ",
    networkError: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0634\u0628\u0643\u0629 \u2014 \u062C\u0627\u0631\u064D \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629...",
    mediaError: "\u062E\u0637\u0623 \u0648\u0633\u0627\u0626\u0637 \u2014 \u062C\u0627\u0631\u064D \u0627\u0644\u0627\u0633\u062A\u0631\u062F\u0627\u062F...",
    playErrorRetry: "\u062E\u0637\u0623 \u062A\u0634\u063A\u064A\u0644 \u2014 \u0625\u0639\u0627\u062F\u0629 \u0645\u062D\u0627\u0648\u0644\u0629 \u062A\u0644\u0642\u0627\u0626\u064A\u0629",
    playErrorFinal: "\u062E\u0637\u0623 \u062A\u0634\u063A\u064A\u0644 \u2014 \u0627\u0636\u063A\u0637 \u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644",
    reconnecting: "\u062C\u0627\u0631\u064D \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0627\u062A\u0635\u0627\u0644...",
    loading: "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0645\u064A\u0644...",
    checking: "\u0641\u062D\u0635",
    selectSource: "\u0627\u062E\u062A\u0631 \u0645\u0635\u062F\u0631\u0627\u064B \u0623\u062F\u0646\u0627\u0647",
    invalidUrl: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0627\u0644\u0631\u0627\u0628\u0637 \u0628\u0640 http:// \u0623\u0648 https://",
    addedSource: "\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0635\u062F\u0631: ",
    noChannelInFile: "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0642\u0646\u0648\u0627\u062A \u0641\u064A \u0627\u0644\u0645\u0644\u0641",
    addedFile: "\u062A\u0645\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u0629: ",
    channelUnit: " \u0642\u0646\u0648\u0627\u062A",
    loadingSources: "\u062C\u0627\u0631\u064D \u062A\u062D\u0645\u064A\u0644 {n} \u0645\u0635\u0627\u062F\u0631...",
    cantLoadSource: "\u062A\u0639\u0630\u0631 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0635\u0627\u062F\u0631",
    noChannelFound: "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0642\u0646\u0648\u0627\u062A",
    sourceError: "{e} \u0645\u0635\u0627\u062F\u0631 \u062E\u0627\u0637\u0626\u0629\u060C {n} \u0642\u0646\u0648\u0627\u062A \u0645\u062D\u0645\u0644\u0629",
    sourceOk: "{n} \u0642\u0646\u0648\u0627\u062A \u0645\u0646 {s} \u0645\u0635\u0627\u062F\u0631",
    checkTitle: "\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0642\u0646\u0648\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0644\u0629",
    showAllTitle: "\u0625\u0638\u0647\u0627\u0631 \u062C\u0645\u064A\u0639 \u0627\u0644\u0642\u0646\u0648\u0627\u062A \u0627\u0644\u0645\u062E\u0641\u064A\u0629",
    fileTitle: "\u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0644\u0641 M3U \u0645\u0646 \u0627\u0644\u062C\u0647\u0627\u0632",
    cinemaMode: "\u0633\u064A\u0646\u0645\u0627",
    pinChannel: "\u062A\u062B\u0628\u064A\u062A",
    pinChannelTip: "\u062A\u062B\u0628\u064A\u062A \u0627\u0644\u0642\u0646\u0627\u0629 (\u062A\u0634\u063A\u064A\u0644 \u062A\u0644\u0642\u0627\u0626\u064A \u0639\u0646\u062F \u0627\u0644\u0628\u062F\u0621)",
    favChannel: "\u0645\u0641\u0636\u0644\u0629",
    hideChannel: "\u0625\u062E\u0641\u0627\u0621",
    pinnedToast: "\u062A\u0645 \u062A\u062B\u0628\u064A\u062A \u0627\u0644\u0642\u0646\u0627\u0629",
    unpinnedToast: "\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u062A\u062B\u0628\u064A\u062A \u0627\u0644\u0642\u0646\u0627\u0629",
    shortcutsTitle: "\u0627\u062E\u062A\u0635\u0627\u0631\u0627\u062A",
    playPause: "\u062A\u0634\u063A\u064A\u0644 / \u0625\u064A\u0642\u0627\u0641",
    prevChannel: "\u0627\u0644\u0642\u0646\u0627\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629",
    nextChannel: "\u0627\u0644\u0642\u0646\u0627\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629",
    fullscreen: "\u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629"
  },
  hi: {
    flag: "\uD83C\uDDEE\uD83C\uDDF3", label: "\u0939\u093F\u0928\u094D\u0926\u0940",
    noChannel: "\u0915\u094B\u0908 \u091A\u0948\u0928\u0932 \u0928\u0939\u0940\u0902 \u091A\u0941\u0928\u093E",
    sound: "\u0927\u094D\u0935\u0928\u093F",
    pip: "\u092E\u093F\u0928\u0940",
    newTab: "\u0928\u092F\u093E \u091F\u0948\u092C",
    reload: "\u0930\u0940\u0932\u094B\u0921",
    favHeader: "\u2B50 \u092A\u0938\u0902\u0926\u0940\u0926\u093E",
    favEmpty: "\u0915\u094B\u0908 \u092A\u0938\u0902\u0926\u0940\u0926\u093E \u091A\u0948\u0928\u0932 \u0928\u0939\u0940\u0902",
    sourceToggle: "\uD83D\uDD17 \u0938\u094D\u0930\u094B\u0924",
    addPlaceholder: "M3U \u0932\u093F\u0902\u0915 \u092F\u0939\u093E\u0901 \u091A\u093F\u092A\u0915\u093E\u090F\u0901...",
    addBtn: "+ \u091C\u094B\u0921\u093C\u0947\u0902",
    fileBtn: "\uD83D\uDCC1 \u092B\u093C\u093E\u0907\u0932",
    searchPlaceholder: "\u091A\u0948\u0928\u0932 \u0916\u094B\u091C\u0947\u0902...",
    checkBtn: "\u091A\u0948\u0928\u0932 \u091C\u093E\u0901\u091A\u0947\u0902",
    showAll: "\u0938\u092D\u0940 \u0926\u093F\u0916\u093E\u090F\u0902",
    scrollTop: "\u0936\u0940\u0930\u094D\u0937",
    defaultBadge: "\u0921\u093F\u092B\u093C\u0949\u0932\u094D\u091F",
    renameTip: "\u0928\u093E\u092E \u092C\u0926\u0932\u0947\u0902",
    deleteTip: "\u092F\u0939 \u0938\u094D\u0930\u094B\u0924 \u0939\u091F\u093E\u090F\u0902",
    renamed: "\u0928\u093E\u092E \u092C\u0926\u0932\u093E \u0917\u092F\u093E",
    pipNotSupported: "PiP \u0938\u092E\u0930\u094D\u0925\u093F\u0924 \u0928\u0939\u0940\u0902",
    reloading: "\u0930\u0940\u0932\u094B\u0921 \u0939\u094B \u0930\u0939\u093E \u0939\u0948...",
    channelN: "\u091A\u0948\u0928\u0932 ",
    networkError: "\u0928\u0947\u091F\u0935\u0930\u094D\u0915 \u0924\u094D\u0930\u0941\u091F\u093F \u2014 \u092A\u0941\u0928\u0903\u092A\u094D\u0930\u092F\u093E\u0938...",
    mediaError: "\u092E\u0940\u0921\u093F\u092F\u093E \u0924\u094D\u0930\u0941\u091F\u093F \u2014 \u092A\u0941\u0928\u0930\u094D\u092A\u094D\u0930\u093E\u092A\u094D\u0924\u093F...",
    playErrorRetry: "\u092A\u094D\u0932\u0947\u092C\u0948\u0915 \u0924\u094D\u0930\u0941\u091F\u093F \u2014 \u0938\u094D\u0935\u0924\u0903 \u092A\u0941\u0928\u0903\u092A\u094D\u0930\u092F\u093E\u0938",
    playErrorFinal: "\u092A\u094D\u0932\u0947\u092C\u0948\u0915 \u0924\u094D\u0930\u0941\u091F\u093F \u2014 \u0930\u0940\u0932\u094B\u0921 \u0926\u092C\u093E\u090F\u0902",
    reconnecting: "\u092A\u0941\u0928\u0903 \u0915\u0928\u0947\u0915\u094D\u091F \u0939\u094B \u0930\u0939\u093E \u0939\u0948...",
    loading: "\u0932\u094B\u0921 \u0939\u094B \u0930\u0939\u093E \u0939\u0948...",
    checking: "\u091C\u093E\u0901\u091A \u0930\u0939\u093E \u0939\u0948",
    selectSource: "\u0936\u0941\u0930\u0942 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0928\u0940\u091A\u0947 \u0938\u094D\u0930\u094B\u0924 \u091A\u0941\u0928\u0947\u0902",
    invalidUrl: "\u0932\u093F\u0902\u0915 http:// \u092F\u093E https:// \u0938\u0947 \u0936\u0941\u0930\u0942 \u0939\u094B\u0928\u093E \u091A\u093E\u0939\u093F\u090F",
    addedSource: "\u0938\u094D\u0930\u094B\u0924 \u091C\u094B\u0921\u093C\u093E \u0917\u092F\u093E: ",
    noChannelInFile: "\u092B\u093C\u093E\u0907\u0932 \u092E\u0947\u0902 \u0915\u094B\u0908 \u091A\u0948\u0928\u0932 \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E",
    addedFile: "\u091C\u094B\u0921\u093C\u093E \u0917\u092F\u093E: ",
    channelUnit: " \u091A\u0948\u0928\u0932",
    loadingSources: "{n} \u0938\u094D\u0930\u094B\u0924 \u0932\u094B\u0921 \u0939\u094B \u0930\u0939\u0947 \u0939\u0948\u0902...",
    cantLoadSource: "\u0938\u094D\u0930\u094B\u0924 \u0932\u094B\u0921 \u0928\u0939\u0940\u0902 \u0939\u094B \u0938\u0915\u0947",
    noChannelFound: "\u0915\u094B\u0908 \u091A\u0948\u0928\u0932 \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E",
    sourceError: "{e} \u0938\u094D\u0930\u094B\u0924 \u0924\u094D\u0930\u0941\u091F\u093F, {n} \u091A\u0948\u0928\u0932 \u0932\u094B\u0921 \u0939\u0941\u090F",
    sourceOk: "{s} \u0938\u094D\u0930\u094B\u0924 \u0938\u0947 {n} \u091A\u0948\u0928\u0932",
    checkTitle: "\u0915\u093E\u092E \u0915\u0930 \u0930\u0939\u0947 \u091A\u0948\u0928\u0932 \u091C\u093E\u0901\u091A\u0947\u0902",
    showAllTitle: "\u0938\u092D\u0940 \u091B\u093F\u092A\u0947 \u091A\u0948\u0928\u0932 \u0926\u093F\u0916\u093E\u090F\u0902",
    fileTitle: "\u0921\u093F\u0935\u093E\u0907\u0938 \u0938\u0947 M3U \u092B\u093C\u093E\u0907\u0932 \u091A\u0941\u0928\u0947\u0902",
    cinemaMode: "\u0938\u093F\u0928\u0947\u092E\u093E",
    pinChannel: "\u092A\u093F\u0928 \u0915\u0930\u0947\u0902",
    pinChannelTip: "\u091A\u0948\u0928\u0932 \u092A\u093F\u0928 \u0915\u0930\u0947\u0902 (\u0936\u0941\u0930\u0942 \u092E\u0947\u0902 \u0911\u091F\u094B-\u092A\u094D\u0932\u0947)",
    favChannel: "\u092A\u0938\u0902\u0926\u0940\u0926\u093E",
    hideChannel: "\u091B\u093F\u092A\u093E\u090F\u0902",
    pinnedToast: "\u091A\u0948\u0928\u0932 \u092A\u093F\u0928 \u0915\u093F\u092F\u093E \u0917\u092F\u093E",
    unpinnedToast: "\u091A\u0948\u0928\u0932 \u0905\u0928\u092A\u093F\u0928 \u0915\u093F\u092F\u093E \u0917\u092F\u093E",
    shortcutsTitle: "\u0936\u0949\u0930\u094D\u091F\u0915\u091F",
    playPause: "\u091A\u0932\u093E\u090F\u0902 / \u0930\u094B\u0915\u0947\u0902",
    prevChannel: "\u092A\u093F\u091B\u0932\u093E \u091A\u0948\u0928\u0932",
    nextChannel: "\u0905\u0917\u0932\u093E \u091A\u0948\u0928\u0932",
    fullscreen: "\u092A\u0942\u0930\u094D\u0923 \u0938\u094D\u0915\u094D\u0930\u0940\u0928"
  },
  th: {
    flag: "\uD83C\uDDF9\uD83C\uDDED", label: "\u0E44\u0E17\u0E22",
    noChannel: "\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E0A\u0E48\u0E2D\u0E07",
    sound: "\u0E40\u0E2A\u0E35\u0E22\u0E07",
    pip: "\u0E22\u0E48\u0E2D",
    newTab: "\u0E41\u0E17\u0E47\u0E1A\u0E43\u0E2B\u0E21\u0E48",
    reload: "\u0E42\u0E2B\u0E25\u0E14\u0E43\u0E2B\u0E21\u0E48",
    favHeader: "\u2B50 \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E42\u0E1B\u0E23\u0E14",
    favEmpty: "\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E0A\u0E48\u0E2D\u0E07\u0E42\u0E1B\u0E23\u0E14",
    sourceToggle: "\uD83D\uDD17 \u0E41\u0E2B\u0E25\u0E48\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32",
    addPlaceholder: "\u0E27\u0E32\u0E07\u0E25\u0E34\u0E07\u0E01\u0E4C M3U \u0E17\u0E35\u0E48\u0E19\u0E35\u0E48...",
    addBtn: "+ \u0E40\u0E1E\u0E34\u0E48\u0E21",
    fileBtn: "\uD83D\uDCC1 \u0E44\u0E1F\u0E25\u0E4C",
    searchPlaceholder: "\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E0A\u0E48\u0E2D\u0E07...",
    checkBtn: "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E0A\u0E48\u0E2D\u0E07",
    showAll: "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
    scrollTop: "\u0E02\u0E36\u0E49\u0E19\u0E1A\u0E19",
    defaultBadge: "\u0E04\u0E48\u0E32\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19",
    renameTip: "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E0A\u0E37\u0E48\u0E2D",
    deleteTip: "\u0E25\u0E1A\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E19\u0E35\u0E49",
    renamed: "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E0A\u0E37\u0E48\u0E2D\u0E41\u0E25\u0E49\u0E27",
    pipNotSupported: "PiP \u0E44\u0E21\u0E48\u0E23\u0E2D\u0E07\u0E23\u0E31\u0E1A",
    reloading: "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E42\u0E2B\u0E25\u0E14\u0E43\u0E2B\u0E21\u0E48...",
    channelN: "\u0E0A\u0E48\u0E2D\u0E07 ",
    networkError: "\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22 \u2014 \u0E01\u0E33\u0E25\u0E31\u0E07\u0E25\u0E2D\u0E07\u0E43\u0E2B\u0E21\u0E48...",
    mediaError: "\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E21\u0E35\u0E40\u0E14\u0E35\u0E22 \u2014 \u0E01\u0E33\u0E25\u0E31\u0E07\u0E01\u0E39\u0E49\u0E04\u0E37\u0E19...",
    playErrorRetry: "\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E19 \u2014 \u0E25\u0E2D\u0E07\u0E43\u0E2B\u0E21\u0E48\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34",
    playErrorFinal: "\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E19 \u2014 \u0E01\u0E14\u0E42\u0E2B\u0E25\u0E14\u0E43\u0E2B\u0E21\u0E48",
    reconnecting: "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E43\u0E2B\u0E21\u0E48...",
    loading: "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E42\u0E2B\u0E25\u0E14...",
    checking: "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A",
    selectSource: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07",
    invalidUrl: "\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E14\u0E49\u0E27\u0E22 http:// \u0E2B\u0E23\u0E37\u0E2D https://",
    addedSource: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E41\u0E25\u0E49\u0E27: ",
    noChannelInFile: "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E0A\u0E48\u0E2D\u0E07\u0E43\u0E19\u0E44\u0E1F\u0E25\u0E4C",
    addedFile: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E25\u0E49\u0E27: ",
    channelUnit: " \u0E0A\u0E48\u0E2D\u0E07",
    loadingSources: "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E42\u0E2B\u0E25\u0E14 {n} \u0E41\u0E2B\u0E25\u0E48\u0E07...",
    cantLoadSource: "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E42\u0E2B\u0E25\u0E14\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E44\u0E14\u0E49",
    noChannelFound: "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E0A\u0E48\u0E2D\u0E07",
    sourceError: "{e} \u0E41\u0E2B\u0E25\u0E48\u0E07\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14, {n} \u0E0A\u0E48\u0E2D\u0E07\u0E42\u0E2B\u0E25\u0E14\u0E41\u0E25\u0E49\u0E27",
    sourceOk: "{n} \u0E0A\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01 {s} \u0E41\u0E2B\u0E25\u0E48\u0E07",
    checkTitle: "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49",
    showAllTitle: "\u0E41\u0E2A\u0E14\u0E07\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E0B\u0E48\u0E2D\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
    fileTitle: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E1F\u0E25\u0E4C M3U \u0E08\u0E32\u0E01\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C",
    cinemaMode: "\u0E42\u0E23\u0E07\u0E2B\u0E19\u0E31\u0E07",
    pinChannel: "\u0E1B\u0E31\u0E01\u0E2B\u0E21\u0E38\u0E14",
    pinChannelTip: "\u0E1B\u0E31\u0E01\u0E2B\u0E21\u0E38\u0E14\u0E0A\u0E48\u0E2D\u0E07 (\u0E40\u0E25\u0E48\u0E19\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E23\u0E34\u0E48\u0E21)",
    favChannel: "\u0E0A\u0E37\u0E48\u0E19\u0E0A\u0E2D\u0E1A",
    hideChannel: "\u0E0B\u0E48\u0E2D\u0E19",
    pinnedToast: "\u0E1B\u0E31\u0E01\u0E2B\u0E21\u0E38\u0E14\u0E0A\u0E48\u0E2D\u0E07\u0E41\u0E25\u0E49\u0E27",
    unpinnedToast: "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E1B\u0E31\u0E01\u0E2B\u0E21\u0E38\u0E14\u0E41\u0E25\u0E49\u0E27",
    shortcutsTitle: "\u0E17\u0E32\u0E07\u0E25\u0E31\u0E14",
    playPause: "\u0E40\u0E25\u0E48\u0E19 / \u0E2B\u0E22\u0E38\u0E14",
    prevChannel: "\u0E0A\u0E48\u0E2D\u0E07\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32",
    nextChannel: "\u0E0A\u0E48\u0E2D\u0E07\u0E16\u0E31\u0E14\u0E44\u0E1B",
    fullscreen: "\u0E40\u0E15\u0E47\u0E21\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D"
  },
  id: {
    flag: "\uD83C\uDDEE\uD83C\uDDE9", label: "Bahasa Indonesia",
    noChannel: "Belum memilih saluran",
    sound: "Suara",
    pip: "Mini",
    newTab: "Tab baru",
    reload: "Muat ulang",
    favHeader: "\u2B50 Favorit",
    favEmpty: "Belum ada saluran favorit",
    sourceToggle: "\uD83D\uDD17 Sumber",
    addPlaceholder: "Tempel tautan M3U di sini...",
    addBtn: "+ Tambah",
    fileBtn: "\uD83D\uDCC1 File",
    searchPlaceholder: "Cari saluran...",
    checkBtn: "Periksa saluran",
    showAll: "Tampilkan semua",
    scrollTop: "Atas",
    defaultBadge: "bawaan",
    renameTip: "Ganti nama",
    deleteTip: "Hapus sumber ini",
    renamed: "Sudah diganti nama",
    pipNotSupported: "PiP tidak didukung",
    reloading: "Memuat ulang...",
    channelN: "Saluran ",
    networkError: "Kesalahan jaringan \u2014 mencoba lagi...",
    mediaError: "Kesalahan media \u2014 memulihkan...",
    playErrorRetry: "Kesalahan putar \u2014 coba ulang otomatis",
    playErrorFinal: "Kesalahan putar \u2014 tekan Muat ulang",
    reconnecting: "Menghubungkan kembali...",
    loading: "Memuat...",
    checking: "Memeriksa",
    selectSource: "Pilih sumber di bawah untuk memulai",
    invalidUrl: "Tautan harus dimulai dengan http:// atau https://",
    addedSource: "Sumber ditambahkan: ",
    noChannelInFile: "Tidak ada saluran ditemukan dalam file",
    addedFile: "Ditambahkan: ",
    channelUnit: " saluran",
    loadingSources: "Memuat {n} sumber...",
    cantLoadSource: "Tidak dapat memuat sumber",
    noChannelFound: "Tidak ada saluran ditemukan",
    sourceError: "{e} sumber error, {n} saluran dimuat",
    sourceOk: "{n} saluran dari {s} sumber",
    checkTitle: "Periksa saluran mana yang berfungsi",
    showAllTitle: "Tampilkan semua saluran tersembunyi",
    fileTitle: "Pilih file M3U dari perangkat",
    cinemaMode: "Bioskop",
    pinChannel: "Sematkan",
    pinChannelTip: "Sematkan saluran (putar otomatis saat mulai)",
    favChannel: "Favorit",
    hideChannel: "Sembunyikan",
    pinnedToast: "Saluran disematkan",
    unpinnedToast: "Saluran tidak disematkan",
    shortcutsTitle: "Pintasan",
    playPause: "Putar / Jeda",
    prevChannel: "Saluran sebelumnya",
    nextChannel: "Saluran berikutnya",
    fullscreen: "Layar penuh"
  },
  it: {
    flag: "\uD83C\uDDEE\uD83C\uDDF9", label: "Italiano",
    noChannel: "Nessun canale selezionato",
    sound: "Audio",
    pip: "Mini",
    newTab: "Nuova scheda",
    reload: "Ricarica",
    favHeader: "\u2B50 Preferiti",
    favEmpty: "Nessun canale preferito",
    sourceToggle: "\uD83D\uDD17 Fonti",
    addPlaceholder: "Incolla link M3U qui...",
    addBtn: "+ Aggiungi",
    fileBtn: "\uD83D\uDCC1 File",
    searchPlaceholder: "Cerca canali...",
    checkBtn: "Controlla canali",
    showAll: "Mostra tutto",
    scrollTop: "Su",
    defaultBadge: "predefinito",
    renameTip: "Rinomina",
    deleteTip: "Elimina questa fonte",
    renamed: "Rinominato",
    pipNotSupported: "PiP non supportato",
    reloading: "Ricaricamento...",
    channelN: "Canale ",
    networkError: "Errore di rete \u2014 nuovo tentativo...",
    mediaError: "Errore media \u2014 ripristino...",
    playErrorRetry: "Errore riproduzione \u2014 tentativo automatico",
    playErrorFinal: "Errore riproduzione \u2014 premi Ricarica",
    reconnecting: "Riconnessione...",
    loading: "Caricamento...",
    checking: "Controllo",
    selectSource: "Seleziona una fonte qui sotto",
    invalidUrl: "Il link deve iniziare con http:// o https://",
    addedSource: "Fonte aggiunta: ",
    noChannelInFile: "Nessun canale trovato nel file",
    addedFile: "Aggiunto: ",
    channelUnit: " canali",
    loadingSources: "Caricamento di {n} fonti...",
    cantLoadSource: "Impossibile caricare le fonti",
    noChannelFound: "Nessun canale trovato",
    sourceError: "{e} fonti con errore, {n} canali caricati",
    sourceOk: "{n} canali da {s} fonti",
    checkTitle: "Verifica quali canali funzionano",
    showAllTitle: "Mostra tutti i canali nascosti",
    fileTitle: "Scegli file M3U dal dispositivo",
    cinemaMode: "Cinema",
    pinChannel: "Fissa",
    pinChannelTip: "Fissa canale (riproduzione automatica all'avvio)",
    favChannel: "Preferito",
    hideChannel: "Nascondi",
    pinnedToast: "Canale fissato",
    unpinnedToast: "Canale rimosso",
    shortcutsTitle: "Scorciatoie",
    playPause: "Riproduci / Pausa",
    prevChannel: "Canale precedente",
    nextChannel: "Canale successivo",
    fullscreen: "Schermo intero"
  },
  tr: {
    flag: "\uD83C\uDDF9\uD83C\uDDF7", label: "T\u00FCrk\u00E7e",
    noChannel: "Kanal se\u00E7ilmedi",
    sound: "Ses",
    pip: "Mini",
    newTab: "Yeni sekme",
    reload: "Yenile",
    favHeader: "\u2B50 Favoriler",
    favEmpty: "Hen\u00FCz favori kanal yok",
    sourceToggle: "\uD83D\uDD17 Kaynaklar",
    addPlaceholder: "M3U ba\u011Flant\u0131s\u0131n\u0131 buraya yap\u0131\u015Ft\u0131r\u0131n...",
    addBtn: "+ Ekle",
    fileBtn: "\uD83D\uDCC1 Dosya",
    searchPlaceholder: "Kanal ara...",
    checkBtn: "Kanallar\u0131 kontrol et",
    showAll: "T\u00FCm\u00FCn\u00FC g\u00F6ster",
    scrollTop: "Yukar\u0131",
    defaultBadge: "varsay\u0131lan",
    renameTip: "Yeniden adland\u0131r",
    deleteTip: "Bu kayna\u011F\u0131 sil",
    renamed: "Yeniden adland\u0131r\u0131ld\u0131",
    pipNotSupported: "PiP desteklenmiyor",
    reloading: "Yenileniyor...",
    channelN: "Kanal ",
    networkError: "A\u011F hatas\u0131 \u2014 yeniden deneniyor...",
    mediaError: "Medya hatas\u0131 \u2014 kurtarma...",
    playErrorRetry: "Oynatma hatas\u0131 \u2014 otomatik yeniden deneme",
    playErrorFinal: "Oynatma hatas\u0131 \u2014 Yenile'ye bas\u0131n",
    reconnecting: "Yeniden ba\u011Flan\u0131yor...",
    loading: "Y\u00FCkleniyor...",
    checking: "Kontrol",
    selectSource: "Ba\u015Flamak i\u00E7in a\u015Fa\u011F\u0131dan bir kaynak se\u00E7in",
    invalidUrl: "Ba\u011Flant\u0131 http:// veya https:// ile ba\u015Flamal\u0131d\u0131r",
    addedSource: "Kaynak eklendi: ",
    noChannelInFile: "Dosyada kanal bulunamad\u0131",
    addedFile: "Eklendi: ",
    channelUnit: " kanal",
    loadingSources: "{n} kaynak y\u00FCkleniyor...",
    cantLoadSource: "Kaynaklar y\u00FCklenemedi",
    noChannelFound: "Kanal bulunamad\u0131",
    sourceError: "{e} kaynak hatas\u0131, {n} kanal y\u00FCklendi",
    sourceOk: "{s} kaynaktan {n} kanal",
    checkTitle: "Hangi kanallar\u0131n \u00E7al\u0131\u015Ft\u0131\u011F\u0131n\u0131 kontrol et",
    showAllTitle: "T\u00FCm gizli kanallar\u0131 g\u00F6ster",
    fileTitle: "Cihazdan M3U dosyas\u0131 se\u00E7",
    cinemaMode: "Sinema",
    pinChannel: "Sabitle",
    pinChannelTip: "Kanal\u0131 sabitle (ba\u015Flang\u0131\u00E7ta otomatik oynat)",
    favChannel: "Favori",
    hideChannel: "Gizle",
    pinnedToast: "Kanal sabitlendi",
    unpinnedToast: "Kanal sabitlemesi kald\u0131r\u0131ld\u0131",
    shortcutsTitle: "K\u0131sayollar",
    playPause: "Oynat / Duraklat",
    prevChannel: "\u00D6nceki kanal",
    nextChannel: "Sonraki kanal",
    fullscreen: "Tam ekran"
  }
};

let currentLang = localStorage.getItem("lang") || "en";
function t(key){ return (LANGS[currentLang] || LANGS.vi)[key] || (LANGS.vi)[key] || key; }

const DEFAULT_SOURCES = [
  { name: "VietNam IPTV (Default)", url: "https://raw.githubusercontent.com/giangnam0201/All-In-One-IPTV/refs/heads/main/channels.m3u", default: true }
];

/* ===== DOM ===== */
const video      = document.getElementById("player");
const nowName    = document.getElementById("nowPlayingName");
const nowBar     = document.getElementById("nowPlaying");
const btnUnmute  = document.getElementById("btnUnmute");
const btnPiP     = document.getElementById("btnPiP");
const btnFull    = document.getElementById("btnFullscreen");
const btnPlayerFs = document.getElementById("btnPlayerFullscreen");
const btnRetry   = document.getElementById("btnRetry");
const volumeSlider = document.getElementById("volumeSlider");
const toast      = document.getElementById("statusToast");
const searchIn   = document.getElementById("searchInput");
const btnCheck   = document.getElementById("btnCheck");
const btnReset   = document.getElementById("btnReset");
const grid       = document.getElementById("channelGrid");
const emptyState = document.getElementById("emptyState");
const sourceToggle = document.getElementById("sourceToggle");
const sourceBody   = document.getElementById("sourceBody");
const sourceListEl = document.getElementById("sourceList");
const addSourceInput = document.getElementById("addSourceInput");
const addSourceBtn   = document.getElementById("addSourceBtn");
const pinBtn         = document.getElementById("pinBtn");
const favBtn         = document.getElementById("favBtn");
const hideBtn        = document.getElementById("hideBtn");

/* ===== STATE ===== */
let allChannels  = [];
let favorites    = JSON.parse(localStorage.getItem("fav") || "[]");
let sources      = JSON.parse(localStorage.getItem("sources") || "[]");
let activeSources = new Set(JSON.parse(localStorage.getItem("activeSources") || "[0]"));
let currentIdx   = -1;
let currentUrl   = "";
const hidden     = new Set(JSON.parse(localStorage.getItem("hiddenChannels") || "[]"));
let pinnedUrl    = localStorage.getItem("pinnedChannel") || "";
const MAX_RETRIES = 5;
let retryCount   = 0;
let retryTimer   = null;
let stallTimer   = null;
const STALL_TIMEOUT = 15000;
let hls = null; // hls.js instance
let hlsLevels = []; // available quality levels
let currentCategory = "tv"; // 'tv', 'radio' or 'fav'

/* ===== EPG (Electronic Program Guide) ===== */
let epgData = {}; // { channelId: [ {start, stop, title} ] }  — lazily populated per channel
let epgChannelMap = {}; // { normalizedName: channelId } - display-name → id map
let _epgUrlsConfigured = []; // Configured EPG URLs for lazy fetch via proxy
let _epgLoadedIds = new Set(); // EPG channel IDs whose programmes are already parsed
const nowProgram = document.getElementById("nowProgram");

/* Normalize a channel name for fuzzy matching */
function normalizeChName(s){
  if(!s) return "";
  return s
    .toLowerCase()
    .replace(/\s*\(\d+p\)\s*/g, "")        // remove (720p), (1080p) etc.
    .replace(/\s*\[.*?\]\s*/g, "")          // remove [Geo-blocked] etc.
    .replace(/\s*(f?hd|uhd|sd|4k|h\.?265|hevc|plus)\s*$/i, "") // trailing quality tags
    .replace(/[^a-z0-9\u00C0-\u024F\u1E00-\u1EFF\u0400-\u04FF\u0600-\u06FF\u0E00-\u0E7F\u0900-\u097F\u3040-\u30FF\u4E00-\u9FFF\uAC00-\uD7AF]+/g, "") // keep alnum + Latin + Cyrillic + Arabic + Thai + Devanagari + CJK + Hangul
    .trim();
}

/* Yield to main thread so UI stays responsive */
function _yieldToMain(){ return new Promise(r => setTimeout(r, 0)); }

async function _extractProgrammesForId(epgChId){
  if(_epgLoadedIds.has(epgChId)) return; // already loaded
  _epgLoadedIds.add(epgChId);
  const pruneCutoff = Date.now() - 2 * 60 * 60 * 1000;
  
  try {
    const resp = await fetch("/api/epg/programmes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ urls: _epgUrlsConfigured, id: epgChId })
    });
    if(!resp.ok) return;
    const data = await resp.json();
    
    let count = 0;
    if(!epgData[epgChId]) epgData[epgChId] = [];
    
    for(const p of data.programmes){
      if(p.stop && p.stop < pruneCutoff) continue;
      epgData[epgChId].push({ start: new Date(p.start), stop: new Date(p.stop), title: p.title });
      count++;
    }
    
    if(count > 0){
      epgData[epgChId].sort((a,b) => a.start - b.start);
      console.log("[EPG] Lazy-loaded " + count + " programmes for " + epgChId);
      if(currentIdx >= 0 && allChannels[currentIdx]){
         const chIdCheck = findEpgChannelId(allChannels[currentIdx].tvgId, allChannels[currentIdx].name);
         if(chIdCheck === epgChId) updateEpgDisplay();
      }
      if(typeof renderEpgPanel === "function" && document.getElementById("epgPanel")?.classList.contains("open")) {
        renderEpgPanel();
      }
    }
  } catch(err){
    console.warn("[EPG] Fetch programmes error:", err);
  }
}

/* Ensure EPG data is available for a given channel (lazy load from stored DOMs) */
function ensureEpgForChannel(tvgId, channelName){
  if(_epgUrlsConfigured.length === 0) return; // no EPG sources loaded
  const chId = _findEpgChannelIdUncached(tvgId, channelName);
  if(!chId) return;
  if(!_epgLoadedIds.has(chId)) _extractProgrammesForId(chId);
}

async function loadEpgData(urls, merge){
  if(!merge){ epgData = {}; epgChannelMap = {}; _epgUrlsConfigured = []; _epgLoadedIds.clear(); }
  
  // Update configured URLs list
  for(const u of urls) {
      if(!_epgUrlsConfigured.includes(u)) _epgUrlsConfigured.push(u);
  }

  // Invalidate lookup cache whenever EPG data changes
  _epgIdCache = Object.create(null);

  let totalMapChannels = 0;
  let loadedCount = 0;
  for(const url of urls){
    try {
      console.log("[EPG] Fetching channel map via proxy:", url);
      const resp = await fetch("/api/epg/channels?url=" + encodeURIComponent(url));
      if(!resp.ok){ console.warn("[EPG] HTTP proxy failed", url); continue; }

      const data = await resp.json();

      Object.assign(epgChannelMap, data.channelMap);

      totalMapChannels += data.channelCount || Object.keys(data.channelMap).length;
      loadedCount++;
      console.log("[EPG] Indexed", data.channelCount || Object.keys(data.channelMap).length, "channels from proxy (programmes loaded on demand)");
    } catch(e){
      console.warn("[EPG] Proxy load error:", url, e);
    }
  }
  // Invalidate cache after merge
  _epgIdCache = Object.create(null);

  // Eagerly load EPG only for the currently playing channel
  if(currentIdx >= 0 && currentIdx < allChannels.length){
    const ch = allChannels[currentIdx];
    ensureEpgForChannel(ch.tvgId, ch.name);
  }

  // update display if currently playing
  updateEpgDisplay();
  // Invalidate known IDs cache
  _knownEpgIds = null;
  if(totalMapChannels > 0){
    showToast("EPG: " + totalMapChannels + " channels indexed via proxy", 3000);
  }
}

/* ===== EPG LOOKUP CACHE ===== */
// Caches findEpgChannelId results so the expensive O(n) fuzzy loops only run once per channel.
// Invalidated whenever epgData / epgChannelMap changes (see loadEpgData).
let _epgIdCache = Object.create(null);

/* Find the EPG channel id that best matches a given tvgId / channel name */
function findEpgChannelId(tvgId, channelName){
  // Build a stable cache key from the two inputs
  const cacheKey = (tvgId || "") + "\0" + (channelName || "");
  if(cacheKey in _epgIdCache) return _epgIdCache[cacheKey];

  const result = _findEpgChannelIdUncached(tvgId, channelName);
  _epgIdCache[cacheKey] = result;
  return result;
}

// Cached set of known EPG channel IDs — rebuilt when epgChannelMap changes
let _knownEpgIds = null;
let _knownEpgIdsMapSize = 0;
function _getKnownEpgIds(){
  const mapSize = Object.keys(epgChannelMap).length;
  if(!_knownEpgIds || _knownEpgIdsMapSize !== mapSize){
    _knownEpgIds = new Set(Object.values(epgChannelMap));
    _knownEpgIdsMapSize = mapSize;
  }
  return _knownEpgIds;
}

function _findEpgChannelIdUncached(tvgId, channelName){
  // With lazy EPG loading, we resolve channel IDs using epgChannelMap only
  // (programmes are NOT pre-loaded into epgData, they're extracted on demand)

  const _knownIds = _getKnownEpgIds();

  // 1. Direct tvg-id match
  if(tvgId && _knownIds.has(tvgId)) return tvgId;

  // 2. Try tvg-id without @SD/@HD suffix & case-insensitive
  if(tvgId){
    const tvgLower = tvgId.toLowerCase();
    const idBase = tvgId.replace(/@(SD|HD|FHD|Plus\d*|\d+)$/i, "");
    const idBaseLower = idBase.toLowerCase();
    // tvg-id in channelMap
    if(epgChannelMap[tvgLower]) return epgChannelMap[tvgLower];
    if(epgChannelMap[idBaseLower]) return epgChannelMap[idBaseLower];
  }

  // 3. Map through epgChannelMap using channel name
  if(channelName){
    const norm = normalizeChName(channelName);
    const nameLower = channelName.toLowerCase().trim();

    // exact display-name match
    if(epgChannelMap[nameLower]) return epgChannelMap[nameLower];
    // normalized match
    if(norm && epgChannelMap[norm]) return epgChannelMap[norm];

    // 3b. Substring / contains matching (e.g. M3U has "VTV3 HD" and EPG has "VTV3")
    for(const mapKey in epgChannelMap){
      const shorter = nameLower.length <= mapKey.length ? nameLower : mapKey;
      const longer  = nameLower.length >  mapKey.length ? nameLower : mapKey;
      if(shorter.length < 3 || shorter.length / longer.length < 0.4) continue;
      if(longer.includes(shorter)) return epgChannelMap[mapKey];
    }
    if(norm){
      for(const mapKey in epgChannelMap){
        const mapNorm = normalizeChName(mapKey);
        if(!mapNorm) continue;
        const shorter = norm.length <= mapNorm.length ? norm : mapNorm;
        const longer  = norm.length >  mapNorm.length ? norm : mapNorm;
        if(shorter.length < 3 || shorter.length / longer.length < 0.4) continue;
        if(longer.includes(shorter)) return epgChannelMap[mapKey];
      }
    }
  }

  // 4. Try tvg-id as channel name in the map
  if(tvgId){
    const tvgNorm = normalizeChName(tvgId);
    if(tvgNorm && epgChannelMap[tvgNorm]) return epgChannelMap[tvgNorm];
    const tvgLower = tvgId.toLowerCase();
    for(const mapKey in epgChannelMap){
      const shorter = tvgLower.length <= mapKey.length ? tvgLower : mapKey;
      const longer  = tvgLower.length >  mapKey.length ? tvgLower : mapKey;
      if(shorter.length < 3 || shorter.length / longer.length < 0.4) continue;
      if(longer.includes(shorter)) return epgChannelMap[mapKey];
    }
  }

  return null;
}

function getCurrentProgram(tvgId, channelName){
  const chId = findEpgChannelId(tvgId, channelName);
  if(!chId) return null;
  // Lazy load programmes for this channel if not yet parsed
  if(!_epgLoadedIds.has(chId)) _extractProgrammesForId(chId);
  if(!epgData[chId]) return null;
  const now = Date.now();
  const progs = epgData[chId];
  // Programs are sorted by start. Binary-search-like scan from the end
  // for the last program whose start <= now.
  for(let i = progs.length - 1; i >= 0; i--){
    const p = progs[i];
    if(p.start.getTime() <= now){
      if(p.stop && p.stop.getTime() > now) return p;
      if(!p.stop) return p;
      // This program already ended and all earlier ones started even earlier,
      // so none can be "now". Short-circuit.
      return null;
    }
  }
  return null;
}

function updateEpgDisplay(){
  if(!nowProgram) return;
  if(currentIdx < 0 || currentIdx >= allChannels.length){
    nowProgram.style.display = "none";
    return;
  }
  const ch = allChannels[currentIdx];
  const prog = getCurrentProgram(ch.tvgId, ch.name);
  if(prog){
    const timeStr = formatTime(prog.start) + (prog.stop ? " - " + formatTime(prog.stop) : "");
    nowProgram.textContent = "\u25B6 " + timeStr + "  " + prog.title;
    nowProgram.style.display = "block";
  } else {
    nowProgram.style.display = "none";
  }
}

function formatTime(d){
  return d.getHours().toString().padStart(2,"0") + ":" + d.getMinutes().toString().padStart(2,"0");
}

// Refresh EPG display every 60s so it updates when programs change
let epgIntervalId = null;

/* ===== TOAST ===== */
let toastTimer = null;
function showToast(msg, ms){
  if(!toast) return;
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.classList.add("show");
  if(ms) toastTimer = setTimeout(()=> toast.classList.remove("show"), ms);
}
function hideToast(){ if(toast){ toast.classList.remove("show"); clearTimeout(toastTimer); } }

/* ===== MUTE / UNMUTE ===== */
function updateMuteIcon(){
  if(!btnUnmute) return;
  const v = video.volume;
  const m = video.muted;
  let svg;
  if(m || v === 0) svg = '<svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>';
  else if(v < 0.5) svg = '<svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
  else svg = '<svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
  btnUnmute.querySelector("#muteIcon").innerHTML = svg;
  btnUnmute.classList.toggle("active", !m && v > 0);
}
if(btnUnmute) btnUnmute.addEventListener("click", () => {
  video.muted = !video.muted;
  if(!video.muted && video.volume === 0) video.volume = 0.5;
  updateMuteIcon();
});

/* ===== VOLUME SLIDER ===== */
if(volumeSlider){
  volumeSlider.value = Math.round(video.volume * 100);
  volumeSlider.addEventListener("input", () => {
    const val = parseInt(volumeSlider.value, 10) / 100;
    video.volume = val;
    video.muted = val === 0;
    updateMuteIcon();
  });
}

/* ===== PIP (directly on panel video) ===== */
if(btnPiP) btnPiP.addEventListener("click", async () => {
  try {
    if(document.pictureInPictureElement){
      await document.exitPictureInPicture();
      return;
    }
    await video.requestPictureInPicture();
  } catch(e){ console.warn("PiP error:", e); showToast(t("pipNotSupported"), 2000); }
});

if(video){
  video.addEventListener("leavepictureinpicture", () => { if(btnPiP) btnPiP.classList.remove("active"); });
  video.addEventListener("enterpictureinpicture", () => { if(btnPiP) btnPiP.classList.add("active"); });
  // keep mute button & volume slider in sync with native controls
  video.addEventListener("volumechange", () => {
    updateMuteIcon();
    if(volumeSlider) volumeSlider.value = Math.round(video.muted ? 0 : video.volume * 100);
  });
}

/* ===== FULLSCREEN (open stream in new tab) ===== */
if(btnFull) btnFull.addEventListener("click", () => {
  if(currentIdx < 0 || !currentUrl) return;
  window.open(currentUrl, "_blank");
});

/* ===== PLAYER FULLSCREEN ===== */
if(btnPlayerFs) btnPlayerFs.addEventListener("click", () => {
  const ps = document.getElementById("playerSection");
  if(document.fullscreenElement){
    document.exitFullscreen();
  } else if(ps){
    ps.requestFullscreen();
  }
});
document.addEventListener("fullscreenchange", () => {
  if(btnPlayerFs) {
    btnPlayerFs.classList.toggle("active", !!document.fullscreenElement);
    btnPlayerFs.innerHTML = document.fullscreenElement
      ? '<svg viewBox="0 0 24 24"><path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/></svg>'
      : '<svg viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>';
  }
});

/* ===== RETRY ===== */
if(btnRetry) btnRetry.addEventListener("click", () => {
  if(currentIdx < 0) return;
  playByIndex(currentIdx);
  showToast(t("reloading"), 1500);
});

/* ===== PLAY PREVIEW ===== */
function isHlsUrl(url){ return /\.m3u8?(\?|$)/i.test(url); }

function destroyHls(){
  if(hls){ hls.destroy(); hls = null; }
  hlsLevels = [];
  buildQualityMenu();
}

let _wasAutoMuted = false;
function safePlay() {
  const p = video.play();
  if (p !== undefined) {
    p.catch(err => {
      // Browser blocked autoplay with sound
      if (err.name === 'NotAllowedError') {
        video.muted = true;
        _wasAutoMuted = true;
        if(btnUnmute) {
          btnUnmute.querySelector("#muteIcon").innerHTML = '<svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>';
          btnUnmute.classList.remove("active");
        }
        video.play().catch(()=>{});
      }
    });
  }
}

// Automatically unmute on first user interaction if the browser forced it muted
function autoUnmuteHandler() {
  if (_wasAutoMuted && video && video.muted) {
    video.muted = false;
    _wasAutoMuted = false;
    if(btnUnmute) {
      btnUnmute.querySelector("#muteIcon").innerHTML = '<svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
      btnUnmute.classList.add("active");
    }
  }
  // Remove listener after first interaction
  document.removeEventListener('click', autoUnmuteHandler);
  document.removeEventListener('keydown', autoUnmuteHandler);
}
document.addEventListener('click', autoUnmuteHandler);
document.addEventListener('keydown', autoUnmuteHandler);

function playByIndex(idx, opts){
  if(idx < 0 || idx >= allChannels.length) return;
  const prevIdx = currentIdx;
  currentIdx = idx;
  const ch = allChannels[idx];

  // highlight — only touch the old and new cards instead of scanning all .ch-card
  if(prevIdx >= 0){
    const prev = grid && grid.querySelector('.ch-card[data-idx="' + prevIdx + '"]');
    if(prev) prev.classList.remove("active");
  }
  const card = grid && grid.querySelector('.ch-card[data-idx="' + idx + '"]');
  if(card){
    card.classList.add("active");
  }

  // update now-playing
  if(nowName) nowName.textContent = ch.name || t("channelN") + (idx+1);
  if(nowBar) nowBar.classList.add("live");
  updateMiniButtons();

  // cleanup previous
  video.pause();
  destroyHls();
  clearTimeout(retryTimer);
  clearTimeout(stallTimer);
  retryCount = 0;
  currentUrl = ch.url;

  if(typeof Hls !== "undefined" && Hls.isSupported() && isHlsUrl(ch.url)){
    // ---- HLS.js path (most IPTV streams) ----
    let _hlsProxyRetried = false; // guard: only escalate to proxy once per channel

    function buildHlsInstance(sourceUrl, useProxy){
      if(hls){ hls.destroy(); hls = null; }

      hls = new Hls({
        maxBufferLength: 10,
        maxMaxBufferLength: 30,
        maxBufferSize: 15 * 1024 * 1024,
        maxBufferHole: 1.5,
        lowLatencyMode: false,
        enableWorker: true,
        startLevel: -1,
        abrEwmaDefaultEstimate: 5000000,
        liveSyncDurationCount: 2,
        liveBackBufferLength: 10,
        fragLoadingTimeOut: 20000,
        fragLoadingMaxRetry: 6,
        fragLoadingRetryDelay: 500,
        fragLoadingMaxRetryTimeout: 15000,
        manifestLoadingTimeOut: 15000,
        manifestLoadingMaxRetry: 4,
        manifestLoadingRetryDelay: 500,
        levelLoadingTimeOut: 15000,
        levelLoadingMaxRetry: 4,
        levelLoadingRetryDelay: 500,
        startFragPrefetch: true,
        xhrSetup: function(xhr, url){ xhr.withCredentials = false; },
        backBufferLength: 10,
        progressive: true,
        testBandwidth: true,
        nudgeMaxRetry: 5,
        maxFragLookUpTolerance: 0.5
      });

      let hlsMediaRecoveryAttempts = 0;

      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls.loadSource(sourceUrl);
      });

      hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
        hlsLevels = hls.levels || [];
        buildQualityMenu();
        safePlay();
        if(useProxy) console.log("[HLS] Playing via proxy:", sourceUrl);
      });

      hls.on(Hls.Events.FRAG_LOADED, () => {
        hlsMediaRecoveryAttempts = 0;
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if(!data.fatal) return;
        console.warn("HLS fatal error:", data.type, data.details);
        switch(data.type){
          case Hls.ErrorTypes.NETWORK_ERROR:
            if(data.details === "manifestLoadError" || data.details === "manifestLoadTimeOut" || data.details === "manifestParsingError"){
              // First failure on a direct URL → escalate to HLS proxy (handles CORS)
              if(!_hlsProxyRetried && !useProxy){
                _hlsProxyRetried = true;
                showToast("CORS \u2014 retrying via proxy\u2026", 0);
                console.warn("[HLS] Switching to HLS proxy for:", ch.url);
                const proxiedUrl = "/api/hls?url=" + encodeURIComponent(ch.url);
                buildHlsInstance(proxiedUrl, true);
                hls.attachMedia(video);
              } else {
                showToast(t("networkError"), 0);
                setTimeout(() => { if(hls) hls.loadSource(sourceUrl); }, 4000);
              }
            } else {
              hls.startLoad();
            }
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            showToast(t("mediaError"), 0);
            hlsMediaRecoveryAttempts++;
            if(hlsMediaRecoveryAttempts <= 2){
              hls.recoverMediaError();
            } else {
              hls.swapAudioCodec();
              hls.recoverMediaError();
              hlsMediaRecoveryAttempts = 0;
            }
            break;
          default:
            destroyHls();
            doRetry();
            break;
        }
      });
    }

    buildHlsInstance(ch.url, false);
    hls.attachMedia(video);
  } else {
    // ---- Native path (direct .ts / .mp4 / Safari HLS) ----
    video.src = ch.url;
    video.load();
    safePlay();
  }

  resetStallTimer();

  // Load EPG for this channel AFTER playback has started (non-blocking)
  setTimeout(() => {
    if(currentIdx !== idx) return; // user already switched away
    ensureEpgForChannel(ch.tvgId, ch.name);
    updateEpgDisplay();
    if(typeof renderEpgPanel === "function" && document.getElementById("epgPanel")?.classList.contains("open")) renderEpgPanel();
  }, 300);
}

function doRetry(){
  if(currentIdx < 0) return;
  retryCount++;
  if(retryCount <= MAX_RETRIES){
    const delay = Math.min(retryCount * 1500, 5000);
    showToast(t("playErrorRetry") + " (" + retryCount + "/" + MAX_RETRIES + ")...", 0);
    retryTimer = setTimeout(() => playByIndex(currentIdx), delay);
  } else {
    showToast(t("playErrorFinal"), 0);
  }
}

/* ===== STALL WATCHDOG ===== */
let _lastStallReset = 0;
function resetStallTimer(){
  clearTimeout(stallTimer);
  if(currentIdx < 0) return;
  stallTimer = setTimeout(() => {
    if(currentIdx < 0) return;
    // If using hls.js, try recovery first
    if(hls){
      showToast(t("reconnecting"), 0);
      hls.startLoad();
      resetStallTimer();
      return;
    }
    showToast(t("reconnecting"), 0);
    playByIndex(currentIdx);
  }, STALL_TIMEOUT);
}
/* Throttled version — only resets at most once every 5s from timeupdate */
function resetStallTimerThrottled(){
  const now = Date.now();
  if(now - _lastStallReset < 5000) return;
  _lastStallReset = now;
  resetStallTimer();
}

/* ===== VIDEO EVENTS ===== */
if(video){
  video.addEventListener("playing", () => {
    hideToast();
    if(nowBar) nowBar.classList.add("live");
    retryCount = 0;
    resetStallTimer();
  });
  video.addEventListener("timeupdate", resetStallTimerThrottled);
  video.addEventListener("waiting", () => { showToast(t("loading"), 0); });
  video.addEventListener("error", () => {
    if(nowBar) nowBar.classList.remove("live");
    clearTimeout(stallTimer);
    if(currentIdx < 0) return;
    // If hls.js is handling this stream, let it manage errors
    if(hls) return;
    doRetry();
  });
  video.addEventListener("stalled", () => { /* watchdog handles it */ });
  video.addEventListener("canplay", () => { hideToast(); retryCount = 0; clearTimeout(retryTimer); });
}

/* ===== TOGGLE FAVORITE ===== */
function toggleFav(ch){
  const i = favorites.findIndex(f => f.url === ch.url);
  if(i === -1) favorites.push(ch); else favorites.splice(i, 1);
  localStorage.setItem("fav", JSON.stringify(favorites));
  renderGrid();
  updateMiniButtons();
}

/* ===== RENDER CARD ===== */
function makeCard(ch, idx, container){
  const div = document.createElement("div");
  div.className = "ch-card";
  div.dataset.idx = idx;

  const img = document.createElement("img");
  const fallbackImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232d2d2d' stroke='%2360a5fa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='2' y='6' width='20' height='15' rx='3' ry='3'/%3E%3Cpolygon points='10 10 16 13.5 10 17 10 10' fill='%2360a5fa'/%3E%3Cpath d='M8 2 L12 6 L16 2'/%3E%3C/svg%3E";
  img.src = ch.logo || fallbackImg;
  img.onerror = function() { this.onerror = null; this.src = fallbackImg; };
  img.alt = ch.name;
  img.loading = "lazy";

  const name = document.createElement("div");
  name.className = "ch-name";
  name.textContent = ch.name;

  const star = document.createElement("div");
  const isFav = favorites.some(f => f.url === ch.url);
  star.className = "ch-star" + (isFav ? " on" : "");
  star.textContent = "\u2605";
  star.onclick = (e) => { e.stopPropagation(); toggleFav(ch); };

  div.onclick = () => playByIndex(idx);
  div.append(img, name, star);
  container.appendChild(div);
}

/* ===== RENDER GRID ===== */
function renderGrid(){
  if(!grid) return;
  const q = (searchIn ? searchIn.value : "").toLowerCase();
  const frag = document.createDocumentFragment();
  const isFavCat = currentCategory === "fav";
  const isRadioCat = currentCategory === "radio";
  let count = 0;
  let tvCount = 0;
  let radioCount = 0;
  let favCount = 0;
  allChannels.forEach((ch, i) => {
    if(hidden.has(ch.url)) return;
    const isFav = favorites.some(f => f.url === ch.url);
    if(isFav) favCount++;
    if(ch.isRadio) radioCount++; else tvCount++;
    if(isFavCat){
      if(!isFav) return;
    } else {
      if(!!ch.isRadio !== isRadioCat) return;
    }
    if(q && !ch.name.toLowerCase().includes(q)) return;
    makeCard(ch, i, frag);
    count++;
  });
  grid.innerHTML = "";
  grid.appendChild(frag);
  if(emptyState) emptyState.classList.toggle("show", count === 0 && allChannels.length > 0);
  if(currentIdx >= 0){
    const active = grid.querySelector('[data-idx="' + currentIdx + '"]');
    if(active) active.classList.add("active");
  }

  // Update badges
  const favBadge = document.querySelector('.cat-tab[data-cat="fav"] .badge');
  const tvBadge = document.querySelector('.cat-tab[data-cat="tv"] .badge');
  const radioBadge = document.querySelector('.cat-tab[data-cat="radio"] .badge');
  if(favBadge) favBadge.textContent = favCount;
  if(tvBadge) tvBadge.textContent = tvCount;
  if(radioBadge) radioBadge.textContent = radioCount;
}

/* ===== CHANNEL CHECK ===== */
const probeV = (() => {
  const v = document.createElement("video");
  v.style.cssText = "position:absolute;left:-9999px;width:1px;height:1px";
  v.muted = true; v.playsInline = true;
  document.body.appendChild(v);
  return v;
})();

function probeUrl(url, ms){
  ms = ms || 8000;
  return new Promise(resolve => {
    let done = false;
    const v = probeV;
    function end(ok){ if(done) return; done = true; cleanup(); resolve(ok); }
    function cleanup(){
      v.removeEventListener("canplay", onOk);
      v.removeEventListener("loadedmetadata", onOk);
      v.removeEventListener("error", onFail);
      try{ v.pause(); v.src = ""; v.load(); }catch(e){}
    }
    function onOk(){ end(true); }
    function onFail(){ end(false); }
    v.addEventListener("canplay", onOk);
    v.addEventListener("loadedmetadata", onOk);
    v.addEventListener("error", onFail);
    try{
      v.src = url;
      var p = v.play();
      if(p && p.catch) p.catch(function(){});
    }catch(e){ end(false); return; }
    setTimeout(function(){ end(false); }, ms);
  });
}

async function checkAll(){
  if(!btnCheck) return;
  btnCheck.disabled = true;
  hidden.clear();
  saveHidden();
  renderGrid();
  for(let i = 0; i < allChannels.length; i++){
    const ch = allChannels[i];
    if(!ch || !ch.url) continue;
    btnCheck.querySelector("span:last-child").textContent = t("checking") + " " + (i+1) + "/" + allChannels.length;
    const card = document.querySelector('[data-idx="' + i + '"]');
    if(card) card.classList.add("checking");
    const ok = await probeUrl(ch.url, 8000);
    if(!ok) hidden.add(ch.url);
    if(card) card.classList.remove("checking");
    // Update individual card visibility instead of full re-render
    if(!ok && card) card.style.display = "none";
    saveHidden();
  }
  renderGrid(); // single re-render at the end
  btnCheck.disabled = false;
  btnCheck.querySelector("span:last-child").textContent = t("checkBtn");
}

if(btnCheck) btnCheck.onclick = checkAll;
if(btnReset) btnReset.onclick = () => { hidden.clear(); saveHidden(); renderGrid(); };

/* ===== SEARCH & TABS ===== */
let searchTimer = null;
if(searchIn) searchIn.addEventListener("input", () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(renderGrid, 200);
});

const catTabs = document.querySelectorAll(".cat-tab");
if(catTabs.length > 0){
  catTabs.forEach(btn => {
    btn.addEventListener("click", () => {
      catTabs.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.cat;
      renderGrid();
    });
  });
}

/* ===== SOURCES ===== */
function getAllSources(){ return [...DEFAULT_SOURCES, ...sources]; }

function showEmptyState(){
  allChannels = [];
  currentIdx = -1;
  currentUrl = "";
  hidden.clear();
  saveHidden();
  video.pause();
  destroyHls();
  video.removeAttribute("src");
  video.load();
  clearTimeout(retryTimer);
  clearTimeout(stallTimer);
  if(grid) grid.innerHTML = "";
  if(nowName) nowName.textContent = t("noChannel");
  if(nowBar) nowBar.classList.remove("live");
  renderGrid();
  if(emptyState){
    emptyState.classList.add("show");
    emptyState.querySelector(".icon").textContent = "\uD83D\uDCFA";
    emptyState.querySelector("div:last-child").textContent = t("selectSource");
  }
}

function saveSources(){
  localStorage.setItem("sources", JSON.stringify(sources));
  localStorage.setItem("activeSources", JSON.stringify([...activeSources]));
}

function startRenameSource(i, div, nameEl){
  const srcIdx = i - DEFAULT_SOURCES.length; // index in custom sources array
  if(srcIdx < 0) return;
  // Already editing?
  if(div.querySelector(".src-name-input")) return;

  const oldName = sources[srcIdx].name || sources[srcIdx].url;
  nameEl.style.display = "none";

  const input = document.createElement("input");
  input.className = "src-name-input";
  input.value = oldName;
  input.maxLength = 60;
  div.insertBefore(input, nameEl.nextSibling);
  input.focus();
  input.select();

  function commit(){
    const newName = input.value.trim();
    if(newName && newName !== oldName){
      sources[srcIdx].name = newName;
      saveSources();
      showToast(t("renamed"), 1500);
    }
    renderSources();
  }
  function cancel(){
    nameEl.style.display = "";
    if(input.parentNode) input.remove();
  }

  input.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){ e.preventDefault(); commit(); }
    if(e.key === "Escape"){ e.preventDefault(); cancel(); }
  });
  input.addEventListener("blur", commit);
}

function renderSources(){
  if(!sourceListEl) return;
  sourceListEl.innerHTML = "";
  const all = getAllSources();
  all.forEach((src, i) => {
    const div = document.createElement("div");
    div.className = "source-item" + (activeSources.has(i) ? " active" : "");
    div.style.cursor = "pointer";

    const name = document.createElement("span");
    name.className = "src-name";
    name.textContent = src.name || src.url;
    name.title = src.url;

    div.appendChild(name);

    if(src.default){
      const badge = document.createElement("span");
      badge.className = "src-default";
      badge.textContent = t("defaultBadge");
      div.appendChild(badge);
    } else {
      // Rename button
      const ren = document.createElement("button");
      ren.className = "src-rename";
      ren.textContent = "\u270E";
      ren.title = t("renameTip");
      ren.addEventListener("click", (e) => {
        e.stopPropagation();
        startRenameSource(i, div, name);
      });
      div.appendChild(ren);

      // Double-click name to rename
      name.addEventListener("dblclick", (e) => {
        e.stopPropagation();
        startRenameSource(i, div, name);
      });

      const del = document.createElement("button");
      del.className = "src-del";
      del.textContent = "\u00D7";
      del.title = t("deleteTip");
      del.addEventListener("click", (e) => {
        e.stopPropagation();
        const srcIdx = i - DEFAULT_SOURCES.length; // index in the custom sources array
        sources.splice(srcIdx, 1);
        // Rebuild activeSources set with adjusted indices
        const newActive = new Set();
        for(const ai of activeSources){
          if(ai === i) continue; // removed
          if(ai > i) newActive.add(ai - 1);
          else newActive.add(ai);
        }
        activeSources = newActive;
        saveSources();
        renderSources();
        loadActiveSources();
      });
      div.appendChild(del);
    }

    div.addEventListener("click", () => {
      if(activeSources.has(i)){
        activeSources.delete(i);
      } else {
        activeSources.add(i);
      }
      saveSources();
      renderSources();
      loadActiveSources();
    });

    sourceListEl.appendChild(div);
  });
}

function addSource(){
  if(!addSourceInput) return;
  let url = addSourceInput.value.trim();
  if(!url) return;
  // basic validation
  if(!url.startsWith("http://") && !url.startsWith("https://")){
    showToast(t("invalidUrl"), 2500);
    return;
  }
  // extract a name from URL
  let name = url;
  try {
    const parts = new URL(url).pathname.split("/");
    const file = parts[parts.length - 1] || parts[parts.length - 2] || "";
    if(file) name = decodeURIComponent(file.replace(/\.(m3u8?|txt)$/i, ""));
  } catch(e){}

  sources.push({ name: name, url: url });
  activeSources.add(getAllSources().length - 1);
  saveSources();
  addSourceInput.value = "";
  renderSources();
  loadActiveSources();
  showToast(t("addedSource") + name, 2000);
}

// Toggle source panel
if(sourceToggle) sourceToggle.addEventListener("click", () => {
  sourceToggle.classList.toggle("open");
  if(sourceBody) sourceBody.classList.toggle("open");
});

if(addSourceBtn) addSourceBtn.addEventListener("click", addSource);
if(addSourceInput) addSourceInput.addEventListener("keydown", (e) => {
  if(e.key === "Enter") addSource();
});

/* ===== FILE UPLOAD ===== */
const fileInput = document.getElementById("fileSourceInput");
if(fileInput) fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const text = reader.result;
    const result = parseM3U(text);
    if(result.channels.length === 0){
      showToast(t("noChannelInFile"), 2500);
      return;
    }
    // Save as a local source (store the M3U content directly)
    const name = file.name.replace(/\.(m3u8?|txt)$/i, "");
    sources.push({ name: "\uD83D\uDCC1 " + name, url: "", local: true, content: text });
    activeSources.add(getAllSources().length - 1);
    saveSources();
    renderSources();
    loadActiveSources();
    showToast(t("addedFile") + name + " (" + result.channels.length + t("channelUnit") + ")", 2500);
  };
  reader.readAsText(file);
  fileInput.value = "";
});

/* ===== PARSE M3U TEXT ===== */
function parseM3U(text){
  const channels = [];
  const lines = text.split(/\r?\n/);
  let cur = null;
  let epgUrl = "";
  for(const raw of lines){
    const line = raw.trim();
    if(!line || line.startsWith("#EXTVLCOPT") || line.includes("catchup=")) continue;
    if(line.startsWith("#EXTM3U")){
      const urlTvg = line.match(/url-tvg="([^"]+)"/);
      if(urlTvg) epgUrl = urlTvg[1];
      // Also try x-tvg-url (common alternative)
      if(!epgUrl){
        const xTvg = line.match(/x-tvg-url="([^"]+)"/);
        if(xTvg) epgUrl = xTvg[1];
      }
      continue;
    }
    if(line.startsWith("#EXTINF")){
      const logo = line.match(/tvg-logo="([^"]+)"/);
      const tvgId = line.match(/tvg-id="([^"]+)"/);
      const tvgName = line.match(/tvg-name="([^"]+)"/);
      const lineLower = line.toLowerCase();
      const isRadio = lineLower.includes('radio="true"') || lineLower.includes('radio=true') || lineLower.includes('group-title="radio"') || lineLower.includes('radio') || lineLower.includes('vov') || lineLower.includes('audio');
      const rawNm = line.split(",").pop();
      const nm = rawNm
        .replace(/\s*This m3u file[^-]*-\s*/i, '') // strip watermark
        .replace(/^\s*\([^)]*\)\s*/, '')             // strip leading (anytext)
        .trim() || rawNm.trim();
      cur = { name: nm, logo: logo ? logo[1] : "", url: "", tvgId: tvgId ? tvgId[1] : (tvgName ? tvgName[1] : ""), isRadio: isRadio };
    } else if(line.startsWith("http") && cur){
      cur.url = line;
      if(!cur.isRadio){
        const lowerUrl = line.toLowerCase();
        if(lowerUrl.includes("radio") || lowerUrl.includes("vov") || lowerUrl.includes("audio")){
          cur.isRadio = true;
        }
      }
      channels.push(cur);
      cur = null;
    }
  }
  return { channels, epgUrl };
}

/* ===== LOAD FROM ACTIVE SOURCES ===== */
async function loadActiveSources(){
  const all = getAllSources();
  const indices = [...activeSources].filter(i => i >= 0 && i < all.length).sort((a,b) => a - b);

  if(indices.length === 0){
    showEmptyState();
    return;
  }

  allChannels = [];
  currentIdx = -1;
  currentUrl = "";
  hidden.clear();
  saveHidden();
  if(grid) grid.innerHTML = "";

  if(emptyState) emptyState.classList.add("show");
  if(emptyState){
    emptyState.querySelector(".icon").textContent = "\uD83D\uDCE1";
    emptyState.querySelector("div:last-child").textContent = t("loadingSources").replace("{n}", indices.length);
  }

  let errors = 0;
  const epgUrls = new Set();
  for(const idx of indices){
    const src = all[idx];
    try {
      let result = { channels: [], epgUrl: "" };
      if(src.local && src.content){
        result = parseM3U(src.content);
      } else {
        let text = null;

        // 1st attempt: direct fetch
        try {
          const resp = await fetch(src.url);
          if(resp && resp.ok) text = await resp.text();
        } catch(err) {
          console.warn("[Source] Direct fetch failed, will try proxy:", err.message);
        }

        // 2nd attempt: route through local proxy server as fallback
        if(text === null){
          try {
            showToast("Retrying via proxy…", 0);
            const proxyResp = await fetch("/api/proxy?url=" + encodeURIComponent(src.url));
            if(proxyResp && proxyResp.ok){
              text = await proxyResp.text();
              console.log("[Source] Loaded via proxy:", src.url);
            }
          } catch(proxyErr){
            console.warn("[Source] Proxy fetch also failed:", proxyErr.message);
          }
        }

        if(text === null) throw new Error("All fetch attempts failed (direct + proxy)");
        result = parseM3U(text);
      }
      allChannels = allChannels.concat(result.channels);
      if(result.epgUrl) epgUrls.add(result.epgUrl);
    } catch(e){
      console.error("L\u1ED7i t\u1EA3i:", src.name || src.url, e);
      errors++;
    }
  }

  renderGrid();

  if(allChannels.length === 0){
    if(emptyState){
      emptyState.querySelector(".icon").textContent = "\u26A0\uFE0F";
      emptyState.querySelector("div:last-child").textContent = errors > 0
        ? t("cantLoadSource")
        : t("noChannelFound");
    }
  } else {
    if(errors > 0) showToast(t("sourceError").replace("{e}", errors).replace("{n}", allChannels.length), 3000);
    else showToast(t("sourceOk").replace("{n}", allChannels.length).replace("{s}", indices.length), 2000);

    // Auto-play pinned channel FIRST — before any EPG work
    if(pinnedUrl){
      const pi = allChannels.findIndex(c => c.url === pinnedUrl);
      if(pi >= 0) playByIndex(pi);
    } else if (allChannels.length > 0) {
      // Play first channel by default if no pinned channel
      playByIndex(0);
    }
  }

  // Load EPG data AFTER playback has started — defer so video gets priority
  if(epgUrls.size > 0){
    console.log("[EPG] Found EPG URLs in M3U:", [...epgUrls]);
    setTimeout(() => loadEpgData([...epgUrls]), 3000);
  } else {
    console.log("[EPG] No EPG URL found in M3U sources. Use manual EPG URL input in EPG panel.");
  }
}

/* ===== INIT ===== */
// Clean up invalid indices
const maxIdx = getAllSources().length;
activeSources = new Set([...activeSources].filter(i => i >= 0 && i < maxIdx));
renderSources();
if(activeSources.size > 0){
  loadActiveSources();
} else {
  // First boot: show empty, user must pick a source
  renderGrid();
  if(emptyState){
    emptyState.classList.add("show");
    emptyState.querySelector(".icon").textContent = "\uD83D\uDCFA";
    emptyState.querySelector("div:last-child").textContent = t("selectSource");
  }
}

/* ===== SCROLL TO TOP ===== */
const scrollBtn = document.getElementById("scrollTop");
const rightPane = document.getElementById("rightPane");
const gridEl    = document.getElementById("channelGrid");
if(scrollBtn){
  let _scrollTicking = false;
  const onScroll = () => {
    if(!_scrollTicking){
      _scrollTicking = true;
      requestAnimationFrame(() => {
        const top = Math.max(window.scrollY, gridEl ? gridEl.scrollTop : 0, rightPane ? rightPane.scrollTop : 0);
        scrollBtn.classList.toggle("show", top > 300);
        _scrollTicking = false;
      });
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  if(gridEl) gridEl.addEventListener("scroll", onScroll, { passive: true });
  if(rightPane) rightPane.addEventListener("scroll", onScroll, { passive: true });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if(gridEl) gridEl.scrollTo({ top: 0, behavior: "smooth" });
    if(rightPane) rightPane.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ===== QUICK SWITCH MODAL ===== */
const quickSwitchBtn = document.getElementById("quickSwitchBtn");
const quickSwitchModal = document.getElementById("quickSwitchModal");
const quickSwitchOverlay = document.getElementById("quickSwitchOverlay");
const quickSwitchClose = document.getElementById("quickSwitchClose");
const quickSwitchSearch = document.getElementById("quickSwitchSearch");
const quickSwitchGrid = document.getElementById("quickSwitchGrid");
let qsCat = "tv";

function openQuickSwitch(){
  if(!quickSwitchModal) return;
  qsCat = currentCategory;
  quickSwitchModal.classList.add("open");
  if(quickSwitchSearch){ quickSwitchSearch.value = ""; quickSwitchSearch.focus(); }
  updateQsTabs();
  renderQuickSwitch();
}

function closeQuickSwitch(){
  if(quickSwitchModal) quickSwitchModal.classList.remove("open");
}

function renderQuickSwitch(filter){
  if(!quickSwitchGrid) return;
  const q = (filter || "").toLowerCase();
  const isFavCat = qsCat === "fav";
  const isRadioCat = qsCat === "radio";
  const frag = document.createDocumentFragment();
  const fallbackImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232d2d2d' stroke='%2360a5fa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='2' y='6' width='20' height='15' rx='3' ry='3'/%3E%3Cpolygon points='10 10 16 13.5 10 17 10 10' fill='%2360a5fa'/%3E%3Cpath d='M8 2 L12 6 L16 2'/%3E%3C/svg%3E";
  allChannels.forEach((ch, i) => {
    if(hidden.has(ch.url)) return;
    const isFav = favorites.some(f => f.url === ch.url);
    if(isFavCat){ if(!isFav) return; }
    else { if(!!ch.isRadio !== isRadioCat) return; }
    if(q && !ch.name.toLowerCase().includes(q)) return;
    const div = document.createElement("div");
    div.className = "qs-card" + (i === currentIdx ? " active" : "");
    const img = document.createElement("img");
    img.src = ch.logo || fallbackImg;
    img.onerror = function(){ this.onerror = null; this.src = fallbackImg; };
    img.alt = ch.name;
    img.loading = "lazy";
    const name = document.createElement("div");
    name.className = "qs-name";
    name.textContent = ch.name;
    div.append(img, name);
    div.onclick = () => { playByIndex(i); closeQuickSwitch(); };
    frag.appendChild(div);
  });
  quickSwitchGrid.innerHTML = "";
  quickSwitchGrid.appendChild(frag);
}

if(quickSwitchBtn) quickSwitchBtn.addEventListener("click", openQuickSwitch);
if(quickSwitchClose) quickSwitchClose.addEventListener("click", closeQuickSwitch);
if(quickSwitchOverlay) quickSwitchOverlay.addEventListener("click", closeQuickSwitch);
if(quickSwitchSearch) quickSwitchSearch.addEventListener("input", () => renderQuickSwitch(quickSwitchSearch.value));

function updateQsTabs(){
  const tabs = document.querySelectorAll(".qs-tab");
  tabs.forEach(t => t.classList.toggle("active", t.dataset.cat === qsCat));
  // Update badges
  let tvCount = 0, radioCount = 0, favCount = 0;
  allChannels.forEach(ch => {
    if(hidden.has(ch.url)) return;
    if(ch.isRadio) radioCount++; else tvCount++;
    if(favorites.some(f => f.url === ch.url)) favCount++;
  });
  const tvBadge = document.querySelector('.qs-tab[data-cat="tv"] .qs-badge');
  const radioBadge = document.querySelector('.qs-tab[data-cat="radio"] .qs-badge');
  const favBadge = document.querySelector('.qs-tab[data-cat="fav"] .qs-badge');
  if(tvBadge) tvBadge.textContent = tvCount;
  if(radioBadge) radioBadge.textContent = radioCount;
  if(favBadge) favBadge.textContent = favCount;
}
document.querySelectorAll(".qs-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    qsCat = tab.dataset.cat;
    updateQsTabs();
    renderQuickSwitch(quickSwitchSearch ? quickSwitchSearch.value : "");
  });
});

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape" && quickSwitchModal && quickSwitchModal.classList.contains("open")) closeQuickSwitch();
});

/* ===== CINEMA MODE ===== */
const cinemaBtn = document.getElementById("cinemaBtn");
const cinemaOverlay = document.getElementById("cinemaOverlay");
let cinemaMode = false;

function applyCinemaMode(){
  if(cinemaOverlay) cinemaOverlay.classList.toggle("show", cinemaMode);
  if(cinemaBtn) cinemaBtn.classList.toggle("active", cinemaMode);
  document.body.classList.toggle("cinema", cinemaMode);
}

if(cinemaBtn){
  cinemaBtn.addEventListener("click", () => {
    cinemaMode = !cinemaMode;
    applyCinemaMode();
  });
}
if(cinemaOverlay){
  cinemaOverlay.addEventListener("click", () => {
    cinemaMode = false;
    applyCinemaMode();
  });
}

/* ===== PIN / FAV / HIDE MINI BUTTONS ===== */
function updateMiniButtons(){
  const ch = currentIdx >= 0 ? allChannels[currentIdx] : null;
  // Pin button
  if(pinBtn){
    pinBtn.classList.toggle("active", ch && pinnedUrl === ch.url);
  }
  // Fav button
  if(favBtn){
    const isFav = ch && favorites.some(f => f.url === ch.url);
    favBtn.classList.toggle("active", !!isFav);
  }
  // Hide button - only enable when a channel is selected
  if(hideBtn){
    hideBtn.disabled = !ch;
  }
}

if(pinBtn){
  pinBtn.addEventListener("click", () => {
    if(currentIdx < 0) return;
    const ch = allChannels[currentIdx];
    if(!ch) return;
    if(pinnedUrl === ch.url){
      pinnedUrl = "";
      localStorage.removeItem("pinnedChannel");
      showToast(t("unpinnedToast"), 2000);
    } else {
      pinnedUrl = ch.url;
      localStorage.setItem("pinnedChannel", ch.url);
      showToast(t("pinnedToast"), 2000);
    }
    updateMiniButtons();
  });
}

if(favBtn){
  favBtn.addEventListener("click", () => {
    if(currentIdx < 0) return;
    const ch = allChannels[currentIdx];
    if(!ch) return;
    toggleFav(ch);
    updateMiniButtons();
  });
}

if(hideBtn){
  hideBtn.addEventListener("click", () => {
    if(currentIdx < 0) return;
    const ch = allChannels[currentIdx];
    if(!ch) return;
    hidden.add(ch.url);
    saveHidden();
    renderGrid();
    updateMiniButtons();
  });
}

/* ===== LANGUAGE SWITCHER ===== */
const langBtn   = document.getElementById("langBtn");
const langFlag  = document.getElementById("langFlag");
const langMenu  = document.getElementById("langMenu");

function applyLang(){
  const L = LANGS[currentLang] || LANGS.vi;
  // Update lang button (icon-only: just flag)
  if(langFlag) langFlag.textContent = L.flag;

  // Static HTML elements
  if(nowName && currentIdx < 0) nowName.textContent = t("noChannel");
  if(btnUnmute){
    btnUnmute.title = t("sound") + " (M)";
  }
  if(btnPiP){
    btnPiP.title = t("pip");
  }
  if(btnFull){
    btnFull.querySelector("span:last-child").textContent = t("newTab");
    btnFull.title = t("newTab");
  }
  if(btnPlayerFs){
    btnPlayerFs.title = t("fullscreen");
  }
  if(btnRetry){
    btnRetry.title = t("reload");
  }

  const srcToggleLabel = sourceToggle ? sourceToggle.querySelector("span:last-child") : null;
  if(srcToggleLabel) srcToggleLabel.textContent = t("sourceToggle").replace(/^[\uD83D\uDD17\s]+/, "");

  if(addSourceInput) addSourceInput.placeholder = t("addPlaceholder");
  if(addSourceBtn) addSourceBtn.textContent = t("addBtn");

  const fileLabel = document.getElementById("fileSourceLabel");
  if(fileLabel){
    const fileSpan = fileLabel.querySelector("span");
    if(fileSpan) fileSpan.textContent = t("fileBtn").replace(/^[\uD83D\uDCC1\s]+/, "");
    fileLabel.title = t("fileTitle");
  }

  if(searchIn) searchIn.placeholder = t("searchPlaceholder");
  if(quickSwitchSearch) quickSwitchSearch.placeholder = t("searchPlaceholder");
  if(btnCheck){
    btnCheck.querySelector("span:last-child").textContent = t("checkBtn");
    btnCheck.title = t("checkTitle");
  }
  if(btnReset){
    btnReset.querySelector("span:last-child").textContent = t("showAll");
    btnReset.title = t("showAllTitle");
  }
  if(scrollBtn) scrollBtn.title = t("scrollTop");

  // Cinema & mini buttons (icon-only, tooltips only)
  if(cinemaBtn) cinemaBtn.title = t("cinemaMode") + " (F)";
  if(pinBtn) pinBtn.title = t("pinChannelTip");
  if(favBtn) favBtn.title = t("favChannel");
  if(hideBtn) hideBtn.title = t("hideChannel");

  // Prev/Next channel buttons
  const _prevBtn = document.getElementById("prevChBtn");
  const _nextBtn = document.getElementById("nextChBtn");
  if(_prevBtn) _prevBtn.title = t("prevChannel") + " (\u2191)";
  if(_nextBtn) _nextBtn.title = t("nextChannel") + " (\u2193)";

  // Shortcuts button
  const _scBtn = document.getElementById("shortcutsBtn");
  if(_scBtn) _scBtn.title = t("shortcutsTitle");

  // Re-render dynamic content
  renderSources();
  renderGrid();

  // Build lang menu & shortcuts
  buildShortcutsPanel();
  buildLangMenu();
  
  // Sync mute button with video state
  if (video && btnUnmute) {
    btnUnmute.querySelector("#muteIcon").innerHTML = video.muted ? '<svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>' : '<svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
    btnUnmute.classList.toggle("active", !video.muted);
  }
}

function buildLangMenu(){
  if(!langMenu) return;
  langMenu.innerHTML = "";
  for(const [code, lang] of Object.entries(LANGS).sort((a,b) => a[1].label.localeCompare(b[1].label))){
    const btn = document.createElement("button");
    btn.className = "lang-option" + (code === currentLang ? " active" : "");
    btn.innerHTML = "<span class='lang-flag'>" + lang.flag + "</span><span>" + lang.label + "</span>";
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      currentLang = code;
      localStorage.setItem("lang", code);
      langMenu.classList.remove("open");
      applyLang();
    });
    langMenu.appendChild(btn);
  }
}

if(langBtn){
  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    langMenu.classList.toggle("open");
  });
  document.addEventListener("click", () => {
    if(langMenu) langMenu.classList.remove("open");
  });
}

applyLang();

/* ===== PREV / NEXT CHANNEL BUTTONS ===== */
const prevChBtn = document.getElementById("prevChBtn");
const nextChBtn = document.getElementById("nextChBtn");

if(prevChBtn) prevChBtn.addEventListener("click", () => {
  if(allChannels.length === 0) return;
  if(currentIdx <= 0) playByIndex(allChannels.length - 1, { noScroll: true });
  else playByIndex(currentIdx - 1, { noScroll: true });
});

if(nextChBtn) nextChBtn.addEventListener("click", () => {
  if(allChannels.length === 0) return;
  if(currentIdx >= allChannels.length - 1) playByIndex(0, { noScroll: true });
  else playByIndex(currentIdx + 1, { noScroll: true });
});

/* ===== EPG PANEL ===== */
const epgBtn       = document.getElementById("epgBtn");
const listBtn      = document.getElementById("listBtn");
const epgPanel     = document.getElementById("epgPanel");
const epgListEl    = document.getElementById("epgList");
const epgPanelTitle = document.getElementById("epgPanelTitle");
const epgCloseBtn  = document.getElementById("epgCloseBtn");

function openEpgPanel(){
  if(!epgPanel) return;
  epgPanel.classList.add("open");
  if(epgBtn) epgBtn.classList.add("active");
  renderEpgPanel();
}

function closeEpgPanel(){
  if(epgPanel) epgPanel.classList.remove("open");
  if(epgBtn) epgBtn.classList.remove("active");
}

function openList(){
  document.body.classList.add("list-open");
  if(listBtn) listBtn.classList.add("active");
}

function closeList(){
  document.body.classList.remove("list-open");
  if(listBtn) listBtn.classList.remove("active");
}

// Right pane close button (mobile overlay)
const rightPaneCloseBtn = document.getElementById("rightPaneCloseBtn");
if(rightPaneCloseBtn) rightPaneCloseBtn.addEventListener("click", closeList);

function renderEpgPanel(){
  if(!epgListEl) return;
  epgListEl.innerHTML = "";

  if(currentIdx < 0 || currentIdx >= allChannels.length){
    if(epgPanelTitle) epgPanelTitle.textContent = "Program Guide";
    epgListEl.innerHTML = '<div class="epg-empty">No channel selected</div>';
    return;
  }

  const ch = allChannels[currentIdx];
  if(epgPanelTitle) epgPanelTitle.textContent = ch.name || "Program Guide";

  // Find programs using the unified matching function
  const epgChId = findEpgChannelId(ch.tvgId, ch.name);
  const programs = epgChId ? epgData[epgChId] : null;

  if(!programs || programs.length === 0){
    const epgKeys = Object.keys(epgData).length;
    const hint = epgKeys === 0
      ? "No EPG data loaded. Enter an EPG URL above."
      : "No program data for \"" + ch.name + "\" (tvg-id: " + (ch.tvgId || "none") + "). EPG has " + epgKeys + " channels.";
    epgListEl.innerHTML = '<div class="epg-empty">' + hint + '</div>';
    return;
  }

  const now = new Date();

  // Show today's programs (past 2 hours + future)
  const cutoff = new Date(now.getTime() - 2 * 60 * 60 * 1000);
  const todayEnd = new Date(now);
  todayEnd.setHours(23, 59, 59, 999);

  let hasItems = false;
  for(const p of programs){
    // Skip programs that ended before cutoff
    if(p.stop && p.stop < cutoff) continue;
    // Stop after tomorrow
    if(p.start > todayEnd) {
      // Show up to a few hours into tomorrow
      const tomorrowCut = new Date(todayEnd.getTime() + 6 * 60 * 60 * 1000);
      if(p.start > tomorrowCut) break;
    }

    const isNow = p.start <= now && p.stop && p.stop > now;
    const div = document.createElement("div");
    div.className = "epg-item" + (isNow ? " now" : "");

    // Main row: time + title + badge
    const row = document.createElement("div");
    row.className = "epg-item-row";

    const timeEl = document.createElement("span");
    timeEl.className = "epg-time";
    timeEl.textContent = formatTime(p.start) + (p.stop ? " \u2013 " + formatTime(p.stop) : "");

    const titleEl = document.createElement("span");
    titleEl.className = "epg-prog-title";
    titleEl.textContent = p.title;

    row.append(timeEl, titleEl);

    if(isNow){
      const badge = document.createElement("span");
      badge.className = "epg-now-badge";
      badge.textContent = "\u25CF LIVE";
      row.appendChild(badge);
    }

    div.appendChild(row);

    // Progress bar for current program
    if(isNow && p.stop){
      const total = p.stop - p.start;
      const elapsed = now - p.start;
      const pct = Math.min(100, Math.max(0, (elapsed / total) * 100));
      const wrap = document.createElement("div");
      wrap.className = "epg-progress-wrap";
      const bar = document.createElement("div");
      bar.className = "epg-progress-bar";
      bar.style.width = pct.toFixed(1) + "%";
      wrap.appendChild(bar);
      div.appendChild(wrap);
    }

    epgListEl.appendChild(div);
    hasItems = true;
  }

  if(!hasItems){
    epgListEl.innerHTML = '<div class="epg-empty">No upcoming programs</div>';
  }

  // Scroll the "now" item into view
  const nowItem = epgListEl.querySelector(".epg-item.now");
  if(nowItem) nowItem.scrollIntoView({ block: "nearest", behavior: "instant" });
}

if(epgBtn) epgBtn.addEventListener("click", () => {
  if(epgPanel && epgPanel.classList.contains("open")) closeEpgPanel();
  else openEpgPanel();
});

if(listBtn) listBtn.addEventListener("click", () => {
  if(document.body.classList.contains("list-open")) closeList();
  else openList();
});

if(epgCloseBtn) epgCloseBtn.addEventListener("click", closeEpgPanel);

// Auto-open EPG panel and channel list on desktop only
if(window.innerWidth >= 1025){ openEpgPanel(); openList(); }

// Manual EPG URL loading
const epgUrlInput = document.getElementById("epgUrlInput");
const epgUrlBtn   = document.getElementById("epgUrlBtn");

// Restore saved EPG URL
const savedEpgUrl = localStorage.getItem("customEpgUrl") || "";
if(epgUrlInput && savedEpgUrl) epgUrlInput.value = savedEpgUrl;

if(epgUrlBtn) epgUrlBtn.addEventListener("click", async () => {
  if(!epgUrlInput) return;
  const rawUrl = epgUrlInput.value.trim();
  if(!rawUrl) return;

  // Support multiple URLs separated by comma or newline
  const urls = rawUrl.split(/[,\n]+/).map(u => u.trim()).filter(u => u);
  for(const u of urls){
    if(!u.startsWith("http://") && !u.startsWith("https://")){ showToast("URL must start with http:// or https://", 2500); return; }
  }

  epgUrlBtn.disabled = true;
  epgUrlBtn.textContent = "Loading...";
  try {
    await loadEpgData(urls, true);
    localStorage.setItem("customEpgUrl", rawUrl);
    renderEpgPanel();
  } catch(e){
    showToast("Failed to load EPG: " + e.message, 3000);
  }
  epgUrlBtn.disabled = false;
  epgUrlBtn.textContent = "Load";
});
if(epgUrlInput) epgUrlInput.addEventListener("keydown", (e) => { if(e.key === "Enter" && epgUrlBtn) epgUrlBtn.click(); });

// Auto-load saved EPG URL on startup — delay to let channels render first
if(savedEpgUrl){
  const urls = savedEpgUrl.split(/[,\n]+/).map(u => u.trim()).filter(u => u && u.startsWith("http"));
  if(urls.length > 0) setTimeout(() => loadEpgData(urls, true), 5000);
}

// Channel list is open by default on desktop — mark button active
if(listBtn && window.innerWidth >= 1025) listBtn.classList.add("active");
if(epgBtn && window.innerWidth >= 1025) epgBtn.classList.add("active");

// Unified EPG refresh — runs every 60s
function _epgPeriodicRefresh(){
  updateEpgDisplay();
  if(epgPanel && epgPanel.classList.contains("open")) renderEpgPanel();
}
epgIntervalId = setInterval(_epgPeriodicRefresh, 60000);

/* ===== PERSIST HIDDEN ===== */
function saveHidden(){
  localStorage.setItem("hiddenChannels", JSON.stringify([...hidden]));
}

/* ===== HLS QUALITY SELECTOR ===== */
const qualityBtn  = document.getElementById("qualityBtn");
const qualityMenu = document.getElementById("qualityMenu");

function buildQualityMenu(){
  if(!qualityMenu) return;
  qualityMenu.innerHTML = "";
  if(hlsLevels.length <= 1){
    if(qualityBtn) qualityBtn.style.display = "none";
    return;
  }
  if(qualityBtn) qualityBtn.style.display = "";

  // Auto option
  const autoBtn = document.createElement("button");
  autoBtn.className = "quality-option" + ((!hls || hls.currentLevel === -1) ? " active" : "");
  autoBtn.textContent = "Auto";
  autoBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if(hls) hls.currentLevel = -1;
    qualityMenu.classList.remove("open");
    updateQualityMenu();
  });
  qualityMenu.appendChild(autoBtn);

  // Each level (sorted by height descending)
  [...hlsLevels]
    .map((lvl, i) => ({ idx: i, height: lvl.height, bitrate: lvl.bitrate }))
    .sort((a, b) => b.height - a.height)
    .forEach(({ idx, height, bitrate }) => {
      const btn = document.createElement("button");
      const label = height ? height + "p" : Math.round(bitrate / 1000) + "k";
      btn.className = "quality-option" + ((hls && hls.currentLevel === idx) ? " active" : "");
      btn.textContent = label;
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        if(hls) hls.currentLevel = idx;
        qualityMenu.classList.remove("open");
        updateQualityMenu();
      });
      qualityMenu.appendChild(btn);
    });
}

function updateQualityMenu(){
  if(!qualityMenu) return;
  const opts = qualityMenu.querySelectorAll(".quality-option");
  const sorted = [...hlsLevels]
    .map((lvl, i) => i)
    .sort((a, b) => (hlsLevels[b]?.height || 0) - (hlsLevels[a]?.height || 0));
  opts.forEach((opt, oi) => {
    if(oi === 0) opt.classList.toggle("active", !hls || hls.currentLevel === -1);
    else opt.classList.toggle("active", hls && hls.currentLevel === sorted[oi - 1]);
  });
  if(qualityBtn){
    const span = qualityBtn.querySelector(".quality-label");
    if(span){
      if(!hls || hls.currentLevel === -1) span.textContent = "Auto";
      else {
        const lvl = hlsLevels[hls.currentLevel];
        span.textContent = lvl && lvl.height ? lvl.height + "p" : "Auto";
      }
    }
  }
}

if(qualityBtn){
  qualityBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if(qualityMenu) qualityMenu.classList.toggle("open");
  });
  document.addEventListener("click", () => {
    if(qualityMenu) qualityMenu.classList.remove("open");
  });
}

/* ===== KEYBOARD SHORTCUTS ===== */
document.addEventListener("keydown", (e) => {
  // Don't trigger shortcuts when typing in inputs
  const tag = e.target.tagName;
  if(tag === "INPUT" || tag === "TEXTAREA" || e.target.isContentEditable) return;

  switch(e.key){
    case " ": // Space = play/pause
      e.preventDefault();
      if(video.paused) video.play().catch(() => {});
      else video.pause();
      break;
    case "m": // M = mute toggle
    case "M":
      e.preventDefault();
      if(btnUnmute) btnUnmute.click();
      break;
    case "ArrowUp": // Previous channel
      e.preventDefault();
      if(allChannels.length === 0) break;
      if(currentIdx <= 0) playByIndex(allChannels.length - 1, { noScroll: true });
      else playByIndex(currentIdx - 1, { noScroll: true });
      break;
    case "ArrowDown": // Next channel
      e.preventDefault();
      if(allChannels.length === 0) break;
      if(currentIdx >= allChannels.length - 1) playByIndex(0, { noScroll: true });
      else playByIndex(currentIdx + 1, { noScroll: true });
      break;
    case "f": // F = cinema mode
    case "F":
      e.preventDefault();
      if(cinemaBtn) cinemaBtn.click();
      break;
  }
});

/* ===== SHORTCUTS PANEL ===== */
const shortcutsBtn = document.getElementById("shortcutsBtn");
const shortcutsPanel = document.getElementById("shortcutsPanel");

function buildShortcutsPanel(){
  const panel = document.getElementById("shortcutsPanel");
  if(!panel) return;
  const shortcuts = [
    { key: "Space", desc: t("playPause") },
    { key: "M", desc: t("sound") },
    { key: "\u2191", desc: t("prevChannel") },
    { key: "\u2193", desc: t("nextChannel") },
    { key: "F", desc: t("cinemaMode") }
  ];
  panel.innerHTML = '<div class="sc-title">\u2328 ' + t("shortcutsTitle") + '</div>' +
    shortcuts.map(function(s){ return '<div class="sc-row"><span class="sc-key">' + s.key + '</span><span class="sc-desc">' + s.desc + '</span></div>'; }).join("");
}

if(shortcutsBtn){
  shortcutsBtn.addEventListener("click", function(e){
    e.stopPropagation();
    if(shortcutsPanel) shortcutsPanel.classList.toggle("open");
  });
}
if(shortcutsPanel){
  shortcutsPanel.addEventListener("click", function(e){ e.stopPropagation(); });
}
document.addEventListener("click", function(){
  if(shortcutsPanel) shortcutsPanel.classList.remove("open");
});

buildShortcutsPanel();
