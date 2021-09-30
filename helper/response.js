
const ok = (values, res) => {
    return res.json({
        status: 'succes',
        data: values
    })
}

const ok2 = (values, res) => {
    return res.json({
        status: 'success',
        message: values
    })
}

const error = (values, res) => {
    return res.status(400).json({
        status: 'error',
        message: values
    })
}

const notfound = (values, res) => {
    return res.status(404).json({
        status: 'error',
        message: values
    })
}

module.exports = {
    ok,
    ok2,
    error,
    notfound
}