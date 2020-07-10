const request = require('postman-request')

const func = (callback) => {

    const req = ("https://dad-jokes.p.rapidapi.com/random/jokes?rapidapi-key=32783bdc0amshe7a05480bbbb027p166d23jsnd3c6478add52")

    request({ url: req, json: true}, (error, res) => {
            if(error) {
                callback ('error' , undefined)
            }
            else {
                callback(undefined, {
                    setup : res.body.setup,
                    punchline : res.body.punchline

                })
            }

    })

}

module.exports = func

/*req.headers({
    "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
    "x-rapidapi-key": "32783bdc0amshe7a05480bbbb027p166d23jsnd3c6478add52",
    "useQueryString": true
});*/