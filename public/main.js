$(document).ready(function () {
  $("#submitBtn").on("click", function () {
    let userId = document.getElementById("userName").value;
    let pass = document.getElementById("password").value;
    let data = {
      userName: userId,
      password: pass,
    };
    console.log(userId);
    console.log(pass);
    console.log(data);
    $.ajax({
      type: "POST",
      url: "http://localhost:5005/userInfo",
      data: JSON.stringify(data),
      success: function (status) {
        console.log(status);
      },
    });
  });
});
