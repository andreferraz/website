'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { type ReactNode, useMemo, useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { PiCheckCircleBold, PiEmptyBold, PiProhibitBold, PiWarningCircleBold } from 'react-icons/pi'
import styles from './NamingPlaygroundInteractive.module.css'

const contextOptions: TokenOption[] = [
  ['Account', 'Accounts'],
  ['Admin', 'Admins'],
  'Analytics',
  ['App', 'Apps'],
  ['Article', 'Articles'],
  'Auth',
  'Billing',
  ['Blog', 'Blogs'],
  ['Brand', 'Brands'],
  ['Cart', 'Carts'],
  ['Catalog', 'Catalogs'],
  'Checkout',
  ['Client', 'Clients'],
  ['Comment', 'Comments'],
  ['Community', 'Communities'],
  ['Company', 'Companies'],
  ['Contact', 'Contacts'],
  'Content',
  ['Dashboard', 'Dashboards'],
  ['Design', 'Designs'],
  'Docs',
  ['Email', 'Emails'],
  ['Event', 'Events'],
  ['Faq', 'Faqs'],
  'Feedback',
  'Footer',
  ['Form', 'Forms'],
  'Help',
  'Home',
  ['Invoice', 'Invoices'],
  'KnowledgeBase',
  'Landing',
  'Marketing',
  ['Member', 'Members'],
  ['Menu', 'Menus'],
  'Navigation',
  ['Notification', 'Notifications'],
  'Onboarding',
  ['Order', 'Orders'],
  ['Page', 'Pages'],
  ['Payment', 'Payments'],
  ['Plan', 'Plans'],
  'Pricing',
  ['Product', 'Products'],
  ['Profile', 'Profiles'],
  ['Project', 'Projects'],
  ['Publication', 'Publications'],
  ['Report', 'Reports'],
  'Search',
  'Security',
  'Settings',
  ['Site', 'Sites'],
  'Social',
  ['Subscription', 'Subscriptions'],
  'Support',
  ['System', 'Systems'],
  ['Team', 'Teams'],
  ['User', 'Users'],
  ['Workspace', 'Workspaces'],
]

const elementOptions: TokenOption[] = [
  ['Accordion', 'Accordions'],
  ['Alert', 'Alerts'],
  ['Avatar', 'Avatars'],
  ['Badge', 'Badges'],
  ['Banner', 'Banners'],
  ['Breadcrumb', 'Breadcrumbs'],
  ['Button', 'Buttons'],
  ['Calendar', 'Calendars'],
  ['Card', 'Cards'],
  ['Carousel', 'Carousels'],
  ['Chart', 'Charts'],
  ['Checkbox', 'Checkboxes'],
  ['CodeBlock', 'CodeBlocks'],
  ['Combobox', 'Comboboxes'],
  ['Command', 'Commands'],
  ['Counter', 'Counters'],
  ['Dialog', 'Dialogs'],
  ['Divider', 'Dividers'],
  ['Drawer', 'Drawers'],
  ['Dropdown', 'Dropdowns'],
  'EmptyState',
  ['Field', 'Fields'],
  ['Filter', 'Filters'],
  'Footer',
  ['Form', 'Forms'],
  ['Grid', 'Grids'],
  'Header',
  ['Hero', 'Heroes'],
  ['Icon', 'Icons'],
  ['Image', 'Images'],
  ['Indicator', 'Indicators'],
  ['Input', 'Inputs'],
  ['Item', 'Items'],
  ['Label', 'Labels'],
  ['Legend', 'Legends'],
  ['Link', 'Links'],
  ['List', 'Lists'],
  ['Logo', 'Logos'],
  ['Menu', 'Menus'],
  ['Message', 'Messages'],
  ['Modal', 'Modals'],
  'Nav',
  ['Notice', 'Notices'],
  'Pagination',
  ['Panel', 'Panels'],
  ['Popover', 'Popovers'],
  'Progress',
  ['Quote', 'Quotes'],
  ['Radio', 'Radios'],
  ['Section', 'Sections'],
  ['Select', 'Selects'],
  'Sidebar',
  ['Skeleton', 'Skeletons'],
  ['Slider', 'Sliders'],
  ['Spinner', 'Spinners'],
  ['Stack', 'Stacks'],
  ['Stat', 'Stats'],
  ['Stepper', 'Steppers'],
  ['Switch', 'Switches'],
  ['Tab', 'Tabs'],
  ['Table', 'Tables'],
  ['Tag', 'Tags'],
  'Text',
  ['Textarea', 'Textareas'],
  ['Timeline', 'Timelines'],
  ['Toast', 'Toasts'],
  ['Toolbar', 'Toolbars'],
  ['Tooltip', 'Tooltips'],
  ['Widget', 'Widgets'],
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

type TokenOption = string | [string, string]

function getSingularValue(option: TokenOption): string {
  return Array.isArray(option) ? option[0] : option
}

function getDisplayValue(singular: string, options: TokenOption[], plural: boolean): string {
  if (!singular) return ''
  const opt = options.find((o) => getSingularValue(o) === singular)
  if (!opt || !Array.isArray(opt)) return singular
  return plural ? opt[1] : opt[0]
}

type ValidationStatus = 'ok' | 'warning' | 'error'

interface ValidationResult {
  status: ValidationStatus
  message: ReactNode
}

export interface NamingPlaygroundInteractiveProps {
  texts: {
    accordionTrigger: string
    intro: string
    buildPrompt: string
    plural: string
    sections: {
      context: { title: string; note: string; emptyOptionLabel: string }
      element: { title: string; note: string; emptyOptionLabel: string }
      variant: { title: string; note: string; emptyOptionLabel: string }
    }
    tokenLabels: {
      context: string
      element: string
      variant: string
    }
    validation: {
      empty: ReactNode
      missingElement: ReactNode
      global: ReactNode
      variantWithoutContext: ReactNode
      contextOnly: ReactNode
      withVariant: ReactNode
    }
  }
}

interface TokenOptionsSectionProps {
  groupName: string
  title: string
  note: string
  titleClassName: string
  emptyOptionLabel: string
  options: TokenOption[]
  value: string
  onChange: (nextValue: string) => void
  showPlural?: boolean
  onPluralChange?: (value: boolean) => void
  pluralLabel: string
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
  showPlural = false,
  onPluralChange,
  pluralLabel,
}: TokenOptionsSectionProps) {
  const getOptionId = (option: TokenOption) => {
    const sanitized = getSingularValue(option)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')

    return `${groupName}-${sanitized}`
  }

  const radioLabelClassName =
    'block w-full rounded-md px-2.5 py-1.5 text-left cursor-pointer transition-colors peer-focus-visible:outline peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-(--focus-outline) peer-checked:font-semibold'
  const tokenLabelClassName = `${radioLabelClassName} hover:bg-(--surface) peer-checked:bg-(--foreground) peer-checked:text-(--background) peer-checked:hover:bg-(--foreground) peer-checked:hover:text-(--background)`
  const emptyLabelClassName = `${radioLabelClassName} text-muted hover:bg-(--surface) peer-checked:bg-(--surface) peer-checked:text-(--foreground) py-3`
  const emptyOptionId = `${groupName}-none`

  return (
    <fieldset className="border-0 p-0 m-0 transition-opacity duration-300">
      <legend className="mb-3! flex w-full items-center gap-1.5">
        <span className={`font-semibold ${titleClassName}`}>{title}</span>
        <span className="rounded-md bg-(--surface) px-2 py-0.5 text-xs font-medium">{note}</span>
        {onPluralChange && (
          <label className="ml-auto flex cursor-pointer select-none items-center gap-1.5 text-xs text-muted">
            <input
              type="checkbox"
              checked={showPlural}
              onChange={(e) => onPluralChange(e.target.checked)}
              className="accent-(--foreground) cursor-pointer"
            />
            {pluralLabel}
          </label>
        )}
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
          const singular = getSingularValue(option)
          const display = Array.isArray(option) ? (showPlural ? option[1] : option[0]) : option
          const optionId = getOptionId(option)

          return (
            <li key={singular} className="my-1!">
              <input
                id={optionId}
                type="radio"
                name={groupName}
                value={singular}
                checked={value === singular}
                onChange={() => onChange(singular)}
                className="peer sr-only"
              />
              <label htmlFor={optionId} className={tokenLabelClassName}>
                {display}
              </label>
            </li>
          )
        })}
      </ul>
    </fieldset>
  )
}

function getValidationMessage(
  context: string,
  element: string,
  variant: string,
  messages: NamingPlaygroundInteractiveProps['texts']['validation'],
): ValidationResult {
  if (!element && !context && !variant) {
    return {
      status: 'error',
      message: messages.empty,
    }
  }

  if (!element) {
    return {
      status: 'error',
      message: messages.missingElement,
    }
  }

  if (!context && !variant) {
    return {
      status: 'warning',
      message: messages.global,
    }
  }

  if (!context && variant) {
    return {
      status: 'error',
      message: messages.variantWithoutContext,
    }
  }

  if (context && !variant) {
    return {
      status: 'ok',
      message: messages.contextOnly,
    }
  }

  return {
    status: 'ok',
    message: messages.withVariant,
  }
}

export const NamingPlaygroundInteractive = ({ texts }: NamingPlaygroundInteractiveProps) => {
  const [accordionValue, setAccordionValue] = useState('')
  const [context, setContext] = useState('')
  const [contextPlural, setContextPlural] = useState(false)
  const [element, setElement] = useState('')
  const [elementPlural, setElementPlural] = useState(false)
  const [variant, setVariant] = useState('')

  const optionsSections = [
    {
      key: 'context',
      groupName: 'token-context',
      title: texts.sections.context.title,
      note: texts.sections.context.note,
      titleClassName: 'text-fg-red',
      emptyOptionLabel: texts.sections.context.emptyOptionLabel,
      options: contextOptions,
      value: context,
      onChange: setContext,
      showPlural: contextPlural,
      onPluralChange: setContextPlural,
    },
    {
      key: 'element',
      groupName: 'token-element',
      title: texts.sections.element.title,
      note: texts.sections.element.note,
      titleClassName: 'text-fg-blue',
      emptyOptionLabel: texts.sections.element.emptyOptionLabel,
      options: elementOptions,
      value: element,
      onChange: setElement,
      showPlural: elementPlural,
      onPluralChange: setElementPlural,
    },
    {
      key: 'variant',
      groupName: 'token-variant',
      title: texts.sections.variant.title,
      note: texts.sections.variant.note,
      titleClassName: 'text-fg-green',
      emptyOptionLabel: texts.sections.variant.emptyOptionLabel,
      options: variantOptions,
      value: variant,
      onChange: setVariant,
    },
  ]

  const componentNameTokens = [context, element, variant].filter(Boolean)
  const tokenItems = [
    {
      value: getDisplayValue(context, contextOptions, contextPlural),
      label: texts.tokenLabels.context,
      colorClass: 'text-fg-red',
    },
    {
      value: getDisplayValue(element, elementOptions, elementPlural),
      label: texts.tokenLabels.element,
      colorClass: 'text-fg-blue',
    },
    { value: variant, label: texts.tokenLabels.variant, colorClass: 'text-fg-green' },
  ].filter((item) => item.value)
  const validation = useMemo(
    () => getValidationMessage(context, element, variant, texts.validation),
    [context, element, variant, texts.validation],
  )

  return (
    <Accordion.Root
      type="single"
      collapsible
      value={accordionValue}
      onValueChange={setAccordionValue}
      className="my-8"
    >
      <Accordion.Item value="cev-examples" className="rounded-xl bg-(--surface-soft) px-4 sm:px-5">
        <Accordion.Header>
          <Accordion.Trigger className="group flex w-[calc(100%+var(--spacing)*5*2)] items-center justify-between gap-3 py-4 text-left -mx-5 px-4 cursor-pointer rounded-xl">
            <span className="text-base font-semibold">{texts.accordionTrigger}</span>
            <HiChevronDown
              aria-hidden="true"
              className="size-5 text-muted transition-transform duration-200 group-data-[state=open]:rotate-180"
            />
          </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Content className={`${styles.accordionContent} px-4 -mx-4`}>
          <div className="pb-5">
            <p className="-mt-2">{texts.intro}</p>

            <div
              className={`sticky ${accordionValue ? 'top-[calc(var(--header-height))]' : 'top-0'} z-20 flex justify-center flex-col mb-0 bg-(--background) rounded-lg text-center px-3 py-2 min-h-36`}
            >
              <div className="mb-2! flex flex-wrap items-center justify-center gap-1.5 text-4xl font-bold tracking-tight break-all">
                {tokenItems.map((token) => (
                  <div key={token.label} className="inline-flex flex-col items-center gap-0.5">
                    <span className={`${token.colorClass}`}>{token.value}</span>
                    <div
                      className={`w-full border-l border-r border-(--muted) flex items-center h-1.5`}
                    >
                      <hr className={`w-full border-t border-(--muted)`} />
                    </div>
                    <span className={`text-sm text-muted font-medium`}>{token.label}</span>
                  </div>
                ))}
              </div>
              {!componentNameTokens.length ? (
                <div>
                  <p className="mb-2! text-sm">{texts.buildPrompt}</p>
                </div>
              ) : null}
              <p className="text-sm my-1!">
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

            <div className={`mt-5 grid grid-cols-1 gap-5 md:grid-cols-3 ${styles.tokenGrid}`}>
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
                  showPlural={section.showPlural}
                  onPluralChange={section.onPluralChange}
                  pluralLabel={texts.plural}
                />
              ))}
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}
