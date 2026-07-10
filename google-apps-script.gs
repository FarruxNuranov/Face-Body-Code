/**
 * Google Apps Script — приём заявок с сайта Face Body Code в Google Sheets
 * + красивое оформление (применяется к колонкам целиком, новые строки стилизуются сами).
 *
 * Колонки: Дата заявки | Имя | Телефон | Направление | Услуга | Цена |
 *          Дата записи | Время | Комментарий | Статус
 *
 * ЧТО СДЕЛАТЬ (форматирование НЕ требует развёртывания!):
 * 1. Вставь код, Ctrl+S
 * 2. Список функций вверху → выбери «formatNow» → ▶ Выполнить (разреши доступ)
 *    → таблица оформится, и новые заявки будут стилизоваться автоматически.
 * НИКАКИХ новых развёртываний создавать НЕ нужно — сайт уже подключён к рабочему.
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
var MAXROW = 1000; // на сколько строк вперёд применяем оформление

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Заявки') || ss.insertSheet('Заявки');

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      formatSheet(sheet);
    }

    var p = e.parameter;
    sheet.appendRow([
      new Date(), p.name || '', p.phone || '', p.direction || '',
      p.service || '', p.price || '', p.date || '', p.time || '',
      p.comment || '', 'Новая',
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

// Запусти вручную (▶ Выполнить) — оформит таблицу и все будущие строки
function formatNow() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Заявки') || ss.insertSheet('Заявки');
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  formatSheet(sheet);
}

function formatSheet(sheet) {
  var numCols = HEADERS.length;

  // Ширины колонок
  for (var c = 0; c < numCols; c++) {
    sheet.setColumnWidth(c + 1, WIDTHS[c]);
  }

  // Заголовок
  sheet.getRange(1, 1, 1, numCols)
    .setBackground('#2a221f').setFontColor('#ffffff').setFontWeight('bold')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet.setRowHeight(1, 38);
  sheet.setFrozenRows(1);

  // Данные (строки 2..MAXROW — чтобы новые заявки тоже были оформлены)
  var data = sheet.getRange(2, 1, MAXROW - 1, numCols);
  data.setVerticalAlignment('middle').setWrap(true).setFontColor('#3e332e');

  // Чересполосица (убираем старую, чтобы не дублировалась)
  var bandings = sheet.getBandings();
  for (var i = 0; i < bandings.length; i++) bandings[i].remove();
  data.applyRowBanding(SpreadsheetApp.BandingTheme.LIGHT_GREY, false, false);

  // Колонка «Статус»: выпадающий список + цвета
  var statusRange = sheet.getRange(2, numCols, MAXROW - 1, 1);
  statusRange.setDataValidation(
    SpreadsheetApp.newDataValidation()
      .requireValueInList(['Новая', 'Подтверждено', 'Отказ'], true)
      .setAllowInvalid(false).build()
  );
  statusRange.setHorizontalAlignment('center').setFontWeight('bold');

  sheet.setConditionalFormatRules([
    SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo('Подтверждено')
      .setBackground('#d9ead3').setFontColor('#274e13').setRanges([statusRange]).build(),
    SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo('Отказ')
      .setBackground('#f4cccc').setFontColor('#990000').setRanges([statusRange]).build(),
    SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo('Новая')
      .setBackground('#fff2cc').setFontColor('#7f6000').setRanges([statusRange]).build(),
  ]);
}
