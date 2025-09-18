'use client';
import { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
    const [show, setShow] = useState(false);
    return (
        <>
            <header>
                <button onClick={() => { setShow(!show) }}>X</button>
                {show &&
                    <div style={{ height: '200px', border: '2px solid black' }}>
                        <p>MOBILE</p>
                    </div>
                }
            </header>

            <header className={styles.header}>
                <nav>
                    <ul className={styles.ulMenu}>
                        <li className={styles.liMenu}><Link className={styles.link} href='/'>Home</Link></li>
                        <li className={styles.liMenu}><Link className={styles.link} href='/produtos'>Produtos</Link>
                            <ul className={styles.ulSubMenu}>
                                <li className={styles.liSubMenu}><Link className={styles.link} href='/produtos'>Cadastrar</Link></li>
                                <li className={styles.liSubMenu}><Link className={styles.link} href='/produtos'>Pesquisar</Link></li>
                                <li className={styles.liSubMenu}><Link className={styles.link} href='/produtos'>Cadastrar</Link></li>
                                <li className={styles.liSubMenu}><Link className={styles.link} href='/produtos'>Pesquisar</Link></li>
                            </ul>

                        </li>
                        <li className={styles.liMenu}><Link className={styles.link} href='/produtos'>Produtos</Link>
                            <ul className={styles.ulSubMenu}>
                                <li className={styles.liSubMenu}><Link className={styles.link} href='/produtos'>Cadastrar</Link></li>
                                <li className={styles.liSubMenu}><Link className={styles.link} href='/produtos'>Pesquisar</Link></li>
                            </ul>

                        </li>
                        <li className={styles.liMenu}><Link className={styles.link} href='/produtos'>Produtos</Link>
                            <ul className={styles.ulSubMenu}>
                                <li className={styles.liSubMenu}><Link className={styles.link} href='/produtos'>Cadastrar</Link></li>
                                <li className={styles.liSubMenu}><Link className={styles.link} href='/produtos'>Pesquisar</Link></li>
                            </ul>

                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}