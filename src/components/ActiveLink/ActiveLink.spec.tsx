import { render } from '@testing-library/react'

import { ActiveLink } from '.'

jest.mock('next/router', () => {
	return {
		useRouter() {
			return {
				asPath: '/'
			}
		}
	}
})

describe('ActiveLink', () => {

	it('render correctly', () => {
		const { getByText } = render(
			<ActiveLink href="/" activeClassName="active">
				<a>Home</a>
			</ActiveLink>
		)

		expect(getByText('Home')).toBeInTheDocument()
	})

	it('verify is receiving active class', () => {
		const { getByText } = render(
			<ActiveLink href="/" activeClassName="active">
				<a>Home</a>
			</ActiveLink>
		)

		expect(getByText('Home')).toHaveClass('active')
	})
})
