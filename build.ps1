$build = "cd ./ClientApp; yarn run build; rm ../wwwroot/*; cp ./build/* ../wwwroot/";
Start-Process -FilePath "powershell" -ArgumentList $build;