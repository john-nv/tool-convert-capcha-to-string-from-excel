// key
const KEY = { KEY_1: 'MCtIgMcUvxfhiQ9leBcJfg==gZrxzgukZKiHQlBt' }



const END_POINT_API = { END_POINT: 'https://api.api-ninjas.com/v1/imagetotext' }
const RULE_INPUT_TOOL = `Tuân thủ các điều kiện sau 
- Chữ cái trước số 
- Có chữ và số
- Phải theo định dạng cột bạn muốn thay đổi dữ liệu 
- ví dụ A1, AB1, ABC123 ....
- Ít nhất 2 kí tự`
let listPhone = []
let file

logSystem('Tool sẵn sàng')
async function start(imageUrls) {
  try {
    logSystem('Lấy dữ liệu hình ảnh thành công')
    logSystem(`Gồm có ${imageUrls.length} hình ảnh`)
    for (let i = 0; i < imageUrls.length; i++) {
      const response = await fetch(imageUrls[i]);
      const blob = await response.blob();
      let formData = new FormData();
      formData.append('image', blob, `${i}.png`);

      const apiResponse = await fetch(END_POINT_API.END_POINT, {
        method: 'POST',
        headers: {
          'X-Api-Key': KEY.KEY_1,
        },
        body: formData,
      });
      let result = await apiResponse.json();

      result = sumTexts(result)
      logSystem(i + 1 + ' => ' + result)
      logStatus(result)
      console.log(i + 1 + ' => ' + result);
      listPhone.push(result)
      logSystem('Đẩy vào bộ nhớ để chuẩn bị thay đổi')
    }
    saveDataOnChange()
  } catch (error) {
    logSystem('Chương trình gặp lỗi vui lòng tải lại trang')
    logSystem(error.message)
    console.error(error);
  }
}

// convert chu
function sumTexts(arr) {
  let string = '';
  for (let i = 0; i < arr.length; i++) {
    string = string + arr[i]['text']
  }
  return string
}

// doc file
async function readExcel(fileE) {
  if (!fileE) {
    alert('Không có file')
    logSystem('Không có file')
  }
  logSystem('Đọc file')
  const workbook = new ExcelJS.Workbook();
  const file = await workbook.xlsx.load(fileE);
  const sort_fileMedia = sortObjectsByNumber(file.media);

  let arrImageData = [];

  for (const media of sort_fileMedia) {
    const buffer = media.buffer;
    const blob = new Blob([buffer], { type: media.type });
    const imageURL = URL.createObjectURL(blob);
    arrImageData.push(imageURL);
  }

  logSystem('Đọc file xong')
  start(arrImageData)
}

// loai bo chu cai trong truong name va chuyen no thanh chu so va xap xep lai
function sortObjectsByNumber(arr) {
  const sortedArr = arr.map(obj => {
    const number = parseInt(obj.name.replace(/\D/g, ''));
    return { ...obj, number };
  });

  sortedArr.sort((a, b) => a.number - b.number);

  return sortedArr;
}

// click
function run() {
  validateInput($('#nameCol').val(), $('#indexCol').val())
}

function validateInput(nameCol, indexCol) {
  const regexString = /^[a-zA-Z]+$/;
  const regexNumber = /^[0-9]+$/;

  if (!regexString.test(nameCol)) {
    alert("Tên cột phải chỉ chứa chữ cái không có số và ký tự đặc biệt.");
    alert(RULE_INPUT_TOOL)
    logSystem('Đầu vào không đạt tiêu chuẩn');
  } else if (!regexNumber.test(indexCol)) {
    alert("Thứ tự cột phải chỉ chứa số không có chữ cái và ký tự đặc biệt.");
    alert(RULE_INPUT_TOOL)
    logSystem('Đầu vào không đạt tiêu chuẩn');
  } else {
    $('#btn-start').prop('disabled', true);
    const imageFile = document.getElementById('fileInput').files[0];
    file = imageFile;
    readExcel(imageFile);
  }
}

// ghi de file va luu
function saveDataOnChange() {
  logSystem('Lấy thông số cần cập nhật')
  let fileInput = document.getElementById('fileInput');
  let nameCol = $('#nameCol').val();
  let indexCol = $('#indexCol').val();
  let file = fileInput.files[0];
  let reader = new FileReader();
  reader.onload = function (e) {
    let data = new Uint8Array(e.target.result);
    let workbook = XLSX.read(data, { type: 'array' });

    // Lấy sheet đầu tiên
    let sheetName = workbook.SheetNames[0];
    let worksheet = workbook.Sheets[sheetName];

    // Mảng dữ liệu mới
    let newData = listPhone;
    // vi tri update
    for (let i = 0; i < newData.length; i++) {
      let indexUpdate = String(nameCol.toUpperCase()) + String(Number(indexCol) + i)
      console.log(String(nameCol.toUpperCase()))
      console.log(String(Number(indexCol) + i))
      logSystem(`${indexUpdate} => ${newData[i]}`);
      worksheet[indexUpdate] = { v: newData[i] };
    }
    logSystem('Cập nhật thành công')
    // return
    // Tạo workbook mới
    let newWorkbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(newWorkbook, worksheet, sheetName);

    logSystem('Lưu file đã thay đổi')
    // Xuất file mới
    let newFileData = XLSX.write(newWorkbook, { type: 'array', bookType: 'xlsx' });
    saveAs(new Blob([newFileData], { type: 'application/octet-stream' }), 'newFile.xlsx');
  };
  reader.readAsArrayBuffer(file);
  reset()
}

function logSystem(text) {
  $('#status-sys').append(`\n => ${text}`)
}

function logStatus(text) {
  $('#status-status').append(`\n${text}`)
}

function reset() {
  alert('Sau 120 giây sau trang sẽ tự động làm mới hoặc bạn có thể tải lại trang')
  setTimeout(function () {
    location.reload();
  }, 120000);
}