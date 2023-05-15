<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <div class="text-center">
    {!! QrCode::size(100)->generate('Welcome to kerneldev.com!'); !!}
    <p>Scan me</p>
    </div>
</body>
</html>