import { screen, render } from '@testing-library/react'

import { Header } from '.'

jest.mock('next/router', () => {
	return {
		useRouter() {
			return {
				asPath: '/'
			}
		}
	}
})

jest.mock('next-auth/client', () => {
	return {
		useSession() {
			return [null, false]
		}
	}
})

describe('Header', () => {

	it('render correctly', () => {
		render(
			<Header />
		)

		screen.logTestingPlaygroundURL();

		expect(screen.getByText('Home')).toBeInTheDocument()
		expect(screen.getByText('Posts')).toBeInTheDocument()
	})
})
