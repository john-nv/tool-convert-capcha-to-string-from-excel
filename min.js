const _0x1e975d = _0xdda7; (function (_0x173d67, _0x57cec0) { const _0x29d209 = _0xdda7, _0x15fd7c = _0x173d67(); while (!![]) { try { const _0x21405f = -parseInt(_0x29d209(0x1b8)) / 0x1 + parseInt(_0x29d209(0x1d8)) / 0x2 * (parseInt(_0x29d209(0x1ac)) / 0x3) + -parseInt(_0x29d209(0x1b3)) / 0x4 * (-parseInt(_0x29d209(0x1d7)) / 0x5) + -parseInt(_0x29d209(0x1d0)) / 0x6 * (parseInt(_0x29d209(0x1d5)) / 0x7) + -parseInt(_0x29d209(0x1c2)) / 0x8 * (-parseInt(_0x29d209(0x1b5)) / 0x9) + parseInt(_0x29d209(0x1db)) / 0xa + -parseInt(_0x29d209(0x1be)) / 0xb; if (_0x21405f === _0x57cec0) break; else _0x15fd7c['push'](_0x15fd7c['shift']()); } catch (_0x526bc9) { _0x15fd7c['push'](_0x15fd7c['shift']()); } } }(_0x2698, 0x27276)); function _0x2698() { const _0x5f0d06 = ['Đầu\x20vào\x20không\x20đạt\x20tiêu\x20chuẩn', 'fileInput', '\x20=>\x20', '8PALVoP', 'log', 'read', 'sort', 'getElementById', 'Đọc\x20file', 'name', 'Chương\x20trình\x20gặp\x20lỗi\x20vui\x20lòng\x20tải\x20lại\x20trang', 'SheetNames', '#status-sys', 'test', 'MCtIgMcUvxfhiQ9leBcJfg==gZrxzgukZKiHQlBt', 'media', 'createObjectURL', '36bzafaN', 'result', 'blob', 'Thứ\x20tự\x20cột\x20phải\x20chỉ\x20chứa\x20số\x20không\x20có\x20chữ\x20cái\x20và\x20ký\x20tự\x20đặc\x20biệt.', 'replace', '206885AubFfX', 'application/octet-stream', '594075ZIfOzw', '70706SPEfPB', 'text', 'POST', '3121730VjlxTM', 'onload', '#btn-start', 'number', 'val', 'image', 'Lưu\x20file\x20đã\x20thay\x20đổi', '#status-status', 'error', 'Tool\x20sẵn\x20sàng', 'END_POINT', 'Không\x20có\x20file', 'Gồm\x20có\x20', 'readAsArrayBuffer', '\x0a\x20=>\x20', '#indexCol', 'disabled', 'newFile.xlsx', 'Lấy\x20thông\x20số\x20cần\x20cập\x20nhật', 'type', 'utils', '15EXdzun', 'message', 'Cập\x20nhật\x20thành\x20công', '#nameCol', 'length', 'toUpperCase', 'prop', '8jEAfNb', '\x20hình\x20ảnh', '2696202pAPNai', 'array', 'write', '230679FZdkoW', 'Tuân\x20thủ\x20các\x20điều\x20kiện\x20sau\x20\x0a-\x20Chữ\x20cái\x20trước\x20số\x20\x0a-\x20Có\x20chữ\x20và\x20số\x0a-\x20Phải\x20theo\x20định\x20dạng\x20cột\x20bạn\x20muốn\x20thay\x20đổi\x20dữ\x20liệu\x20\x0a-\x20ví\x20dụ\x20A1,\x20AB1,\x20ABC123\x20....\x0a-\x20Ít\x20nhất\x202\x20kí\x20tự', 'json', 'append', 'reload', 'Sau\x20120\x20giây\x20sau\x20trang\x20sẽ\x20tự\x20động\x20làm\x20mới\x20hoặc\x20bạn\x20có\x20thể\x20tải\x20lại\x20trang', '5035393kQPZDQ']; _0x2698 = function () { return _0x5f0d06; }; return _0x2698(); } const KEY = { 'KEY_1': _0x1e975d(0x1cd) }, END_POINT_API = { 'END_POINT': 'https://api.api-ninjas.com/v1/imagetotext' }, RULE_INPUT_TOOL = _0x1e975d(0x1b9); let listPhone = [], file; logSystem(_0x1e975d(0x1e4)); async function start(_0x93bae2) { const _0x16aa3e = _0x1e975d; try { logSystem('Lấy\x20dữ\x20liệu\x20hình\x20ảnh\x20thành\x20công'), logSystem(_0x16aa3e(0x1e7) + _0x93bae2['length'] + _0x16aa3e(0x1b4)); for (let _0x566d56 = 0x0; _0x566d56 < _0x93bae2['length']; _0x566d56++) { const _0x2d4cf7 = await fetch(_0x93bae2[_0x566d56]), _0x25ffaa = await _0x2d4cf7[_0x16aa3e(0x1d2)](); let _0x553d5d = new FormData(); _0x553d5d[_0x16aa3e(0x1bb)](_0x16aa3e(0x1e0), _0x25ffaa, _0x566d56 + '.png'); const _0x3339fd = await fetch(END_POINT_API[_0x16aa3e(0x1e5)], { 'method': _0x16aa3e(0x1da), 'headers': { 'X-Api-Key': KEY['KEY_1'] }, 'body': _0x553d5d }); let _0x497894 = await _0x3339fd[_0x16aa3e(0x1ba)](); _0x497894 = sumTexts(_0x497894), logSystem(_0x566d56 + 0x1 + _0x16aa3e(0x1c1) + _0x497894), logStatus(_0x497894), console[_0x16aa3e(0x1c3)](_0x566d56 + 0x1 + _0x16aa3e(0x1c1) + _0x497894), listPhone['push'](_0x497894), logSystem('Đẩy\x20vào\x20bộ\x20nhớ\x20để\x20chuẩn\x20bị\x20thay\x20đổi'); } saveDataOnChange(); } catch (_0x45bc86) { logSystem(_0x16aa3e(0x1c9)), logSystem(_0x45bc86[_0x16aa3e(0x1ad)]), console[_0x16aa3e(0x1e3)](_0x45bc86); } } function sumTexts(_0x14e5c7) { const _0x33cb7c = _0x1e975d; let _0xafc91b = ''; for (let _0x97cd4f = 0x0; _0x97cd4f < _0x14e5c7[_0x33cb7c(0x1b0)]; _0x97cd4f++) { _0xafc91b = _0xafc91b + _0x14e5c7[_0x97cd4f][_0x33cb7c(0x1d9)]; } return _0xafc91b; } function _0xdda7(_0x1890d0, _0x38bfd3) { const _0x269815 = _0x2698(); return _0xdda7 = function (_0xdda778, _0x2e368b) { _0xdda778 = _0xdda778 - 0x1aa; let _0x4b2c24 = _0x269815[_0xdda778]; return _0x4b2c24; }, _0xdda7(_0x1890d0, _0x38bfd3); } async function readExcel(_0xc85db6) { const _0x49b0b9 = _0x1e975d; !_0xc85db6 && (alert(_0x49b0b9(0x1e6)), logSystem(_0x49b0b9(0x1e6))); logSystem(_0x49b0b9(0x1c7)); const _0x270c17 = new ExcelJS['Workbook'](), _0x43e01a = await _0x270c17['xlsx']['load'](_0xc85db6), _0x41c373 = sortObjectsByNumber(_0x43e01a[_0x49b0b9(0x1ce)]); let _0x2e4d25 = []; for (const _0x26894a of _0x41c373) { const _0xced0b = _0x26894a['buffer'], _0x1f4a47 = new Blob([_0xced0b], { 'type': _0x26894a[_0x49b0b9(0x1aa)] }), _0x3e6e52 = URL[_0x49b0b9(0x1cf)](_0x1f4a47); _0x2e4d25['push'](_0x3e6e52); } logSystem('Đọc\x20file\x20xong'), start(_0x2e4d25); } function sortObjectsByNumber(_0x488cfc) { const _0x3abd7f = _0x1e975d, _0x49910a = _0x488cfc['map'](_0x21f481 => { const _0x3a7de1 = _0xdda7, _0x9f1b22 = parseInt(_0x21f481[_0x3a7de1(0x1c8)][_0x3a7de1(0x1d4)](/\D/g, '')); return { ..._0x21f481, 'number': _0x9f1b22 }; }); return _0x49910a[_0x3abd7f(0x1c5)]((_0x3ce672, _0x116ec3) => _0x3ce672[_0x3abd7f(0x1de)] - _0x116ec3[_0x3abd7f(0x1de)]), _0x49910a; } function run() { const _0xf8960f = _0x1e975d; validateInput($(_0xf8960f(0x1af))[_0xf8960f(0x1df)](), $(_0xf8960f(0x1ea))[_0xf8960f(0x1df)]()); } function validateInput(_0x3e6e41, _0x1eb05e) { const _0x26d2ef = _0x1e975d, _0x52478d = /^[a-zA-Z]+$/, _0x540d9b = /^[0-9]+$/; if (!_0x52478d[_0x26d2ef(0x1cc)](_0x3e6e41)) alert('Tên\x20cột\x20phải\x20chỉ\x20chứa\x20chữ\x20cái\x20không\x20có\x20số\x20và\x20ký\x20tự\x20đặc\x20biệt.'), alert(RULE_INPUT_TOOL), logSystem('Đầu\x20vào\x20không\x20đạt\x20tiêu\x20chuẩn'); else { if (!_0x540d9b[_0x26d2ef(0x1cc)](_0x1eb05e)) alert(_0x26d2ef(0x1d3)), alert(RULE_INPUT_TOOL), logSystem(_0x26d2ef(0x1bf)); else { $(_0x26d2ef(0x1dd))[_0x26d2ef(0x1b2)](_0x26d2ef(0x1eb), !![]); const _0x281aae = document[_0x26d2ef(0x1c6)](_0x26d2ef(0x1c0))['files'][0x0]; file = _0x281aae, readExcel(_0x281aae); } } } function saveDataOnChange() { const _0xaf71e0 = _0x1e975d; logSystem(_0xaf71e0(0x1ed)); let _0x5b5af9 = document[_0xaf71e0(0x1c6)](_0xaf71e0(0x1c0)), _0x536f69 = $('#nameCol')[_0xaf71e0(0x1df)](), _0x4008e0 = $('#indexCol')[_0xaf71e0(0x1df)](), _0x4b0e2b = _0x5b5af9['files'][0x0], _0x103d55 = new FileReader(); _0x103d55[_0xaf71e0(0x1dc)] = function (_0x4c68cf) { const _0x40e3cb = _0xaf71e0; let _0x470de8 = new Uint8Array(_0x4c68cf['target'][_0x40e3cb(0x1d1)]), _0x122b9b = XLSX[_0x40e3cb(0x1c4)](_0x470de8, { 'type': _0x40e3cb(0x1b6) }), _0x3b70a6 = _0x122b9b[_0x40e3cb(0x1ca)][0x0], _0x65796d = _0x122b9b['Sheets'][_0x3b70a6], _0x288224 = listPhone; for (let _0x1a4292 = 0x0; _0x1a4292 < _0x288224['length']; _0x1a4292++) { let _0x44f76e = String(_0x536f69[_0x40e3cb(0x1b1)]()) + String(Number(_0x4008e0) + _0x1a4292); console[_0x40e3cb(0x1c3)](String(_0x536f69[_0x40e3cb(0x1b1)]())), console[_0x40e3cb(0x1c3)](String(Number(_0x4008e0) + _0x1a4292)), logSystem(_0x44f76e + _0x40e3cb(0x1c1) + _0x288224[_0x1a4292]), _0x65796d[_0x44f76e] = { 'v': _0x288224[_0x1a4292] }; } logSystem(_0x40e3cb(0x1ae)); let _0x497220 = XLSX[_0x40e3cb(0x1ab)]['book_new'](); XLSX[_0x40e3cb(0x1ab)]['book_append_sheet'](_0x497220, _0x65796d, _0x3b70a6), logSystem(_0x40e3cb(0x1e1)); let _0x36a4a7 = XLSX[_0x40e3cb(0x1b7)](_0x497220, { 'type': _0x40e3cb(0x1b6), 'bookType': 'xlsx' }); saveAs(new Blob([_0x36a4a7], { 'type': _0x40e3cb(0x1d6) }), _0x40e3cb(0x1ec)); }, _0x103d55[_0xaf71e0(0x1e8)](_0x4b0e2b), reset(); } function logSystem(_0xa9a5a) { const _0x57c592 = _0x1e975d; $(_0x57c592(0x1cb))[_0x57c592(0x1bb)](_0x57c592(0x1e9) + _0xa9a5a); } function logStatus(_0x235097) { const _0x6f0f79 = _0x1e975d; $(_0x6f0f79(0x1e2))[_0x6f0f79(0x1bb)]('\x0a' + _0x235097); } function reset() { const _0x38ee9b = _0x1e975d; alert(_0x38ee9b(0x1bd)), setTimeout(function () { const _0x4cf31d = _0x38ee9b; location[_0x4cf31d(0x1bc)](); }, 0x1d4c0); }