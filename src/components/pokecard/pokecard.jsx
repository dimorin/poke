import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
/* import CardActions from '@mui/material/CardActions'; */
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
/* import { useLocation } from 'react-router-dom'; */
import styles from './pokecard.module.css';

const getTypeClass = (type) => {
    switch(type){
        case 'grass':
            return styles.type_grass;
        case 'fire':
            return styles.type_fire;
        case 'flying':
            return styles.type_flying;
        case 'water':
            return styles.type_water;
        case 'dragon':
            return styles.type_dragon;
        case 'normal':
            return styles.type_normal;
        case 'bug':
            return styles.type_bug;
        case 'poison':
            return styles.type_poison;
        case 'dark':
            return styles.type_dark;
        case 'psychic':
            return styles.type_psychic;
        case 'electric':
            return styles.type_electric;
        case 'ice':
            return styles.type_ice;
        case 'ground':    
            return styles.type_ground;
        case 'fairy':
            return styles.type_fairy;
        case 'steel':
            return styles.type_steel;
        case 'rock':
            return styles.type_rock;
        case 'fighting':
            return styles.type_fighting;
        case 'ghost':
            return styles.type_ghost;
        default:
            throw new Error(`unknown type ${type}`);
    }
}

const PokeCard = ({pokeCard, onLoveChange, loveState}) => {
     //const path = (useLocation().pathname === '/interest')? true : false;
    const {id, name, types, sprites} = pokeCard;
    return (
        <Card sx={{ m:1, p:2 }} style={{position:'relative'}}>       
            {/* {
                !path && <div style={{position:'absolute',right:0,top:0}}>
                    <input type="checkbox" name="love" onChange={(event) => onLoveChange(id, event.target.checked)} />
                </div>
            } */}
            <div style={{position:'absolute',right:0,top:0}}>
                <input type="checkbox" name="love" onChange={(event) => onLoveChange(id, event.target.checked)} checked={loveState} />
            </div>
            <CardMedia
                component="img"          
                image={sprites.other['dream_world']['front_default'] || 'https://www.pokemonkorea.co.kr/img/main_logo.png'}
                alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {`#${id} ${name}`}
                </Typography>
                <Stack direction="row" spacing={1}>
                    {
                        types.map((type,index) => <Chip key={index} label={type.type.name} className={`${getTypeClass(type.type.name)}`} />)
                    }            
                </Stack>
            </CardContent>
            {/* <CardActions>
                <Chip label="Detail" component="a" href="https://www.pokemonkorea.co.kr/pokedex" target="_blank" clickable />
            </CardActions> */}
        </Card>
    )
};

export default PokeCard;