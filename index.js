function receivesAFunction(callback) {
     callback()
}

function returnsANamedFunction() {
    return function helloFn() {
    }
}

function returnsAnAnonymousFunction() {
    return () => {}
}