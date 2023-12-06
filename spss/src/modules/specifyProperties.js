function specifyProperties() {
    var ordPos = document.getElementById('ordPos').value;
    var paperSize = document.getElementById('paperSize').value;
    var pageCount = document.getElementById('pageCount').value;
    var doubleSided = document.getElementById('doubleSided').checked;

    // Tạo đối tượng để lưu thông số in
    var printOptions = {
        ordPos: ordPos,
        paperSize: paperSize,
        pageCount: pageCount,
        doubleSided: doubleSided,
    };

    // lưu trữ vào cơ sở dữ liệu
    savePrintOptions(printOptions);

    // Đóng modal
    // ('#printOptionsModal').modal('hide');
}

// Hàm gửi lên server để lưu vào dtb
function savePrintOptions(printOptions) {
    // Sử dụng fetch API để gửi dữ liệu lên server
    fetch('/savePrintOptions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(printOptions)
    })
}