let tableData = {};
let pokemonList = [];
let allData = {};
let version = "";
const select = document.getElementById('pokemon-select');

window.onload = async () => {
    await getData();
}

//fetch取得本地json
async function getData() {
    try {
        const response = await fetch('./data/gaole.xlsx');
        const buffer = await response.arrayBuffer();
        const workbook = XLSX.read(buffer, { type: 'buffer' });
        workbook.SheetNames.forEach(sheetName => {
            const sheet = workbook.Sheets[sheetName];
            const data = XLSX.utils.sheet_to_json(sheet);
            addOption(sheetName);
            allData[sheetName] = data;
            version = sheetName;
        });
        setTableData();
    } catch (error) {
        console.error(error);
    }
}

function setTableData() {
    removeSideBarList();
    tableData = allData[version];
    onloadTable();
    onloadSideBar();
    loadingComplete();
}

select.addEventListener('change', function() {
    const selectedValue = select.value;
    console.log('選中的選項是：' + selectedValue);
    version = selectedValue;
    setTableData();
});

function addOption(name) {
    const option = document.createElement('option');
    option.value = `${name}`;
    option.textContent = `${name}`;
    option.selected = true; 

    select.appendChild(option);
}

function loadingComplete() {
    document.getElementById('loading').style.display = "none";
    eventListener();
}

function eventListener() {
    
    const inputs = document.querySelectorAll('.form-check-input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("click", function() {
            var name = inputs[i].value
            if (pokemonList.find(e => e == `${name}`) == undefined) {
                pokemonList.push(name);
            } else {
                pokemonList.splice(pokemonList.indexOf(name), 1);
            }

            var fields = document.getElementsByClassName(name);
            for (let i = 0; i< fields.length; i++ )
            {
                fields[i].classList.toggle('pick');
            }
        });
    }
}

function onloadTable() {
    var table = document.getElementById("pokemonTable");
    var htmlData = '';
    var number = tableData.length;
    for(var i = 0; i < tableData.length; i++){
        var row = tableData[i];
        var keys = Object.keys(row)
        const rowData = [];
        for (let j = 0; j < keys.length; j++) {
            const arr = row[keys[j]].split("-");
            const star = arr[0];
            const name = arr[1];
            const nClass = `${arr[0]}-${arr[1]}`
            const lucky = arr[2] == "R" ? "lucky" : "";
            const size = star != 5 && name.length > 4 ? 12 : 16;
            const pokemonData = `<td class="pokemon ${nClass} star-${star} ${lucky}">${
                star != 5 ? star + "-" : ""
            }<span class="font-${size}">${name}</span></td>`;
            rowData.push(pokemonData);
        }
        const tableRow = `
            <tr>
                <td class="number">${number}</td>
                ${rowData.join("")}
                <td class="number">${number}</td>
            </tr>
        `;
        htmlData += tableRow;
        number -= 1;
    }
    table.innerHTML = htmlData;
}

function onloadSideBar() {
    for (var n = 4;  n > 1; n--)
    {
        var arr = [];
        for(var i = 0; i < tableData.length; i++){
            var row = tableData[i];
            var keys = Object.keys(row)
            for (var j = 0; j < keys.length; j++)
            {
                const arr = row[keys[j]].split("-");
                const star = arr[0];
                const name = `${arr[0]}-${arr[1]}`;
                if (star == n && arr.find(e => e == `${name}`) == undefined )
                {
                    createSideBarList(n, name);
                    arr.push(`${name}`);
                }
            }
        }
    }
}

function removeSideBarList() {
    var dev = document.getElementById("sidebar-list");
    dev.innerHTML = "";

    for (i = 4; i > 1; i--) {
        var ul = document.createElement("ul");
        ul.className = "list-group list-group-flush";
        ul.id = `sidebar-star-${i}`;

        var li = createListItem(`${i} 星`);
        ul.appendChild(li);

        dev.appendChild(ul);
    }
}

function createListItem(text) {
    var li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = text;
    return li;
}

function createSideBarList(id, name) {
    const ul = document.getElementById(`sidebar-star-${id}`);

    const li = `
        <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" id="checkbox-${name}" value="${name}">
            <label class="form-check-label stretched-link" for="checkbox-${name}">${name}</label>
        </li>
    `;

    ul.insertAdjacentHTML('beforeend', li);
}