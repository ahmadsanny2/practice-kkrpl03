document.addEventListener("DOMContentLoaded", () => {
  // Form Registrasi
  const regForm = document.getElementById("registerForm");
  if (regForm) {
    regForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.getElementById("regUsername").value;
      const email = document.getElementById("regEmail").value;
      const password = document.getElementById("regPassword").value;

      const userData = { username, email, password };
      localStorage.setItem("user_" + username, JSON.stringify(userData));

      alert("Registrasi berhasil! Silahkan login.");
      window.location.href = "login.html";
    });
  }

  //   Form Login
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const savedUser = localStorage.getItem("user_" + username);

      if (!savedUser) {
        alert("Username tidak  di temukan!");
        return;
      }

      const userData = JSON.parse(savedUser);

      if (userData.password === password) {
        alert("Login berhasil! Selamat datang, " + username + "!");
        window.location.href = "beranda.html";
      } else {
        alert("Password salah");
      }
    });
  }
});

