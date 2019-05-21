module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "airbnb",
    ],
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        // allow console
        "no-console": 0,
        "no-param-reassign": 0,
        "max-len": [
            "error",
            {
                code: 150,
            }
        ],
        "no-continue": 0,
    }
};