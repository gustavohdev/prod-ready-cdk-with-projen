exports.handler = function(event, context) {
    console.log('Hello, CloudWatch')
    context.succeed('Hello Word')

    context.myerror('teste')
}