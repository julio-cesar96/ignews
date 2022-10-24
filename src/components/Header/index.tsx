import styles from './styles.module.scss';

export function Header () {
   return (
    <>
        <header className={styles.header__container}>
            <div className={styles.header__content}>
                <img src="/images/logo.svg" alt="Logo ig.news" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>
            </div>
        </header>
    </>
   );
}