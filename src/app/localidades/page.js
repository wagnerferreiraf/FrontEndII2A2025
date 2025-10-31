'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Localidades() {

    const [paises, setPaises] = useState([]);

    const getPaises = async () => {
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome');
            if (!response.ok) {
                throw new Error('Ocorreu um erro:', response.statusText);
            }
            const data = await response.json();
            console.log('dados', data);
            // passem os dados para a variável paises
        } catch (e) {
            console.log('Ocorreu um erro ao buscar os países:', e.message);
        }
        // EXIBA EM UMA TABELA O ID DO PAÍS, O NOME E O NOME DA REGIÃO DE CADA PAÍS
    }

    useEffect(() => {
        getPaises();
    }, [])
    return (
        <div>
            <h1>Localidades</h1>
        </div>
    )
}