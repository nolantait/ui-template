import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'
import { Dropdown, Pagination, Wizard } from 'ui-reflex'

const application = Application.start()
const context = require.context('.', true, /.js$/)

application.load(definitionsFromContext(context))

application.register('dropdown', Dropdown)
application.register('pagination', Pagination)
application.register('wizard', Wizard)
