import { screen, render } from '@testing-library/react'

import { useSession } from 'next-auth/client'

import { SignButton } from '.'

jest.mock('next-auth/client')

describe('SignButton', () => {

	it('render correctly when user is not logged in', () => {
		const useSessionMocked = jest.mocked(useSession);

		useSessionMocked.mockReturnValueOnce([null, false])

		render(
			<SignButton />
		)

		expect(screen.getByText('Sign in with GitHub')).toBeInTheDocument()
	})

	it('render correctly when user is logged in', () => {

		const useSessionMocked = jest.mocked(useSession);

		useSessionMocked.mockReturnValueOnce([
			{ user: { name: 'John Doe', email: 'johndoe@hotmail.com' }, expires: 'fake-expires' },
			false
		])

		render(
			<SignButton />
		)

		expect(screen.getByText('John Doe')).toBeInTheDocument()
	})
})
