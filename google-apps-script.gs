/**
 * Google Apps Script — приём заявок с сайта Face Body Code в Google Sheets.
 *
 * Колонки: Дата заявки | Имя | Телефон | Услуга | Дата записи | Время | Комментарий | Статус
 * Статус — выпадающий список: Новая / Подтверждено / Отказ (по умолчанию «Новая»).
 *
 * ОБНОВЛЕНИЕ СКРИПТА (если уже был развёрнут):
 * 1. Замени код на этот, сохрани (Ctrl+S)
 * 2. Начать развёртывание → Управлять развёртываниями → ✏️ (изменить)
 *    → Версия: «Новая версия» → Развернуть  (URL останется прежним)
 * 3. В таблице очисти старый лист «Заявки» (или удали его) — новые заголовки
 *    создадутся автоматически при первой заявке.
 */

var HEADERS = [
  'Дата заявки',
  'Имя',
  'Телефон',
  'Услуга',
  'Дата записи',
  'Время',
  'Комментарий',
  'Статус',
];

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Заявки') || ss.insertSheet('Заявки');

    // Заголовки при первом запуске
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    }

    var p = e.parameter;
    sheet.appendRow([
      new Date(),        // Дата заявки
      p.name || '',      // Имя
      p.phone || '',     // Телефон
      p.service || '',   // Услуга
      p.date || '',      // Дата записи
      p.time || '',      // Время
      p.comment || '',   // Комментарий
      'Новая',           // Статус
    ]);

    // Выпадающий список для колонки «Статус» в новой строке
    var row = sheet.getLastRow();
    var rule = SpreadsheetApp.newDataValidation()
      .requireValueInList(['Новая', 'Подтверждено', 'Отказ'], true)
      .setAllowInvalid(false)
      .build();
    sheet.getRange(row, HEADERS.length).setDataValidation(rule);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
