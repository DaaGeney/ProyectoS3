import helloName from '@/hello-name'

describe('Tests File hello-name.js', () => {
    it('Should get Hello Jose', () => {
         const name = 'Jose'
         const message = helloName(name)
         expect(message).toEqual('Hello ' + name)})
})