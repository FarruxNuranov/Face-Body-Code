/**
 * Google Apps Script — приём заявок с сайта Face Body Code в Google Sheets.
 *
 * УСТАНОВКА:
 * 1. Создай Google-таблицу (sheets.new)
 * 2. Расширения → Apps Script
 * 3. Удали код по умолчанию, вставь этот, сохрани (Ctrl+S)
 * 4. Развернуть → Новое развёртывание → тип «Веб-приложение»
 *      - Запуск от имени: «Я»
 *      - У кого есть доступ: «Все»
 * 5. Разверни, подтверди доступ (Authorize)
 * 6. Скопируй URL веб-приложения (заканчивается на /exec)
 * 7. Вставь этот URL в src/config.js → SHEETS_URL
 */

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Заявки') || ss.insertSheet('Заявки');

    // Заголовки при первом запуске
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Дата', 'Имя', 'Телефон', 'Услуга', 'Комментарий']);
    }

    var p = e.parameter;
    sheet.appendRow([
      new Date(),
      p.name || '',
      p.phone || '',
      p.service || '',
      p.comment || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
