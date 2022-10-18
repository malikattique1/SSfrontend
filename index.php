
<?php
header('Access-Control-Allow-Origin: *'); 

if (isset($_GET["Submitgetallsounds"])) {
    echo"Submitgetallsounds";
    ?>
    <script>
    // var url = 'https://sleep.funsdevops.com/api/sounds/getallsounds';
    var url = 'http://localhost:5001/api/sounds/getallsounds';
    
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (body) {
        console.log(body);
        document.getElementById("table").append(body.data[0].id)
    });
    </script>
    <?php
}
if (isset($_GET["Submitgetallmixtures"])) {
    echo"Submitgetallmixtures";
}
if (isset($_POST["Submit"])) {
    $name      = $_POST["name"];
    $icon      = $_POST["icon"];
    $genre      = $_POST["genre"];
}
?>






<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>  
<script src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>  
<script src="https://cdn.datatables.net/1.10.12/js/dataTables.bootstrap.min.js"></script>            
<link rel="stylesheet" href="https://cdn.datatables.net/1.10.12/css/dataTables.bootstrap.min.css" />  

<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">




<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
<link rel="stylesheet" href="css/styles.css">
<!-- <link rel="stylesheet" href="Css/NavSelect.css"> -->
<title>Sleeping Sound</title>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-1">
<div  style="display:block; text-align:center;" class="container">
<a href="index.php?page=1" class="navbar-brand" >SLEEPING SOUND</a>
<button class="navbar-toggler" data-toggle="collapse" data-target="#navbarcollapseCMS">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarcollapseCMS">
</div>
</div>
</nav>
<!-- <br> -->
<div class="card bg-dark text-white">
<div class="card-body">
<div class="text-center" style="height:50px; padding-top:50px; padding-bottom:100px">
<button type="button"  style="margin-right:100px"  class="btn mb-1 btn-info " id="load-dt">Get All Sounds</button>
<button type="button" class="btn mb-1 btn-info" id="load-dt2">Get All Mixtures</button>
</div>
</div>
</div>
<!-- <br> -->
<div class="table-responsive hidden bg-dark text-white" id="table1"  style="display:none; padding:150px; padding-top:0px;">
<table id="animals-table" class="table table-striped table-bordered bg-dark text-white"
style="width: 100%;">
<button type="button"  style="margin-left:90%; margin-top:1%" class="btn mb-1 btn-info" id="createload-dt1">Create Sound</button>
<thead>
<tr>
<td>Id</td>
<td>Name</td>
<td>Icon</td>
<td>Background Image</td>
<td>File Path</td>
<td>Play</td>
<td>Delete</td>

</tr>
</thead>

<!-- <tfoot>
<tr>
<td>Id</td>
<td>Name</td>
<td>Icon</td>
<td>Background Image</td>
<td>File Path</td>
<td>Play</td>
<td>Delete</td>
</tr>
</tfoot> -->


</table>
</div>
</div>
</div>


<div class="table-responsive hidden bg-dark text-white" id="table2" style="display:none; padding:150px; padding-top:0px;">
<table id="animals-table2" class="table table-striped table-bordered bg-dark text-white"
style="width: 100%">
<button type="button" style="margin-left:90%; margin-top:1%" class="btn mb-1 btn-info" id="createload-dt2">Create Mixture</button>
<thead>
<tr>
<td>Id</td>
<td>Name</td>
<td>ClipArt</td>
<td>MainImage</td>
<td>Genre</td>
<td>Delete</td>



</tr>
</thead>

<!-- <tfoot>
<tr>
<td>Id</td>
<td>Name</td>
<td>ClipArt</td>
<td>MainImage</td>
<td>Genre</td>
<td>Delete</td>


</tr>
</tfoot> -->

</table>
</div>
</div>
</div>


<section class="container py-2 mb-4 modal" style="display:none; top:200; left:400" id=sectionform1  tabindex="-1" role="dialog">
<div class="row">
<div class="offset-sm-3 col-sm-6" style="min-height:500px;">

<div class="card bg-dark text-light">
<div class="card-header">
<button type="button" id="form1close" style="margin-left:470px;" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
<h4 class="text-center">Sound</h4>
</div>
<div class="card-body bg-dark">
<form class="" id="submitform1">
<!-- <form class="" id="form"> -->
<div class="form-group">
<label for="username"><span class="FieldInfo">Name:</span></label>
<div class="input-group mb-3">
<div class="input-group-prepend">
<span class="input-group-text text-white bg-info"> <i class="fas fa-user"></i> </span>
</div>
<input type="text" class="form-control" name="name" id="name1" value="">
</div>
</div>
<div class="form-group">
<label for="password"><span class="FieldInfo">Icon:</span></label>
<div class="input-group mb-3">
<div class="input-group-prepend">
<span class="input-group-text text-white bg-info"> <i class="fas fa-lock"></i> </span>
</div>
<input id="file" type="file" name="icon" accept="image/*"> 
</div>
</div>

<div class="form-group">
<label for="password"><span class="FieldInfo">Background Image:</span></label>
<div class="input-group mb-3">
<div class="input-group-prepend">
<span class="input-group-text text-white bg-info"> <i class="fas fa-lock"></i> </span>
</div>
<input id="file3" type="file" name="backgroundImg" accept="image/*"> 
</div>
</div>

<div class="form-group">
<label for="password"><span class="FieldInfo">Sound:</span></label>
<div class="input-group mb-3">
<div class="input-group-prepend">
<span class="input-group-text text-white bg-info"> <i class="fas fa-lock"></i> </span>
</div>
<input id="file2" type="file" name="filePath" accept="audio/*"> 
</div>
</div>

<div class="form-group">
<label for="mysqlHostName"><span class="FieldInfo">Genre:</span></label>
<div class="input-group mb-3">
<div class="input-group-prepend">
<span class="input-group-text text-white bg-info"> <i class="fas fa-user"></i> </span>
</div>
<input type="text" class="form-control" name="genre" id="genre1" value="">
</div>
</div>
<button type="submit" name="Submitsound" id="load-dt1create" onclick="uploadFile1()" class="btn btn-info btn-block text-info bg-dark" value="Create"> create</button>
</form>

</div>
</div>
</div>
</div>
</section>




<section class="container py-2 mb-4 modal" style="display:none; top:170; left:400" id=sectionform2  tabindex="-1" role="dialog">
<div class="row">
<div class="offset-sm-3 col-sm-6" style="min-height:500px;">

<div class="card bg-dark text-light">
<div class="card-header">
<button type="button" id="form2close" style="margin-left:470px;" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
<h4 class="text-center">Mixture</h4>

</div>
<div class="card-body bg-dark">
<!-- <form class="" action="index.php" method="post"> -->
<form class="" id="submitform2">
<div class="form-group">
<label for="username"><span class="FieldInfo">Name:</span></label>
<div class="input-group mb-3">
<div class="input-group-prepend">
<span class="input-group-text text-white bg-info"> <i class="fas fa-user"></i> </span>
</div>
<input type="text" class="form-control" name="name" id="name2" value="">
</div>
</div>
<div class="form-group">
<label for="password"><span class="FieldInfo">ClipArt:</span></label>
<div class="input-group mb-3">
<div class="input-group-prepend">
<span class="input-group-text text-white bg-info"> <i class="fas fa-lock"></i> </span>
</div>
<!-- <input type="password" class="form-control" name="clipart2" id="clipart2" value=""> -->
<!-- <input id="fileupload" type="file" name="fileupload" />  -->
<input id="file" type="file" name="clipArt" accept="image/*"> 
<!-- <button id="upload-button" type="button" onclick="uploadFile1()"> Upload </button> -->
</div>

<div class="form-group">
<label for="password"><span class="FieldInfo">Main Image:</span></label>
<div class="input-group mb-3">
<div class="input-group-prepend">
<span class="input-group-text text-white bg-info"> <i class="fas fa-lock"></i> </span>
</div>
<!-- <input type="password" class="form-control" name="clipart2" id="clipart2" value=""> -->
<!-- <input id="fileupload" type="file" name="fileupload" />  -->
<input id="file" type="file" name="mainImage" accept="image/*"> 
<!-- <button id="upload-button" type="button" onclick="uploadFile1()"> Upload </button> -->
</div>

</div>
<div class="form-group">
<label for="mysqlHostName"><span class="FieldInfo">Genre:</span></label>
<div class="input-group mb-3">
<div class="input-group-prepend">
<span class="input-group-text text-white bg-info"> <i class="fas fa-user"></i> </span>
</div>
<input type="text" class="form-control" name="genre" id="genre2" value="">
</div>
</div>

<div class="form-group">
<label for="mysqlHostName"><span class="FieldInfo">Mixture Id:</span></label>
<div class="input-group mb-3">
<div class="input-group-prepend">
<span class="input-group-text text-white bg-info"> <i class="fas fa-user"></i> </span>
</div>
<input type="text" class="form-control" name="mixtureId" id="mixtureId" value="">
</div>
</div>

<div class="form-group">
<label for="mysqlHostName"><span class="FieldInfo">Sound Id:</span></label>
<div class="input-group mb-3">
<div class="input-group-prepend">
<span class="input-group-text text-white bg-info"> <i class="fas fa-user"></i> </span>
</div>
<select name="soundId[]"  style=" width:85% !important;"  class="soundId" id="soundId" multiple >
<option value="">- Select Sounds -</option>
<!-- options added dynamically -->
<!-- <option class="soundId"  value="1">sound1</option>
<option class="soundId" value="2">sound2</option>
<option class="soundId"  value="3">sound3</option> -->
</select>
</div>
</div>

<div class="form-group">
<label for="mysqlHostName"><span class="FieldInfo">Volume:</span></label>
<div class="input-group mb-3">
<div class="input-group-prepend">
<span class="input-group-text text-white bg-info"> <i class="fas fa-user"></i> </span>
</div>
<input type="text" class="form-control" name="volume" id="volume" value="">
</div>
</div>


<button type="submit" name="Submitmixture" id="load-dt2create" onclick="uploadFile2()" class="btn btn-info btn-block text-info bg-dark" value="Create"> create</button>
<!-- <input type="button" name="Submitmixture" id="load-dt2create" class="btn btn-info btn-block text-info bg-dark" value="Create"> -->
</form>

</div>
</div>
</div>
</div>
</section>



<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.10/js/jquery.dataTables.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.27.2/axios.min.js"></script>


<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

<script src="script/index.js"></script> 


</body>
</html>













