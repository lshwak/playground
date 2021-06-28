module.exports = {
    isOwner:function(request, response) {
        if (request.user) { // request.session.is_logined에서 request.user로 변경하면 로그인 되어있다면 user객체가 들어있을것.
            return true;
        } else {
            return false;
        }
    },
    statusUI:function(request, response) {
        var authStatusUI = '<a href="/auth/login">login</a> | <a href="/auth/register">Register</a>'
        if (this.isOwner(request, response)) {
            authStatusUI = `${request.user.nickname} | <a href="/auth/logout">logout</a>`; // request.session.nickname -> request.user.nickname.
        }
        return authStatusUI;
    }
}

// isOwner를 통해 로그인된 사용자인지 아닌지를 체크.