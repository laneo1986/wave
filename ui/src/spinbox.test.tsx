// Copyright 2020 H2O.ai, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { act, fireEvent, render } from '@testing-library/react'
import React from 'react'
import { Spinbox, XSpinbox } from './spinbox'
import { wave } from './ui'

const
  name = 'spinbox',
  spinboxProps: Spinbox = { name },
  pushMock = jest.fn(),
  mouseEvent = { clientX: 0, clientY: 0 },
  simulateClick = (el: Element) => {
    fireEvent.mouseDown(el, mouseEvent)
    fireEvent.mouseUp(el, mouseEvent)
  }
describe('Spinbox.tsx', () => {
  beforeAll(() => {
    jest.useFakeTimers()
    wave.push = pushMock
  })
  beforeEach(() => {
    wave.args[name] = null
    pushMock.mockReset()
  })

  it('Renders data-test attr', () => {
    const { queryByTestId } = render(<XSpinbox model={spinboxProps} />)
    expect(queryByTestId(name)).toBeInTheDocument()
  })

  it('Sets args - init', () => {
    render(<XSpinbox model={spinboxProps} />)
    expect(wave.args[name]).toBe(0)
  })

  it('Sets args - init - min specified', () => {
    render(<XSpinbox model={{ ...spinboxProps, min: 1 }} />)
    expect(wave.args[name]).toBe(1)
  })

  it('Sets args - init - value specified', () => {
    render(<XSpinbox model={{ ...spinboxProps, value: 101, max: 100 }} />)
    expect(wave.args[name]).toBe(100)
  })

  it('Sets args on increment', () => {
    const { container } = render(<XSpinbox model={spinboxProps} />)
    simulateClick(container.querySelector('.ms-UpButton')!)
    expect(wave.args[name]).toBe(1)
  })

  it('Sets args on increment - not beyond max', () => {
    const { container } = render(<XSpinbox model={{ ...spinboxProps, value: 1, max: 1 }} />)
    simulateClick(container.querySelector('.ms-UpButton')!)
    expect(wave.args[name]).toBe(1)
  })

  it('Calls push on increment if trigger specified', () => {
    const { container } = render(<XSpinbox model={{ ...spinboxProps, trigger: true }} />)
    simulateClick(container.querySelector('.ms-UpButton')!)
    expect(wave.args[name]).toBe(1)
    expect(pushMock).toHaveBeenCalledTimes(1)
  })

  it('Sets args on decrement', () => {
    const { container } = render(<XSpinbox model={{ ...spinboxProps, value: 1 }} />)
    simulateClick(container.querySelector('.ms-DownButton')!)
    expect(wave.args[name]).toBe(0)
  })

  it('Sets args on decrement - not beyond min', () => {
    const { container } = render(<XSpinbox model={{ ...spinboxProps, value: 1, min: 1 }} />)
    simulateClick(container.querySelector('.ms-DownButton')!)
    expect(wave.args[name]).toBe(1)
  })

  it('Calls push on decrement if trigger specified', () => {
    const { container } = render(<XSpinbox model={{ ...spinboxProps, trigger: true }} />)
    simulateClick(container.querySelector('.ms-DownButton')!)
    expect(pushMock).toHaveBeenCalledTimes(1)
  })

  it('Sets args on input', () => {
    expect(wave.args[name]).toBeNull()
    const { getByTestId } = render(<XSpinbox model={spinboxProps} />)
    fireEvent.input(getByTestId(name), { target: { value: 50 } })
    expect(wave.args[name]).toBe(50)
  })

  it('Sets args on input - not beyond min', () => {
    expect(wave.args[name]).toBeNull()
    const { getByTestId } = render(<XSpinbox model={{ ...spinboxProps, min: 1 }} />)
    fireEvent.input(getByTestId(name), { target: { value: 0 } })
    expect(wave.args[name]).toBe(1)
  })

  it('Sets args on input - not beyond max', () => {
    expect(wave.args[name]).toBeNull()
    const { getByTestId } = render(<XSpinbox model={{ ...spinboxProps, max: 1 }} />)
    fireEvent.input(getByTestId(name), { target: { value: 2 } })
    expect(wave.args[name]).toBe(1)
  })

  it('Calls push on input if trigger specified', () => {
    const { getByTestId } = render(<XSpinbox model={{ ...spinboxProps, trigger: true }} />)
    fireEvent.change(getByTestId(name), { target: { value: 50 } })

    expect(pushMock).not.toBeCalled() // Not called immediately, but after specified timeout.
    act(() => { jest.runOnlyPendingTimers() })
    expect(pushMock).toHaveBeenCalled()
  })

  it('No floating point imprecision in increment', () => {
    const
      { container } = render(<XSpinbox model={{ ...spinboxProps, value: 0, step: 0.0001 }} />),
      incrementBtn = container.querySelector('.ms-UpButton')!,
      spinboxInput = container.querySelector('.ms-spinButton-input') as HTMLInputElement

    expect(spinboxInput.value).toBe('0')
    simulateClick(incrementBtn)
    expect(spinboxInput.value).toBe('0.0001')
    simulateClick(incrementBtn)
    expect(spinboxInput.value).toBe('0.0002')
    simulateClick(incrementBtn)
    expect(spinboxInput.value).toBe('0.0003')
    simulateClick(incrementBtn)
    expect(spinboxInput.value).toBe('0.0004')
    simulateClick(incrementBtn)
    expect(spinboxInput.value).toBe('0.0005')
    simulateClick(incrementBtn)
  })

  it('No floating point imprecision in decrement', () => {
    const
      { container } = render(<XSpinbox model={{ ...spinboxProps, value: 0.001, step: 0.0001 }} />),
      decrementBtn = container.querySelector('.ms-DownButton')!,
      spinboxInput = container.querySelector('.ms-spinButton-input') as HTMLInputElement

    expect(spinboxInput.value).toBe('0.001')
    simulateClick(decrementBtn)
    expect(spinboxInput.value).toBe('0.0009')
    simulateClick(decrementBtn)
    expect(spinboxInput.value).toBe('0.0008')
    simulateClick(decrementBtn)
    expect(spinboxInput.value).toBe('0.0007')
    simulateClick(decrementBtn)
    expect(spinboxInput.value).toBe('0.0006')
    simulateClick(decrementBtn)
    expect(spinboxInput.value).toBe('0.0005')
    simulateClick(decrementBtn)
  })
})