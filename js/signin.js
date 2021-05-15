$(document).ready(function () {
  if(localStorage.getItem("email")){
    window.location.href = "service-type.html";
  }
  $("#signin-form").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 8,
      },
    },
    messages: {
      email: {
        required: "پر کردن این فیلد ضروری است",
        email: "مقدار وارد شده برای ایمیل صحیح نیست",
      },
      password: {
        required: "پر کردن این فیلد ضروری است",
        minlength: "رمز عبور باید حداقل 8 کاراکتر باشد",
      },
    },
  });
  $("#signin-form").on("submit", function (e) {
    let isvalid = $("#signin-form").valid();
    if (isvalid) {
      e.preventDefault();
      let email = $("#email").val();
      let password = $("#password").val();
      $("#loading").fadeIn().css("display","flex");
      $.ajax({
        url: "http://mohammad-shakeri.ir/merrix-2/signup.php",
        type: "POST",
        data: {
          type: 2,
          email: email,
          password: password,
        },
        cache: false,
        success: function (dataResult) {
          let status = JSON.parse(dataResult);
          $("#loading").fadeOut();
          if (status.statusCode == 200) {
            $.toast({
              heading: "ورود موفقیت آمیز بود",
              text: "تا لحظاتی دیگر به صفحه اصلی منتقل خواهید شد",
              showHideTransition: "slide",
              icon: "success",
              position: "top-left",
            });
            localStorage.setItem("email" , email);
            setTimeout(() => {
              window.location.href = "form.html";
            }, 1000);
          } else if (status.statusCode == 201) {
            $.toast({
              heading: "نام کاربری یا رمز عبور اشتباه است",
              text: "لطفا دوباره تلاش کنید",
              showHideTransition: "slide",
              icon: "error",
              position: "top-left",
            });
          }
        },
      });
    } else {
      $.toast({
        heading: "اطلاعات فرم را به درستی وارد کنید",
        showHideTransition: "slide",
        icon: "error",
        position: "top-left",
      });
    }
  });
});
