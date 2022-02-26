import { useEffect, useState } from 'react';
import PokeList from '../pokelist/pokelist';
import styles from './recommand.module.css';

const shuffleNumber = (total,pick) => { // total갯수 중 pick 개
    const numbers = Array(total).fill(0).map((item,index) => index+1);
    numbers.sort(()=> Math.random() - 0.5);
    return numbers.slice(0,pick);
}
const Recommand = ({poke, onLoveChange, loves}) => {
    const [pokeCards,setPokeCards] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect( () => {               
        async function fetchData (){
            //console.log(shuffleNumber(898,5));
            setLoading(true);
            const result = await Promise.all(
                shuffleNumber(898,5).map((item) => {
                    return poke.getPoke(item)
                })
            );
            setLoading(false);
            setPokeCards(result);
        };
        fetchData();
    }, [poke]);

    return (
        <>
            <h1>오늘의 추천 포켓몬</h1>
            {
                loading && <div className={styles.loadingBox}></div>
            }
            {
                !loading && <PokeList pokeCards={pokeCards} onLoveChange={onLoveChange} loves={loves} />
            }            
        </>        
    )
};

export default Recommand;