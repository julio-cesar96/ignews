import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function ButtonSignin () {

    const userLoggedIn = true;

    return userLoggedIn ? (
        <button
            type="button"
            className={styles.buttonSignin} 
        >
            <FaGithub color="#04d361" />
            Júlio César
            <FiX color="#737380" />
        </button>
    ) : (
        <button
            type="button"
            className={styles.buttonSignin} 
        >
            <FaGithub color="#eba417" />
            Sign in with Github
        </button>
    );
}