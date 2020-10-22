import auth0 from 'auth0-js'

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'dev-y9axkndv.us.auth0.com',
        clientID: 'xJR3u7cyS2RgjcB5hSfNZ3666v351Xhp',
        redirectUri: 'https://127.0.0.1:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile email'
    })

    userProfile = {}

    login = () => {
        this.auth0.authorize()
    }

    handleAuth = () => {
        this.auth0.parseHash((error, authResult) => {
            if(authResult){
                localStorage.setItem('access_token', authResult.access_token);
                localStorage.setItem('id_token', authResult.id_token);
                let expireAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
                localStorage.setItem('expireAt', expireAt);
                this.getProfile();
            }else{
                console.log(error)
            }
        })
    }

    logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expireAt');
    }

    getAccessToken = () => {
        if(localStorage.getItem('access_token')){
            const access_token = localStorage.getItem('access_token');
            return access_token;
        }else{
            return null;
        }
    }

    getProfile = () => {
        let access_token = this.getAccessToken();
        if(access_token){
            this.auth0.client.userInfo(access_token, (err, profile) => {
                if(profile){
                    this.userProfile = {profile};
                }
            })
        }
    }

    isAuthenticated = () => {
        let expireAt = localStorage.getItem('expireAt');
        return new Date().getTime() < expireAt;
    }
    
}