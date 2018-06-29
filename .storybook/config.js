import { configure } from '@storybook/react'

function loadStories() {
  require('../src/component/LoadingMask/LoadingMask.component.story')
  // You can require as many stories as you need.
}

configure(loadStories, module);