function generateReport() {
    let emplList = document.querySelectorAll('table tbody tr');
    let cols = document.querySelectorAll('table thead tr th input');
    let area = document.getElementById('output');

    let report = [];

    for (let i = 0; i < emplList.length; i++) {
        let emp = {};
        
        for (let c = 0; c < cols.length; c++) {
            if (cols[c].checked) {
                let name = cols[c].name;
                let value = emplList[i].children[c].textContent;
                emp[name] = value;
            };
        };
        
        report.push(emp);
    };

    let result = JSON.stringify(report, 0, 2);
    area.value = result;
};