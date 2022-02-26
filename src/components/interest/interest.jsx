import { useEffect, useState } from 'react';
import Header from '../header/header';
import PokeList from '../pokelist/pokelist';
import styles from './interest.module.css';

const getLovesId = (loves) => {
    const newLoves = [];
    Object.keys(loves).map(key => {
        if(loves[key]) {
            newLoves.push(key)
        }
        return null;
    });
    return newLoves;
}

const Interest = ({poke, authService, loves, onLoveChange}) => {
    const [pokeCards,setPokeCards] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect( () => {               
        async function fetchData (){
            setLoading(true);
            const result = await Promise.all(
                getLovesId(loves).map((item) => {
                    return poke.getPoke(item)
                })
            );
            setLoading(false);
            setPokeCards(result);
        };
        fetchData();
    }, [loves, onLoveChange, poke]);
    return (
        <>
            <Header authService={authService} loves={loves} />
            <h1>관심 포켓몬</h1>
            {
                loading && <div className={styles.loadingBox}></div>
            }
            {
                !loading && <PokeList pokeCards={pokeCards} onLoveChange={onLoveChange} loves={loves} />
            }
        </>
    )
};

export default Interest;