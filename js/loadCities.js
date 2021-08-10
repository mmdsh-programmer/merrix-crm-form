$(document).ready(function () {
    loadprovince();
    $(".province").change(function () {
        $(this).closest('div').find('.city').addClass("temp09120217432class");
        loadCity($(this).val());
    });
});

function loadprovince() {
    selectValues = {
        "": "", "نامعلوم": "نامعلوم", "آذربایجان شرقی": "آذربایجان شرقی", "آذربایجان غربی": "آذربایجان غربی", "اردبیل": "اردبیل", "اصفهان": "اصفهان", "البرز": "البرز", "ایلام": "ایلام",
        "بوشهر": "بوشهر", "تهران": "تهران", "چهارمحال و بختیاری": "چهارمحال و بختیاری", "خراسان جنوبی": "خراسان جنوبی", "خراسان رضوی": "خراسان رضوی", "خراسان شمالی": "خراسان شمالی", "خوزستان": "خوزستان",
        "زنجان": "زنجان", "سمنان": "سمنان", "سیستان و بلوچستان": "سیستان و بلوچستان", "فارس": "فارس", "قزوین": "قزوین", "قم": "قم", "کردستان": "کردستان",
        "کرمان": "کرمان", "کرمانشاه": "کرمانشاه", "کهگیلویه و بویراحمد": "کهگیلویه و بویراحمد", "گلستان": "گلستان", "گیلان": "گیلان", "لرستان": "لرستان", "مازندران": "مازندران",
        "مرکزی": "مرکزی", "هرمزگان": "هرمزگان", "همدان": "همدان", "یزد": "یزد"
    };

    $.each(selectValues, function (key, value) {
        $('.province')
            .append($("<option></option>")
                .attr("value", key)
                .text(value));
    });
}

//Load city for selete
function loadCity(province) {
    $(".city").find('option').remove();

    switch (province) {
        case "آذربایجان شرقی":
            var selectValues = { "آذرشهر": "آذرشهر", "اسکو": "اسکو", "اهر": "اهر", "بستان آباد": "بستان آباد", "بناب": "بناب", "تبریز": "تبریز", "جلفا": "جلفا", "چاراویماق": "چاراویماق", "خداآفرین": "خداآفرین", "سراب": "سراب", "شبستر": "شبستر", "عجب‌ شیر": "عجب‌ شیر", "کلیبر": "کلیبر", "مراغه": "مراغه", "مرند": "مرند", "ملکان": "ملکان", "میانه": "میانه", "ورزقان": "ورزقان", "هریس": "هریس", "هشترود": "هشترود", "هوراند": "هوراند", "سهند": "سهند", "سردرود": "سردرود", "خسروشاه": "خسروشاه", "ایلخچی": "ایلخچی", "باسمنج": "باسمنج", "ممقان": "ممقان", "گوگان": "گوگان", "پامچی": "پامچی", "صوفیان": "صوفیان", "کلیبر": "کلیبر", "شند آباد": "شند آباد", "کشکسرای": "کشکسرای", "تسوج": "تسوج", "کلوانق": "کلوانق", "ترکمانچای": "ترکمانچای", "لیلان": "لیلان", "سیس": "سیس", "بخشایش": "بخشایش", "قره آغاج": "قره آغاج", "مهربان": "مهربان", "تیمورلو": "تیمورلو", "زرنق": "زرنق", "شربیان": "شربیان", "کوره کنان": "کوره کنان", "وایقان": "وایقان", "مبارک شهر": "مبارک شهر", "شرفخانه": "شرفخانه", "داریان": "داریان", "خواجه": "خواجه", "آچاچی": "آچاچی", "دوزدوزان": "دوزدوزان", "خوشه مهر": "خوشه مهر" };
            break;
        case "آذربایجان غربی":
            var selectValues = { "ارومیه": "ارومیه", "اشنویه": "اشنویه", "بوکان": "بوکان", "پیرانشهر": "پیرانشهر", "پلدشت": "پلدشت", "تکاب": "تکاب", "چالدران": "چالدران", "چایپاره": "چایپاره", "خوی": "خوی", "سردشت": "سردشت", "سلماس": "سلماس", "شاهین دژ": "شاهین دژ", "شوط": "شوط", "ماکو": "ماکو", "مهاباد": "مهاباد", "میاندوآب": "میاندوآب", "نقده": "نقده", "قره‌ضياءالدين": "قره‌ضياءالدين", "سیه چشمه": "سیه چشمه", "ربط": "ربط", "بازرگان": "بازرگان", "چهاربرج": "چهاربرج", "محمدیار": "محمدیار", "فیرورق": "فیرورق", "تازه شهر": "تازه شهر", "نوشین شهر": "نوشین شهر", "دیزج دیز": "دیزج دیز", "محمود آباد": "محمود آباد", "میر آباد": "میر آباد", "قطور": "قطور", "باروق": "باروق", "گردکشانه": "گردکشانه", "کشاورز": "کشاورز", "ایواوغلی": "ایواوغلی", "نالوس": "نالوس", "قوشچی": "قوشچی", "نازک علیا": "نازک علیا", "مرگنلر": "مرگنلر", "سرو": "سرو", "آواجیق": "آواجیق", "سیلوانه": "سیلوانه", "سیمینه": "سیمینه", "زرآباد": "زرآباد", "خلیفان": "خلیفان", "یولاگلدی": "یولاگلدی" };
            break;
        case "اردبیل":
            var selectValues = { "اردبیل": "اردبیل", "بیله‌ سوار": "بیله ‌سوار", "پارس ‌آباد": "پارس‌ آباد", "خلخال": "خلخال", "کوثر": "کوثر", "گرمی": "گرمی", "مشگین شهر": "مشگین شهر", "نمین": "نمین", "نیر": "نیر", "اصلاندوز": "اصلاندوز", "سرعین": "سرعین" };
            break;
        case "اصفهان":
            var selectValues = { "آران و بیدگل": "آران و بیدگل", "اردستان": "اردستان", "اصفهان": "اصفهان", "برخوار": "برخوار", "بو یین و میاندشت": "بو یین و میاندشت", "تیران و کرون": "تیران و کرون", "چادگان": "چادگان", "خمینی شهر": "خمینی شهر", "خوانسار": "خوانسار", "خور و بیابانک": "خور و بیابانک", "دهاقان": "دهاقان", "سمیرم": "سمیرم", "شاهین شهر و میمه": "شاهین شهر و میمه", "شهر رضا": "شهر رضا", "فریدن": "فریدن", "فریدونشهر": "فریدونشهر", "فلاورجان": "فلاورجان", "کاشان": "کاشان", "گلپایگان": "گلپایگان", "لنجان": "لنجان", "مبارکه": "مبارکه", "نایین": "نایین", "نجف آباد": "نجف آباد", "نطنز": "نطنز", "خوراسگان": "خوراسگان", "فولادشهر": "فولادشهر", "دولت آباد": "دولت آباد" };
            break;
        case "البرز":
            var selectValues = { "اشتهارد": "اشتهارد", "ساوجبلاغ": "ساوجبلاغ", "طالقان": "طالقان", "فردیس": "فردیس", "کرج": "کرج", "نظرآباد": "نظرآباد", "هشتگرد": "هشتگرد", "مهرشهر": "مهرشهر", "جهان شهر": "جهان شهر" };
            break;
        case "ایلام":
            var selectValues = { "آبدانان": "آبدانان", "ایلام": "ایلام", "ایوان": "ایوان", "بدره": "بدره", "چرداول": "چرداول", "دره شهر": "دره شهر", "دهلران": "دهلران", "سیروان": "سیروان", "ملکشاهی": "ملکشاهی", "مهران": "مهران", "هلیلان": "هلیلان" };
            break;
        case "بوشهر":
            var selectValues = { "بوشهر": "بوشهر", "تنگستان": "تنگستان", "جم": "جم", "دشتستان": "دشتستان", "دشتی": "دشتی", "دیر": "دیر", "دیلم": "دیلم", "عسلویه": "عسلویه", "کنگان": "کنگان", "گناوه": "گناوه", "برازجان": "برازجان" };
            break;
        case "تهران":
            var selectValues = { "رودهن": "رودهن", "شهر ری": "شهر ری", "گیلاوند": "گیلاوند", "ورامین": "ورامین", "فیروزکوه": "فیروزکوه", "قدس": "قدس", "قرچک": "قرچک", "ملارد": "ملارد", "شهریار": "شهریار", "شمیرانات": "شمیرانات", "ری": "ری", "رباط کریم": "رباط کریم", "دماوند": "دماوند", "تهران": "تهران", "پاکدشت": "پاکدشت", "پردیس": "پردیس", "پیشوا": "پیشوا", "بهارستان": "بهارستان", "اسلامشهر": "اسلامشهر" };
            break;
        case "چهارمحال و بختیاری":
            var selectValues = { "اردل": "اردل", "بروجن": "بروجن", "بن": "بن", "خانمیرزا": "خانمیرزا", "سامان": "سامان", "شهرکرد": "شهرکرد", "فارسان": "فارسان", "کوهرنگ": "کوهرنگ", "کیار": "کیار", "لردگان": "لردگان", "باباحیدر": "باباحیدر" };
            break;
        case "خراسان جنوبی":
            var selectValues = { "بشرویه": "بشرویه", "بیرجند": "بیرجند", "خوسف": "خوسف", "درمیان": "درمیان", "زیرکوه": "زیرکوه", "سرایان": "سرایان", "سربیشه": "سربیشه", "فردوس": "فردوس", "قائنات": "قائنات", "نهبندان": "نهبندان", "خضری دشت‌بیاض": "خضری دشت‌بیاض" };
            break;
        case "خراسان رضوی":
            var selectValues = { "باخرز": "باخرز", "بجستان": "بجستان", "بردسکن": "بردسکن", "بینالود": "بینالود", "تایباد": "تایباد", "تربت جام": "تربت جام", "تربت حیدریه": "تربت حیدریه", "جغتای": "جغتای", "جوین": "جوین", "چناران": "چناران", "خلیل آباد": "خلیل آباد", "خواف": "خواف", "خوشاب": "خوشاب", "درگز": "درگز", "داورزن": "داورزن", "رشتخوار": "رشتخوار", "زاوه": "زاوه", "سبزوار": "سبزوار", "سرخس": "سرخس", "صالح آباد": "صالح آباد", "فریمان": "فریمان", "فیروزه": "فیروزه", "قوچان": "قوچان", "کاشمر": "کاشمر", "کلات": "کلات", "کوهسرخ": "کوهسرخ", "گناباد": "گناباد", "مشهد": "مشهد", "مه ولات": "مه ولات", "نیشابور": "نیشابور", "طرقبه": "طرقبه" };
            break;
        case "خراسان شمالی":
            var selectValues = { "اسفراین": "اسفراین", "بجنورد": "بجنورد", "جاجرم": "جاجرم", "راز و جرگلان": "راز و جرگلان", "شیروان": "شیروان", "فاروج": "فاروج", "مانه و سملقان": "مانه و سملقان", "آشخانه": "آشخانه" };
            break;
        case "خوزستان":
            var selectValues = { "آبادان": "آبادان", "امیدیه": "امیدیه", "اندیکا": "اندیکا", "اندیمشک": "اندیمشک", "اهواز": "اهواز", "ایذه": "ایذه", "آغاجاری": "آغاجاری", "باغ ‌ملک": "باغ‌ ملک", "باوی": "باوی", "بندر ماهشهر": "بندر ماهشهر", "بهبهان": "بهبهان", "حمیدیه": "حمیدیه", "خرمشهر": "خرمشهر", "دزفول": "دزفول", "دشت آزادگان": "دشت آزادگان", "رامشیر": "رامشیر", "رامهرمرز": "رامهرمرز", "شادگان": "شادگان", "شوش": "شوش", "شوشتر": "شوشتر", "کارون": "کارون", "گتوند": "گتوند", "لالی": "لالی", "مسجد سلیمان": "مسجد سلیمان", "هندیجان": "هندیجان", "هفتکل": "هفتکل", "هویزه": "هویزه", "سربندر": "سربندر" };
            break;
        case "زنجان":
            var selectValues = { "ابهر": "ابهر", "ایجرود": "ایجرود", "خدابنده": "خدابنده", "خرمدره": "خرمدره", "زنجان": "زنجان", "سلطانیه": "سلطانیه", "طارم": "طارم", "ماهنشان": "ماهنشان" };
            break;
        case "سمنان":
            var selectValues = { "آرادان": "آرادان", "دامغان": "دامغان", "سرخه": "سرخه", "سمنان": "سمنان", "شاهرود": "شاهرود", "گرمسار": "گرمسار", "مهدی شهر": "مهدی شهر", "میامی": "میامی" };
            break;
        case "سیستان و بلوچستان":
            var selectValues = { "ایرانشهر": "ایرانشهر", "بمپور": "بمپور", "تفتان": "تفتان", "چابهار": "چابهار", "خاش": "خاش", "دلگان": "دلگان", "دشتیاری": "دشتیاری", "راسک": "راسک", "زابل": "زابل", "زاهدان": "زاهدان", "زهک": "زهک", "سراوان": "سراوان", "سرباز": "سرباز", "سیب و سوران": "سیب و سوران", "فنوج": "فنوج", "قصرقند": "قصرقند", "کنارک": "کنارک", "نیک‌ شهر": "نیک ‌شهر", "مهرستان": "مهرستان", "میرجاوه": "میرجاوه", "نیمروز": "نیمروز", "هامون": "هامون", "هیرمند": "هیرمند" };
            break;
        case "فارس":
            var selectValues = { "آباده": "آباده", "ارسنجان": "ارسنجان", "استهبان": "استهبان", "اقلید": "اقلید", "اوز": "اوز", "بوانات": "بوانات", "بختگان": "بختگان", "بیضا": "بیضا", "پاسارگاد": "پاسارگاد", "جهرم": "جهرم", "خرامه": "خرامه", "خرم‌ بید": "خرم ‌بید", "خفر": "خفر", "خنج": "خنج", "داراب": "داراب", "رستم": "رستم", "زرقان": "زرقان", "زرقان": "زرقان", "زرین دشت": "زرین دشت", "سپیدان": "سپیدان", "سرجهان": "سرجهان", "سروستان": "سروستان", "شیراز": "شیراز", "فسا": "فسا", "فراشبند": "فراشبند", "فسا": "فسا", "فیروزآباد": "فیروزآباد", "قیروکارزین": "قیروکارزین", "کازرون": "کازرون", "کوار": "کوار", "کوه چنار": "کوه چنار", "گراش": "گراش", "لارستان": "لارستان", "لامرد": "لامرد", "مرودشت": "مرودشت", "ممسنی": "ممسنی", "مهر": "مهر", "نی‌ ریز": "نی‌ ریز" };
            break;
        case "قزوین":
            var selectValues = { "آبیک": "آبیک", "البرز": "البرز", "آوج": "آوج", "بوئین زهرا": "بوئین زهرا", "ناکستان": "ناکستان", "قزوین": "قزوین" };
            break;
        case "قم":
            var selectValues = { "قم": "قم" };
            break;
        case "کردستان":
            var selectValues = { "بانه": "بانه", "بیجار": "بیجار", "دهگلان": "دهگلان", "دیواندره": "دیواندره", "سروآباد": "سروآباد", "سقز": "سقز", "سنندج": "سنندج", "قروه": "قروه", "کامیاران": "کامیاران", "مریوان": "مریوان" };
            break;
        case "کرمان":
            var selectValues = { "ارزوئیه": "ارزوئیه", "انار": "انار", "بافت": "بافت", "بردسیر": "بردسیر", "بم": "بم", "جیرفت": "جیرفت", "رابر": "رابر", "راور": "راور", "رفسنجان": "رفسنجان", "رودبار جنوب": "رودبار جنوب", "ریگان": "ریگان", "زرند": "زرند", "سیرجان": "سیرجان", "شهر بابک": "شهر بابک", "عنبرآباد": "عنبرآباد", "فاریاب": "فاریاب", "فهرج": "فهرج", "قلعه گنج": "قلعه گنج", "کرمان": "کرمان", "کوهبنان": "کوهبنان", "کهنوج": "کهنوج", "منوجان": "منوجان", "نرماشیر": "نرماشیر" };
            break;
        case "کرمانشاه":
            var selectValues = { "اسلام آباد غرب": "اسلام آباد غرب", "پاوه": "پاوه", "ثلاث باباجانی": "ثلاث باباجانی", "جوانرود": "جوانرود", "دالاهو": "دالاهو", "روانسر": "روانسر", "سرپل ذهاب": "سرپل ذهاب", "سنقر": "سنقر", "صحنه": "صحنه", "قصر شیرین": "قصر شیرین", "کرمانشاه": "کرمانشاه", "کنگاور": "کنگاور", "گیلان غرب": "گیلان غرب", "هرسین": "هرسین" };
            break;
        case "کهگیلویه و بویراحمد":
            var selectValues = { "بویراحمد": "بویراحمد", "باشت": "باشت", "بهمئی": "بهمئی", "چرام": "چرام", "دنا": "دنا", "کهگیلویه": "کهگیلویه", "گچساران": "گچساران", "لنده": "لنده", "مارگون": "مارگون", "یاسوج": "یاسوج" };
            break;
        case "گلستان":
            var selectValues = { "آزادشهر": "آزادشهر", "آق قلا": "آق قلا", "بندر گز": "بندر گز", "ترکمن": "ترکمن", "رامیان": "رامیان", "علی آباد کتول": "علی آباد کتول", "کرد کوی": "کرد کوی", "کلاله": "کلاله", "گالیکش": "گالیکش", "گرگان": "گرگان", "گمیشان": "گمیشان", "گنبد کاووس": "گنبد کاووس", "مراوه ‌تپه": "مراوه‌ تپه", "مینو دشت": "مینو دشت" };
            break;
        case "گیلان":
            var selectValues = { "املش": "املش", "آستارا": "آستارا", "آستانه اشرفیه": "آستانه اشرفیه", "بندر انزلی": "بندر انزلی", "رشت": "رشت", "رضوان شهر": "رضوان شهر", "رودبار": "رودبار", "رودسر": "رودسر", "سیاهکل": "سیاهکل", "شفت": "شفت", "صومعه سرا": "صومعه سرا", "طوالش": "طوالش", "فومن": "فومن", "لاهیجان": "لاهیجان", "لنگرود": "لنگرود", "ماسال": "ماسال", "چابکسر": "چابکسر", "اسالم": "اسالم", "یره سر": "یره سر", "سنگر": "سنگر", "تالش": "تالش", "خمام": "خمام", "کومله": "کومله" };
            break;
        case "لرستان":
            var selectValues = { "ازنا": "ازنا", "الیگودرز": "الیگودرز", "بروجرد": "بروجرد", "پل‌ دختر": "پل‌ دختر", "چگنی": "چگنی", "خرم آباد": "خرم آباد", "دو رود": "دو رود", "دلفان": "دلفان", "رومشکان": "رومشکان", "سلسله": "سلسله", "کوه دشت": "کوه دشت", "الشتر": "الشتر" };
            break;
        case "مازندران":
            var selectValues = { "آمل": "آمل", "بابل": "بابل", "بابلسر": "بابلسر", "بهشهر": "بهشهر", "تنکابن": "تنکابن", "جویبار": "جویبار", "چالوس": "چالوس", "رامسر": "رامسر", "ساری": "ساری", "سوادکوه": "سوادکوه", "سوادکوه شمالی": "سوادکوه شمالی", "سیمرغ": "سیمرغ", "عباس آباد": "عباس آباد", "فریدون کنار": "فریدون کنار", "قائم شهر": "قائم شهر", "گلوگاه": "گلوگاه", "محمود آباد": "محمود آباد", "نکا": "نکا", "نور": "نور", "سلمان شهر": "سلمان شهر", "نوشهر": "نوشهر", "فرح آباد": "فرح آباد" };
            break;
        case "مرکزی":
            var selectValues = { "آشتیان": "آشتیان", "اراک": "اراک", "تفرش": "تفرش", "خمین": "خمین", "خنداب": "خنداب", "دلیجان": "دلیجان", "زرندیه": "زرندیه", "ساوه": "ساوه", "شازند": "شازند", "فراهان": "فراهان", "کمیجان": "کمیجان", "محلات": "محلات" };
            break;
        case "هرمزگان":
            var selectValues = { "ابوموسی": "ابوموسی", "بستک": "بستک", "بشاگرد": "بشاگرد", "بندر عباس": "بندر عباس", "بندر لنگه": "بندر لنگه", "پارسیان": "پارسیان", "جاسک": "جاسک", "حاجی‌آباد": "حاجی‌آباد", "بندر خمیر": "بندر خمیر", "رودان": "رودان", "سیریک": "سیریک", "قشم": "قشم", "کیش": "کیش", "میناب": "میناب" };
            break;
        case "همدان":
            var selectValues = { "اسد آباد": "اسد آباد", "بهار": "بهار", "تویسرکان": "تویسرکان", "درگزین": "درگزین", "رزن": "رزن", "فامنین": "فامنین", "کبودر آهنگ": "کبودر آهنگ", "ملایر": "ملایر", "نهاوند": "نهاوند", "همدان": "همدان", "لالجین": "لالجین" };
            break;
        case "یزد":
            var selectValues = { "ابر کوه": "ابر کوه", "اردکان": "اردکان", "اشکذر": "اشکذر", "بافق": "بافق", "بهاباد": "بهاباد", "تفت": "تفت", "خاتم": "خاتم", "مهریز": "مهریز", "میبد": "میبد", "یزد": "یزد" };
            break;
        case "نامعلوم":
            var selectValues = { "نامعلوم": "نامعلوم" };
            break;
        case "":
            var selectValues = { "": "" }

    }

    $.each(selectValues, function (key, value) {
        $(".city")
            .append($("<option></option>")
                .attr("value", key)
                .text(value));
    });
}