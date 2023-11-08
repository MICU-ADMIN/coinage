import { ChevronDown } from '@tamagui/lucide-icons'

import { Accordion, Paragraph, H2, H3, Square, H5 } from 'tamagui'
import { ListItemDemo } from './list'
export function AccordionDemo() {
  return (
    <Accordion overflow="hidden" width="100%" type="multiple">
      <Accordion.Item value="a1">
        <Accordion.Trigger unstyled flexDirection="row" justifyContent="space-between">
          {({ open }) => (
            <>
              <H3 bold>Sahih muslim</H3>

              <Square animation="quick" rotate={open ? '180deg' : '0deg'}>
                <ChevronDown size="$1" />
              </Square>
            </>
          )}
        </Accordion.Trigger>

        <Accordion.Content>
          <ListItemDemo />
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  )
}
