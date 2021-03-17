import React from 'react'
import store from './store'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { TranslateProvider } from 'translate-components'
import * as registerServiceWorker from './registerServiceWorker'

import App from './app'

import translations from './translations.json'

//registerServiceWorker.unregister();

render(
	<TranslateProvider translations={translations} defaultLanguage={'ru'}>
		<Provider store={store}>
			<App />
		</Provider>
	</TranslateProvider>,
	document.querySelector('#root')
)

registerServiceWorker.default();