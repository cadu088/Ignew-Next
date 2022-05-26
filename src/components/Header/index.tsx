import styles from './styles.module.scss';
import { SignButton } from '../SignButton';
import { ActiveLink } from '../ActiveLink'

export function Header() {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<img src="/images/logo.svg" alt="IgNews" />
				<nav>
					<ActiveLink href="/" activeClassName={styles.active}>
						<a>Home</a>
					</ActiveLink>
					<ActiveLink href="/posts" prefetch activeClassName={styles.active}>
						<a>Posts</a>
					</ActiveLink>
				</nav>
				<SignButton />
			</div>
		</header>
	);
}