export const LOCALE_OPTIONS = [
  { id: "en", label: "English", intl: "en-US" },
  { id: "zh-CN", label: "简体中文", intl: "zh-CN" },
  { id: "es", label: "Español", intl: "es-ES" },
  { id: "fr", label: "Français", intl: "fr-FR" },
  { id: "de", label: "Deutsch", intl: "de-DE" },
  { id: "pt-BR", label: "Português (Brasil)", intl: "pt-BR" },
  { id: "ru", label: "Русский", intl: "ru-RU" },
  { id: "ja", label: "日本語", intl: "ja-JP" },
  { id: "ko", label: "한국어", intl: "ko-KR" },
];

const TERM_ROWS = [
  ["Microsoft Rewards Dashboard", "Panel de Microsoft Rewards", "Tableau de bord Microsoft Rewards", "Microsoft Rewards-Dashboard", "Painel do Microsoft Rewards", "Панель Microsoft Rewards", "Microsoft Rewards ダッシュボード", "Microsoft Rewards 대시보드"],
  ["Rewards Dashboard", "Panel de Rewards", "Tableau de bord Rewards", "Rewards-Dashboard", "Painel do Rewards", "Панель Rewards", "Rewards ダッシュボード", "Rewards 대시보드"],
  ["🏆 Rewards Dashboard", "🏆 Panel de Rewards", "🏆 Tableau de bord Rewards", "🏆 Rewards-Dashboard", "🏆 Painel do Rewards", "🏆 Панель Rewards", "🏆 Rewards ダッシュボード", "🏆 Rewards 대시보드"],
  ["Skip to main content", "Ir al contenido principal", "Aller au contenu principal", "Zum Hauptinhalt", "Ir para o conteúdo principal", "Перейти к основному содержанию", "メインコンテンツへ移動", "주요 콘텐츠로 이동"],
  ["Connecting", "Conectando", "Connexion", "Verbindung wird hergestellt", "Conectando", "Подключение", "接続中", "연결 중"],
  ["Connecting…", "Conectando…", "Connexion…", "Verbindung wird hergestellt…", "Conectando…", "Подключение…", "接続中…", "연결 중…"],
  ["Theme", "Tema", "Thème", "Design", "Tema", "Тема", "テーマ", "테마"],
  ["Language", "Idioma", "Langue", "Sprache", "Idioma", "Язык", "言語", "언어"],
  ["Switch to dark mode", "Cambiar al modo oscuro", "Passer au mode sombre", "Zum dunklen Modus wechseln", "Mudar para o modo escuro", "Включить тёмную тему", "ダークモードに切り替え", "다크 모드로 전환"],
  ["Switch to light mode", "Cambiar al modo claro", "Passer au mode clair", "Zum hellen Modus wechseln", "Mudar para o modo claro", "Включить светлую тему", "ライトモードに切り替え", "라이트 모드로 전환"],
  ["Dashboard sections", "Secciones del panel", "Sections du tableau de bord", "Dashboard-Bereiche", "Seções do painel", "Разделы панели", "ダッシュボードのセクション", "대시보드 섹션"],
  ["Overview", "Resumen", "Aperçu", "Übersicht", "Visão geral", "Обзор", "概要", "개요"],
  ["Accounts", "Cuentas", "Comptes", "Konten", "Contas", "Учётные записи", "アカウント", "계정"],
  ["Logs", "Registros", "Journaux", "Protokolle", "Logs", "Журналы", "ログ", "로그"],
  ["Runs", "Ejecuciones", "Exécutions", "Läufe", "Execuções", "Запуски", "実行履歴", "실행 기록"],
  ["Schedule", "Programación", "Planification", "Zeitplan", "Agendamento", "Расписание", "スケジュール", "일정"],
  ["Config", "Configuración", "Configuration", "Konfiguration", "Configuração", "Настройки", "設定", "설정"],
  ["Diagnostics", "Diagnóstico", "Diagnostic", "Diagnose", "Diagnóstico", "Диагностика", "診断", "진단"],
  ["Idle", "Inactivo", "Inactif", "Leerlauf", "Ocioso", "Ожидание", "待機中", "대기 중"],
  ["Running", "En ejecución", "En cours", "Läuft", "Executando", "Выполняется", "実行中", "실행 중"],
  ["Starting", "Iniciando", "Démarrage", "Wird gestartet", "Iniciando", "Запуск", "開始中", "시작 중"],
  ["Stopping", "Deteniendo", "Arrêt", "Wird gestoppt", "Parando", "Остановка", "停止中", "중지 중"],
  ["Pending", "Pendiente", "En attente", "Ausstehend", "Pendente", "Ожидает", "保留中", "대기"],
  ["Done", "Completado", "Terminé", "Fertig", "Concluído", "Готово", "完了", "완료"],
  ["Error", "Error", "Erreur", "Fehler", "Erro", "Ошибка", "エラー", "오류"],
  ["Success", "Correcto", "Réussi", "Erfolgreich", "Sucesso", "Успешно", "成功", "성공"],
  ["Connected", "Conectado", "Connecté", "Verbunden", "Conectado", "Подключено", "接続済み", "연결됨"],
  ["Disconnected", "Desconectado", "Déconnecté", "Getrennt", "Desconectado", "Отключено", "切断", "연결 끊김"],
  ["Dashboard server unreachable", "Servidor del panel inaccesible", "Serveur du tableau de bord inaccessible", "Dashboard-Server nicht erreichbar", "Servidor do painel inacessível", "Сервер панели недоступен", "ダッシュボードサーバーに接続できません", "대시보드 서버에 연결할 수 없음"],
  ["Bot backend offline", "Backend del bot sin conexión", "Backend du bot hors ligne", "Bot-Backend offline", "Backend do bot offline", "Сервер бота не в сети", "Bot バックエンドはオフラインです", "봇 백엔드 오프라인"],
  ["Control API unavailable", "API de control no disponible", "API de contrôle indisponible", "Control API nicht verfügbar", "API de controle indisponível", "Control API недоступен", "Control API を利用できません", "Control API를 사용할 수 없음"],
  ["Start run", "Iniciar ejecución", "Démarrer", "Lauf starten", "Iniciar execução", "Запустить", "実行開始", "실행 시작"],
  ["Stop", "Detener", "Arrêter", "Stoppen", "Parar", "Остановить", "停止", "중지"],
  ["Restart", "Reiniciar", "Redémarrer", "Neu starten", "Reiniciar", "Перезапустить", "再起動", "다시 시작"],
  ["More actions", "Más acciones", "Plus d’actions", "Weitere Aktionen", "Mais ações", "Другие действия", "その他の操作", "추가 작업"],
  ["Force stop (SIGKILL)", "Forzar detención (SIGKILL)", "Forcer l’arrêt (SIGKILL)", "Beenden erzwingen (SIGKILL)", "Forçar parada (SIGKILL)", "Принудительно остановить (SIGKILL)", "強制停止 (SIGKILL)", "강제 중지 (SIGKILL)"],
  ["Shut down control API", "Apagar API de control", "Arrêter l’API de contrôle", "Control API herunterfahren", "Desligar API de controle", "Отключить Control API", "Control API を終了", "Control API 종료"],
  ["Summary", "Resumen", "Résumé", "Zusammenfassung", "Resumo", "Сводка", "サマリー", "요약"],
  ["Accounts tracked", "Cuentas seguidas", "Comptes suivis", "Verfolgte Konten", "Contas monitoradas", "Отслеживаемые учётные записи", "追跡アカウント", "추적 계정"],
  ["Combined balance", "Saldo combinado", "Solde total", "Gesamtguthaben", "Saldo combinado", "Общий баланс", "合計残高", "총 잔액"],
  ["Points earned last run", "Puntos de la última ejecución", "Points de la dernière exécution", "Punkte im letzten Lauf", "Pontos da última execução", "Баллы за последний запуск", "前回獲得ポイント", "마지막 실행 포인트"],
  ["Last run", "Última ejecución", "Dernière exécution", "Letzter Lauf", "Última execução", "Последний запуск", "前回の実行", "마지막 실행"],
  ["Accounts in error", "Cuentas con errores", "Comptes en erreur", "Fehlerhafte Konten", "Contas com erro", "Учётные записи с ошибками", "エラーのあるアカウント", "오류 계정"],
  ["Accounts Overview", "Resumen de cuentas", "Aperçu des comptes", "Kontenübersicht", "Visão geral das contas", "Обзор учётных записей", "アカウント概要", "계정 개요"],
  ["Timeline", "Cronología", "Chronologie", "Zeitleiste", "Linha do tempo", "Хронология", "タイムライン", "타임라인"],
  ["Heatmap", "Mapa de calor", "Carte thermique", "Heatmap", "Mapa de calor", "Тепловая карта", "ヒートマップ", "히트맵"],
  ["Points", "Puntos", "Points", "Punkte", "Pontos", "Баллы", "ポイント", "포인트"],
  ["Trend", "Tendencia", "Tendance", "Trend", "Tendência", "Тренд", "推移", "추세"],
  ["Today", "Hoy", "Aujourd’hui", "Heute", "Hoje", "Сегодня", "今日", "오늘"],
  ["Run only", "Ejecutar solo", "Exécuter uniquement", "Nur dieses Konto", "Executar apenas", "Запустить только", "このアカウントのみ実行", "이 계정만 실행"],
  ["Batch run", "Ejecución por lotes", "Exécution groupée", "Stapelverarbeitung", "Execução em lote", "Пакетный запуск", "一括実行", "일괄 실행"],
  ["Select all", "Seleccionar todo", "Tout sélectionner", "Alle auswählen", "Selecionar tudo", "Выбрать все", "すべて選択", "모두 선택"],
  ["Run selected", "Ejecutar seleccionadas", "Exécuter la sélection", "Auswahl starten", "Executar selecionadas", "Запустить выбранные", "選択項目を実行", "선택 항목 실행"],
  ["Configuration", "Configuración", "Configuration", "Konfiguration", "Configuração", "Конфигурация", "構成", "구성"],
  ["Enabled", "Activado", "Activé", "Aktiviert", "Ativado", "Включено", "有効", "사용"],
  ["Disabled", "Desactivado", "Désactivé", "Deaktiviert", "Desativado", "Отключено", "無効", "사용 안 함"],
  ["Yes", "Sí", "Oui", "Ja", "Sim", "Да", "はい", "예"],
  ["No", "No", "Non", "Nein", "Não", "Нет", "いいえ", "아니요"],
  ["None", "Ninguno", "Aucun", "Keine", "Nenhum", "Нет", "なし", "없음"],
  ["Cancel", "Cancelar", "Annuler", "Abbrechen", "Cancelar", "Отмена", "キャンセル", "취소"],
  ["Delete", "Eliminar", "Supprimer", "Löschen", "Excluir", "Удалить", "削除", "삭제"],
  ["Refresh", "Actualizar", "Actualiser", "Aktualisieren", "Atualizar", "Обновить", "更新", "새로 고침"],
  ["Download", "Descargar", "Télécharger", "Herunterladen", "Baixar", "Скачать", "ダウンロード", "다운로드"],
  ["Clear", "Limpiar", "Effacer", "Leeren", "Limpar", "Очистить", "クリア", "지우기"],
  ["Pause", "Pausar", "Pause", "Pausieren", "Pausar", "Пауза", "一時停止", "일시 중지"],
  ["Resume", "Reanudar", "Reprendre", "Fortsetzen", "Retomar", "Продолжить", "再開", "재개"],
  ["Search", "Buscar", "Rechercher", "Suchen", "Pesquisar", "Поиск", "検索", "검색"],
  ["Autoscroll", "Desplazamiento automático", "Défilement automatique", "Automatisch scrollen", "Rolagem automática", "Автопрокрутка", "自動スクロール", "자동 스크롤"],
  ["Live log", "Registro en vivo", "Journal en direct", "Live-Protokoll", "Log ao vivo", "Журнал в реальном времени", "ライブログ", "실시간 로그"],
  ["Live logs", "Registros en vivo", "Journaux en direct", "Live-Protokolle", "Logs ao vivo", "Журналы в реальном времени", "ライブログ", "실시간 로그"],
  ["All levels", "Todos los niveles", "Tous les niveaux", "Alle Stufen", "Todos os níveis", "Все уровни", "すべてのレベル", "모든 수준"],
  ["Level", "Nivel", "Niveau", "Stufe", "Nível", "Уровень", "レベル", "수준"],
  ["All", "Todo", "Tous", "Alle", "Todos", "Все", "すべて", "전체"],
  ["Points per day", "Puntos por día", "Points par jour", "Punkte pro Tag", "Pontos por dia", "Баллы за день", "日別ポイント", "일별 포인트"],
  ["Date range", "Intervalo de fechas", "Plage de dates", "Datumsbereich", "Intervalo de datas", "Диапазон дат", "期間", "날짜 범위"],
  ["Run history", "Historial de ejecuciones", "Historique des exécutions", "Laufverlauf", "Histórico de execuções", "История запусков", "実行履歴", "실행 기록"],
  ["Status", "Estado", "État", "Status", "Status", "Статус", "ステータス", "상태"],
  ["Started", "Inicio", "Démarré", "Gestartet", "Iniciado", "Начало", "開始", "시작"],
  ["Duration", "Duración", "Durée", "Dauer", "Duração", "Длительность", "所要時間", "소요 시간"],
  ["Gained", "Obtenidos", "Gagnés", "Erhalten", "Obtidos", "Получено", "獲得", "획득"],
  ["New total", "Nuevo total", "Nouveau total", "Neuer Gesamtwert", "Novo total", "Новый итог", "新しい合計", "새 합계"],
  ["Version", "Versión", "Version", "Version", "Versão", "Версия", "バージョン", "버전"],
  ["Automatic runs", "Ejecuciones automáticas", "Exécutions automatiques", "Automatische Läufe", "Execuções automáticas", "Автоматические запуски", "自動実行", "자동 실행"],
  ["Scheduler location", "Ubicación del programador", "Emplacement du planificateur", "Planer-Standort", "Local do agendador", "Расположение планировщика", "スケジューラーの場所", "스케줄러 위치"],
  ["This dashboard", "Este panel", "Ce tableau de bord", "Dieses Dashboard", "Este painel", "Эта панель", "このダッシュボード", "이 대시보드"],
  ["Bot container (Docker cron)", "Contenedor del bot (cron de Docker)", "Conteneur du bot (cron Docker)", "Bot-Container (Docker cron)", "Contêiner do bot (cron do Docker)", "Контейнер бота (Docker cron)", "Bot コンテナ (Docker cron)", "봇 컨테이너 (Docker cron)"],
  ["Cron expression", "Expresión cron", "Expression cron", "Cron-Ausdruck", "Expressão cron", "Выражение cron", "Cron 式", "Cron 표현식"],
  ["Save schedule", "Guardar programación", "Enregistrer la planification", "Zeitplan speichern", "Salvar agendamento", "Сохранить расписание", "スケジュールを保存", "일정 저장"],
  ["Discard changes", "Descartar cambios", "Annuler les modifications", "Änderungen verwerfen", "Descartar alterações", "Отменить изменения", "変更を破棄", "변경 취소"],
  ["Current state", "Estado actual", "État actuel", "Aktueller Status", "Estado atual", "Текущее состояние", "現在の状態", "현재 상태"],
  ["Next run", "Próxima ejecución", "Prochaine exécution", "Nächster Lauf", "Próxima execução", "Следующий запуск", "次回実行", "다음 실행"],
  ["Timezone", "Zona horaria", "Fuseau horaire", "Zeitzone", "Fuso horário", "Часовой пояс", "タイムゾーン", "시간대"],
  ["Not scheduled", "No programado", "Non planifié", "Nicht geplant", "Não agendado", "Не запланировано", "未設定", "예약되지 않음"],
  ["Settings", "Ajustes", "Paramètres", "Einstellungen", "Configurações", "Параметры", "設定", "설정"],
  ["Core", "Núcleo", "Principal", "Kern", "Principal", "Основные", "コア", "핵심"],
  ["Workers", "Procesos", "Workers", "Worker", "Workers", "Обработчики", "ワーカー", "워커"],
  ["Activities", "Actividades", "Activités", "Aktivitäten", "Atividades", "Действия", "アクティビティ", "활동"],
  ["Search settings", "Ajustes de búsqueda", "Paramètres de recherche", "Sucheinstellungen", "Configurações de pesquisa", "Настройки поиска", "検索設定", "검색 설정"],
  ["Experimental", "Experimental", "Expérimental", "Experimentell", "Experimental", "Экспериментальные", "試験機能", "실험 기능"],
  ["Logging", "Registro", "Journalisation", "Protokollierung", "Logs", "Журналирование", "ログ記録", "로깅"],
  ["Webhooks", "Webhooks", "Webhooks", "Webhooks", "Webhooks", "Вебхуки", "Webhook", "웹훅"],
  ["Other settings", "Otros ajustes", "Autres paramètres", "Weitere Einstellungen", "Outras configurações", "Другие параметры", "その他の設定", "기타 설정"],
  ["Save changes", "Guardar cambios", "Enregistrer", "Änderungen speichern", "Salvar alterações", "Сохранить изменения", "変更を保存", "변경 저장"],
  ["Reload from API", "Recargar desde API", "Recharger depuis l’API", "Von API neu laden", "Recarregar da API", "Перезагрузить из API", "API から再読み込み", "API에서 다시 불러오기"],
  ["Reveal secrets", "Mostrar secretos", "Afficher les secrets", "Geheimnisse anzeigen", "Mostrar segredos", "Показать секреты", "シークレットを表示", "비밀 표시"],
  ["Raw config", "Configuración sin procesar", "Configuration brute", "Rohkonfiguration", "Configuração bruta", "Исходная конфигурация", "未加工の設定", "원시 설정"],
  ["Session management", "Gestión de sesiones", "Gestion des sessions", "Sitzungsverwaltung", "Gerenciamento de sessões", "Управление сеансами", "セッション管理", "세션 관리"],
  ["Clear sessions", "Borrar sesiones", "Effacer les sessions", "Sitzungen löschen", "Limpar sessões", "Очистить сеансы", "セッションをクリア", "세션 지우기"],
  ["Error captures", "Capturas de error", "Captures d’erreur", "Fehleraufnahmen", "Capturas de erro", "Снимки ошибок", "エラーキャプチャ", "오류 캡처"],
  ["No data yet.", "Aún no hay datos.", "Aucune donnée pour le moment.", "Noch keine Daten.", "Ainda não há dados.", "Данных пока нет.", "まだデータがありません。", "아직 데이터가 없습니다."],
  ["No history yet", "Aún no hay historial", "Aucun historique", "Noch kein Verlauf", "Ainda não há histórico", "Истории пока нет", "履歴はまだありません", "아직 기록이 없습니다"],
  ["No accounts configured or observed yet.", "Aún no hay cuentas configuradas ni detectadas.", "Aucun compte configuré ou détecté.", "Noch keine Konten konfiguriert oder erkannt.", "Ainda não há contas configuradas ou detectadas.", "Настроенные или обнаруженные учётные записи отсутствуют.", "設定または検出されたアカウントはまだありません。", "구성되거나 감지된 계정이 없습니다."],
  ["No matching log lines.", "No hay líneas de registro coincidentes.", "Aucune ligne de journal correspondante.", "Keine passenden Protokollzeilen.", "Nenhuma linha de log correspondente.", "Совпадающих строк журнала нет.", "一致するログ行がありません。", "일치하는 로그 줄이 없습니다."],
  ["No runs recorded yet.", "Aún no hay ejecuciones registradas.", "Aucune exécution enregistrée.", "Noch keine Läufe aufgezeichnet.", "Ainda não há execuções registradas.", "Запусков пока нет.", "実行履歴はまだありません。", "아직 실행 기록이 없습니다."],
  ["Loading", "Cargando", "Chargement", "Wird geladen", "Carregando", "Загрузка", "読み込み中", "불러오는 중"],
  ["Add", "Añadir", "Ajouter", "Hinzufügen", "Adicionar", "Добавить", "追加", "추가"],
  ["Apply recommended filter", "Aplicar filtro recomendado", "Appliquer le filtre recommandé", "Empfohlenen Filter anwenden", "Aplicar filtro recomendado", "Применить рекомендуемый фильтр", "推奨フィルターを適用", "권장 필터 적용"],
];

const LOCALE_IDS = ["es", "fr", "de", "pt-BR", "ru", "ja", "ko"];

export const TRANSLATIONS = Object.fromEntries(
  LOCALE_IDS.map((locale, index) => [
    locale,
    Object.fromEntries(TERM_ROWS.map(([english, ...values]) => [english, values[index]])),
  ]),
);

const DYNAMIC_WORDS = {
  es: { justNow: "ahora mismo", ago: "hace", seconds: "s", minutes: "min", hours: "h", days: "días", accounts: "cuentas", points: "puntos", selected: "seleccionadas" },
  fr: { justNow: "à l’instant", ago: "il y a", seconds: "s", minutes: "min", hours: "h", days: "jours", accounts: "comptes", points: "points", selected: "sélectionnés" },
  de: { justNow: "gerade eben", ago: "vor", seconds: "Sek.", minutes: "Min.", hours: "Std.", days: "Tagen", accounts: "Konten", points: "Punkte", selected: "ausgewählt" },
  "pt-BR": { justNow: "agora", ago: "há", seconds: "s", minutes: "min", hours: "h", days: "dias", accounts: "contas", points: "pontos", selected: "selecionadas" },
  ru: { justNow: "только что", ago: "назад", seconds: "с", minutes: "мин", hours: "ч", days: "дн.", accounts: "учётных записей", points: "баллов", selected: "выбрано" },
  ja: { justNow: "たった今", ago: "前", seconds: "秒", minutes: "分", hours: "時間", days: "日", accounts: "アカウント", points: "ポイント", selected: "選択" },
  ko: { justNow: "방금", ago: "전", seconds: "초", minutes: "분", hours: "시간", days: "일", accounts: "개 계정", points: "포인트", selected: "선택됨" },
};

export function translateDynamic(locale, value) {
  const words = DYNAMIC_WORDS[locale];
  if (!words) return value;
  if (value === "just now") return words.justNow;

  let match = value.match(/^(\d+)([mhd]) ago$/);
  if (match) {
    const unit = match[2] === "m" ? words.minutes : match[2] === "h" ? words.hours : words.days;
    return locale === "ja" || locale === "ko"
      ? `${match[1]}${unit}${words.ago}`
      : locale === "ru"
        ? `${match[1]} ${unit} ${words.ago}`
        : `${words.ago} ${match[1]} ${unit}`;
  }

  match = value.match(/^(\d+) accounts$/);
  if (match) return `${match[1]} ${words.accounts}`;
  match = value.match(/^(.*) pts$/);
  if (match) return `${match[1]} ${words.points}`;
  match = value.match(/^(\d+)\/(\d+) selected$/);
  if (match) return `${match[1]}/${match[2]} ${words.selected}`;
  return value;
}

export function matchSupportedLocale(language) {
  const normalized = String(language || "").toLowerCase();
  if (normalized.startsWith("zh")) return "zh-CN";
  if (normalized.startsWith("pt")) return "pt-BR";
  return LOCALE_IDS.find((locale) => normalized === locale.toLowerCase() || normalized.startsWith(`${locale.toLowerCase()}-`)) || "en";
}

export function intlLocale(locale) {
  return LOCALE_OPTIONS.find((option) => option.id === locale)?.intl || "en-US";
}
