'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { useMemo, useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { PiCheckCircleBold, PiEmptyBold, PiProhibitBold, PiWarningCircleBold } from 'react-icons/pi'
import styles from './NamingPlaygroundInteractive.module.css'

const contextOptions = [
  'Account',
  'Admin',
  'Analytics',
  'App',
  'Article',
  'Auth',
  'Billing',
  'Blog',
  'Brand',
  'Cart',
  'Catalog',
  'Checkout',
  'Client',
  'Comment',
  'Community',
  'Company',
  'Contact',
  'Content',
  'Dashboard',
  'Design',
  'Docs',
  'Email',
  'Event',
  'Faq',
  'Feedback',
  'Footer',
  'Form',
  'Help',
  'Home',
  'Invoice',
  'KnowledgeBase',
  'Landing',
  'Marketing',
  'Member',
  'Menu',
  'Navigation',
  'Notification',
  'Onboarding',
  'Order',
  'Page',
  'Payment',
  'Plan',
  'Pricing',
  'Product',
  'Profile',
  'Project',
  'Publication',
  'Report',
  'Search',
  'Security',
  'Settings',
  'Site',
  'Social',
  'Subscription',
  'Support',
  'System',
  'Team',
  'User',
  'Workspace',
]

const elementOptions = [
  'Accordion',
  'Alert',
  'Avatar',
  'Badge',
  'Banner',
  'Breadcrumb',
  'Button',
  'Calendar',
  'Card',
  'Carousel',
  'Chart',
  'Checkbox',
  'CodeBlock',
  'Combobox',
  'Command',
  'Counter',
  'Dialog',
  'Divider',
  'Drawer',
  'Dropdown',
  'EmptyState',
  'Field',
  'Filter',
  'Footer',
  'Form',
  'Grid',
  'Header',
  'Hero',
  'Icon',
  'Image',
  'Indicator',
  'Input',
  'Item',
  'Label',
  'Legend',
  'Link',
  'List',
  'Logo',
  'Menu',
  'Message',
  'Modal',
  'Nav',
  'Notice',
  'Pagination',
  'Panel',
  'Popover',
  'Progress',
  'Quote',
  'Radio',
  'Section',
  'Select',
  'Sidebar',
  'Skeleton',
  'Slider',
  'Spinner',
  'Stack',
  'Stat',
  'Stepper',
  'Switch',
  'Tab',
  'Table',
  'Tag',
  'Text',
  'Textarea',
  'Timeline',
  'Toast',
  'Toolbar',
  'Tooltip',
  'Widget',
]

const variantOptions = [
  'Advanced',
  'Animated',
  'Bare',
  'Bordered',
  'Centered',
  'Classic',
  'Clear',
  'Collapsible',
  'Compact',
  'Condensed',
  'Contained',
  'Dense',
  'Detailed',
  'Disabled',
  'Elevated',
  'Emphasized',
  'Expanded',
  'Featured',
  'Filled',
  'Flat',
  'Floating',
  'Framed',
  'Full',
  'Ghost',
  'Gradient',
  'Grid',
  'Grouped',
  'Highlighted',
  'Horizontal',
  'IconOnly',
  'Inline',
  'Interactive',
  'Inverted',
  'Large',
  'Minimal',
  'Narrow',
  'Outlined',
  'Primary',
  'Prominent',
  'Quiet',
  'Responsive',
  'Rounded',
  'Secondary',
  'Simple',
  'Small',
  'Soft',
  'Split',
  'Stacked',
  'Sticky',
  'Subtle',
  'Tertiary',
  'Thin',
  'Vertical',
  'Wide',
]

type ValidationStatus = 'ok' | 'warning' | 'error'

interface ValidationResult {
  status: ValidationStatus
  message: string
}

interface TokenOptionsSectionProps {
  groupName: string
  title: string
  note: string
  titleClassName: string
  emptyOptionLabel: string
  options: string[]
  value: string
  onChange: (nextValue: string) => void
}

function TokenOptionsSection({
  groupName,
  title,
  note,
  titleClassName,
  emptyOptionLabel,
  options,
  value,
  onChange,
}: TokenOptionsSectionProps) {
  const getOptionId = (option: string) => {
    const sanitized = option.toLowerCase().replace(/[^a-z0-9]+/g, '-')

    return `${groupName}-${sanitized}`
  }

  const radioLabelClassName =
    'block w-full rounded-md px-2.5 py-1.5 text-left cursor-pointer transition-colors peer-focus-visible:outline peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-(--focus-outline) peer-checked:font-semibold'
  const tokenLabelClassName = `${radioLabelClassName} hover:bg-(--surface) peer-checked:bg-(--foreground) peer-checked:text-(--background) peer-checked:hover:bg-(--foreground) peer-checked:hover:text-(--background)`
  const emptyLabelClassName = `${radioLabelClassName} text-muted hover:bg-(--surface) peer-checked:bg-(--surface) peer-checked:text-(--foreground) py-3`
  const emptyOptionId = `${groupName}-none`

  return (
    <fieldset className="border-0 p-0 m-0">
      <legend className="mb-3! flex items-center gap-1.5">
        <span className={`font-semibold ${titleClassName}`}>{title}</span>
        <span className="rounded-md bg-(--surface) px-2 py-0.5 text-xs font-medium">{note}</span>
      </legend>
      <ul className="list-none! m-0! p-0!">
        <li className="my-1!">
          <input
            id={emptyOptionId}
            type="radio"
            name={groupName}
            value=""
            checked={!value}
            onChange={() => onChange('')}
            className="peer sr-only"
          />
          <label htmlFor={emptyOptionId} className={emptyLabelClassName}>
            <span className="inline-flex items-center gap-2">
              <PiEmptyBold aria-hidden="true" className="size-5" />
              <span className="sr-only">{emptyOptionLabel}</span>
            </span>
          </label>
        </li>
        {options.map((option) => {
          const optionId = getOptionId(option)

          return (
            <li key={option} className="my-1!">
              <input
                id={optionId}
                type="radio"
                name={groupName}
                value={option}
                checked={value === option}
                onChange={() => onChange(option)}
                className="peer sr-only"
              />
              <label htmlFor={optionId} className={tokenLabelClassName}>
                {option}
              </label>
            </li>
          )
        })}
      </ul>
    </fieldset>
  )
}

function getValidationMessage(context: string, element: string, variant: string): ValidationResult {
  if (!element && !context && !variant) {
    return {
      status: 'error',
      message: 'The name must consist of at least an Element.',
    }
  }

  if (!element) {
    return {
      status: 'error',
      message:
        'The name must have an Element in it. Pick a concrete UI piece like Card, List, Button, or Form.',
    }
  }

  if (!context && !variant) {
    return {
      status: 'warning',
      message:
        'Valid for global component, although Context is usually recommended for a clearer scope.',
    }
  }

  if (!context && variant) {
    return {
      status: 'error',
      message: 'Variant without Context is discouraged to avoid breaking the naming convention.',
    }
  }

  if (context && !variant) {
    return {
      status: 'ok',
      message: 'Great combination. It is clear, valid, and follows Context + Element.',
    }
  }

  return {
    status: 'ok',
    message: 'Good combination. Variant is not required, but can be added for more specificity.',
  }
}

export const NamingPlaygroundInteractive = () => {
  const [accordionValue, setAccordionValue] = useState('')
  const [context, setContext] = useState('')
  const [element, setElement] = useState('')
  const [variant, setVariant] = useState('')

  const optionsSections = [
    {
      key: 'context',
      groupName: 'token-context',
      title: 'Context',
      note: 'Recommended',
      titleClassName: 'text-fg-red',
      emptyOptionLabel: 'None',
      options: contextOptions,
      value: context,
      onChange: setContext,
    },
    {
      key: 'element',
      groupName: 'token-element',
      title: 'Element',
      note: 'Required',
      titleClassName: 'text-fg-blue',
      emptyOptionLabel: 'Unset',
      options: elementOptions,
      value: element,
      onChange: setElement,
    },
    {
      key: 'variant',
      groupName: 'token-variant',
      title: 'Variant',
      note: 'Optional',
      titleClassName: 'text-fg-green',
      emptyOptionLabel: 'None',
      options: variantOptions,
      value: variant,
      onChange: setVariant,
    },
  ]

  const componentNameTokens = [context, element, variant].filter(Boolean)
  const validation = useMemo(
    () => getValidationMessage(context, element, variant),
    [context, element, variant],
  )

  return (
    <Accordion.Root type="single" collapsible value={accordionValue} onValueChange={setAccordionValue} className="my-8">
      <Accordion.Item value="cev-examples" className="rounded-xl bg-(--surface-soft) px-4 sm:px-5">
        <Accordion.Header>
          <Accordion.Trigger className="group flex w-[calc(100%+var(--spacing)*5*2)] items-center justify-between gap-3 py-4 text-left -mx-5 px-4 cursor-pointer rounded-xl">
            <span className="text-base font-semibold">Explore more examples</span>
            <HiChevronDown
              aria-hidden="true"
              className="size-5 text-muted transition-transform duration-200 group-data-[state=open]:rotate-180"
            />
          </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Content className={`${styles.AccordionContent} px-4 -mx-4`}>
          <div className="pb-5">
            <p className="-mt-2">
              Here is an interactive list with common examples for component names.
            </p>

            <div className={`sticky ${accordionValue ? 'top-[calc(var(--header-height))]' : 'top-0'} z-20 flex justify-center flex-col mb-0 bg-(--background) rounded-lg text-center px-3 py-2 min-h-36`}>
              <div className="mb-2! flex flex-wrap items-center justify-center gap-2 text-4xl font-bold tracking-tight break-all">
                {componentNameTokens.map((token) => (
                  <div key={token} className="inline-flex">
                    <span>{token}</span>
                  </div>
                ))}
              </div>
              {!componentNameTokens.length ? (
                <div>
                  <p className="mb-2! text-sm">Click the options below to build a component name</p>
                </div>
              ) : null}
              <p className="text-sm text-muted my-1!">
                {validation.status === 'ok' && (
                  <PiCheckCircleBold
                    aria-hidden="true"
                    className="inline size-5 mr-1.5 text-fg-green"
                  />
                )}
                {validation.status === 'warning' && (
                  <PiWarningCircleBold
                    aria-hidden="true"
                    className="inline size-5 mr-1.5 text-fg-yellow"
                  />
                )}
                {validation.status === 'error' && (
                  <PiProhibitBold aria-hidden="true" className="inline size-5 mr-1.5 text-fg-red" />
                )}
                {validation.message}
              </p>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
              {optionsSections.map((section) => (
                <TokenOptionsSection
                  key={section.key}
                  groupName={section.groupName}
                  title={section.title}
                  note={section.note}
                  titleClassName={section.titleClassName}
                  emptyOptionLabel={section.emptyOptionLabel}
                  options={section.options}
                  value={section.value}
                  onChange={section.onChange}
                />
              ))}
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}
