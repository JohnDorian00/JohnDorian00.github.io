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
                $('#time').val(calcTime(batteryAmount * capacity, voltage, nagruzka));
            }
        } else {
            if (time) {
                $('#nagruzka').val(calcNagruzka(batteryAmount * capacity, voltage, time));
            }
        }
    })
});

function calcTime(Q, U, P) {
    return ((Q*U*0.7)/P).toFixed(2)
}

function calcNagruzka(Q, U, t) {
    return ((Q*U*0.7)/t).toFixed(2)
}
