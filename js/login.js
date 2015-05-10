function Login (){
					var ID = document.getElementById('username').value;

					
					var password = document.getElementById('pin').value;
					
					if ((ID == "admin") && (password == "admin")) {
							alert("Selamat Datang Admin");
							document.location="menu.html";

					}

					else if ((ID =="admin") && (password !="admin")){
						alert("Password yang anda masukan salah !")
					}

					else if ((ID !="admin") && (password =="admin")){
						alert("Nama yang anda masukan salah !!!")
					}


					else if ((ID == "") && (password == "")) {
							alert("Form Nama dan Password tidak boleh di kosongkan !");
					}
					else {
						alert("ID / Password yang anda masukan salah");
					}

				}