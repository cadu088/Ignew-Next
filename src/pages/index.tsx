import { GetStaticProps } from 'next';
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import styles from './home.module.scss';

interface HomeProps {
	product: {
		priceId: string;
		amount: string;
	}
}

export default function Home({ product }: HomeProps) {
	return (
		<>
			<Head><title>Home | hj.news</title></Head>

			<main className={styles.contentContainer}>
				<section className={styles.hero}>
					<span>👏 Hey, welcome</span>
					<h1>News about the <span>React</span> world.</h1>
					<p>Get Access to all publications<br />
						<span>for {product.amount} month</span>
					</p>
					<SubscribeButton />
				</section>
				<img src="/images/avatar.svg" alt="Girl coding" />
			</main>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const price = await stripe.prices.retrieve('price_1JxIPnFKobnOy9DWbLBH1csG')

	const product = {
		priceId: price.id,
		amount: new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		}).format(price.unit_amount / 100),
	};

	return {
		props: {
			product
		},
		revalidate: 60 * 60 * 24, // 24 hours
		// cache do html para todos os usuarios

		//client side: ex: comentarios de um post(carrega depois)
		//server side ex: dados usuarios logado
		//static site generation ex: G1 nao logado
	}
}