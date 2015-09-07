'use strict'

import { expect } from 'chai'
import { add } from '../'

describe('# index', () => {
  it('add', () => {
    expect(add(1, 2)).to.equal(3)
  })
})
