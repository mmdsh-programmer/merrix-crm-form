$(document).ready(function () {
  let signedInUser = localStorage.getItem("email");
  if (signedInUser == null) {
    window.location.href = "index.html";
  }

  $("#signout").click(() => {
    localStorage.clear();
    window.location.href = "index.html";
  });

  let landLineValidation = new RegExp('^0[0-9]{2,}[0-9]{7,}$');
  let phoneValidation = new RegExp('09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}');
  let instagramValidation = new RegExp('^([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)$');
  let telegramValidation = new RegExp('^[a-z0-9_-]{3,16}$');

  //map
  let app = new Mapp({
    element: "#app",
    presets: {
      latlng: {
        lat: 35.73249,
        lng: 51.42268,
      },
      zoom: 10,
    },
    i18n: {
      fa: {
        "mapp-tooltip-zoom-in": "افزایش بزرگنمایی",
        "mapp-tooltip-zoom-out": "کاهش بزرگنمایی",
        "mapp-tooltip-geolocation": "مکان کنونی",
        "mapp-tooltip-fullscreen": "نقشه تمام صفحه",
      },
    },
    apiKey:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdmYTRjZWVkYzZiMWQ1NWI3NDAwNjc1YWI1NDlkNGU1OWNmYjZiNTQyN2U1ZjBlMWU4YjA2YjA0ZTFjMTBlOGI2ZGIxM2FlMTYzOGRkNDc0In0.eyJhdWQiOiIxMzAwOCIsImp0aSI6IjdmYTRjZWVkYzZiMWQ1NWI3NDAwNjc1YWI1NDlkNGU1OWNmYjZiNTQyN2U1ZjBlMWU4YjA2YjA0ZTFjMTBlOGI2ZGIxM2FlMTYzOGRkNDc0IiwiaWF0IjoxNjE0ODQwMDY1LCJuYmYiOjE2MTQ4NDAwNjUsImV4cCI6MTYxNzI1NTY2NSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.nsemTpE0Kuqp8XyIpOxZMT5_EpXl2t7MMIZlj-ZAesN_LhbV2kjxiYoL5xkRD3DatWtKfTt6YaFaEMPh6Ch6AdwjHgTPRbHzYKbLHHXKtuKFI2_ZIWX1nzQpcdmUr0FaB_ldll0fGhPBYn6qgYKFVdLap9P_vuzLL1kDqQvK8AXp1DJW3tTWNnNHH0Mqi7nN9miGimO4VF6LxQpaFjbRy2hxnjzbEvg1zJPDDdlmrO3cjWhNrNz8yYz1WO5o-NxVwDQi--HecwOaD2eCYdSe2-0L_nMQI1kMv1ImNc8kSizl_BflmwLxIM3_bhgmqcYFGUHOj0c9v2554_IVX_WcTQ",
  });
  let finalLocation = { lat: "", lng: "" };
  var crosshairIcon = L.icon({
    iconUrl: "images/marker.ico",
    iconSize: [40, 40],
    iconAnchor: [10, 10],
  });
  crosshairMarker = new L.marker(app.map.getCenter(), {
    icon: crosshairIcon,
    clickable: false,
  });
  crosshairMarker.addTo(app.map);
  app.addVectorLayers();
  app.addZoomControls();
  app.addGeolocation({
    callback: function () {
      app.removeMarkers({
        group: app.groups.features.markers,
      });
    },
  });
  app.addFullscreen();
  app.getUserLocation({
    success: function () {
      app.removeMarkers({
        group: app.groups.features.markers,
      });
      finalLocation = { ...app.states.user.latlng };
      console.log(finalLocation);
    },
  });

  app.map.on("move", function (e) {
    crosshairMarker.setLatLng(app.map.getCenter());
  });
  app.map.on("dragend", function (e) {
    finalLocation = { ...crosshairMarker.getLatLng() };
    console.log(finalLocation);
  });
  app.map.on("zoom", function (e) {
    finalLocation = { ...crosshairMarker.getLatLng() };
    console.log(finalLocation);
  });

  $("#signout").click(() => {
    localStorage.clear();
    window.location.href = "index.html";
  });
  //map

  $("#gheir-hozoori").validate({
    rules: {
      store_name: {
        required: true,
        minlength: 3,
      },
      landline: {
        required: false,
        digits: true,
        minlength: 11,
        maxlength: 11,
      },
      phone: {
        required: false,
        digits: true,
        minlength: 11,
        maxlength: 11,
      },
      whatsapp: {
        required: false,
        digits: true,
        minlength: 11,
        maxlength: 11,
      },
      province: {
        required: true,
      },
      city: {
        required: true,
      },
      address: {
        required: false,
        minlength: 5,
      },
      job: {
        required: true,
      },
      website: {
        required: false,
        url: true
      },
      clue: {
        required: true,
      },
    },
    messages: {
      store_name: {
        required: "پر کردن این فیلد اجباری است",
        minlength: "نام فروشگاه باید حداقل 3 کاراکتر باشد",
      },
      landline: {
        digits: "فقط عدد مجاز است",
        minlength: "حداقل طول 11 رقم میباشد",
        maxlength: "حداکثر طول 11 رقم میباشد",
      },
      phone: {
        digits: "فقط عدد مجاز است",
        minlength: "حداقل طول 11 رقم میباشد",
        maxlength: "حداکثر طول 11 رقم میباشد",
      },
      whatsapp: {
        digits: "فقط عدد مجاز است",
        minlength: "حداقل طول 11 رقم میباشد",
        maxlength: "حداکثر طول 11 رقم میباشد",
      },
      province: {
        required: "پر کردن این فیلد اجباری است"
      },
      city: {
        required: "پر کردن این فیلد اجباری است",
      },
      address: {
        minlength: "حداقل طول 5 کاراکتر میباشد",
      },
      job: {
        required: "پر کردن این فیلد اجباری است",
      },
      website: {
        url: "لینک وارد شده صحیح نیست"
      },
      clue: {
        required: "پر کردن این فیلد اجباری است",
      },
    },
  });

  $("#service-type").change(() => {
    $("#service-type").val() == "حضوری" ? $(".map-holder").fadeIn() : $(".map-holder").fadeOut();
  });

  $("#gheir-hozoori").on("submit", function (e) {
    let isvalid = $("#gheir-hozoori").valid();
    if (isvalid) {
      e.preventDefault();
      let store_name = $("#store_name").val();
      let landline = $("#landline").val();
      let phone = $("#phone").val();
      let province = $("#province").val();
      let city = $("#city").val();
      let address = $("#address").val();
      let area = $("#area").val();
      let job = $("#job").val();
      let instagram = $("#instagram").val();
      let telegram = $("#telegram").val();
      let whatsapp = $("#whatsapp").val();
      let description = $("#description").val();
      let website = $("#website").val();
      let clue = $("#clue").val();
      let service_type = $("#service-type").val();
      let finalStoreName = `${job} ${store_name}`;
      let finalInstagram = `https://instagram.com/${instagram}`;
      let finalTelegram = `https://t.me/${telegram}`;
      if (landline == "" && phone == "" && instagram == "" && telegram == "" && whatsapp == "") {
        $.toast({
          heading: "لطفا حداقل یک لینک شبکه اجتماعی یا شماره تلفن وارد کنید",
          showHideTransition: "slide",
          icon: "error",
          position: "top-left",
        });
      } else if (service_type == "حضوری" && finalLocation.lat == "") {
        $.toast({
          heading: "لطفا مکان خود را از روی نقشه انتخاب کنید",
          showHideTransition: "slide",
          icon: "error",
          position: "top-left",
        });
      } else if (landline != "" && !landLineValidation.exec(landline)) {
        $.toast({
          heading: "فرمت تلفن ثابت وارد شده صحیح نیست",
          showHideTransition: "slide",
          icon: "error",
          position: "top-left",
        });
      } else if (phone != "" && !phoneValidation.exec(phone)) {
        $.toast({
          heading: "فرمت شماره همراه وارد شده صحیح نیست",
          showHideTransition: "slide",
          icon: "error",
          position: "top-left",
        });
      } else if (instagram != "" && !instagramValidation.exec(instagram)) {
        $.toast({
          heading: "آیدی اینستاگرام وارد شده صحیح نیست",
          showHideTransition: "slide",
          icon: "error",
          position: "top-left",
        });
      } else if (telegram != "" && !telegramValidation.exec(telegram)) {
        $.toast({
          heading: "آیدی تلگرام وارد شده صحیح نیست",
          showHideTransition: "slide",
          icon: "error",
          position: "top-left",
        });
      } else {
        $("#loading").fadeIn().css("display", "flex");
        $.ajax({
          url: "https://www.merrix.com/addlead/gheir-hozoori.php",
          type: "POST",
          data: {
            email: signedInUser,
            store_name: finalStoreName,
            landline: landline,
            phone: phone,
            province: province,
            city: city,
            address: address,
            area: area,
            job: job,
            instagram: instagram == "" ? instagram : finalInstagram,
            telegram: telegram == "" ? telegram : finalTelegram,
            whatsapp: whatsapp,
            description: description,
            website: website,
            clue: clue,
            service_type: service_type,
            lat: service_type == "حضوری" ? finalLocation.lat : "",
            lng: service_type == "حضوری" ? finalLocation.lng : ""
          },
          cache: false,
          success: function (dataResult) {
            let status = JSON.parse(dataResult);
            $("#loading").fadeOut();
            if (status.statusCode == 200) {
              $.toast({
                heading: "اطلاعات با موفقیت ذخیره شد",
                showHideTransition: "slide",
                icon: "success",
                position: "top-left",
              });
              $('#gheir-hozoori').trigger("reset");
            } else if (status.statusCode == 201) {
              $.toast({
                heading: "شماره تلفن ثابت وارد شده قبلا ثبت شده است!",
                text: "لطفا شماره ثابت دیگری را وارد کنید",
                showHideTransition: "slide",
                icon: "error",
                position: "top-left",
              });
            } else if (status.statusCode == 202) {
              $.toast({
                heading: "شماره تلفن همراه وارد شده قبلا ثبت شده است!",
                text: "لطفا شماره همراه دیگری را وارد کنید",
                showHideTransition: "slide",
                icon: "error",
                position: "top-left",
              });
            } else if (status.statusCode == 203) {
              $.toast({
                heading: "آدرس اینستاگرام وارد شده قبلا ثبت شده است!",
                text: "لطفا آدرس اینستاگرام دیگری را وارد کنید",
                showHideTransition: "slide",
                icon: "error",
                position: "top-left",
              });
            } else if (status.statusCode == 204) {
              $.toast({
                heading: "آدرس تلگرام وارد شده قبلا ثبت شده است!",
                text: "لطفا آدرس تلگرام دیگری را وارد کنید",
                showHideTransition: "slide",
                icon: "error",
                position: "top-left",
              });
            } else if (status.statusCode == 205) {
              $.toast({
                heading: "آدرس واتس اپ وارد شده قبلا ثبت شده است!",
                text: "لطفا آدرس واتس اپ دیگری را وارد کنید",
                showHideTransition: "slide",
                icon: "error",
                position: "top-left",
              });
            } else if (status.statusCode == 400) {
              $.toast({
                heading: "مشکلی در ذخیره اطلاعات به وجود آمد!",
                text: "لطفا بعدا تلاش کنید",
                showHideTransition: "slide",
                icon: "error",
                position: "top-left",
              });
            }
          },
        });
      }
    }
  });
});
