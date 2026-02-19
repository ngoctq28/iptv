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
    unpinnedToast: "\u0110\u00E3 b\u1ECF ghim k\u00EAnh"
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
    unpinnedToast: "Channel unpinned"
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
    unpinnedToast: "Channel unpinned"
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
    unpinnedToast: "Cha\u00EEne d\u00E9s\u00E9pingl\u00E9e"
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
    unpinnedToast: "Kanal losgel\u00F6st"
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
    unpinnedToast: "\u041A\u0430\u043D\u0430\u043B \u043E\u0442\u043A\u0440\u0435\u043F\u043B\u0451\u043D"
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
    unpinnedToast: "Channel unpinned"
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
    unpinnedToast: "\u5DF2\u53D6\u6D88\u7F6E\u9876"
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
    unpinnedToast: "\u5DF2\u53D6\u6D88\u7F6E\u9802"
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
    unpinnedToast: "\u30D4\u30F3\u7559\u3081\u3092\u89E3\u9664\u3057\u307E\u3057\u305F"
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
    unpinnedToast: "\uCC44\uB110 \uACE0\uC815 \uD574\uC81C"
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
    unpinnedToast: "Canal desfijado"
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
    unpinnedToast: "Canal desfixado"
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
    unpinnedToast: "\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u062A\u062B\u0628\u064A\u062A \u0627\u0644\u0642\u0646\u0627\u0629"
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
    unpinnedToast: "\u091A\u0948\u0928\u0932 \u0905\u0928\u092A\u093F\u0928 \u0915\u093F\u092F\u093E \u0917\u092F\u093E"
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
    unpinnedToast: "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E1B\u0E31\u0E01\u0E2B\u0E21\u0E38\u0E14\u0E41\u0E25\u0E49\u0E27"
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
    unpinnedToast: "Saluran tidak disematkan"
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
    unpinnedToast: "Canale rimosso"
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
    unpinnedToast: "Kanal sabitlemesi kald\u0131r\u0131ld\u0131"
  }
};

let currentLang = localStorage.getItem("lang") || "en";
function t(key){ return (LANGS[currentLang] || LANGS.vi)[key] || (LANGS.vi)[key] || key; }

const DEFAULT_SOURCES = [];

/* ===== DOM ===== */
const video      = document.getElementById("player");
const nowName    = document.getElementById("nowPlayingName");
const nowBar     = document.getElementById("nowPlaying");
const btnUnmute  = document.getElementById("btnUnmute");
const btnPiP     = document.getElementById("btnPiP");
const btnFull    = document.getElementById("btnFullscreen");
const btnRetry   = document.getElementById("btnRetry");
const toast      = document.getElementById("statusToast");
const favList    = document.getElementById("favList");
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
let activeSources = new Set(JSON.parse(localStorage.getItem("activeSources") || "[]"));
let currentIdx   = -1;
let currentUrl   = "";
const hidden     = new Set();
let pinnedUrl    = localStorage.getItem("pinnedChannel") || "";
const MAX_RETRIES = 5;
let retryCount   = 0;
let retryTimer   = null;
let stallTimer   = null;
const STALL_TIMEOUT = 15000;
let hls = null; // hls.js instance

/* ===== EPG (Electronic Program Guide) ===== */
let epgData = {}; // { tvgId: [ {start, stop, title} ] }
const nowProgram = document.getElementById("nowProgram");

function parseXMLTV(xmlText){
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlText, "text/xml");
  const programmes = doc.querySelectorAll("programme");
  const data = {};
  for(const p of programmes){
    const ch = p.getAttribute("channel");
    const startStr = p.getAttribute("start");
    const stopStr = p.getAttribute("stop");
    const titleEl = p.querySelector("title");
    if(!ch || !startStr || !titleEl) continue;
    const start = parseXMLTVDate(startStr);
    const stop = stopStr ? parseXMLTVDate(stopStr) : null;
    const title = titleEl.textContent.trim();
    if(!data[ch]) data[ch] = [];
    data[ch].push({ start, stop, title });
  }
  // sort each channel's programs by start time
  for(const ch in data) data[ch].sort((a,b) => a.start - b.start);
  return data;
}

function parseXMLTVDate(s){
  // Format: 20240101120000 +0700 or 20240101120000
  const m = s.match(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})\s*([+-]\d{4})?/);
  if(!m) return new Date(s);
  const iso = m[1]+"-"+m[2]+"-"+m[3]+"T"+m[4]+":"+m[5]+":"+m[6]+(m[7] ? m[7].replace(/(\d{2})(\d{2})/, "$1:$2") : "");
  return new Date(iso);
}

async function loadEpgData(urls){
  epgData = {};
  for(const url of urls){
    try {
      const resp = await fetch(url);
      if(!resp.ok) continue;
      const text = await resp.text();
      const parsed = parseXMLTV(text);
      // merge
      for(const ch in parsed){
        if(!epgData[ch]) epgData[ch] = [];
        epgData[ch] = epgData[ch].concat(parsed[ch]);
      }
    } catch(e){
      console.warn("EPG load error:", url, e);
    }
  }
  // sort merged data
  for(const ch in epgData) epgData[ch].sort((a,b) => a.start - b.start);
  // update display if currently playing
  updateEpgDisplay();
}

function getCurrentProgram(tvgId){
  if(!tvgId || !epgData[tvgId]) return null;
  const now = new Date();
  for(const p of epgData[tvgId]){
    if(p.start <= now && p.stop && p.stop > now) return p;
    if(p.start <= now && !p.stop) return p; // no stop time
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
  const prog = getCurrentProgram(ch.tvgId);
  if(prog){
    const timeStr = formatTime(prog.start) + (prog.stop ? " - " + formatTime(prog.stop) : "");
    nowProgram.textContent = "\uD83D\uDCFA " + timeStr + "  " + prog.title;
    nowProgram.style.display = "block";
  } else {
    nowProgram.style.display = "none";
  }
}

function formatTime(d){
  return d.getHours().toString().padStart(2,"0") + ":" + d.getMinutes().toString().padStart(2,"0");
}

// Refresh EPG display every 60s so it updates when programs change
setInterval(updateEpgDisplay, 60000);

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
if(btnUnmute) btnUnmute.addEventListener("click", () => {
  video.muted = !video.muted;
  btnUnmute.querySelector("#muteIcon").innerHTML = video.muted ? '<svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>' : '<svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
  btnUnmute.classList.toggle("active", !video.muted);
});

/* ===== PIP (directly on panel video) ===== */
if(btnPiP) btnPiP.addEventListener("click", async () => {
  try {
    if(document.pictureInPictureElement){
      await document.exitPictureInPicture();
    } else {
      await video.requestPictureInPicture();
    }
  } catch(e){ console.warn("PiP error:", e); showToast(t("pipNotSupported"), 2000); }
});

if(video){
  video.addEventListener("leavepictureinpicture", () => { if(btnPiP) btnPiP.classList.remove("active"); });
  video.addEventListener("enterpictureinpicture", () => { if(btnPiP) btnPiP.classList.add("active"); });
  // keep mute button in sync with native controls
  video.addEventListener("volumechange", () => {
    if(!btnUnmute) return;
    btnUnmute.querySelector("#muteIcon").innerHTML = video.muted ? '<svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>' : '<svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
    btnUnmute.classList.toggle("active", !video.muted);
  });
}

/* ===== FULLSCREEN (open stream in new tab) ===== */
if(btnFull) btnFull.addEventListener("click", () => {
  if(currentIdx < 0 || !currentUrl) return;
  chrome.tabs.create({ url: currentUrl, active: true });
});

/* ===== RETRY ===== */
if(btnRetry) btnRetry.addEventListener("click", () => {
  if(currentIdx < 0) return;
  playByIndex(currentIdx);
  showToast(t("reloading"), 1500);
});

/* ===== FAVORITES SCROLL ===== */
if(favList) favList.addEventListener("wheel", e => { e.preventDefault(); favList.scrollLeft += e.deltaY; });

/* ===== PLAY PREVIEW ===== */
function isHlsUrl(url){ return /\.m3u8?(\?|$)/i.test(url); }

function destroyHls(){
  if(hls){ hls.destroy(); hls = null; }
}

function playByIndex(idx){
  if(idx < 0 || idx >= allChannels.length) return;
  currentIdx = idx;
  const ch = allChannels[idx];

  // highlight
  document.querySelectorAll(".ch-card").forEach(c => c.classList.remove("active"));
  const card = document.querySelector('[data-idx="' + idx + '"]');
  if(card){ card.classList.add("active"); card.scrollIntoView({ behavior: "smooth", block: "nearest" }); }

  // update now-playing
  if(nowName) nowName.textContent = ch.name || t("channelN") + (idx+1);
  if(nowBar) nowBar.classList.add("live");
  updateEpgDisplay();
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
    hls = new Hls({
      maxBufferLength: 30,
      maxMaxBufferLength: 60,
      maxBufferSize: 20 * 1024 * 1024,    // 20 MB
      maxBufferHole: 0.5,
      lowLatencyMode: false,
      enableWorker: true,
      fragLoadingTimeOut: 20000,
      fragLoadingMaxRetry: 6,
      fragLoadingRetryDelay: 1000,
      manifestLoadingTimeOut: 15000,
      manifestLoadingMaxRetry: 4,
      manifestLoadingRetryDelay: 1000,
      levelLoadingTimeOut: 15000,
      levelLoadingMaxRetry: 4,
      levelLoadingRetryDelay: 1000,
      startFragPrefetch: true
    });

    hls.on(Hls.Events.MEDIA_ATTACHED, () => {
      hls.loadSource(ch.url);
    });

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.play().catch(() => {});
    });

    hls.on(Hls.Events.ERROR, (event, data) => {
      if(!data.fatal) return;
      console.warn("HLS fatal error:", data.type, data.details);
      switch(data.type){
        case Hls.ErrorTypes.NETWORK_ERROR:
          showToast(t("networkError"), 0);
          hls.startLoad();
          break;
        case Hls.ErrorTypes.MEDIA_ERROR:
          showToast(t("mediaError"), 0);
          hls.recoverMediaError();
          break;
        default:
          // unrecoverable
          destroyHls();
          doRetry();
          break;
      }
    });

    hls.attachMedia(video);
  } else {
    // ---- Native path (direct .ts / .mp4 / Safari HLS) ----
    video.src = ch.url;
    video.load();
    video.play().catch(() => {});
  }

  resetStallTimer();
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

/* ===== VIDEO EVENTS ===== */
if(video){
  video.addEventListener("playing", () => {
    hideToast();
    if(nowBar) nowBar.classList.add("live");
    retryCount = 0;
    resetStallTimer();
  });
  video.addEventListener("timeupdate", () => { resetStallTimer(); });
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
  renderFavs();
  renderGrid();
}

/* ===== RENDER CARD ===== */
function makeCard(ch, idx, container){
  const div = document.createElement("div");
  div.className = "ch-card";
  div.dataset.idx = idx;

  const img = document.createElement("img");
  img.src = ch.logo || "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='60'><rect width='120' height='60' rx='8' fill='%23334155'/><text x='60' y='36' text-anchor='middle' fill='%2394a3b8' font-size='11'>TV</text></svg>";
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

/* ===== RENDER FAVORITES ===== */
let dragFavIdx = -1;

function renderFavs(){
  if(!favList) return;
  favList.innerHTML = "";
  if(favorites.length === 0){
    const msg = document.createElement("span");
    msg.className = "fav-empty-msg";
    msg.textContent = t("favEmpty");
    favList.appendChild(msg);
    return;
  }
  favorites.forEach((ch, fi) => {
    const i = allChannels.findIndex(c => c.url === ch.url);
    if(i === -1) return;
    const div = document.createElement("div");
    div.className = "ch-card";
    div.dataset.idx = i;
    div.dataset.favIdx = fi;
    div.draggable = true;

    const img = document.createElement("img");
    img.src = ch.logo || "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='60'><rect width='120' height='60' rx='8' fill='%23334155'/><text x='60' y='36' text-anchor='middle' fill='%2394a3b8' font-size='11'>TV</text></svg>";
    img.alt = ch.name;
    img.loading = "lazy";

    const name = document.createElement("div");
    name.className = "ch-name";
    name.textContent = ch.name;

    const star = document.createElement("div");
    star.className = "ch-star on";
    star.textContent = "\u2605";
    star.onclick = (e) => { e.stopPropagation(); toggleFav(ch); };

    div.onclick = () => playByIndex(i);

    // Drag events
    div.addEventListener("dragstart", (e) => {
      dragFavIdx = fi;
      div.classList.add("dragging");
      e.dataTransfer.effectAllowed = "move";
    });
    div.addEventListener("dragend", () => {
      div.classList.remove("dragging");
      dragFavIdx = -1;
      favList.querySelectorAll(".ch-card").forEach(c => {
        c.classList.remove("drag-over-left", "drag-over-right");
      });
    });
    div.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      if(dragFavIdx === fi) return;
      const rect = div.getBoundingClientRect();
      const mid = rect.left + rect.width / 2;
      div.classList.toggle("drag-over-left", e.clientX < mid);
      div.classList.toggle("drag-over-right", e.clientX >= mid);
    });
    div.addEventListener("dragleave", () => {
      div.classList.remove("drag-over-left", "drag-over-right");
    });
    div.addEventListener("drop", (e) => {
      e.preventDefault();
      if(dragFavIdx < 0 || dragFavIdx === fi) return;
      const rect = div.getBoundingClientRect();
      const mid = rect.left + rect.width / 2;
      let targetIdx = e.clientX < mid ? fi : fi + 1;
      // Move the dragged item
      const [moved] = favorites.splice(dragFavIdx, 1);
      if(targetIdx > dragFavIdx) targetIdx--;
      favorites.splice(targetIdx, 0, moved);
      localStorage.setItem("fav", JSON.stringify(favorites));
      dragFavIdx = -1;
      renderFavs();
    });

    div.append(img, name, star);
    favList.appendChild(div);
  });
}

/* ===== RENDER GRID ===== */
function renderGrid(){
  if(!grid) return;
  const q = (searchIn ? searchIn.value : "").toLowerCase();
  grid.innerHTML = "";
  let count = 0;
  allChannels.forEach((ch, i) => {
    if(hidden.has(ch.url)) return;
    if(q && !ch.name.toLowerCase().includes(q)) return;
    makeCard(ch, i, grid);
    count++;
  });
  if(emptyState) emptyState.classList.toggle("show", count === 0 && allChannels.length > 0);
  // re-highlight the currently playing card
  if(currentIdx >= 0){
    const active = grid.querySelector('[data-idx="' + currentIdx + '"]');
    if(active) active.classList.add("active");
  }
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
    renderGrid();
  }
  btnCheck.disabled = false;
  btnCheck.querySelector("span:last-child").textContent = t("checkBtn");
}

if(btnCheck) btnCheck.onclick = checkAll;
if(btnReset) btnReset.onclick = () => { hidden.clear(); renderGrid(); };

/* ===== SEARCH ===== */
let searchTimer = null;
if(searchIn) searchIn.addEventListener("input", () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(renderGrid, 200);
});

/* ===== SOURCES ===== */
function getAllSources(){ return [...DEFAULT_SOURCES, ...sources]; }

function showEmptyState(){
  allChannels = [];
  currentIdx = -1;
  currentUrl = "";
  hidden.clear();
  video.pause();
  destroyHls();
  video.removeAttribute("src");
  video.load();
  clearTimeout(retryTimer);
  clearTimeout(stallTimer);
  if(grid) grid.innerHTML = "";
  if(nowName) nowName.textContent = t("noChannel");
  if(nowBar) nowBar.classList.remove("live");
  renderFavs();
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
      continue;
    }
    if(line.startsWith("#EXTINF")){
      const logo = line.match(/tvg-logo="([^"]+)"/);
      const tvgId = line.match(/tvg-id="([^"]+)"/);
      const nm = line.split(",").pop();
      cur = { name: nm, logo: logo ? logo[1] : "", url: "", tvgId: tvgId ? tvgId[1] : "" };
    } else if(line.startsWith("http") && cur){
      cur.url = line;
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
        const resp = await fetch(src.url);
        if(!resp.ok) throw new Error("HTTP " + resp.status);
        const text = await resp.text();
        result = parseM3U(text);
      }
      allChannels = allChannels.concat(result.channels);
      if(result.epgUrl) epgUrls.add(result.epgUrl);
    } catch(e){
      console.error("L\u1ED7i t\u1EA3i:", src.name || src.url, e);
      errors++;
    }
  }

  renderFavs();
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

    // Auto-play pinned channel
    if(pinnedUrl){
      const pi = allChannels.findIndex(c => c.url === pinnedUrl);
      if(pi >= 0) playByIndex(pi);
    }
  }

  // Load EPG data
  if(epgUrls.size > 0) loadEpgData([...epgUrls]);
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
  renderFavs();
  if(emptyState){
    emptyState.classList.add("show");
    emptyState.querySelector(".icon").textContent = "\uD83D\uDCFA";
    emptyState.querySelector("div:last-child").textContent = t("selectSource");
  }
}

/* ===== SCROLL TO TOP ===== */
const scrollBtn = document.getElementById("scrollTop");
if(scrollBtn){
  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("show", window.scrollY > 300);
  });
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ===== CINEMA MODE ===== */
const cinemaBtn = document.getElementById("cinemaBtn");
const cinemaOverlay = document.getElementById("cinemaOverlay");
let cinemaMode = false;

function applyCinemaMode(){
  if(cinemaOverlay) cinemaOverlay.classList.toggle("show", cinemaMode);
  if(cinemaBtn) cinemaBtn.classList.toggle("active", cinemaMode);
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
    btnUnmute.querySelector("span:last-child").textContent = t("sound");
    btnUnmute.title = t("sound");
  }
  if(btnPiP){
    btnPiP.querySelector("span:last-child").textContent = t("pip");
    btnPiP.title = t("pip");
  }
  if(btnFull){
    btnFull.querySelector("span:last-child").textContent = t("newTab");
    btnFull.title = t("newTab");
  }
  if(btnRetry){
    btnRetry.querySelector("span:last-child").textContent = t("reload");
    btnRetry.title = t("reload");
  }

  const favHeader = document.getElementById("favHeader");
  if(favHeader){
    const favSpan = favHeader.querySelector("span");
    if(favSpan) favSpan.textContent = t("favHeader").replace(/^[\u2B50\s]+/, "");
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
  if(cinemaBtn) cinemaBtn.title = t("cinemaMode");
  if(pinBtn) pinBtn.title = t("pinChannelTip");
  if(favBtn) favBtn.title = t("favChannel");
  if(hideBtn) hideBtn.title = t("hideChannel");

  // Re-render dynamic content
  renderSources();
  renderFavs();

  // Build lang menu
  buildLangMenu();
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
