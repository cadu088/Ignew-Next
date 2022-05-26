import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client'
import styles from './styles.module.scss';


export function SignButton() {

  const [session] = useSession();
  console.log(session)
  return session ? (
    <button type="button" className={styles.signButton} onClick={() => signOut()}>
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={styles.close} />
    </button>
  ) : (
    <button type="button" className={styles.signButton} onClick={() => signIn('github')}>
      <FaGithub color="#eba417" />
      Sign in with GitHub
    </button>
  )
}