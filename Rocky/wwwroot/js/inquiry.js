var dataTable;

$(document).ready(function () {
    loadDataTable()
});

function loadDataTable() {
    dataTable = $("#tblData").DataTable({
        "ajax": {
            "url": "/inquiry/GetInquiryList"
        },
        "columns": [
            { "data": "id", "width": "10%" },
            { "data": "fullName", "width": "15%" },
            { "data": "phoneNumber", "width": "15%" },
            { "data": "email", "width": "15%" },
            {
                "data": "id",
                "render": function (data) {
                    return `
                        <div class="text-center">
                            <a href="/Inquiry/Details/${data}" class="btn btn-success text-white" style="cursor:pointer">
                                <i class="fas fa-edit"></i>
                            </a>
                        </div>
                    `;
                },
                "width": "5%"
            }
        ]
    });
}