
async function uploadFile1() {
    let form = document.getElementById('submitform1');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        console.log("ppp",formData)
        await axios.post('http://localhost:5001/api/sounds/createsound', formData, {
        // await axios.post('https://sleep.funsdevops.com/api/sounds/createsound', formData, {
        headers:{
            'Content-Type':'multipart/form-data',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Access-Control-Allow-Headers':'Accept,authorization,Authorization, Content-Type',
            'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiRmlyc3ROYW1lIjoiYXR0aXF1ZSIsIkxhc3ROYW1lIjoicmVobWFuIiwiVXNlcm5hbWUiOiJhdHRpcTEyIiwiZW1haWwiOiJhdHRpcXVlMTJAZ21haWwuY29tIn0sImlhdCI6MTY2MTg0NjQ5Nn0.WkRYWDtD67Sd35ZLuanPusMWHy_ove2ftfF50MnQwmE'
        }
    }).then(res => console.log(res)).catch(err => console.log(err))
    $('#submitform1').trigger("reset");
    console.log("submitted")
    alert("uploaded")

});
}

async function uploadFile2() {
    
    let form = document.getElementById('submitform2');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = new FormData(form);

        var allselectedoptions = $(".soundId:selected").map(function(i, el) {
            return $(el).val();
        }).get();
        console.log('new'+allselectedoptions)
        // formData.append('soundId', allselectedoptions);
        formData.delete('soundId[]');
        formData.set('soundId', allselectedoptions);
        
        
        console.log("ppp",formData)
        axios.post('http://localhost:5001/api/mixtures/createmixture', formData, {
        // axios.post('https://sleep.funsdevops.com/api/mixtures/createmixture', formData, {
        headers:{
            'Content-Type':'multipart/form-data',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Access-Control-Allow-Headers':'Accept,authorization,Authorization, Content-Type',
            'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiRmlyc3ROYW1lIjoiYXR0aXF1ZSIsIkxhc3ROYW1lIjoicmVobWFuIiwiVXNlcm5hbWUiOiJhdHRpcTEyIiwiZW1haWwiOiJhdHRpcXVlMTJAZ21haWwuY29tIn0sImlhdCI6MTY2MTg0NjQ5Nn0.WkRYWDtD67Sd35ZLuanPusMWHy_ove2ftfF50MnQwmE'
        }
    }).then(res => console.log(res)).catch(err => console.log(err))
    $('#submitform2').trigger("reset");
});
}



let animal_table = $("#animals-table").DataTable({
    pageLength: 20,
    lengthMenu: [20, 30, 50, 75, 100],
    order: [],
    paging: true,
    searching: true,
    info: true,
    data: [],
    columns: [
        {data: "id"},
        {data: "name"},
        {data: "icon"},
        {data: "backgroundImg"},
        {data: "filePath"},
        // {defaultContent: '<input type="button" style="border-radius:900px" class="audio" value="play"/>'},
        {defaultContent: `<audio controls class="open" ><source class="open" src="http://commondatastorage.googleapis.com/codeskulptor-assets/week7-button.m4a" type="audio/*"></audio>`},
        {defaultContent: '<input type="button" class="name" value="Delete"/>'},
        
    ]
});

$('#animals-table tbody').on('click', '.name', function () {
    var row = $(this).closest('tr');
    var datasss = animal_table.row( row ).data()
    console.log(datasss);
    var id = animal_table.row( row ).data().id;
    console.log(id);
    var filePath  = animal_table.row( row ).data().filePath;
    console.log(filePath);
    animal_table.row($(this).parents('tr')).remove().draw();
    
    axios.post('http://localhost:5001/api/sounds/deletesound', {"id":id}, {
    // axios.post('https://sleep.funsdevops.com/api/sounds/deletesound', {"id":id}, {
    headers:{
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers':'Accept,authorization,Authorization, Content-Type',
        'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiRmlyc3ROYW1lIjoiYXR0aXF1ZSIsIkxhc3ROYW1lIjoicmVobWFuIiwiVXNlcm5hbWUiOiJhdHRpcTEyIiwiZW1haWwiOiJhdHRpcXVlMTJAZ21haWwuY29tIn0sImlhdCI6MTY2MTg0NjQ5Nn0.WkRYWDtD67Sd35ZLuanPusMWHy_ove2ftfF50MnQwmE'
    }
}).then(res => console.log(res)).catch(err => console.log(err))

});

// $('#animals-table tbody').on('click', '.audio', function () {
//     console.log("play")
//     var row = $(this).closest('tr');
//     var link = animal_table.row( row ).data().filePath
//     var audio = new Audio(link);
//     console.log(link);
//     audio.play();
// });
$('#animals-table tbody').on('mouseenter', '.open', function () {
    console.log("playing")
    var row = $(this).closest('tr');
    var link = animal_table.row( row ).data().filePath
    if($(this).attr('src') !=link){
        $(this).attr('src',link);
    }
});


$('#animals-table tbody').on('click', 'a', function(e){ 
    console.log("linkclick")
    e.preventDefault(); 
    var url = $(this).attr('href'); 
    window.open(url, '_blank');
});
$('#animals-table tbody').on('click', 'td:nth-child(3)', function () {
    console.log("playing")
    var row = $(this).closest('tr');
    var link = animal_table.row( row ).data().icon
    $(this).attr('src',link);
    $(this).replaceWith($(`<td><a href="${link}" target="_blank">${link}</a></td>`));
    window.open(`${link}`, '_blank');

});
$('#animals-table tbody').on('click', 'td:nth-child(4)', function () {
    console.log("playing")
    var row = $(this).closest('tr');
    var link = animal_table.row( row ).data().backgroundImg
    $(this).attr('src',link);
    $(this).replaceWith($(`<td><a href="${link}" target="_blank">${link}</a></td>`));
    window.open(`${link}`, '_blank');

});

$('#animals-table tbody').on('click', 'td:nth-child(5)', function () {
    console.log("playing")
    var row = $(this).closest('tr');
    var link = animal_table.row( row ).data().filePath
    $(this).attr('src',link);
    $(this).replaceWith($(`<td><a href="${link}" target="_blank">${link}</a></td>`));
    window.open(`${link}`, '_blank');
});




let animal_table2 = $("#animals-table2").DataTable({
    pageLength: 20,
    lengthMenu: [20, 30, 50, 75, 100],
    order: [],
    paging: true,
    searching: true,
    info: true,
    data: [],
    columns: [
        {data: "id"},
        {data: "name"},
        {data: "clipArt"},
        {data: "mainImage"},
        {data: "genre"},
        {defaultContent: '<input type="button" class="name" value="Delete"/>'},
        
    ]
});

$('#animals-table2 tbody').on('click', '.name', function () {
    var row = $(this).closest('tr');
    // var datasss = animal_table.row( row ).data()
    // var data = animal_table.row( row ).data().name;
    // console.log(data);
    var id = animal_table2.row( row ).data().id;
    console.log(id);
    animal_table2.row($(this).parents('tr')).remove().draw();
    
    axios.post('http://localhost:5001/api/mixtures/deletemixture', {"id":id}, {
    // axios.post('https://sleep.funsdevops.com/api/mixtures/deletemixture', {"id":id}, {
    headers:{
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers':'Accept,authorization,Authorization, Content-Type',
        'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiRmlyc3ROYW1lIjoiYXR0aXF1ZSIsIkxhc3ROYW1lIjoicmVobWFuIiwiVXNlcm5hbWUiOiJhdHRpcTEyIiwiZW1haWwiOiJhdHRpcXVlMTJAZ21haWwuY29tIn0sImlhdCI6MTY2MTg0NjQ5Nn0.WkRYWDtD67Sd35ZLuanPusMWHy_ove2ftfF50MnQwmE'
    }
}).then(res => console.log(res)).catch(err => console.log(err))

});




$(document).ready(function () {
    
    $('#soundId').select2();
    
    
    $("#load-dt").click(function () {
        $('#table2').hide();
        $('#table1').show();
        $('#sectionform2').hide();
        // $('#sectionform1').show();
        $.ajax({
            url: "http://localhost:5001/api/sounds/getallsounds",
            // url: "https://sleep.funsdevops.com/api/sounds/getallsounds",
            type: "GET",
            headers: {'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiRmlyc3ROYW1lIjoiYXR0aXF1ZSIsIkxhc3ROYW1lIjoicmVobWFuIiwiVXNlcm5hbWUiOiJhdHRpcTEyIiwiZW1haWwiOiJhdHRpcXVlMTJAZ21haWwuY29tIn0sImlhdCI6MTY2MTg0NjQ5Nn0.WkRYWDtD67Sd35ZLuanPusMWHy_ove2ftfF50MnQwmE',
        }
    }).done(function (result) {
        // console.log(result)
        console.log("dwd",result.data)
        animal_table.clear().draw();
        animal_table.rows.add(result.data).draw();
    })
});


$("#load-dt2").click(function () {
    $('#table1').hide();
    $('#table2').show();
    $('#sectionform1').hide();
    // $('#sectionform2').show();
    $.ajax({
        url: "http://localhost:5001/api/mixtures/getallmixtures",
        // url: "https://sleep.funsdevops.com/api/mixtures/getallmixtures",
        type: "GET",
        headers: {'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiRmlyc3ROYW1lIjoiYXR0aXF1ZSIsIkxhc3ROYW1lIjoicmVobWFuIiwiVXNlcm5hbWUiOiJhdHRpcTEyIiwiZW1haWwiOiJhdHRpcXVlMTJAZ21haWwuY29tIn0sImlhdCI6MTY2MTg0NjQ5Nn0.WkRYWDtD67Sd35ZLuanPusMWHy_ove2ftfF50MnQwmE',
    }
}).done(function (result) {
    // console.log(result)
    console.log("dwd",result.data)
    animal_table2.clear().draw();
    animal_table2.rows.add(result.data).draw();
})
});


$("#createload-dt1").click(function () {
    $('#sectionform1').show();
});
$("#createload-dt2").click(function () {
    $('#sectionform2').show();
    $.ajax({
        url: "http://localhost:5001/api/sounds/getallsounds",
        // url: "https://sleep.funsdevops.com/api/sounds/getallsounds",
        type: "GET",
        headers: {'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiRmlyc3ROYW1lIjoiYXR0aXF1ZSIsIkxhc3ROYW1lIjoicmVobWFuIiwiVXNlcm5hbWUiOiJhdHRpcTEyIiwiZW1haWwiOiJhdHRpcXVlMTJAZ21haWwuY29tIn0sImlhdCI6MTY2MTg0NjQ5Nn0.WkRYWDtD67Sd35ZLuanPusMWHy_ove2ftfF50MnQwmE',
    }
}).done(function (result) {
    // console.log(result)
    console.log("allsoudids",result.data)
    for (let i = 0; i < result.data.length; i++){
    console.log("allsoudids",result.data[i].id)
    console.log("allsoudnames",result.data[i].name)
    // $('<option class="soundId">').val('5').text('new dynamic').appendTo('#soundId');
    $('<option class="soundId">').val(result.data[i].id).text(result.data[i].name).appendTo('#soundId');
    }
})

});

$("#form1close").click(function(){
    $("#sectionform1").hide();
});
$("#form2close").click(function(){
    $("#sectionform2").hide();
});

$("#load-dt1create").click(function () {
    // $("#sectionform1").hide();
})
$("#load-dt2create").click(function () {
    // $("#sectionform2").hide();
})

});
