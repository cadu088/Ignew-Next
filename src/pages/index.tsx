import  Head  from 'next/head';
import { GetStaticProps } from 'next';
import React from 'react';
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss';
import { stripe } from '../services/stripe';

interface HomeProps {
	product: {
		priceId: string,
		amount: number, 
	}
}

export default function Home({product}: HomeProps) {
  return (
		<>
		<Head><title>Home | Ig.News</title></Head>
    <main className={styles.contentContainer}>
			<section  className={styles.hero}>
				<span>👏 Hey, welcome</span>
				<h1>New about the <span>React</span> world.</h1>
				<p>Get access to all the publications <br/>
				<span>for {product.amount} month</span>
				</p>
				<SubscribeButton priceId={product.priceId}/>
			</section>
			<img src="/sorces/avatar.svg" alt="Girl coding"/>
		</main>
		</>
  )
}

export const getStaticProps: GetStaticProps = async () => {
	const price = await stripe.prices.retrieve('price_1K1ZEDBFLcEAfkXOP9zz7sPZ')

	const product = {
		priceId: price.id,
		amount: new Intl.NumberFormat('es-US', {
			style: 'currency',
			currency: 'USD',
		}).format(price.unit_amount / 100), 
	}
	return { 
		props:{
			product,
		},
		revalidate: 60 * 60 * 24, //24h
	}
}
