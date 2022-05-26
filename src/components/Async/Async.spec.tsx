import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"

import { Async } from ".";

test('it renders correctly', async () => {
	render(<Async />);

	expect(screen.getByText('HELOOOO')).toBeInTheDocument();
	// expect(await screen.findByText('Button')).toBeInTheDocument(); //assincrono e da erro

	// await waitFor(() => {
	// 	// return expect(screen.getByText('Button')).toBeInTheDocument();//sincrono e da erro
	// 	return expect(screen.queryByText('Button')).not.toBeInTheDocument(); //sincrono e nao da erro
	// })

	await waitForElementToBeRemoved(screen.queryByText('Button'))
})