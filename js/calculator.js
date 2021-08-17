$(document).ready(function() {
    $("#calcButton").click((e) => {
        let batteryAmount = $("#batteryAmount").val(),
            capacity = $("#capacity").val(),
            voltage = $("#voltage").val(),
            time = $("#time").val(),
            nagruzka = $("#nagruzka").val(),
            maxTime = $("#maxTime").prop("checked");

        if (batteryAmount < 0 || capacity < 0 || voltage < 0 || (time && time < 0) || (nagruzka && nagruzka < 0)) return

        if (maxTime) {
            if (nagruzka) {
                time = batteryAmount * capacity * (voltage / nagruzka);
                $('#time').val(time.toFixed(    2));
            }
        } else {
            if (time) {
                nagruzka = (batteryAmount * capacity * voltage) / time;
                $('#nagruzka').val(nagruzka.toFixed(2));
            }
        }
    })
});
