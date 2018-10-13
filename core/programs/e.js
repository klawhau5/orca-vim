'use strict'

const ProgramDefault = require('./default')

function ProgramE (program, x, y) {
  ProgramDefault.call(this, program, x, y)

  this.name = 'explode'
  this.glyph = 'e'

  this.ports = [{ x: 0, y: 0, bang: true }]

  this.operation = function () {
    const b = this.bang()

    if (!b) { return }

    this.remove()
    program.lock(b.x, b.y)

    const ns = this.free_neighbors()
    for (const id in ns) {
      const n = ns[id]
      program.add(n.x, n.y, 'b')
    }
  }
}

module.exports = ProgramE