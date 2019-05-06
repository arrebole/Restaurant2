$ClientApp = "cd ./ClientApp; yarn run start";
$Service = "dotnet run";
Start-Process -FilePath "powershell" -ArgumentList $ClientApp;
Start-Process -FilePath "powershell" -ArgumentList $Service;