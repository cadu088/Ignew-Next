import styles from './styles.module.scss';
import { SignInButton } from '../SignInButton';
import { ActiveLink } from '../ActiveLink'

export function Header() {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<img src="/sorces/logo.svg" alt="IgNews" />
				<nav>
					<ActiveLink href="/" activeClassName={styles.active}>
						<a>Home</a>
					</ActiveLink>
					<ActiveLink href="/posts" prefetch activeClassName={styles.active}>
						<a>Posts</a>
					</ActiveLink>
				</nav>
				<SignInButton />
			</div>
		</header>
	);
}