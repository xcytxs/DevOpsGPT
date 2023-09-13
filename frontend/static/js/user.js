$(document).ready(function () {
    // show dropdown on hover
    $('.main.menu  .ui.dropdown').dropdown({
        on: 'hover'
    });
});

function login() {
    var requestData = JSON.stringify({ 'username': $("#login-username").val(), 'password': $("#login-password").val() })
 
    successCallback = function(data) {
        window.location.href = "index.html";
    }

    errorCallback = function(error) {
        $("#login-message").html(error)
        $("#login-message").fadeOut().fadeIn()
    }

    sendAjaxRequest('/user/login', "POST", requestData, successCallback, errorCallback, true, false)
}

function register() {
    var requestData = JSON.stringify({ 
        'username': $("#login-username").val(), 
        'password': $("#login-password").val(),
        'email': $("#login-email").val(),
        'phone': $("#login-phone").val(),
        'launch_code': $("#login-launch_code").val(),
    })
 
    successCallback = function(data) {
        window.location.href = "user_login.html";
    }

    errorCallback = function(error) {
        $("#login-message").html(error)
        $("#login-message").fadeOut().fadeIn()
    }

    sendAjaxRequest('/user/register', "POST", requestData, successCallback, errorCallback, true, false)
}

function send_launch_code(ele) {
    $(ele).addClass("disabled")
    $(ele).addClass("loading")

    var requestData = JSON.stringify({
        'email': $("#login-email").val(),
    })
 
    successCallback = function(data) {
        $(ele).removeClass("loading")
    }

    errorCallback = function(error) {
        $("#login-message").html(error)
        $("#login-message").fadeOut().fadeIn()
        $(ele).removeClass("loading")
        $(ele).removeClass("disabled")
    }

    sendAjaxRequest('/user/send_launch_code', "POST", requestData, successCallback, errorCallback, true, false)
}