const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue()
    expect(queue.size()).toEqual(0)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
   const queue = new Queue()
   expect(queue.add('laranja')).toEqual('laranja')
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue()
    queue.add('uva');
    queue.add('banana');
    queue.add('cacau');
    queue.add('morango');
    expect(queue.peek()).toEqual('uva');
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue()
    queue.add('manga');
    queue.add('banana');
    queue.add('cacau');
    queue.add('morango');
    expect(queue.dequeue()).toEqual('manga');
  })
})