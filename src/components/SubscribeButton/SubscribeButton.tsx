import { screen, render, fireEvent } from '@testing-library/react'

import { signIn, useSession } from 'next-auth/client'

import { SubscribeButton } from '.'

import { useRouter } from 'next/router';

jest.mock('next-auth/client')
jest.mock('next/router');

describe('SubscribeButton', () => {
	it('renders correctly', () => {
		const useSessionMocked = jest.mocked(useSession);

		useSessionMocked.mockReturnValueOnce([null, false]);

		render(
			<SubscribeButton />
		)
		expect(screen.getByText('Subscribe now')).toBeInTheDocument()
	})

	it('redirects user to sign in when not autenthicated', () => {
		const sigInMocked = jest.mocked(signIn);

		const useSessionMocked = jest.mocked(useSession);

		useSessionMocked.mockReturnValueOnce([null, false]);

		render(
			<SubscribeButton />
		)

		const subscribeButton = screen.getByText('Subscribe now');

		fireEvent.click(subscribeButton);

		expect(sigInMocked).toHaveBeenCalled();
	})

	it('redirects to posts when user already has a subscription', () => {
		const useRouterMocked = jest.mocked(useRouter);
		const useSessionMocked = jest.mocked(useSession);
		const pushMock = jest.fn();

		useSessionMocked.mockReturnValueOnce([
			{
				user:
				{
					name: 'John Doe',
					email: 'johndoe@hotmail.com'
				},
				activeSubscription: 'fake-active-subscription',
				expires: 'fake-expires'
			},
			false
		])

		useRouterMocked.mockReturnValueOnce({
			push: pushMock
		} as any)

		render(
			<SubscribeButton />
		)

		const subscribeButton = screen.getByText('Subscribe now');

		fireEvent.click(subscribeButton);

		expect(pushMock).toHaveBeenCalledWith('/posts');
	})
})
