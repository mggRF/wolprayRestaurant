import React from 'react';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

export const BotonCabecera = (props) => {
    let nombre = props.name;
    let ascendente=0;
    let objClas=props.gestionClas()
    if (objClas?.campo === nombre)
        ascendente=objClas.sentido;
    let columna = props.col || props.name;

  
    return (
        <>
            <Button              
                variant="text"
                color="primary"
                onClick={() => props.gestionClas({ nombre })}
                >

                {columna}
                {
                    ascendente===1 ? <ArrowDropDownIcon/> : null
                }
                {
                    ascendente===-1 ? <ArrowDropUpIcon/> : null
                }

            </Button>
        </>
    )

}