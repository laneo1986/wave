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

import * as Fluent from '@fluentui/react'
import { B, Id, S, U } from 'h2o-wave'
import React from 'react'
import { stylesheet } from 'typestyle'
import { cssVar, rem } from './theme'

/**
 * Create a step for a stepper.
 */
interface Step {
  /** Text displayed below icon. */
  label: S
  /** Icon to be displayed. */
  icon?: S
  /** Indicates whether this step has already been completed. */
  done?: B
}

/**
  Create a component that displays a sequence of steps in a process.
  The steps keep users informed about where they are in the process and how much is left to complete.
*/
export interface Stepper {
  /** An identifying name for this component. */
  name: Id
  /** The sequence of steps to be displayed. */
  items: Step[]
  /** The width of the stepper, e.g. '100px'. Defaults to '100%'. */
  width?: S
  /** True if the component should be visible. Defaults to True. */
  visible?: B
  /** An optional tooltip message displayed when a user clicks the help icon to the right of the component. */
  tooltip?: S
}

const
  css = stylesheet({
    stepNumber: {
      background: cssVar('$text'),
      color: cssVar('$card'),
      alignItems: 'center',
      borderRadius: '50%',
      display: 'inline-flex',
      justifyContent: 'center',
      fontSize: rem(0.8),
      height: 24,
      minWidth: 24,
      width: 24,
    },
    disabled: {
      opacity: 0.5
    }
  }),
  iconStyles: Fluent.IIconStyles = { root: { fontSize: 24 } }

export const
  XStepper = ({ model: m }: { model: Stepper }) => {
    const
      steps = m.items,
      disabledStyles = (stepIdx: U) => stepIdx > 0 && !steps[stepIdx - 1].done ? css.disabled : '',
      createStep = (step: Step, i: U) => (
        <React.Fragment key={i}>
          <Fluent.Stack horizontal horizontalAlign='space-between' verticalAlign='center' grow={1}>
            <Fluent.Stack
              className={!step.done ? disabledStyles(i) : ''}
              horizontalAlign='center'
              styles={{ root: { paddingRight: 10, paddingLeft: 10 } }}
            >
              {
                step.done
                  ? <Fluent.Icon styles={iconStyles} iconName='CompletedSolid' />
                  : step.icon
                    ? <Fluent.Icon styles={iconStyles} iconName={step.icon} />
                    : <span className={css.stepNumber}>{i + 1}</span>
              }
              <Fluent.Text block nowrap styles={{ root: { padding: 10 } }}>{step.label}</Fluent.Text>
            </Fluent.Stack>
          </Fluent.Stack>
          {(steps.length - 1) !== i && <Fluent.Separator styles={{ root: { width: '100%' } }} />}
        </React.Fragment>
      )

    return (
      <Fluent.Stack data-test={m.name} horizontal horizontalAlign='space-between' verticalAlign='center'>
        {steps.map(createStep)}
      </Fluent.Stack>
    )
  }