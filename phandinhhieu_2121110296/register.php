<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>registion</title>
</head>
<body>
    <div class="container">
        <?php
        if (isset($_POST["submit"])){
            $FullName = $_POST["FullName"];
            $Email = $_POST["Email"];
            $Password = $_POST["Password"];
            $Repassword = $_POST["Repassword"];
            $error= array();
            if (empty($FullName) or empty($Email) or empty($Password) or empty($Repassword)){
                array_push($error,"All is not value");
            }
            if (!filter_var($Email, FILTER_VALIDATE)){
                array_push($error,"Email is not value");
            }
            if (strlen($Password)<8){
                array_push($error,"Password must be at least 8 charector long");
            }
            if ($Password!==$Repassword){
                array_push($error,"Password does not match");
            }

            if (count ($error)>0){
                foreach ($error as $error){
                    echo "<div class ='alert alert-danger'>$error</div>";
                }

            }else{
                
            }
        }
        ?>
    <form class="mx-1 mx-md-4" action="register.php" method="post">

<div class="d-flex flex-row align-items-center mb-4">
    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
    <div class="form-outline flex-fill mb-0">
        <input type="text" id="form3Example1c" class="form-control" />
        <label class="form-label" for="form3Example1c">FullName</label>
    </div>
</div>

<div class="d-flex flex-row align-items-center mb-4">
    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
    <div class="form-outline flex-fill mb-0">
        <input type="email" id="form3Example3c" class="form-control" />
        <label class="form-label" for="form3Example3c">Email</label>
    </div>
</div>

<div class="d-flex flex-row align-items-center mb-4">
    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
    <div class="form-outline flex-fill mb-0">
        <input type="password" id="form3Example4c" class="form-control" />
        <label class="form-label" for="form3Example4c">Password</label>
    </div>
</div>

<div class="d-flex flex-row align-items-center mb-4">
    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
    <div class="form-outline flex-fill mb-0">
        <input type="password" id="form3Example4cd" class="form-control" />
        <label class="form-label" for="form3Example4cd">Repassword</label>
    </div>
</div>

<div class="form-check d-flex justify-content-center mb-5">
    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
    <label class="form-check-label" for="form2Example3">
        I agree all statements in <a href="#!">Terms of service</a>
    </label>
</div>

<div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
    <Link to="/Login"><button type="button" class="btn btn-danger btn-lg ">Register</button> </Link>
    
</div>

</form>
    </div>
</body>
</html>