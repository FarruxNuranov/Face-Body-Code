/**
 * Google Apps Script — приём заявок с сайта Face Body Code в Google Sheets
 * + красивое оформление таблицы.
 *
 * Колонки: Дата заявки | Имя | Телефон | Направление | Услуга | Цена |
 *          Дата записи | Время | Комментарий | Статус
 * Статус — выпадающий список: Новая / Подтверждено / Отказ, с цветами.
 *
 * ПОСЛЕ ВСТАВКИ КОДА:
 * 1. Ctrl+S (сохранить)
 * 2. Чтобы сразу оформить текущую таблицу — Выполнить → выбери «formatNow» → Выполнить
 * 3. Чтобы новые заявки тоже оформлялись — переразверни:
 *    Начать развёртывание → Управлять развёртываниями → ✏️ → Версия «Новая версия» → Развернуть
 *    (редактируй существующее развёртывание — URL не изменится)
 */

var HEADERS = [
  'Дата заявки',
  'Имя',
  'Телефон',
  'Направление',
  'Услуга',
  'Цена',
  'Дата записи',
  'Время',
  'Комментарий',
  'Статус',
];

var WIDTHS = [155, 150, 130, 155, 250, 95, 120, 80, 240, 130];

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Заявки') || ss.insertSheet('Заявки');

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    var p = e.parameter;
    sheet.appendRow([
      new Date(),          // Дата заявки
      p.name || '',        // Имя
      p.phone || '',       // Телефон
      p.direction || '',   // Направление
      p.service || '',     // Услуга
      p.price || '',       // Цена
      p.date || '',        // Дата записи
      p.time || '',        // Время
      p.comment || '',     // Комментарий
      'Новая',             // Статус
    ]);

    formatSheet(sheet);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Запусти вручную (Выполнить), чтобы оформить уже существующую таблицу
function formatNow() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Заявки');
  if (sheet) formatSheet(sheet);
}

function formatSheet(sheet) {
  var numCols = HEADERS.length;
  var lastRow = sheet.getLastRow();

  // Ширины колонок
  for (var c = 0; c < numCols; c++) {
    sheet.setColumnWidth(c + 1, WIDTHS[c]);
  }

  // Заголовок
  sheet.getRange(1, 1, 1, numCols)
    .setBackground('#2a221f')
    .setFontColor('#ffffff')
    .setFontWeight('bold')
    .setHorizontalAlignment('center')
    .setVerticalAlignment('middle');
  sheet.setRowHeight(1, 38);
  sheet.setFrozenRows(1);

  if (lastRow >= 2) {
    var data = sheet.getRange(2, 1, lastRow - 1, numCols);
    data.setVerticalAlignment('middle').setWrap(true).setFontColor('#3e332e');

    // Чересполосица (сначала убираем старую, чтобы не дублировалась)
    var bandings = sheet.getBandings();
    for (var i = 0; i < bandings.length; i++) bandings[i].remove();
    data.applyRowBanding(SpreadsheetApp.BandingTheme.LIGHT_GREY, false, false);

    // Валидация + цвета для колонки «Статус»
    var statusRange = sheet.getRange(2, numCols, lastRow - 1, 1);
    var rule = SpreadsheetApp.newDataValidation()
      .requireValueInList(['Новая', 'Подтверждено', 'Отказ'], true)
      .setAllowInvalid(false)
      .build();
    statusRange.setDataValidation(rule);
    statusRange.setHorizontalAlignment('center').setFontWeight('bold');

    var rules = [
      SpreadsheetApp.newConditionalFormatRule()
        .whenTextEqualTo('Подтверждено')
        .setBackground('#d9ead3').setFontColor('#274e13')
        .setRanges([statusRange]).build(),
      SpreadsheetApp.newConditionalFormatRule()
        .whenTextEqualTo('Отказ')
        .setBackground('#f4cccc').setFontColor('#990000')
        .setRanges([statusRange]).build(),
      SpreadsheetApp.newConditionalFormatRule()
        .whenTextEqualTo('Новая')
        .setBackground('#fff2cc').setFontColor('#7f6000')
        .setRanges([statusRange]).build(),
    ];
    sheet.setConditionalFormatRules(rules);
  }
}
