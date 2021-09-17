import Link from 'next/link'
import { useEffect } from 'react';
// this one caused error about the usaage of hooks
// import { useRouter as router }  from 'next/router';
import { useRouter }  from 'next/router';
import { NextPage } from 'next';
import styles from '../styles/Home.module.css'

const NotFound: NextPage = () => {
    // router is type NextRouter
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000)
    }, []);

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                This is not the page you are looking for
            </h1>
            <h3 className={styles.title}>Obi-Wan Kenobi</h3>
            <p className={styles.description}>
                Don't worry young one you shall be redirected
            </p>
        </div>
    )
}


export default NotFound