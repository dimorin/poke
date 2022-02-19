import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const PokeCard = ({poke}) => {
    const {id, name, types, sprites} = poke;
    return (
        <Card sx={{ m:1, p:2 }}>
            
                <CardMedia
                    component="img"          
                    image={sprites.other['dream_world']['front_default'] || 'https://www.pokemonkorea.co.kr/img/main_logo.png'}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        {
                            types.map((type,index) => <Chip key={index} label={type.type.name} variant="outlined" />)
                        }            
                    </Stack>
                </CardContent>
                <CardActions>
                    <Chip label="Detail" component="a" href="https://www.pokemonkorea.co.kr/pokedex" target="_blank" clickable />
                </CardActions>
        </Card>
    )
};

export default PokeCard;